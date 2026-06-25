/* =====================================================================
   GTH Interactiva — arranque, navegación y routing
   ===================================================================== */
(function () {
  "use strict";
  const GTH = window.GTH;
  const navEl = document.getElementById("nav");
  const contentEl = document.getElementById("content");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");
  const progress = document.getElementById("progressTop");

  function buildNav() {
    navEl.innerHTML = "";
    GTH.groups.forEach((group) => {
      const wrap = document.createElement("div");
      wrap.className = "nav-group";
      const title = document.createElement("div");
      title.className = "nav-group-title";
      title.textContent = group;
      wrap.appendChild(title);
      GTH.sections
        .filter((s) => s.group === group)
        .forEach((s) => {
          const a = document.createElement("a");
          a.className = "nav-link";
          a.href = "#" + s.id;
          a.dataset.id = s.id;
          a.innerHTML =
            "<span>" + s.title + "</span>" +
            (s.tag ? '<span class="tag">' + s.tag + "</span>" : "");
          wrap.appendChild(a);
        });
      navEl.appendChild(wrap);
    });
  }

  function renderSection(id) {
    const section = GTH.sections.find((s) => s.id === id) || GTH.sections[0];
    if (!section) return;

    contentEl.innerHTML = "";
    const container = document.createElement("div");
    container.className = "section-body";
    try {
      section.render(container);
    } catch (e) {
      container.innerHTML =
        '<div class="callout warn"><b>Error al renderizar esta sección.</b><br>' +
        (e && e.message) + "</div>";
      console.error(e);
    }
    contentEl.appendChild(container);

    document.querySelectorAll(".nav-link").forEach((a) => {
      const isActive = a.dataset.id === section.id;
      a.classList.toggle("active", isActive);
      if (isActive) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });

    window.scrollTo(0, 0);
    contentEl.scrollTop = 0;

    sidebar.classList.remove("open");
    backdrop.classList.remove("show");

    document.title = section.title + " · Gestión del Talento Humano (UTN.BA)";
  }

  function route() {
    const id = location.hash.replace(/^#/, "") || (GTH.sections[0] && GTH.sections[0].id);
    renderSection(id);
  }
  window.addEventListener("hashchange", route);

  GTH.go = function (id) { location.hash = "#" + id; };

  const menuBtn = document.getElementById("menuBtn");
  menuBtn.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    backdrop.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  backdrop.addEventListener("click", () => {
    sidebar.classList.remove("open");
    backdrop.classList.remove("show");
  });

  window.addEventListener("scroll", () => {
    const d = document.documentElement;
    const scrolled = (d.scrollTop) / (d.scrollHeight - d.clientHeight || 1);
    progress.style.width = Math.min(100, scrolled * 100) + "%";
  });

  buildNav();
  route();
})();
