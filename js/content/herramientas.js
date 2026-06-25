(function () {
  "use strict";
  const GTH = window.GTH;
  const GROUP = "Unidad IV · Herramientas estratégicas";

  function reg(id, title, tag, html) {
    GTH.register({
      id, group: GROUP, title, tag,
      render(el) {
        el.innerHTML = html;
        el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => GTH.go(c.dataset.go)));
      },
    });
  }

  /* ===================== EMPOWERMENT ===================== */
  reg("empowerment", "Empowerment", "💪", `
    <div class="page-head">
      <div class="page-kicker">Gestión del Talento Humano · 2º Parcial</div>
      <h1>Empowerment</h1>
      <p class="lead">Delegar <b>poder y autoridad</b> en los colaboradores para que sean dueños de su propio trabajo.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Definición</div>
      <p>Herramienta estratégica que <b>delega poder y autoridad</b> a los subordinados, confiriéndoles el sentimiento de
      que son <b>dueños de su propio trabajo</b>. Del inglés <i>empower</i> = dar poder. El empleado actúa como dueño de
      la empresa, no como alguien que "solo va por el sueldo".</p>
    </div>

    <div class="callout warn">
      <div class="callout-title">⚠️ Ojo (lo toman seguido)</div>
      <p>Se delega la <b>tarea, la autoridad y la toma de decisiones</b>, pero <b>NO la responsabilidad</b>.
      El que delega sigue siendo responsable del resultado.</p>
    </div>

    <h2>Toma de decisiones</h2>
    <p>Premisa clave: <b>quien está directamente relacionado con una tarea es el más indicado para decidir sobre ella</b>.
    Empleados y equipos de todos los niveles pueden decidir <b>sin esperar autorización</b> de sus superiores.</p>

    <h2>Los 3 pilares</h2>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">🤝 Relaciones</h3>
        <p><b>Efectivas</b> (orientadas a los objetivos) y <b>sólidas</b> (que permanezcan en el tiempo, no dependan del ánimo).
        Sin vínculos confiables, la delegación no funciona.</p></div>
      <div class="card"><h3 style="margin-top:0">📐 Disciplina</h3>
        <p><b>Orden</b> y <b>definición de roles</b>: cada uno sabe dónde está parado y cuál es su alcance.
        Empoderar no es relajar la estructura.</p></div>
      <div class="card"><h3 style="margin-top:0">🔥 Compromiso</h3>
        <p><b>Lealtad</b>, <b>persistencia</b> y <b>energía de acción</b>. Lo promueven los líderes y debe ser congruente
        en todos los niveles.</p></div>
      <div class="card"><h3 style="margin-top:0">🧭 Es una filosofía</h3>
        <p>No es una técnica: requiere <b>cambio cultural</b>, trabajo en equipo, comunicación clara (reduce el miedo) y
        un <b>liderazgo facilitador</b>.</p></div>
    </div>

    <div class="callout info">
      <div class="callout-title">🇦🇷 Caso: Mercado Libre</div>
      <p>Equipos autogestionados (células) con autonomía, <b>OKRs transparentes</b>, cultura de feedback 360° y el
      <b>"ownership"</b> como valor fundacional: cada empleado actúa como dueño del producto que gestiona.</p>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Empowerment = <b>delegar poder y autoridad sobre la toma de decisiones</b>. No es tercerización (eso es
      <a class="inline" data-go="outsourcing" style="cursor:pointer">outsourcing</a>). Lo que no se delega es la <b>responsabilidad</b>.</p>
    </div>
  `);

  /* ===================== REINGENIERÍA ===================== */
  reg("reingenieria", "Reingeniería", "♻️", `
    <div class="page-head">
      <div class="page-kicker">Gestión del Talento Humano · 2º Parcial</div>
      <h1>Reingeniería</h1>
      <p class="lead">Repensar y <b>rediseñar radicalmente</b> los procesos de una organización para lograr mejoras espectaculares.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Definición</div>
      <p>Implica un <b>cambio radical en los procesos estratégicos</b>: desechar lo actual y reinventar desde cero.
      <b>No es</b> mejora continua ni automatización de procesos ineficientes.</p>
    </div>

    <h2>Conceptos centrales</h2>
    <ul>
      <li><b>Cambio radical:</b> desechar lo actual y reinventar desde cero.</li>
      <li><b>Orientación a procesos:</b> foco en el flujo completo (insumos → cliente).</li>
      <li><b>Resultados extraordinarios:</b> impacto de gran magnitud, no mejoras marginales.</li>
      <li><b>Sin preconceptos:</b> primero se define <i>qué</i> hacer y luego el <i>cómo</i>.</li>
    </ul>

    <h2>Las 5 fases</h2>
    <ol class="steps">
      <li><span class="step-title">Planificación</span> Fijar alcance, objetivos y el equipo.</li>
      <li><span class="step-title">Aprendizaje interno</span> Comprender la situación actual.</li>
      <li><span class="step-title">Aprendizaje externo</span> Romper paradigmas con nuevas ideas (acá entra el benchmarking).</li>
      <li><span class="step-title">Rediseño</span> Repensar los procesos desde cero.</li>
      <li><span class="step-title">Implementación</span> Estructurar cargos y tecnología para la transición.</li>
    </ol>

    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">✅ Ventajas</h3>
        <ul><li>Mayor eficiencia y ahorro</li><li>Cambio cultural hacia la innovación</li><li>Respuesta rápida</li></ul></div>
      <div class="card"><h3 style="margin-top:0">⚠️ Críticas / riesgos</h3>
        <ul><li>Descuida la dimensión humana</li><li>Pretexto para <b>despidos masivos</b></li><li>Clima de temor y ansiedad</li><li>Riesgos económicos, humanos y organizacionales</li></ul></div>
    </div>

    <div class="callout info">
      <div class="callout-title">🇦🇷 Caso: SanCor</div>
      <p>Problema: crisis, burocracia extrema, departamentos como "feudos", decisiones lentas. Solución con RRHH:
      <b>aplanamiento</b>, nuevo diseño, <a class="inline" data-go="upskilling" style="cursor:pointer">reskilling</a> y
      <a class="inline" data-go="empowerment" style="cursor:pointer">empowerment</a>.</p>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Reingeniería = <b>repensar y rediseñar radicalmente</b> los procesos. El <a class="inline" data-go="benchmarking" style="cursor:pointer">benchmarking</a>
      suele ser el <b>paso previo</b>: comparás y aprendés antes de rediseñar.</p>
    </div>
  `);

  /* ===================== BENCHMARKING ===================== */
  reg("benchmarking", "Benchmarking", "📊", `
    <div class="page-head">
      <div class="page-kicker">Gestión del Talento Humano · 2º Parcial</div>
      <h1>Benchmarking</h1>
      <p class="lead"><b>Comparar</b> el desempeño con otras organizaciones, <b>aprender</b> de las mejores prácticas y <b>mejorar</b>.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Definición</div>
      <p>Proceso de comparar el desempeño propio con el de otras organizaciones para aprender de las mejores prácticas y
      adaptarlas. <b>No se trata de copiar, sino de aprender de la competencia.</b></p>
    </div>

    <h2>¿Para qué sirve en RRHH?</h2>
    <p>Detecta mejoras clave en la gestión del talento. Indicadores que se comparan con el sector:</p>
    <ul>
      <li><b>Rotación:</b> egreso vs. promedio del sector.</li>
      <li><b>Ausentismo:</b> tasa de inasistencia y causas.</li>
      <li><b>Satisfacción / clima:</b> compromiso y bienestar.</li>
      <li><b>Capacitación:</b> horas de formación comparadas.</li>
    </ul>

    <h2>Etapas del proceso</h2>
    <ol class="steps">
      <li><span class="step-title">Definir el área</span> Qué vamos a comparar.</li>
      <li><span class="step-title">Elegir indicadores</span> Las métricas clave.</li>
      <li><span class="step-title">Seleccionar referentes</span> Con quién comparamos.</li>
      <li><span class="step-title">Analizar e implementar mejoras</span> Acciones concretas + gestión del cambio.</li>
    </ol>

    <div class="callout warn">
      <div class="callout-title">⚠️ El factor humano</div>
      <p>No termina con los datos: <b>sin participación no hay mejora</b>. También es gestión del cambio — hay que convertir
      la resistencia en compromiso (comunicar para mejorar, no para culpar).</p>
    </div>

    <div class="callout info">
      <div class="callout-title">🇦🇷 Ejemplos en Argentina</div>
      <p><b>Great Place to Work</b> (encuestas de clima y rankings) y consultoras como <b>PwC</b> (benchmarking de capital humano:
      clima, beneficios, liderazgo, retención).</p>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Razón principal para aplicarlo: <b>mejorar la competitividad y rentabilidad</b>. Es el <b>paso previo a una
      <a class="inline" data-go="reingenieria" style="cursor:pointer">reingeniería</a></b>: primero comparás y aprendés, después rediseñás.</p>
    </div>
  `);

  /* ===================== OUTSOURCING ===================== */
  reg("outsourcing", "Outsourcing", "🔗", `
    <div class="page-head">
      <div class="page-kicker">Gestión del Talento Humano · 2º Parcial</div>
      <h1>Outsourcing</h1>
      <p class="lead"><b>Tercerizar</b> áreas o procesos de una organización para enfocarse en lo estratégico.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Definición</div>
      <p><b>Tercerización:</b> contratar externamente actividades o procesos <b>no centrales</b> para que la empresa se
      concentre en su negocio principal (<b>core business</b>). Objetivo: <b>bajar costos</b>, <b>focalizarse</b> y acceder a
      mejores capacidades. Los contratos suelen ser de <b>largo plazo (3 a 10 años)</b>.</p>
    </div>

    <h2>Áreas de aplicación</h2>
    <p>RRHH, informática, telecomunicaciones, seguridad, transporte, compras, marketing, consultoría, entre otras.</p>

    <h2>Historia</h2>
    <p>Tras la 2ª Guerra Mundial las empresas buscaban concentrar la mayor cantidad de actividades. Esa estrategia quedó
    obsoleta con la tecnología: el término <b>nace en los 80</b> (gana credibilidad en los 70), vinculado a las áreas de
    información y tecnología.</p>

    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">✅ Ventajas</h3>
        <ul><li>Foco en el negocio principal</li><li>Ahorro operativo y de costos</li><li>Acceso a expertos y tecnología</li><li>Acelera procesos de reingeniería</li><li>Comparte riesgos · alianzas estratégicas</li></ul></div>
      <div class="card"><h3 style="margin-top:0">⚠️ Riesgos</h3>
        <ul><li>Dependencia del proveedor</li><li>Mala selección del contratista / contrato mal negociado</li><li>Pérdida de control · fugas de datos</li><li>Mayores costos de supervisión</li><li>Incumplimiento del proveedor</li></ul></div>
    </div>

    <h2>Alcance y factores de éxito</h2>
    <p><b>Alcance:</b> <b>Total</b> (se transfieren personal, equipos, operaciones y responsabilidades) o
    <b>Parcial</b> (solo algunas actividades).</p>
    <p><b>Factores críticos de éxito:</b> objetivos claros, expectativas realistas, compromiso de cliente y proveedor,
    contrato bien definido, flexibilidad (financiera, tecnológica y operativa) y <b>apoyo de la dirección</b>.</p>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Outsourcing = <b>tercerizar áreas de una organización</b>. Cuidado: <b>no</b> es empowerment.
      "La clave está en delegar la operación para potenciar la estrategia."</p>
    </div>
  `);

  /* ===================== OUTPLACEMENT ===================== */
  reg("outplacement", "Outplacement", "🚪", `
    <div class="page-head">
      <div class="page-kicker">Gestión del Talento Humano · 2º Parcial</div>
      <h1>Outplacement</h1>
      <p class="lead">Conjunto de técnicas para <b>contener, orientar y reubicar</b> a los trabajadores cuando la empresa
      debe prescindir de sus servicios.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Definición</div>
      <p>Herramienta de RRHH para acompañar la desvinculación (tras fusiones, adquisiciones o reestructuraciones).
      Para la empresa es asesoría responsable; para el profesional, una instancia de
      <b>reingeniería personal</b> para reinventar su valor en el mercado.</p>
    </div>

    <h2>Actores del proceso</h2>
    <ul>
      <li><b>La organización:</b> atraviesa el cambio; usa su área de RRHH o contrata una consultora.</li>
      <li><b>Consultora y coaches:</b> acompañan la preparación (≈ 6 meses).</li>
      <li><b>El empleado:</b> redefine su CV, fortalece habilidades y reactiva su red de contactos.</li>
    </ul>

    <h2>¿Qué suele incluir?</h2>
    <ul>
      <li>Acompañamiento emocional</li>
      <li>Redefinición del perfil y objetivos (Ikigai / FODA)</li>
      <li>Actualización de CV y marca personal en redes</li>
      <li>Entrenamiento en entrevistas</li>
      <li>Estrategias de networking y búsqueda activa</li>
    </ul>

    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">🏢 Beneficios para la empresa</h3>
        <p>Mejor clima entre los que permanecen (trato justo), resguardo de la <b>marca empleadora</b> y
        <b>responsabilidad social</b> (coherencia entre valores y prácticas de egreso).</p></div>
      <div class="card"><h3 style="margin-top:0">👤 Valor para el profesional</h3>
        <p>Planificación de carrera, actualización del perfil, desarrollo de redes reales y apertura mental ante la incertidumbre.</p></div>
    </div>

    <div class="callout info">
      <div class="callout-title">🇦🇷 Casos contrapuestos</div>
      <p><b>Garbarino (cómo NO):</b> sin plan de contención, "ghosting" corporativo, daño de marca y terror interno.<br>
      <b>Lemon Cash (cómo SÍ):</b> el CEO comunicó de frente, creó un "talent hub" en LinkedIn, dejó que conservaran sus
      equipos y extendió prepaga y seguro de vida.</p>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Outplacement = <b>conjunto de técnicas para reubicar trabajadores</b>. Se puede ver como una oportunidad de
      <b>reingeniería personal</b>.</p>
    </div>
  `);
})();
