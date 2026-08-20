const app = document.querySelector("#app");

if (!app) {
  throw new Error("App root not found.");
}

loadPortfolio();

async function loadPortfolio() {
  app.innerHTML = renderLoadingState();

  try {
    const response = await fetch("/api/portfolio");

    if (!response.ok) {
      throw new Error("Unable to load portfolio content right now.");
    }

    const data = await response.json();
    renderPortfolio(data);
    wireContactForm();
  } catch (error) {
    app.innerHTML = renderErrorState(
      error instanceof Error
        ? error.message
        : "Something went wrong while loading the portfolio."
    );

    const retryButton = document.querySelector("[data-retry]");
    retryButton?.addEventListener("click", () => {
      loadPortfolio();
    });
  }
}

function renderPortfolio(data) {
  document.title = data.seo.title;

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag instanceof HTMLMetaElement) {
    descriptionTag.content = data.seo.description;
  }

  const currentYear = new Date().getFullYear();

  app.innerHTML = `
    <div class="app-shell">
      <header class="site-header card-surface">
        <a class="brand" href="#top">
          <span class="brand-mark">SG</span>
          <span class="brand-copy">
            <strong>${escapeHtml(data.hero.name)}</strong>
            <small>Software Engineer</small>
          </span>
        </a>

        <nav class="site-nav" aria-label="Primary navigation">
          ${renderNavigation()}
        </nav>
      </header>

      <main>
        <section class="hero-section" id="top">
          <div class="hero-copy">
            <p class="eyebrow">${escapeHtml(data.hero.eyebrow)}</p>
            <p class="hero-name">${escapeHtml(data.hero.name)}</p>
            <h1 class="display-title">${escapeHtml(data.hero.title)}</h1>
            <p class="hero-summary">${escapeHtml(data.hero.summary)}</p>

            <div class="hero-meta">
              <span>${escapeHtml(data.hero.location)}</span>
              <span>${escapeHtml(data.hero.availability)}</span>
            </div>

            <div class="hero-actions">
              ${data.hero.ctas.map(renderActionLink).join("")}
            </div>

            <div class="social-grid">
              ${data.hero.socials.map(renderSocialCard).join("")}
            </div>
          </div>

          <aside class="hero-panel card-surface">
            <div class="panel-heading">
              <p class="eyebrow">Current momentum</p>
              <h2>What I am trusted to build and improve.</h2>
            </div>

            <div class="spotlight-stack">
              ${data.spotlights.map(renderSpotlightCard).join("")}
            </div>
          </aside>
        </section>

        <section class="section-block" aria-labelledby="impact-heading">
          <div class="section-heading-row">
            <div>
              <p class="eyebrow">Selected impact</p>
              <h2 id="impact-heading">A quick read on scale, speed, and scope.</h2>
            </div>
          </div>

          <div class="stats-grid">
            ${data.stats.map(renderStatCard).join("")}
          </div>
        </section>

        <section class="section-block" aria-labelledby="principles-heading">
          <div class="section-heading-row">
            <div>
              <p class="eyebrow">How I approach engineering</p>
              <h2 id="principles-heading">Build things people can actually rely on.</h2>
            </div>
            <p class="section-copy">
              My resume points to a pattern: I am most effective where platform complexity, data movement, and product experience overlap.
            </p>
          </div>

          <div class="principles-grid">
            ${data.principles.map(renderPrincipleCard).join("")}
          </div>
        </section>

        <section class="section-block" id="experience" aria-labelledby="experience-heading">
          <div class="section-heading-row">
            <div>
              <p class="eyebrow">Experience</p>
              <h2 id="experience-heading">Enterprise systems, internal tooling, and data-heavy workflows.</h2>
            </div>
            <p class="section-copy">
              Most recently at IBM, with work spanning analytics, AI-assisted operations, and platform-scale pipeline engineering.
            </p>
          </div>

          <div class="timeline-grid">
            ${data.experience.map(renderExperienceCard).join("")}
          </div>
        </section>

        <section class="section-block" id="projects" aria-labelledby="projects-heading">
          <div class="section-heading-row">
            <div>
              <p class="eyebrow">Projects</p>
              <h2 id="projects-heading">Experiments and builds beyond the day-to-day role.</h2>
            </div>
            <p class="section-copy">
              The resume already shows a strong interest in simulation, automation, and tooling that compresses complexity into a better developer experience.
            </p>
          </div>

          <div class="project-grid">
            ${data.projects.map(renderProjectCard).join("")}
          </div>
        </section>

        <section class="section-block" id="skills" aria-labelledby="skills-heading">
          <div class="section-heading-row">
            <div>
              <p class="eyebrow">Technical toolkit</p>
              <h2 id="skills-heading">Comfortable from product surface to platform plumbing.</h2>
            </div>
            <p class="section-copy">
              The stack below comes directly from the resume and is organized so it is easy for you to keep extending later.
            </p>
          </div>

          <div class="skills-grid">
            ${data.skills.map(renderSkillCard).join("")}
          </div>
        </section>

        <section class="section-block" aria-labelledby="education-heading">
          <div class="section-heading-row">
            <div>
              <p class="eyebrow">Background</p>
              <h2 id="education-heading">Education and credentials that support the build mindset.</h2>
            </div>
          </div>

          <div class="background-grid">
            <div class="card-surface education-card">
              <h3>Education</h3>
              ${data.education.map(renderEducationItem).join("")}
            </div>

            <div class="card-surface education-card">
              <h3>Certifications and awards</h3>
              <div class="certification-list">
                ${data.certifications
                  .map((certification) => `<span class="tag-pill">${escapeHtml(certification)}</span>`)
                  .join("")}
              </div>
            </div>
          </div>
        </section>

        <section class="section-block" id="contact" aria-labelledby="contact-heading">
          <div class="section-heading-row">
            <div>
              <p class="eyebrow">Contact</p>
              <h2 id="contact-heading">${escapeHtml(data.contact.heading)}</h2>
            </div>
            <p class="section-copy">${escapeHtml(data.contact.blurb)}</p>
          </div>

          <div class="contact-grid">
            <div class="contact-panel card-surface">
              <p class="contact-lead">
                If the role touches backend engineering, developer tooling, AI-assisted products, data systems, or internal platform experience, there is probably a lot for us to talk about.
              </p>

              <div class="contact-links">
                <a href="mailto:${escapeAttribute(data.contact.email)}">
                  <span>Email</span>
                  <strong>${escapeHtml(data.contact.email)}</strong>
                </a>
                <a href="tel:${escapeAttribute(data.contact.phone.replace(/\s+/g, ""))}">
                  <span>Phone</span>
                  <strong>${escapeHtml(data.contact.phone)}</strong>
                </a>
              </div>
            </div>

            <form class="contact-form card-surface" id="contact-form">
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Company
                <input
                  name="company"
                  type="text"
                  placeholder="Optional"
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about the role, the team, or the product challenge."
                  required
                ></textarea>
              </label>

              <div class="form-footer">
                <button class="button button-primary" type="submit">Send message</button>

                <p class="form-message form-message-idle" data-form-status aria-live="polite">
                  Messages are validated and stored through the Node backend.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <p>${escapeHtml(data.hero.name)} - Software Engineer</p>
        <p>${currentYear} portfolio build with a custom frontend and Node.js backend.</p>
      </footer>
    </div>
  `;
}

