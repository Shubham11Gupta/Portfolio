import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { portfolioData } from "./portfolio-data.js";

const workspaceRoot = fileURLToPath(new URL("../", import.meta.url));
const publicDir = path.join(workspaceRoot, "public");
const indexPath = path.join(workspaceRoot, "index.html");
const submissionsPath = path.join(
  workspaceRoot,
  "server",
  "data",
  "contact-submissions.json"
);
const port = Number(process.env.PORT ?? 4000);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);

    if (request.method === "GET" && url.pathname === "/api/health") {
      return sendJson(response, 200, {
        status: "ok",
        timestamp: new Date().toISOString()
      });
    }

    if (request.method === "GET" && url.pathname === "/api/portfolio") {
      return sendJson(response, 200, portfolioData);
    }

    if (request.method === "POST" && url.pathname === "/api/contact") {
      return handleContactSubmission(request, response);
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return sendJson(response, 405, {
        error: "Method not allowed."
      });
    }

    if (url.pathname === "/") {
      return serveFile(response, indexPath);
    }

    const requestedFile = path.resolve(publicDir, `.${url.pathname}`);
    if (!requestedFile.startsWith(publicDir)) {
      return sendNotFound(response);
    }

    return serveFile(response, requestedFile);
  } catch (error) {
    console.error(error);
    return sendJson(response, 500, {
      error: "Internal server error."
    });
  }
});

server.listen(port, () => {
  console.log(`Portfolio server listening on http://localhost:${port}`);
});

async function handleContactSubmission(request, response) {
  try {
    const payload = sanitizePayload(await readJsonBody(request));
    const validationError = validatePayload(payload);

    if (validationError) {
      return sendJson(response, 400, {
        error: validationError
      });
    }

    const savedRecord = await saveContactSubmission(payload);
    return sendJson(response, 201, {
      message: "Message received. Thanks for reaching out.",
      record: savedRecord
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to process the contact request.";

    return sendJson(response, 400, {
      error: message
    });
  }
}

async function saveContactSubmission(payload) {
  await mkdir(path.dirname(submissionsPath), { recursive: true });

  const existing = await readSubmissions();
  const record = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name: payload.name,
    email: payload.email,
    company: payload.company,
    message: payload.message
  };

  existing.unshift(record);
  await writeFile(submissionsPath, JSON.stringify(existing, null, 2), "utf8");

  return record;
}

async function readSubmissions() {
  try {
    const raw = await readFile(submissionsPath, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function sanitizePayload(input) {
  const source = isObject(input) ? input : {};

  return {
    name: normalizeValue(source.name),
    email: normalizeValue(source.email),
    company: normalizeValue(source.company),
    message: normalizeValue(source.message)
  };
}

function validatePayload(payload) {
  if (payload.name.length < 2) {
    return "Please provide your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "Please provide a valid email address.";
  }

  if (payload.message.length < 20) {
    return "Please add a little more detail so the message is useful.";
  }

  return null;
}

function isObject(value) {
  return typeof value === "object" && value !== null;
}

function normalizeValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

async function readJsonBody(request) {
  let raw = "";

  for await (const chunk of request) {
    raw += chunk;

    if (raw.length > 50_000) {
      throw new Error("Request body is too large.");
    }
  }

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch {
    throw new Error("Invalid JSON payload.");
  }
}

async function serveFile(response, filePath) {
  try {
    const buffer = await readFile(filePath);
    const extension = path.extname(filePath).toLowerCase();
    const contentType = contentTypes[extension] ?? "application/octet-stream";

    response.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": extension === ".pdf" ? "public, max-age=3600" : "no-cache"
    });
    response.end(buffer);
  } catch {
    sendNotFound(response);
  }
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8"
  });
  response.end(JSON.stringify(payload));
}

function sendNotFound(response) {
  response.writeHead(404, {
    "Content-Type": "text/plain; charset=utf-8"
  });
  response.end("Not found");
}
