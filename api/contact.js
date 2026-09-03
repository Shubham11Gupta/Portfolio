function normalizeValue(value) {
  return typeof value === "string" ? value.trim() : "";
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

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const source = request.body && typeof request.body === "object" ? request.body : {};
  const payload = {
    name: normalizeValue(source.name),
    email: normalizeValue(source.email),
    company: normalizeValue(source.company),
    message: normalizeValue(source.message)
  };
  const validationError = validatePayload(payload);

  if (validationError) {
    return response.status(400).json({ error: validationError });
  }

  if (!process.env.CONTACT_WEBHOOK_URL) {
    return response.status(503).json({
      error: "The contact form is not configured for this deployment yet."
    });
  }

  const webhookResponse = await fetch(process.env.CONTACT_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!webhookResponse.ok) {
    return response.status(502).json({
      error: "Unable to deliver your message right now."
    });
  }

  return response.status(201).json({
    message: "Message received. Thanks for reaching out."
  });
}
