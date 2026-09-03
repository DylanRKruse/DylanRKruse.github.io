// ============================================================
// Render functions that read from PROJECTS (js/projects-data.js)
// and build the markup for: homepage scroll cards, the full
// project list, and a single project's detail page.
// ============================================================

function projectImageMarkup(project, sizeClass) {
  if (project.image) {
    return `<img src="${project.image}" alt="${project.title}" class="${sizeClass}" loading="lazy" />`;
  }
  const initials = project.title.trim().slice(0, 2).toUpperCase();
  return `<div class="${sizeClass} img-placeholder" aria-hidden="true"><span>${initials}</span></div>`;
}

function tagsMarkup(tags) {
  return tags.map((t) => `<span class="tag">${t}</span>`).join("");
}

// Homepage: horizontal scroll-snap row of cards
function renderScrollCards(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = PROJECTS.map(
    (p) => `
    <a class="scroll-card" href="project.html?slug=${p.slug}">
      ${projectImageMarkup(p, "scroll-card-img")}
      <div class="scroll-card-body">
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
      </div>
    </a>
  `
  ).join("");

  // Let desktop mouse-wheel users scroll the row horizontally too,
  // on top of native touch/trackpad swipe.
  el.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    },
    { passive: false }
  );
}

// projects.html: full vertical list
function renderProjectList(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = PROJECTS.map(
    (p) => `
    <article class="project-row">
      <div class="project-meta">${p.dateRange}</div>
      <div>
        <h3><a href="project.html?slug=${p.slug}">${p.title}</a></h3>
        <p>${p.summary}</p>
        <div class="project-tags">${tagsMarkup(p.tags)}</div>
        <div class="project-links">
          <a href="project.html?slug=${p.slug}">View project</a>
          ${p.links.github ? `<a href="${p.links.github}" target="_blank" rel="noopener">GitHub</a>` : ""}
        </div>
      </div>
    </article>
  `
  ).join("");
}

// project.html: single project detail, read via ?slug= in the URL
function renderProjectDetail(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const slug = new URLSearchParams(window.location.search).get("slug");
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    el.innerHTML = `<p class="eyebrow"><a href="projects.html">&larr; All projects</a></p>
      <h1>Project not found</h1>
      <p>That project doesn't exist (or the link is out of date).</p>`;
    document.title = "Project not found";
    return;
  }

  document.title = `${project.title} — Your Name`;

  const writeupLink =
    project.links.writeup && project.links.writeup !== "#"
      ? `<a href="${project.links.writeup}" target="_blank" rel="noopener">Full write-up</a>`
      : "";
  const githubLink = project.links.github
    ? `<a href="${project.links.github}" target="_blank" rel="noopener">GitHub</a>`
    : "";

  el.innerHTML = `
    <p class="eyebrow"><a href="projects.html">&larr; All projects</a></p>
    <h1>${project.title}</h1>
    <p class="project-meta">${project.dateRange}</p>
    <div class="project-tags">${tagsMarkup(project.tags)}</div>
    ${projectImageMarkup(project, "project-hero-img")}
    <div class="project-body">${project.body}</div>
    <div class="project-links" style="margin-top: 32px;">
      ${writeupLink}
      ${githubLink}
    </div>
  `;
}
