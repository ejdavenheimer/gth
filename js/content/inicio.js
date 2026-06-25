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
          <h1>Resumen para el 2º Parcial</h1>
          <p class="lead">Todos los temas que entran, explicados al grano y con ejemplos reales —
          más una sección de <b>preguntas de parcial resueltas</b> e interactivas para que llegues practicado.</p>
        </div>

        <div class="callout key">
          <div class="callout-title">🎯 Cómo está armado</div>
          <p>Cada tema tiene: <b>definición</b>, sus <b>ideas clave</b>, un <b>caso o ejemplo</b> y los
          <b>puntos que suelen tomar</b>. Al final, un cuestionario con las preguntas reales del parcial,
          filtrables por tema y con la respuesta correcta marcada.</p>
        </div>

        <h2>Temas del parcial</h2>
        <div class="grid-2">
          <div class="card" style="cursor:pointer" data-go="empowerment">
            <h3 style="margin-top:0">🛠️ Herramientas estratégicas</h3>
            <p>Empowerment, Reingeniería, Benchmarking, Outsourcing y Outplacement: qué son, en qué se diferencian y cómo se relacionan.</p>
            <span class="pill indigo">5 temas</span>
          </div>
          <div class="card" style="cursor:pointer" data-go="transformacion-digital">
            <h3 style="margin-top:0">🚀 Talento &amp; futuro</h3>
            <p>Transformación digital, Upskilling/Reskilling, Learnability y Entrepreneur.</p>
            <span class="pill indigo">5 temas</span>
          </div>
          <div class="card" style="cursor:pointer" data-go="org-saludables">
            <h3 style="margin-top:0">🌱 Personas &amp; cultura</h3>
            <p>Organizaciones saludables, ética, Empresa consciente, RSE &amp; sustentabilidad y el cambio.</p>
            <span class="pill amber">cultura y valores</span>
          </div>
          <div class="card" style="cursor:pointer" data-go="parcial">
            <h3 style="margin-top:0">📝 Preguntas de parcial</h3>
            <p>Las 40 preguntas reales del parcial, resueltas, interactivas y filtrables por tema.</p>
            <span class="pill green">¡Lo que te van a tomar!</span>
          </div>
        </div>

        <div class="callout tip">
          <div class="callout-title">💡 Tip de estudio</div>
          <p>Primero leé el tema, después andá a <a class="inline" data-go="parcial" style="cursor:pointer">Preguntas de parcial</a>
          y filtrá por ese tema. Respondé sin mirar: la web te dice al toque si acertaste.</p>
        </div>
      `;
      el.querySelectorAll("[data-go]").forEach((c) =>
        c.addEventListener("click", () => GTH.go(c.dataset.go))
      );
    },
  });
})();
