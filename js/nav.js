// ============================================================
// Shared site chrome: header nav + footer.
// Edit the NAV_LINKS array below to add/rename/reorder pages —
// every page picks up the change automatically.
// ============================================================

const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "projects.html", label: "Projects" },
  { href: "contact.html", label: "Contact" },
];

const SITE_NAME = "Dylan Kruse"; // <-- change this to your name

function currentPage() {
  const path = window.location.pathname.split("/").pop();
  return path === "" ? "index.html" : path;
}

function renderHeader() {
  const active = currentPage();

  const links = NAV_LINKS.map((link) => {
    const isActive = link.href === active;
    return `<li><a href="${link.href}"${isActive ? ' aria-current="page"' : ""}>${link.label}</a></li>`;
  }).join("");

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <nav class="nav-inner" aria-label="Primary">
      <a class="nav-brand" href="index.html">${SITE_NAME}</a>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">☰</button>
      <ul class="nav-links">${links}</ul>
    </nav>
  `;

  document.body.prepend(header);

  const toggle = header.querySelector(".nav-toggle");
  const navLinks = header.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function renderFooter() {
  const year = new Date().getFullYear();
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="footer-inner">
      <span>&copy; ${year} ${SITE_NAME}</span>
      <div class="footer-links">
        <a href="contact.html">Contact</a>
        <a href="https://github.com/" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  `;
  document.body.append(footer);
}

renderHeader();
renderFooter();