function wireContactForm() {
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("[data-form-status]");

  if (!(form instanceof HTMLFormElement) || !(status instanceof HTMLParagraphElement)) {
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const button = form.querySelector('button[type="submit"]');
    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    button.disabled = true;
    button.textContent = "Sending...";
    status.className = "form-message";
    status.textContent = "Sending your message...";

    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message right now.");
      }

      form.reset();
      status.className = "form-message form-message-success";
      status.textContent = result.message || "Message sent successfully.";
    } catch (error) {
      status.className = "form-message form-message-error";
      status.textContent =
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.";
    } finally {
      button.disabled = false;
      button.textContent = "Send message";
    }
  });
}

function renderNavigation() {
  return [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ]
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");
}

function renderActionLink(action) {
  const classes = `button button-${escapeAttribute(action.variant)}`;
  return `
    <a class="${classes}" href="${escapeAttribute(action.href)}" ${buildLinkAttributes(
      action.href,
      action.external,
      action.download
    )}>
      ${escapeHtml(action.label)}
    </a>
  `;
}

function renderSocialCard(social) {
  return `
    <a class="social-card card-surface" href="${escapeAttribute(social.href)}" ${buildLinkAttributes(
      social.href
    )}>
      <span>${escapeHtml(social.label)}</span>
      <strong>${escapeHtml(social.value)}</strong>
    </a>
  `;
}

