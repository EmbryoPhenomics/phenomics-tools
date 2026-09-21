const tools = window.PHENOMICS_TOOLS || [];
const intents = window.PHENOMICS_INTENTS || [];

const icons = {
  camera: '<svg viewBox="0 0 24 24"><path d="M4 7.5h3l1.5-2h7l1.5 2h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  temperature: '<svg viewBox="0 0 24 24"><path d="M10 14.2V5a2 2 0 0 1 4 0v9.2a4 4 0 1 1-4 0Z"/><path d="M12 9v7"/></svg>',
  flow: '<svg viewBox="0 0 24 24"><path d="M3 8h12a3 3 0 1 0-3-3"/><path d="M3 12h17"/><path d="M3 16h11a3 3 0 1 1-3 3"/></svg>',
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M22 12h-3M12 22v-3M2 12h3"/></svg>',
  segment: '<svg viewBox="0 0 24 24"><path d="M5 5h6v6H5zM13 13h6v6h-6z"/><path d="M14 5h5v5M5 14v5h5"/></svg>',
  pulse: '<svg viewBox="0 0 24 24"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>',
  motion: '<svg viewBox="0 0 24 24"><path d="M4 7h8M2 12h13M6 17h12"/><path d="m16 8 4 4-4 4"/></svg>',
  development: '<svg viewBox="0 0 24 24"><circle cx="7" cy="15" r="3"/><circle cx="15" cy="8" r="5"/><path d="M9 13 12 11"/></svg>',
  measure: '<svg viewBox="0 0 24 24"><path d="M4 19V5M4 19h16"/><path d="m7 15 3-4 3 2 4-6"/></svg>',
  stack: '<svg viewBox="0 0 24 24"><path d="m4 8 8-4 8 4-8 4z"/><path d="m4 12 8 4 8-4M4 16l8 4 8-4"/></svg>',
  map: '<svg viewBox="0 0 24 24"><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M5 19V9M12 19V4M19 19v-7"/></svg>',
  notebook: '<svg viewBox="0 0 24 24"><path d="M6 3h13v18H6zM3 7h6M3 12h6M3 17h6"/></svg>',
  accuracy: '<svg viewBox="0 0 24 24"><path d="M4 4v16h16M8 16l3-4 3 2 5-7"/><circle cx="19" cy="7" r="2"/></svg>'
};

const state = { category: "All", query: "", sort: "featured" };
const grid = document.querySelector("#tool-grid");
const count = document.querySelector("#result-count");
const search = document.querySelector("#search-input");
const filters = document.querySelector("#filters");
const sort = document.querySelector("#sort-select");
const activeQuery = document.querySelector("#active-query");
const empty = document.querySelector("#empty-state");

function icon(name) { return icons[name] || icons.measure; }

function renderIntents() {
  document.querySelector("#intent-grid").innerHTML = intents.map((item) => `
    <button class="intent-card" type="button" data-category="${item.category || ""}" data-query="${item.query || ""}">
      <span class="intent-icon">${icon(item.icon)}</span>
      <span><strong>${item.label}</strong><small>${item.detail}</small></span>
      <b aria-hidden="true">→</b>
    </button>`).join("");
}

function renderFilters() {
  const categories = ["All", ...new Set(tools.map((tool) => tool.category))];
  filters.innerHTML = categories.map((category) => `<button type="button" class="filter ${category === state.category ? "active" : ""}" data-category="${category}" aria-pressed="${category === state.category}">${category}</button>`).join("");
}

function matches(tool) {
  const inCategory = state.category === "All" || tool.category === state.category;
  const terms = state.query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const haystack = [tool.name, tool.tagline, tool.category, tool.kind, ...tool.tags].join(" ").toLowerCase();
  return inCategory && terms.every((term) => haystack.includes(term));
}

function toolCard(tool) {
  return `<article class="tool-card accent-${tool.accent}">
    <div class="card-visual">
      <span class="visual-code">${String(tool.featured).padStart(2, "0")}</span>
      <span class="tool-icon">${icon(tool.icon)}</span>
      <span class="visual-orbit" aria-hidden="true"></span>
    </div>
    <div class="card-body">
      <div class="card-meta"><span>${tool.category}</span><small>${tool.kind}</small></div>
      <h3>${tool.name}</h3>
      <p>${tool.tagline}</p>
      <div class="tags">${tool.tags.slice(0, 3).map((tag) => `<span>${tag}</span>`).join("")}</div>
      <a href="${tool.url}" target="_blank" rel="noreferrer" aria-label="Open ${tool.name} on GitHub">View repository <span aria-hidden="true">↗</span></a>
    </div>
  </article>`;
}

function render() {
  let visible = tools.filter(matches);
  visible.sort(state.sort === "name" ? (a, b) => a.name.localeCompare(b.name) : (a, b) => a.featured - b.featured);
  grid.innerHTML = visible.map(toolCard).join("");
  count.textContent = `${visible.length} ${visible.length === 1 ? "tool" : "tools"}`;
  empty.hidden = visible.length !== 0;
  grid.hidden = visible.length === 0;
  const filtered = state.category !== "All" || state.query;
  activeQuery.hidden = !filtered;
  if (filtered) activeQuery.querySelector("span").textContent = `Showing ${state.category === "All" ? "all categories" : state.category}${state.query ? ` matching “${state.query}”` : ""}`;
  renderFilters();
}

function selectCategory(category, query = "") {
  state.category = category || "All";
  state.query = query;
  search.value = query;
  render();
  document.querySelector("#catalogue").scrollIntoView({ behavior: "smooth" });
}

function clearAll() { selectCategory("All", ""); }

document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-category]");
  if (filter) selectCategory(filter.dataset.category || "All", filter.dataset.query || "");
  const shortcut = event.target.closest("[data-filter-shortcut]");
  if (shortcut) selectCategory(shortcut.dataset.filterShortcut);
});
filters.addEventListener("click", (event) => {
  const button = event.target.closest(".filter");
  if (button) selectCategory(button.dataset.category, state.query);
});
search.addEventListener("input", () => { state.query = search.value; render(); });
sort.addEventListener("change", () => { state.sort = sort.value; render(); });
document.querySelector("#clear-search").addEventListener("click", clearAll);
document.querySelector("#empty-clear").addEventListener("click", clearAll);
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== search) { event.preventDefault(); search.focus(); }
  if (event.key === "Escape" && document.activeElement === search) { search.blur(); }
});

renderIntents();
render();
