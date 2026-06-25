(function () {
  "use strict";
  const GTH = window.GTH;
  const GROUP = "Bienestar & gestión";

  function reg(id, title, tag, html) {
    GTH.register({
      id, group: GROUP, title, tag,
      render(el) {
        el.innerHTML = html;
        el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => GTH.go(c.dataset.go)));
      },
    });
  }

  /* ===================== FATIGA, ESTRÉS & BURNOUT ===================== */
  reg("fatiga", "Fatiga, Estrés & Burnout", "🔋", `
    <div class="page-head">
      <div class="page-kicker">Bienestar &amp; gestión</div>
      <h1>Fatiga, Estrés &amp; Burnout</h1>
      <p class="lead">Tres fenómenos <b>interrelacionados</b>: Fatiga → Estrés → Burnout. Uno lleva al otro si no se gestiona.</p>
    </div>

    <h2>Fatiga (Astenia)</h2>
    <div class="callout key">
      <p><b>No es solo cansancio:</b> es una sensación sostenida que limita el trabajo <b>físico y mental</b>
      (fallos de memoria, incapacidad de mantener el ritmo). Causas: exceso de trabajo, falta de sueño, malas condiciones,
      emociones fuertes, aburrimiento, mala comunicación y sobrecarga.</p>
    </div>
    <p><b>Tipos:</b> mental (exceso intelectual), física (esfuerzo corporal), visual (pantallas) y crónica (neurológica, sin cura).</p>
    <p><b>Prevención:</b> descansar bien, alimentarse adecuadamente, reducir tensiones, mejorar el ambiente laboral y
    organizar mejor las tareas.</p>

    <h2>Estrés</h2>
    <p><b>No es una patología:</b> es una respuesta natural de <b>adaptación</b>. Dos caras:</p>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">✅ Eustrés</h3><p>Consecuencias <b>positivas</b>: impulsa y motiva (ej. una fecha límite que te hace rendir).</p></div>
      <div class="card"><h3 style="margin-top:0">❌ Distrés</h3><p>Consecuencias <b>negativas</b>: paraliza y enferma (presión diaria sin descanso).</p></div>
    </div>
    <h3>Estrés laboral</h3>
    <p>Surge cuando se desequilibran las <b>exigencias del trabajo</b> (resultados, plazos, presión) y los
    <b>recursos del trabajador</b> (tiempo, dinero, energía). El desbalance genera reacciones nocivas físicas y emocionales.</p>

    <h2>Burnout</h2>
    <div class="callout warn">
      <div class="callout-title">🔥 Síndrome de Burnout</div>
      <p>Estrés <b>crónico no resuelto</b>, ante factores estresantes persistentes. Tres componentes:</p>
      <ol style="margin:.3rem 0">
        <li><b>Agotamiento:</b> no poder dar más de uno mismo a nivel emocional.</li>
        <li><b>Escepticismo:</b> actitud distante hacia el trabajo y los colegas.</li>
        <li><b>Ineficacia:</b> sensación de que se hace todo mal (aunque no sea así).</li>
      </ol>
    </div>
    <p><b>Estrés vs. Burnout:</b> el estrés pasa, se resuelve, es <b>reactivo</b>; el burnout se instala, se acumula, es <b>crónico</b>.</p>
    <p><b>Causas:</b> jornadas &gt; 8 hs habituales, sin cambio de entorno, remuneración inadecuada.
    <b>Señales:</b> ausentismo, bajo rendimiento repentino, encuestas de clima.</p>

    <div class="callout info">
      <div class="callout-title">🇦🇷 Cómo responden las empresas</div>
      <p><b>Grandes:</b> MeLi Wellness (psicólogos, salas de descanso), "días de salud mental" y mindfulness (Globant),
      apoyo psicológico gratuito y desconexión digital (Accenture).<br>
      <b>Pymes:</b> flexibilidad horaria, check-in emocional de 5 min, sin cultura de disponibilidad permanente
      → hasta <b>30% menos rotación</b>.</p>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Cuidar es invertir: <b>un equipo agotado no produce; el bienestar tiene ROI</b>. Romper el tabú y concientizar.</p>
    </div>
  `);

  /* ===================== ESTRUCTURA GERENCIA DE RRHH ===================== */
  reg("gerencia-rrhh", "Estructura de la Gerencia de RRHH", "🏢", `
    <div class="page-head">
      <div class="page-kicker">Bienestar &amp; gestión</div>
      <h1>Estructura de la Gerencia de RRHH</h1>
      <p class="lead">De "Departamento de Personal" a <b>Dirección de Personas</b>: el foco pasa a estar en la gente.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 La evolución</div>
      <p>Recursos Humanos pasó de ser un <b>Departamento de Personal</b> (administrativo) a una <b>Dirección de Personas</b>
      con <b>foco en las personas</b> y rol estratégico.</p>
    </div>

    <h2>Áreas de la Gerencia de RRHH</h2>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">💵 Nómina</h3><p>Liquidación de sueldos/ganancias, adelantos, liquidaciones finales, certificaciones, vacaciones, licencias, embargos.</p></div>
      <div class="card"><h3 style="margin-top:0">🗂️ Administración</h3><p>Legajos, ingresos, obra social/prepaga, organigrama, bases de datos (Meta4, Nexus, Tango, Bejerman).</p></div>
      <div class="card"><h3 style="margin-top:0">⚖️ Compensaciones</h3><p>Descripciones de puesto, bandas salariales, promociones, análisis remunerativo, beneficios.</p></div>
      <div class="card"><h3 style="margin-top:0">🔎 Empleos</h3><p>Reclutamiento y selección, búsquedas internas y de mercado, entrevistas, jóvenes profesionales, pasantías, ferias.</p></div>
      <div class="card"><h3 style="margin-top:0">🎓 Capacitación</h3><p>Cursos técnicos y normativos, inducción, campus e-learning, desarrollo de carrera, evaluaciones de desempeño.</p></div>
      <div class="card"><h3 style="margin-top:0">🌍 RSE</h3><p>Voluntariado, apoyo a emprendedores, diversidad, programas sustentables, memorias, actividades para la familia.</p></div>
    </div>
    <p>Se suman las <b>Relaciones Laborales</b> y el <b>HR Business Partner</b> (HRBP): el <b>nexo entre el negocio y RRHH</b>.</p>

    <div class="callout info">
      <p>"Me preguntaron si iba a despedir a un empleado que costó $300.000 por un error. No —respondí—, acabo de gastar
      $300.000 en su entrenamiento." — Thomas J. Watson (IBM).</p>
    </div>
  `);

  /* ===================== REUNIONES EFECTIVAS ===================== */
  reg("reuniones", "Reuniones Efectivas", "🗓️", `
    <div class="page-head">
      <div class="page-kicker">Bienestar &amp; gestión</div>
      <h1>Reuniones Efectivas</h1>
      <p class="lead">Una reunión vale la pena cuando logra sus metas en el <b>menor tiempo posible</b>.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 ¿Cuándo es efectiva?</div>
      <ul style="margin:.3rem 0">
        <li>Se logran las metas propuestas.</li>
        <li>Los participantes trabajan juntos, constructiva y positivamente, y comparten ideas.</li>
        <li>Se cierra con la certeza de haber avanzado.</li>
        <li>Se hace en el <b>menor tiempo posible</b>.</li>
      </ul>
    </div>

    <h2>Tipos de reunión según frecuencia</h2>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">📆 Diarias (15 min)</h3><p>Identificar problemas. Horario atípico, puntualidad. Quien lidera maneja los tiempos para que sea breve.</p></div>
      <div class="card"><h3 style="margin-top:0">🗓️ Semanales (1 h)</h3><p>Tratar un tema puntual: introducción, desarrollo y conclusión. Quien lidera conoce el tema clave.</p></div>
      <div class="card"><h3 style="margin-top:0">📊 Mensuales (2–4 h)</h3><p>Mirada global: métricas, estados de proyectos, detectar desvíos y generar planes de acción.</p></div>
      <div class="card"><h3 style="margin-top:0">🎯 Trimestrales/Anuales (1 día)</h3><p>Estrategia: ¿replantear metas? Analizar competencia, tendencias y amenazas. Ideal fuera de la oficina.</p></div>
    </div>

    <h2>Pautas básicas</h2>
    <ul>
      <li>Evaluar si realmente se necesita una reunión presencial.</li>
      <li>Identificar quién debe asistir y comunicar el objetivo.</li>
      <li>Seguir la <b>agenda</b> durante la reunión.</li>
      <li>Enviar <b>minuta</b> con los pasos a seguir.</li>
    </ul>
    <p><b>Planificación:</b> definir propósito → duración → integrantes. Tip: reuniones <b>de pie</b> para decisiones de corto plazo.</p>

    <h2>Formales vs. informales</h2>
    <ul>
      <li><b>Formales:</b> planificadas, con <b>agenda definida</b>, orientadas al intercambio de ideas e información.</li>
      <li><b>Informales:</b> espontáneas, sin agenda fija, para temas simples o urgentes. Requieren escucha activa y manejo del tiempo.</li>
    </ul>
    <p><b>Elementos:</b> <b>minutas</b> (resumen de lo discutido y las decisiones), participación según la agenda,
    habilidades de comunicación (hablar y escuchar) y, en reuniones estratégicas, la figura del <b>moderador</b>.</p>

    <div class="callout warn">
      <p>La reunión <b>no termina al salir de la sala</b>: hay que cumplir los compromisos. Definí dentro de la reunión un
      <b>responsable del seguimiento</b>.</p>
    </div>
  `);
})();
