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

  // Navegación agrupada por parcial. El orden de los ids es el orden del menú.
  const NAV_BLOCKS = [
    { ids: ["inicio"] },
    { title: "1er Parcial", ids: [
      "p1-entrevista", "p1-cv", "p1-carta", "p1-marca-personal", "p1-empresas20",
      "p1-capital-humano", "p1-gestion-talento", "p1-comunicacion", "p1-presentaciones",
      "p1-organizacion-aprende", "p1-practica",
    ] },
    { title: "2do Parcial", ids: [
      "org-saludables", "empowerment", "reingenieria", "outplacement", "benchmarking",
      "outsourcing", "fatiga", "gerencia-rrhh", "reuniones", "transformacion-digital",
      "upskilling", "learnability", "cambio", "empresa-consciente", "rse", "entrepreneur",
      "p2-practica",
    ] },
  ];

  function buildNav() {
    navEl.innerHTML = "";
    NAV_BLOCKS.forEach((block) => {
      const wrap = document.createElement("div");
      wrap.className = "nav-group";
      if (block.title) {
        const t = document.createElement("div");
        t.className = "nav-group-title";
        t.textContent = block.title;
        wrap.appendChild(t);
      }
      block.ids.forEach((id) => {
        const s = GTH.sections.find((x) => x.id === id);
        if (!s) return;
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
