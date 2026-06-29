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

  /* ===================== ENTREVISTA LABORAL ===================== */
  reg("p1-entrevista", "Entrevista Laboral", "🎙️", `
    <div class="page-head">
      <div class="page-kicker">${K}</div>
      <h1>Entrevista Laboral</h1>
      <p class="lead">Los primeros <b>3 minutos</b> son los más importantes: la empresa valida tu CV y busca actitud y competencias.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Antes de ir</div>
      <p><b>Investigá la empresa</b> que te va a entrevistar, <b>prepará</b> respuestas a preguntas previsibles
      (no improvises) y llevá la <b>documentación</b> solicitada y/o la que creas útil (incluida una copia del CV).</p>
    </div>

    <h2>Durante la entrevista — claves</h2>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">✅ Hacé</h3>
        <ul>
          <li><b>Puntualidad:</b> llegá con antelación.</li>
          <li><b>Presentación:</b> adaptá tu aspecto a la empresa.</li>
          <li><b>Honestidad:</b> sé vos mismo, no crees personajes.</li>
          <li><b>Actitud:</b> entusiasmo y disponibilidad.</li>
          <li><b>Logros:</b> describí claramente lo logrado antes.</li>
          <li>Comunicá <b>fracasos</b> y lo que aprendiste de ellos.</li>
          <li>Dejá la <b>iniciativa al entrevistador</b>; preguntá para aclarar.</li>
          <li>Despedida <b>cortés y formal</b>.</li>
        </ul></div>
      <div class="card"><h3 style="margin-top:0">⛔ Evitá</h3>
        <ul>
          <li><b>Interrumpir</b> o discutir con el entrevistador.</li>
          <li>Hablar <b>mal</b> de empleos, jefes o compañeros anteriores.</li>
          <li><b>Muletillas</b> y palabras vulgares.</li>
          <li>Mostrarte <b>nervioso o inseguro</b> (autocontrol).</li>
          <li>Excederte o quedarte corto: <b>adecuá</b> la respuesta a lo preguntado.</li>
        </ul></div>
    </div>

    <h2>Preguntas incómodas / frecuentes</h2>
    <ul>
      <li><b>Remuneración bruta pretendida.</b></li>
      <li>¿Por qué dejaste tu último trabajo?</li>
      <li>Fortalezas y puntos de mejora.</li>
      <li>¿Qué conflictos enfrentaste y cómo los resolviste? Disponibilidad y expectativa económica.</li>
    </ul>

    <h2>Tipos de entrevistador</h2>
    <ul>
      <li><b>Psicólogo:</b> evalúa personalidad, competencias, motivación y lenguaje no verbal.</li>
      <li><b>RRHH:</b> evalúa formación, capacitación técnica, integración y compatibilidad.</li>
      <li><b>Técnico:</b> verifica la capacidad para el puesto.</li>
    </ul>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Investigar la empresa antes = <b>Verdadero</b>. Tip de entrevista exitosa: <b>llevar la documentación solicitada
      y/o la que creas útil</b>. Cuidá el <b>lenguaje no verbal</b> y la <a class="inline" data-go="p1-comunicacion" style="cursor:pointer">comunicación</a>.</p>
    </div>
  `);

  /* ===================== CURRICULUM VITAE ===================== */
  reg("p1-cv", "Currículum Vitae & Tipos", "📄", `
    <div class="page-head">
      <div class="page-kicker">${K}</div>
      <h1>Currículum Vitae &amp; Tipos de CV</h1>
      <p class="lead">El CV (<b>"hoja de vida"</b>) es la principal herramienta para buscar trabajo: debe despertar el interés del reclutador.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Las 3 secciones mínimas</div>
      <ul style="margin:.3rem 0">
        <li><b>Datos personales</b> (nombre, contacto).</li>
        <li><b>Educación y formación</b> (estudios, cursos, diplomas).</li>
        <li><b>Experiencia laboral</b> (empresa, puesto, tareas; orden cronológico inverso).</li>
      </ul>
      <p>Sumá <b>objetivo</b> profesional e idiomas/conocimientos técnicos. Se pueden mencionar hobbies.</p>
    </div>

    <h2>Reglas de oro</h2>
    <ul>
      <li>Dirigilo a la empresa destino y <b>revisá la ortografía</b>; mantenelo actualizado.</li>
      <li><b>Máximo 2 carillas</b>; aunque tengas mucha experiencia, <b>tratá de que entre en 1 página</b>.</li>
      <li>Nombre del archivo claro: <span class="var-def">CV_Nombre_Apellido.pdf</span>.</li>
    </ul>

    <div class="callout warn">
      <div class="callout-title">⛔ Qué evitar</div>
      <ul style="margin:.3rem 0">
        <li>Adjuntar certificados/notas o cartas de recomendación.</li>
        <li>Poner el título "Currículum Vitae" (ya se sabe qué es).</li>
        <li>Indicar <b>remuneración pretendida</b> o disponibilidad horaria (eso va en la <a class="inline" data-go="p1-carta" style="cursor:pointer">carta de presentación</a>).</li>
        <li>Logros de la primaria / nombres de archivo confusos.</li>
      </ul>
      <p>La <b>foto</b>: depende — si va, primer plano, fondo neutro y vestimenta formal.</p>
    </div>

    <h2>Tipos de CV</h2>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">📃 Tradicional (papel)</h3>
        <p>Formato estándar, secciones claras.</p>
        <span class="oex">📌 Ej.: hoja A4 con encabezado (nombre + contacto), y debajo bloques de Educación, Experiencia e Idiomas/Skills.</span></div>
      <div class="card"><h3 style="margin-top:0">🎬 Videocurrículum</h3>
        <p>~1 min (presentación 20s + experiencia 20s + cierre 20s). Muestra comunicación, dicción y templanza.</p>
        <span class="oex">📌 Ej. de guión: «Hola, soy Ana, estudiante de Sistemas» (20s) → «Trabajé en X haciendo Y» (20s) → «Busco sumarme a un equipo de…» (20s). Subido a YouTube no listado.</span></div>
      <div class="card"><h3 style="margin-top:0">🕶️ CV con Realidad Aumentada</h3>
        <p>Combina lo real con lo virtual; más dinámico e informal que el videocurrículum.</p>
        <span class="oex">📌 Ej.: escaneás el CV en papel con el celu y se despliega un video/portfolio (caso CWjobs.co.uk).</span></div>
      <div class="card"><h3 style="margin-top:0">✨ CV originales</h3>
        <p>Formatos creativos para diferenciarse.</p>
        <span class="oex">📌 Ej.: CV infografía, formato «línea de tiempo» de tu carrera, o un sitio web personal con tu portfolio.</span></div>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>CV = <b>"hoja de vida"</b>. Archivo: <b>CV_Nombre_Apellido.pdf</b>. "Tu CV no es lo que hiciste, es lo que <b>sabés hacer</b>."</p>
    </div>
  `);

  /* ===================== CARTA DE PRESENTACIÓN ===================== */
  reg("p1-carta", "Carta de Presentación", "✉️", `
    <div class="page-head">
      <div class="page-kicker">${K}</div>
      <h1>Carta de Presentación</h1>
      <p class="lead">Acompaña al CV. Capta la atención del selector, te diferencia y busca conseguir la <b>entrevista</b>. <b>No repite</b> el CV.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Estructura: 3 párrafos</div>
      <ol style="margin:.3rem 0">
        <li><b>Introducción:</b> referirse al <b>aviso</b> (fecha, puesto, referencia).</li>
        <li><b>Cuerpo:</b> <b>situación actual</b> (laboral y carrera universitaria).</li>
        <li><b>Cierre / despedida:</b> disponibilidad; acá va la <b>remuneración pretendida</b> u horario (nunca en el CV).</li>
      </ol>
    </div>

    <p>Datos: fecha (margen derecho) y destinatario (margen superior izquierdo). Saludo: "Estimado/s Sr/es." o título + nombre.</p>

    <div class="example">
      <span class="ex-tag">Carta de ejemplo</span>
      <p style="text-align:right;color:var(--ink-soft)">Buenos Aires, 12 de mayo de 2026</p>
      <p>Estimados Sres. de [Empresa]:</p>
      <p><b>(1 · aviso)</b> Me dirijo a ustedes en respuesta al aviso publicado el 10/05 en LinkedIn para el puesto de
      <b>Analista Jr. de Sistemas</b> (ref. #1234).</p>
      <p><b>(2 · situación actual)</b> Actualmente curso 4.º año de Ingeniería en Sistemas en la UTN y trabajo como
      pasante en soporte de aplicaciones, donde adquirí experiencia en bases de datos y atención al cliente.</p>
      <p><b>(3 · despedida)</b> Quedo a disposición para una entrevista. Mi remuneración pretendida es de $… brutos y
      tengo disponibilidad horaria de tarde. Saludo atentamente,</p>
      <p class="sig">Ana Pérez · ana.perez@mail.com · 11-5555-5555</p>
    </div>

    <div class="callout warn">
      <div class="callout-title">⛔ Errores comunes</div>
      <ul style="margin:.3rem 0">
        <li>No firmar ni poner fecha · faltas de ortografía.</li>
        <li>Repetir la información del CV.</li>
        <li>No indicar remuneración/disponibilidad cuando se la pide el aviso.</li>
      </ul>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Características de toda carta: <b>1) referirse al aviso · 2) situación actual · 3) despedida</b>.</p>
    </div>
  `);

  /* ===================== MARCA PERSONAL ===================== */
  reg("p1-marca-personal", "Marca Personal", "🏷️", `
    <div class="page-head">
      <div class="page-kicker">${K}</div>
      <h1>Marca Personal</h1>
      <p class="lead">Concepto de desarrollo personal moderno: <b>considerarte a vos mismo como una marca</b> para diferenciarte.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Definición</div>
      <p>Tu marca personal (<i>personal branding</i>) es <b>elaborada, transmitida y protegida</b> para que la impresión que
      causás sea más <b>duradera</b> y percibida como importante por los demás. Es un concepto del <b>entorno 2.0</b> (no 1.0).
      "Salgamos del CV papel y diferenciémonos por un valor único e irrepetible."</p>
    </div>

    <h2>Pensate como tu propia empresa — preguntas</h2>
    <p>¿Quién soy? · ¿Qué me hace único? · ¿Qué quiero hacer? · ¿Mis fortalezas y áreas de mejora? · ¿Dónde quiero
    trabajar? · ¿En qué soy experto? · ¿Qué hago con pasión? · ¿Sobre qué me consultan?</p>

    <h2>Plan de marketing personal</h2>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">🌐 Online</h3><p>LinkedIn (perfil completo), presencia en redes, blog propio, contenido de valor. Sé parte de grupos de tu interés.</p></div>
      <div class="card"><h3 style="margin-top:0">📌 Offline</h3><p>CV en papel (castellano e inglés), videocurrículum como complemento, networking.</p></div>
    </div>

    <h2>Consejos para construirla</h2>
    <ul>
      <li>Aprendé a presentarte en <b>30 segundos</b> y en <b>140 caracteres</b>.</li>
      <li>Monitoreá tu presencia (googleate) y cuidá tu reputación.</li>
      <li>Asociate con marcas fuertes (empresa, colegas, universidad).</li>
      <li><b>Reinventate</b>: evolucioná constantemente. <b>Hacé que te encuentren.</b></li>
    </ul>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Marca personal = concepto del entorno <b>2.0</b>, considerarse a uno mismo como una marca (<b>Verdadero</b>).
      "Se trata de ponerle nombre a una cosa" / "no usa redes sociales" → <b>Falso</b>.</p>
    </div>
  `);

  /* ===================== EMPRESAS 2.0 Y BÚSQUEDA 2.0 ===================== */
  reg("p1-empresas20", "Empresas 2.0 y Búsqueda 2.0", "🌐", `
    <div class="page-head">
      <div class="page-kicker">${K}</div>
      <h1>Empresas 2.0 y Búsqueda Laboral 2.0</h1>
      <p class="lead">La web como escenario: compartir conocimiento, trabajo colaborativo y <b>hacer que te encuentren</b>.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Empresas 2.0</div>
      <p>Usan la web para comunicarse y <b>compartir</b> experiencias, servicios y productos con clientes internos y externos.
      Al compartir el conocimiento, se acaba con los empleados <b>"estrella"</b> y se fortalece la idea de <b>equipo</b>.</p>
    </div>

    <h2>Las 5 bases de la Cultura 2.0</h2>
    <p><b>Confianza · Colaboración · Compromiso · Corresponsabilidad · Humildad.</b></p>
    <p>La cultura 2.0 no es un cambio de <b>tecnología</b> sino de <b>mentalidad</b>, de relación y de gestión: pasar de la
    <b>gestión del control</b> a la <b>gestión de las personas</b>.</p>

    <h2>Búsqueda laboral 2.0</h2>
    <ul>
      <li><b>Empleo 2.0 no es buscar oportunidades, es hacer que te encuentren.</b></li>
      <li>Técnicas de <b>posicionamiento</b> y <b>reputación profesional</b>; el ~80% de los reclutadores busca en redes.</li>
      <li>Sé parte de <b>LinkedIn</b>, usá el <b>networking</b> y un perfil concreto (más fácil que te encuentren).</li>
    </ul>

    <div class="callout info">
      <div class="callout-title">🔗 Relación con Learnability</div>
      <p>La empleabilidad ya no depende solo de lo que sabés, sino de tu <b>capacidad de aprender</b>
      (<a class="inline" data-go="learnability" style="cursor:pointer">learnability</a>, que también se ve en el 2º parcial).</p>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Bases de la cultura 2.0: <b>Confianza, Colaboración, Compromiso, Corresponsabilidad y Humildad</b>.
      "La Web <b>1.0</b> es el nuevo escenario de búsqueda" → <b>Falso</b> (es la 2.0). "Empleo 2.0 = hacer que te encuentren" → <b>Verdadero</b>.</p>
    </div>
  `);
})();