function renderSpotlightCard(spotlight) {
  return `
    <article class="spotlight-card">
      <h3>${escapeHtml(spotlight.title)}</h3>
      <p>${escapeHtml(spotlight.description)}</p>
    </article>
  `;
}

function renderStatCard(stat) {
  return `
    <article class="stat-card card-surface">
      <p class="stat-value">${escapeHtml(stat.value)}</p>
      <h3>${escapeHtml(stat.label)}</h3>
      <p>${escapeHtml(stat.note)}</p>
    </article>
  `;
}

function renderPrincipleCard(principle) {
  return `
    <article class="principle-card card-surface">
      <h3>${escapeHtml(principle.title)}</h3>
      <p>${escapeHtml(principle.description)}</p>
    </article>
  `;
}

function renderExperienceCard(item) {
  return `
    <article class="timeline-card card-surface">
      <div class="card-topline">
        <div>
          <p class="item-title">${escapeHtml(item.company)} / ${escapeHtml(item.role)}</p>
          <p class="item-copy">${escapeHtml(item.location)}</p>
        </div>
        <span class="period-badge">${escapeHtml(item.period)}</span>
      </div>

      <p class="card-summary">${escapeHtml(item.summary)}</p>

      <ul class="detail-list">
        ${item.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join("")}
      </ul>

      <div class="tag-list">
        ${item.stack.map(renderTag).join("")}
      </div>
    </article>
  `;
}

function renderProjectCard(project) {
  return `
    <article class="project-card card-surface">
      <div class="card-topline">
        <h3>${escapeHtml(project.name)}</h3>
        <span class="period-badge">${escapeHtml(project.period)}</span>
      </div>
      <p class="card-summary">${escapeHtml(project.description)}</p>
      <ul class="detail-list">
        ${project.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join("")}
      </ul>
      <div class="tag-list">
        ${project.stack.map(renderTag).join("")}
      </div>
    </article>
  `;
}

function renderSkillCard(group) {
  return `
    <article class="skill-card card-surface">
      <h3>${escapeHtml(group.title)}</h3>
      <div class="tag-list">
        ${group.items.map(renderTag).join("")}
      </div>
    </article>
  `;
}

function renderEducationItem(entry) {
  return `
    <article class="education-item">
      <div>
        <p class="item-title">${escapeHtml(entry.school)}</p>
        <p class="item-copy">${escapeHtml(entry.credential)}</p>
      </div>
      <span class="period-badge">${escapeHtml(entry.period)}</span>
    </article>
  `;
}

function renderTag(value) {
  return `<span class="tag-pill">${escapeHtml(value)}</span>`;
}

function renderLoadingState() {
  return `
    <div class="app-shell">
      <div class="loading-screen card-surface">
        <p class="eyebrow">Loading portfolio</p>
        <h1 class="display-title">Pulling together engineering work, impact, and contact details.</h1>
        <p class="section-copy">
          The API is warming up and the full portfolio is on its way.
        </p>
      </div>
    </div>
  `;
}

function renderErrorState(message) {
  return `
    <div class="app-shell">
      <div class="loading-screen card-surface">
        <p class="eyebrow">Portfolio unavailable</p>
        <h1 class="display-title">The frontend could not load the backend content.</h1>
        <p class="section-copy">${escapeHtml(message)}</p>
        <button class="button button-primary" data-retry type="button">Try again</button>
      </div>
    </div>
  `;
}

function buildLinkAttributes(href, external = false, download = false) {
  const attributes = [];

  if (download) {
    attributes.push("download");
  }

  if (external || href.startsWith("http")) {
    attributes.push('target="_blank"', 'rel="noreferrer"');
  }

  return attributes.join(" ");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
