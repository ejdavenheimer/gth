(function () {
  "use strict";
  const GTH = window.GTH;

  // Helpers para armar opciones rápido
  function vf(correct) {
    return [{ t: "Verdadero", ok: correct === "V" }, { t: "Falso", ok: correct === "F" }];
  }

  // Solo las preguntas que corresponden a los temas del 2º parcial.
  const QUESTIONS = [
    { n: 1, topic: "Learnability", type: "vf",
      q: "Learnability es la capacidad para aprender nuevas habilidades a lo largo de la vida.",
      options: vf("V") },

    { n: 2, topic: "Empowerment", type: "vf",
      q: "El Empowerment se define como la tercerización de un área de una empresa.",
      options: vf("F"),
      explain: "Eso es <b>outsourcing</b>. Empowerment = delegar poder y autoridad sobre la toma de decisiones." },

    { n: 3, topic: "Learnability", type: "vf",
      q: "Las habilidades técnicas y sociales hacen al candidato ideal.",
      options: vf("V") },

    { n: 4, topic: "Upskilling/Reskilling", type: "vf",
      q: "A través del Reskilling y Upskilling las empresas buscan resolver las necesidades de desarrollar nuevas habilidades y competencias en los colaboradores.",
      options: vf("V") },

    { n: 5, topic: "Reingeniería", type: "mc",
      q: "La reingeniería implica...",
      options: [
        { t: "Un cambio parcial en los procesos estratégicos", ok: false },
        { t: "Un cambio radical en los procesos estratégicos", ok: true },
        { t: "Desvincular a empleados", ok: false },
        { t: "Un proceso de mejora continua", ok: false },
      ] },

    { n: 6, topic: "Outplacement", type: "vf",
      q: "El outplacement se puede ver como una oportunidad de realizar un proceso de reingeniería personal.",
      options: vf("V") },

    { n: 7, topic: "Empowerment", type: "mc",
      q: "En el Empowerment, lo que NO se delega es...",
      options: [
        { t: "...la tarea", ok: false },
        { t: "...la autoridad", ok: false },
        { t: "...la responsabilidad", ok: true },
        { t: "...la toma de decisiones", ok: false },
      ] },

    { n: 8, topic: "Transformación Digital", type: "vf",
      q: "Las competencias de una mentalidad digital son: construyo y transformo, agilidad y aprendizaje, decido con datos, diseño de experiencia y creo con otros.",
      options: vf("V") },

    { n: 9, topic: "Upskilling/Reskilling", type: "vf",
      q: "Reskilling: es el proceso de aprender nuevas habilidades para poder hacer un trabajo diferente, o de formar a los colaboradores para hacer un trabajo diferente.",
      options: vf("V"),
      explain: "Esta es la definición textual de Reskilling del material (proceso para hacer un trabajo <b>diferente</b>)." },

    { n: 10, topic: "Upskilling/Reskilling", type: "vf",
      q: "Upskilling: hace referencia al proceso de aprender nuevas habilidades o de enseñar a los colaboradores nuevas habilidades.",
      options: vf("V") },

    { n: 11, topic: "Benchmarking", type: "mc",
      q: "Las principales razones por las que una empresa decide aplicar un proceso de benchmarking son: (elija solo 1 opción)",
      options: [
        { t: "Mejorar la competitividad y rentabilidad", ok: true },
        { t: "Disminuir la rotación y despido de personal", ok: false },
        { t: "Comparar su desempeño con otras empresas y cambiar", ok: false },
        { t: "Generar nuevas ideas e implementarlas", ok: false },
      ] },

    { n: 12, topic: "Herramientas estratégicas", type: "match",
      q: "Una cada definición con su correspondiente palabra.",
      pairs: [
        { l: "Empowerment es...", r: "...el hecho de delegar poder y autoridad sobre la toma de decisiones." },
        { l: "Outplacement es...", r: "...un conjunto de técnicas para reubicar trabajadores." },
        { l: "Reingeniería es...", r: "...repensar y rediseñar radicalmente los procesos de una organización." },
        { l: "Outsourcing es...", r: "...tercerizar áreas de una organización." },
      ] },

    { n: 13, topic: "Cambio", type: "mc",
      q: "El anteproyecto o road map puede describirse...",
      options: [
        { t: "Como los flujos de información", ok: false },
        { t: "Ninguna es correcta", ok: false },
        { t: "Como un proceso de pensamiento o reorganización que se desea a futuro en lo referente a sus componentes", ok: true },
        { t: "Como el organigrama de la organización", ok: false },
      ] },

    { n: 14, topic: "Transformación Digital", type: "mc",
      q: "¿Qué implica ser un equipo TEAL?",
      options: [
        { t: "Autodinámica, Colaboración y Misión", ok: false },
        { t: "Autonomía, Liderazgo y Colaboración", ok: false },
        { t: "Autogestión, Plenitud y Propósito Evolutivo", ok: true },
        { t: "Autogestión, humildad y lealtad", ok: false },
        { t: "Autoridad, Lealtad y Propósito", ok: false },
      ] },

    { n: 15, topic: "Entrepreneur", type: "mc",
      q: "La definición “Una persona con gran decisión para comercializar un producto/servicio” responde al término:",
      options: [
        { t: "Fundador", ok: true },
        { t: "Socio", ok: false },
        { t: "Empresa", ok: false },
      ] },

    { n: 16, topic: "Reingeniería", type: "vf",
      q: "La reingeniería es un proceso de mejora continua.",
      options: vf("F"),
      explain: "La reingeniería es un cambio <b>radical</b>, no mejora continua." },

    { n: 17, topic: "Benchmarking", type: "mc",
      q: "El Benchmarking se puede ver como el paso previo a...",
      options: [
        { t: "...un empowerment", ok: false },
        { t: "...un outsourcing", ok: false },
        { t: "...una reingeniería", ok: true },
        { t: "...un outplacement", ok: false },
      ] },
  ];

  GTH.register({
    id: "parcial",
    group: "Parcial",
    title: "Preguntas de parcial",
    tag: "📝",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Práctica para el parcial</div>
          <h1>Preguntas de parcial resueltas</h1>
          <p class="lead">Las preguntas reales que <b>corresponden a los temas de este parcial</b>, interactivas.
          Respondé sin mirar: la web te marca al toque la opción correcta. Usá los filtros para practicar por tema.</p>
        </div>

        <div class="callout info">
          <div class="callout-title">ℹ️ Nota</div>
          <p>De la tanda original de preguntas se dejaron solo las que pertenecen a los temas del 2º parcial. Las que eran
          de otros temas (organización que aprende, Kolb, marca personal/CV, etc.) no se incluyen.</p>
        </div>

        <div class="callout tip">
          <div class="callout-title">💡 Cómo usarlo</div>
          <p>En las de opción única hacé clic en una respuesta. En las de selección múltiple, marcá todas las que creas y
          tocá <b>Comprobar</b>. Las preguntas a desarrollar y las de unir tienen botón para revelar la respuesta.</p>
        </div>

        <div id="quizMount"></div>
      `;
      GTH.quiz(el.querySelector("#quizMount"), QUESTIONS);
    },
  });
})();
