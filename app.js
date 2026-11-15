(() => {
  const menuToggle = document.querySelector("#menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }));
  }

  const cards = [...document.querySelectorAll(".business-card")];
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const searchInput = document.querySelector("#site-search");
  const emptyState = document.querySelector("#empty-state");
  let activeCategory = "All";

  function updateListings(query = "") {
    const normalized = query.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const matchesCategory = activeCategory === "All" || card.dataset.category === activeCategory;
      const searchable = `${card.dataset.name} ${card.dataset.category} ${card.dataset.description}`.toLowerCase();
      const matchesQuery = !normalized || searchable.includes(normalized);
      const show = matchesCategory && matchesQuery;
      card.hidden = !show;
      if (show) visible++;
    });
    if (emptyState) emptyState.hidden = visible !== 0;
  }

  filterButtons.forEach(button => button.addEventListener("click", () => {
    activeCategory = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("selected", item === button));
    updateListings(searchInput?.value || "");
  }));

  document.querySelectorAll("[data-category]").forEach(button => {
    if (!button.matches(".category-card")) return;
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      filterButtons.forEach(item => item.classList.toggle("selected", item.dataset.filter === activeCategory));
      document.querySelector("#explore")?.scrollIntoView({ behavior: "smooth" });
      updateListings(searchInput?.value || "");
    });
  });

  document.querySelectorAll("[data-search]").forEach(button => button.addEventListener("click", () => {
    if (searchInput) {
      searchInput.value = button.dataset.search;
      updateListings(searchInput.value);
      document.querySelector("#explore")?.scrollIntoView({ behavior: "smooth" });
    }
  }));

  document.querySelector("#search-form")?.addEventListener("submit", event => {
    event.preventDefault();
    updateListings(searchInput?.value || "");
    document.querySelector("#explore")?.scrollIntoView({ behavior: "smooth" });
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
})();
