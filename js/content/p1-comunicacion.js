(function () {
  "use strict";
  const GTH = window.GTH;
  const K = "Gestión del Talento Humano · 1er Parcial";

  function reg(id, title, tag, html) {
    GTH.register({
      id, group: "1er Parcial", title, tag,
      render(el) {
        el.innerHTML = html;
        el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => GTH.go(c.dataset.go)));
      },
    });
  }

  /* ===================== COMUNICACIÓN & COMUNICACIÓN INFLUYENTE ===================== */
  reg("p1-comunicacion", "Comunicación & Comunicación Influyente", "💬", `
    <div class="page-head">
      <div class="page-kicker">${K}</div>
      <h1>Comunicación &amp; Comunicación Influyente</h1>
      <p class="lead">Comunicar es <b>transmitir información</b>. Influir es transformar las creencias del otro… sin manipular.</p>
    </div>

    <h2>Tipos / formas de comunicación</h2>
    <ul>
      <li><b>Verbal:</b> asegurar la comprensión, mensaje claro y conciso, no interrumpir, no oír solo lo que se quiere oír.</li>
      <li><b>Escrita:</b> permanente y accesible (cartas, informes, contratos).</li>
      <li><b>No verbal / lenguaje corporal:</b> movimientos observables (faciales, gesticulares, posturales).</li>
      <li><b>Imágenes</b> (refuerzan el mensaje) y <b>combinada</b> (mejor para grupos grandes).</li>
    </ul>
    <p><b>Técnicas para obtener información:</b> preguntas (abiertas, cerradas, de investigación, de seguimiento, de
    reacción), tomar notas y lectura.</p>

    <h2>Comunicación no verbal</h2>
    <div class="callout warn">
      <p>Los gestos son una <b>cuestión de cultura</b> y se aprenden inconscientemente. <b>Siempre se interpretan en
      conjunto, nunca de forma aislada.</b> La <b>postura</b> es la clave más fácil de detectar.</p>
    </div>
    <ul>
      <li><b>Palmas hacia arriba:</b> honestidad y apertura. <b>Hacia abajo:</b> contención o dominio.</li>
      <li>Gestos de <b>engaño</b>: tocarse la nariz, frotarse el ojo, rascarse la oreja o el cuello.</li>
      <li>Hacé <b>contacto visual</b> con las personas (no mirar techo/piso/PPT), no des la espalda, postura relajada.</li>
    </ul>

    <h2>Influir vs. Manipular</h2>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">✅ Influir</h3><p>Mediante la comunicación, transformar creencias o puntos de vista. Es un <b>proceso voluntario</b> del interlocutor.</p></div>
      <div class="card"><h3 style="margin-top:0">⛔ Manipular</h3><p>Connotación <b>negativa</b>: afecta la voluntad o libre elección (mintiendo u ocultando información).</p></div>
    </div>
    <p>"Influir es comunicar. Comunicar es generar acción. La acción genera el cambio."</p>

    <h2>Las 15 técnicas de comunicación influyente</h2>
    <ol style="columns:2;column-gap:1.6rem">
      <li><b>La etiqueta:</b> asignar una cualidad positiva acorde a lo que pedís.</li>
      <li><b>Sensación de oportunidad única:</b> el factor tiempo y stock generan deseo.</li>
      <li><b>Lograr muchos "Sí":</b> preparar positivamente al interlocutor.</li>
      <li><b>Tendencia a la masividad:</b> hacemos lo que hacen los demás.</li>
      <li><b>Reducir opciones:</b> entre 3 y 5 evita la parálisis decisional.</li>
      <li><b>¿Ganar o no perder?:</b> destacá lo que se podría perder.</li>
      <li><b>Regalar la autoría:</b> que sientan la idea como propia.</li>
      <li><b>El deseo de sentirse importante:</b> el aprecio moviliza.</li>
      <li><b>Comunicar una advertencia:</b> solo funciona si tiene herramientas para resolverla.</li>
      <li><b>Justificar las peticiones:</b> argumentar aunque parezca obvio.</li>
      <li><b>El primer paso:</b> pedir algo sencillo antes de lo que realmente querés.</li>
      <li><b>Pensamiento positivo:</b> pensar con aprecio antes de comunicar.</li>
      <li><b>Reconocer la realidad del otro:</b> crear un beneficio común.</li>
      <li><b>Conseguir apoyos independientes:</b> nadie quiere ser el primero ni el último.</li>
      <li><b>Decir "probemos esto":</b> evitar el "No" (genera rechazo); generar concordancia.</li>
    </ol>

    <div class="callout info">
      <div class="callout-title">🔮 Efecto Pigmalión</div>
      <p>La <b>profecía autocumplida</b>: las expectativas que tenemos sobre alguien influyen en su rendimiento.
      Expectativas altas → alto rendimiento.</p>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Los gestos se interpretan <b>en conjunto</b> (interpretar uno solo → Falso). Influir ≠ manipular (manipular tiene
      connotación negativa).</p>
    </div>
  `);

  /* ===================== PRESENTACIONES EFECTIVAS ===================== */
  reg("p1-presentaciones", "Presentaciones Efectivas", "🎤", `
    <div class="page-head">
      <div class="page-kicker">${K}</div>
      <h1>Presentaciones Orales Efectivas</h1>
      <p class="lead">"El poeta nace, pero el <b>orador se hace</b>": las habilidades oratorias se desarrollan con práctica.</p>
    </div>

    <h2>Los 4 campos del orador</h2>
    <p>Cuatro "frentes" que trabajás al exponer (lo que se <b>ve</b>, se <b>oye</b>, se <b>entiende</b> y se <b>siente</b>):</p>
    <div class="orator">
      <div class="ocard"><span class="oico">👁️</span><div><h4>Visual</h4><p>Imagen, postura, gestos y apoyos visuales.</p>
        <span class="oex">Ej.: parado firme, mirando al público (no al PPT), con slides legibles.</span></div></div>
      <div class="ocard"><span class="oico">👂</span><div><h4>Auditivo</h4><p>Vocalización: tono, timbre, dicción, ritmo y pausas.</p>
        <span class="oex">Ej.: variar el tono y hacer una pausa antes de la idea clave (como en los cuentos de chicos).</span></div></div>
      <div class="ocard"><span class="oico">🧠</span><div><h4>Intelectivo</h4><p>Que el contenido se entienda: coherencia, estructura y orden.</p>
        <span class="oex">Ej.: una idea por slide, con un hilo lógico de principio a fin.</span></div></div>
      <div class="ocard"><span class="oico">❤️</span><div><h4>Sensible-emocional</h4><p>Energía, actitud ante el público y carisma.</p>
        <span class="oex">Ej.: mostrar entusiasmo genuino por el tema y conectar con una anécdota.</span></div></div>
    </div>
    <p><b>Un buen orador</b> mantiene contacto visual, no "actúa", canaliza el miedo como energía y, sobre todo,
    <b>piensa mientras se comunica</b>.</p>

    <div class="callout warn">
      <div class="callout-title">❌ ¿Por qué fracasa una presentación?</div>
      <p>Miedos y nervios, lenguaje no verbal e indumentaria inadecuados, mal tono de voz, <b>impuntualidad</b> y
      <b>falta de planificación</b>. Empezá <b>con el fin en la cabeza</b>: definí las ideas clave y los argumentos.</p>
    </div>

    <h2>Las 4 etapas (forma de diamante)</h2>
    <div class="diamond-row">
      <div class="diamond">
        <div class="d d-xs">Preparación</div>
        <div class="darrow">▼</div>
        <div class="d d-sm">Apertura</div>
        <div class="darrow">▼</div>
        <div class="d d-lg">Desarrollo (80%)</div>
        <div class="darrow">▼</div>
        <div class="d d-sm">Resumen y Cierre</div>
      </div>
      <ol class="steps" style="margin:0">
        <li><span class="step-title">Preparación</span> Definir contexto (resultado, orador, audiencia, duración, lugar), propósito, contenidos y soportes. Investigar los perfiles que asisten.</li>
        <li><span class="step-title">Apertura</span> Captar la atención desde el primer momento; crear el clima inicial y una primera impresión favorable.</li>
        <li><span class="step-title">Desarrollo</span> El 80% del tiempo. "¿Por qué tengo que creerte?" → usá <b>evidencia</b> (estadísticas, demostraciones, testimonios). No es un monólogo.</li>
        <li><span class="step-title">Resumen y Cierre</span> Rescatá los temas clave, cerrá con una frase y un <b>llamado a la acción</b>. La apertura crea la primera impresión; el cierre, una <b>duradera</b>.</li>
      </ol>
    </div>
    <p style="font-size:.9rem;color:var(--ink-soft)">La <b>forma de diamante</b> lo dice todo: parte de un punto (apertura
    focalizada), se <b>expande</b> en el desarrollo y vuelve a <b>converger</b> en el cierre.</p>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Estructura: <b>Preparación → Apertura → Desarrollo → Resumen y Cierre</b>. El desarrollo se apoya en la
      <b>evidencia</b>; el cierre busca una impresión duradera y un llamado a la acción.</p>
    </div>
  `);
})();
