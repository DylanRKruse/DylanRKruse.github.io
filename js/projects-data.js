// ============================================================
// All project content lives here. Add/edit a project by editing
// this array — the homepage cards, the full project list, and
// each project's own page all pull from this same data.
//
// image: leave as null until you have a real photo. Once you do,
// drop it in assets/images/projects/<slug>/ and point image at it.
//
// body: the extended write-up for the project's own page. Plain
// HTML string — use <p>, <h3>, <ul> etc. Write as much as you want.
// ============================================================

const PROJECTS = [
  {
    slug: "project-one",
    title: "Demining Device",
    dateRange: "Jan 2026 - May 2026",
    summary: "Tasked with creating a prototype vehicle capable to detecting and removing land mines.",
    tags: ["CAD", "Drivetrains"],
    image: [assets\images\projects\project-one\project-one.jpeg],
    links: {
      writeup: null,      // external write-up URL, or null
      github: "#",
    },
    body: `
      <p>Placeholder extended write-up. Replace with the full story: what
      problem you were solving, why it mattered, and what constraints you
      were working under.</p>

      <h3>The problem</h3>
      <p>Placeholder — describe the problem in a sentence or two.</p>

      <h3>What I built</h3>
      <p>Placeholder — describe your approach, key decisions, and your
      specific role if this was a team project.</p>

      <h3>Results</h3>
      <p>Placeholder — what happened, what you'd do differently next time,
      any numbers worth mentioning.</p>
    `,
  },
  {
    slug: "project-two",
    title: "Project name two",
    dateRange: "Placeholder date range",
    summary: "Same structure — swap in a real project. Keep descriptions tight; link out to a longer write-up or repo for detail.",
    tags: ["Placeholder tag", "Placeholder tag"],
    image: null,
    links: {
      writeup: null,
      github: "#",
    },
    body: `
      <p>Placeholder extended write-up for project two.</p>
      <h3>The problem</h3>
      <p>Placeholder.</p>
      <h3>What I built</h3>
      <p>Placeholder.</p>
      <h3>Results</h3>
      <p>Placeholder.</p>
    `,
  },
  {
    slug: "project-three",
    title: "Project name three",
    dateRange: "Placeholder date range",
    summary: "A third placeholder — delete or duplicate this block as needed for however many projects you want to feature.",
    tags: ["Placeholder tag", "Placeholder tag"],
    image: null,
    links: {
      writeup: null,
      github: "#",
    },
    body: `
      <p>Placeholder extended write-up for project three.</p>
      <h3>The problem</h3>
      <p>Placeholder.</p>
      <h3>What I built</h3>
      <p>Placeholder.</p>
      <h3>Results</h3>
      <p>Placeholder.</p>
    `,
  },
];
