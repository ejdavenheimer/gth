(function () {
  "use strict";
  const GTH = window.GTH;
  GTH.register({
    id: "inicio",
    group: "Inicio",
    title: "Bienvenida",
    tag: "★",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Gestión del Talento Humano · UTN.BA</div>
          <h1>Resumen interactivo — 1er y 2º Parcial</h1>
          <p class="lead">Todos los temas explicados al grano y con ejemplos reales — más
          <b>preguntas y exámenes resueltos</b> e interactivos para que llegues practicado.</p>
        </div>

        <div class="callout key">
          <div class="callout-title">🎯 Cómo está armado</div>
          <p>El menú está dividido en <b>1er Parcial</b> y <b>2do Parcial</b>. Cada tema tiene <b>definición</b>,
          <b>ideas clave</b>, ejemplos y los <b>puntos que suelen tomar</b>. Cada parcial cierra con preguntas
          reales filtrables por tema y con la respuesta correcta marcada.</p>
        </div>

        <h2>Elegí por dónde empezar</h2>
        <div class="grid-2">
          <div class="card" style="cursor:pointer" data-go="p1-entrevista">
            <h3 style="margin-top:0">1️⃣ 1er Parcial</h3>
            <p>Entrevista, CV y carta, Marca personal, Empresas 2.0, La Era del Capital Humano, Gestión del Talento,
            Comunicación, Presentaciones y La Organización que Aprende.</p>
            <span class="pill indigo">10 temas + exámenes</span>
          </div>
          <div class="card" style="cursor:pointer" data-go="org-saludables">
            <h3 style="margin-top:0">2️⃣ 2do Parcial</h3>
            <p>Herramientas estratégicas (Empowerment, Reingeniería…), Transformación digital, Burnout, RSE,
            Empresas conscientes, Cambio y más.</p>
            <span class="pill indigo">16 temas + preguntas</span>
          </div>
          <div class="card" style="cursor:pointer" data-go="p1-practica">
            <h3 style="margin-top:0">🧪 Exámenes (1er parcial)</h3>
            <p>Dos parciales reales reconstruidos para resolver completos.</p>
            <span class="pill green">práctica real</span>
          </div>
          <div class="card" style="cursor:pointer" data-go="p2-practica">
            <h3 style="margin-top:0">📝 Preguntas (2do parcial)</h3>
            <p>Las preguntas reales del 2º parcial, resueltas e interactivas.</p>
            <span class="pill green">¡Lo que te van a tomar!</span>
          </div>
        </div>

        <div class="callout tip">
          <div class="callout-title">💡 Tip de estudio</div>
          <p>Primero leé el tema, después andá a las <b>Preguntas</b> o <b>Exámenes</b> de ese parcial y filtrá por tema.
          Respondé sin mirar: la web te dice al toque si acertaste.</p>
        </div>
      `;
      el.querySelectorAll("[data-go]").forEach((c) =>
        c.addEventListener("click", () => GTH.go(c.dataset.go))
      );
    },
  });
})();
