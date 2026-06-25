(function () {
  "use strict";
  const GTH = window.GTH;
  const GROUP = "Personas & cultura";

  function reg(id, title, tag, html) {
    GTH.register({
      id, group: GROUP, title, tag,
      render(el) {
        el.innerHTML = html;
        el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => GTH.go(c.dataset.go)));
      },
    });
  }

  /* ===================== ORGANIZACIONES SALUDABLES ===================== */
  reg("org-saludables", "Organizaciones Saludables", "🌿", `
    <div class="page-head">
      <div class="page-kicker">Gestión del Talento Humano · 2º Parcial</div>
      <h1>Organizaciones Saludables</h1>
      <p class="lead">Discriminación en el trabajo y ética empresarial: el impacto de la organización en las personas y la comunidad.</p>
    </div>

    <h2>La discriminación en el trabajo</h2>
    <div class="callout key">
      <div class="callout-title">📌 Definición</div>
      <p>Discriminar = diferenciar, distinguir, separar. La <b>discriminación laboral</b> ocurre cuando hay desigualdad
      laboral: de <b>trato</b>, de <b>oportunidades</b> o en el <b>pago</b>.</p>
    </div>

    <h3>Dos grandes tipos</h3>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">❌ Injusta</h3>
        <p>Usa criterios sin relación con la capacidad para el trabajo. Causas: <b>estereotipos</b>, <b>prejuicios</b> y motivos culturales. Se divide en:</p>
        <ul>
          <li><b>Directa:</b> rechazo en la contratación o promoción.</li>
          <li><b>Indirecta:</b> exigir requisitos (edad, estado civil, etc.) para ocupar/promover un puesto.</li>
          <li><b>Segregación:</b> discriminar a alguien solo por pertenecer a un grupo (o no dejarlo acceder a mandos).</li>
        </ul></div>
      <div class="card"><h3 style="margin-top:0">➕ Positiva</h3>
        <p>Trato preferencial a un grupo minoritario para mejorar su calidad de vida y compensar prejuicios del pasado.</p></div>
    </div>

    <h3>Discriminaciones más observadas</h3>
    <ul>
      <li><b>Hacia las mujeres:</b> la responsabilidad familiar adjudicada a la mujer es la principal causa; se refleja en el salario y en la falta de representación en puestos de poder.</li>
      <li><b>Racial:</b> color de piel, raza, nacionalidad, origen étnico. Ligada al <b>etnocentrismo</b>. Teorías: <b>personalidad autoritaria</b> y <b>frustración-agresión</b>.</li>
      <li><b>Hacia personas con discapacidad:</b> por falta de accesibilidad, prejuicios y escasas oportunidades. Se combate eliminando barreras físicas y con medidas como el <b>teletrabajo</b> y la adaptación de puestos.</li>
    </ul>
    <div class="callout tip">
      <p><b>Conclusión:</b> la selección debe basarse en la <b>capacidad</b>, no en criterios injustos (edad, sexo, color de
      piel, orientación sexual o <b>nepotismo</b>). La diversidad debe valorarse y respetarse.</p>
    </div>

    <h2>La ética empresarial</h2>
    <p>Las organizaciones impactan en las <b>personas</b>, el <b>medio ambiente</b> y su <b>entorno</b>. Cuando el impacto
    afecta los tres puntos se juega el concepto de <b>ética</b>. Acciones sin ética, por niveles:</p>
    <ul>
      <li><b>Nivel 1 (más graves):</b> productos peligrosos, contaminación del agua/aire.</li>
      <li><b>Nivel 2:</b> afectan a muchas personas (sobornos, publicidad engañosa).</li>
      <li><b>Nivel 3:</b> responsabilidad colectiva / falta de solidaridad (ej. donaciones).</li>
    </ul>

    <h3>Tipos de razonamiento ético</h3>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">Consecuencialista</h3><p>Lo ético es lo que promueve felicidad/buenas <b>consecuencias</b> (aunque implique una mentira piadosa).</p></div>
      <div class="card"><h3 style="margin-top:0">No consecuencialista</h3><p>La moral es cumplir los <b>principios/normas</b>, independientemente de los resultados.</p></div>
    </div>

    <div class="callout info">
      <div class="callout-title">🚗 Dilema clásico: el Ford Pinto</div>
      <p>El modelo Pinto tenía un tanque que podía explotar. La empresa calculó que era más barato pagar los juicios que
      corregir el auto, y lo sacó igual a la venta. Caso típico de razonamiento puramente económico vs. ético.</p>
    </div>
  `);

  /* ===================== EMPRESA CONSCIENTE ===================== */
  reg("empresa-consciente", "Empresas Conscientes", "🧭", `
    <div class="page-head">
      <div class="page-kicker">Gestión del Talento Humano · 2º Parcial</div>
      <h1>Empresas Conscientes</h1>
      <p class="lead">Basado en <b>"La Empresa Consciente"</b> de Fredy Kofman: un impacto positivo en el mundo
      <b>más allá de los objetivos financieros</b>.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Idea central</div>
      <p>Las empresas deben ir más allá de maximizar beneficios y considerar el impacto de sus acciones en <b>todas las
      partes interesadas</b> (empleados, clientes, sociedad). Valores clave: <b>autenticidad, integridad y respeto</b>.</p>
    </div>

    <h2>Los 3 fundamentos (Kofman)</h2>
    <ol class="steps">
      <li><span class="step-title">Propósito más allá del beneficio económico</span> Crear valor económico, social y ético.</li>
      <li><span class="step-title">Impacto en todas las partes interesadas</span> Empleados, clientes, proveedores, comunidad y ambiente.</li>
      <li><span class="step-title">Liderazgo auténtico y consciente</span> Líderes comprometidos con un propósito elevado que deciden con integridad y respeto.</li>
    </ol>

    <h2>Víctima vs. Protagonista</h2>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">😞 Víctima</h3>
        <p>Percibe su vida como controlada por <b>fuerzas externas</b>. Culpa a los demás, se siente impotente.
        Lleva a la pasividad y la falta de responsabilidad.</p></div>
      <div class="card"><h3 style="margin-top:0">💪 Protagonista</h3>
        <p>Asume la <b>responsabilidad</b> de su vida y sus acciones. Reconoce su poder de influir y toma medidas proactivas.</p></div>
    </div>
    <p>El paso de víctima a protagonista implica: conciencia personal → asumir responsabilidad → cambiar el enfoque (a lo
    que se puede controlar) → mentalidad de crecimiento → desarrollar resiliencia → practicar la gratitud.</p>

    <div class="callout info">
      <div class="callout-title">🔗 Empresa integral</div>
      <p>Busca crear <b>valor a largo plazo</b> (económico, social y ambiental) en vez de solo maximizar beneficios a corto
      plazo. Se conecta con la <b>organización que aprende</b> (Swieringa) y la <b>evolución de culturas</b> (Laloux):
      trabajar con foco en las personas y liderazgo auténtico <b>sin perder rentabilidad</b>.</p>
    </div>
  `);

  /* ===================== RSE & SUSTENTABILIDAD ===================== */
  reg("rse", "RSE & Sustentabilidad", "♻️", `
    <div class="page-head">
      <div class="page-kicker">Gestión del Talento Humano · 2º Parcial</div>
      <h1>RSE &amp; Sustentabilidad</h1>
      <p class="lead">La contribución <b>activa y voluntaria</b> de las empresas al mejoramiento social, económico y ambiental.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 ¿Qué es la RSE/RSC?</div>
      <p>Contribución <b>activa y voluntaria</b> al mejoramiento social, económico y ambiental por parte de las empresas.
      Hoy es también una <b>actividad estratégica</b> de competencia comercial, no solo respuesta a presiones de los consumidores.</p>
    </div>

    <h2>RSE vs. RSC vs. RS</h2>
    <ul>
      <li><b>RSC</b> (Responsabilidad Social Corporativa): aplica a las <b>grandes</b> empresas.</li>
      <li><b>RSE</b> (Responsabilidad Social Empresaria): aplica a <b>todas</b> las empresas.</li>
      <li><b>RS</b> (Responsabilidad Social): aplica a <b>todos los ciudadanos</b>.</li>
    </ul>

    <h2>Responsabilidades éticas principales</h2>
    <ul>
      <li>Servir a la sociedad con productos útiles · respetar los derechos humanos y el medio ambiente.</li>
      <li>Cumplir las leyes · ética empresarial y lucha contra la corrupción.</li>
      <li>Gestión de recursos y residuos · uso correcto del agua · lucha contra el cambio climático.</li>
    </ul>

    <div class="callout warn">
      <div class="callout-title">📏 ¿Cómo se mide?</div>
      <p>No existe un <b>estándar aceptado</b> de medición: se suelen usar informes elaborados por las propias entidades.</p>
    </div>

    <h2>Sustentabilidad</h2>
    <p>Satisfacer las necesidades de la <b>generación presente sin comprometer</b> la capacidad de las generaciones futuras
    de satisfacer las suyas. <b>No es un concepto estático</b>; su meta es el esfuerzo conservativo.</p>
    <p>Sus <b>3 pilares</b> son <b>económico</b> (crecimiento sostenible), <b>ecológico</b> (proteger los recursos) y
    <b>social</b> (distribución equitativa). En las empresas se habla de <b>triple sustentabilidad</b>: éxito económico +
    cuidado ambiental + responsabilidad social.</p>
    <h3>Dimensiones</h3>
    <ul>
      <li><b>Social:</b> equidad (la finalidad del desarrollo es ética y social).</li>
      <li><b>Económica:</b> eficiencia económica.</li>
      <li><b>Ecológica:</b> prudencia ecológica.</li>
      <li><b>Cultural:</b> soluciones culturalmente aceptables.</li>
      <li><b>Espacial/territorial:</b> nuevos equilibrios espaciales y planificación del uso de recursos.</li>
    </ul>

    <div class="callout info">
      <p>"Si supiera que el mundo se acaba mañana, yo, hoy todavía, plantaría un árbol." — Martin Luther King.</p>
    </div>
  `);

  /* ===================== CAMBIO ===================== */
  reg("cambio", "Cambio", "🔁", `
    <div class="page-head">
      <div class="page-kicker">Gestión del Talento Humano · 2º Parcial</div>
      <h1>Cambio</h1>
      <p class="lead">El cambio organizacional, la resistencia y cómo se gestiona la transición.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Cambio organizacional</div>
      <p>Aparece cuando <b>colectivamente</b> se empiezan a hacer las cosas de otra manera. La gerencia debe encontrar el
      <b>equilibrio entre la continuidad y el cambio</b>.</p>
    </div>

    <h2>Modelos para encarar el cambio</h2>
    <p>El <b>anteproyecto o road map</b> describe el proceso de pensamiento o reorganización que se desea a futuro en lo
    referente a sus componentes. Dos caminos clásicos:</p>
    <ul>
      <li><b>El viajero:</b> empieza por el <b>cambio de conducta colectivo</b> (primero se actúa y se va aprendiendo).</li>
      <li><b>Modelo impuesto:</b> primero se piensa y luego se actúa (más prescriptivo, genera más resistencia).</li>
    </ul>

    <h2>Los 5 factores de la gestión del cambio</h2>
    <p>Para que un cambio sea exitoso hacen falta <b>cinco factores</b>. Si falta uno, aparece un <b>síntoma</b> característico:</p>
    <div class="table-wrap"><table class="data">
      <thead><tr><th>Factor (pregunta)</th><th>Si falta… → síntoma</th></tr></thead>
      <tbody>
        <tr><td>Visión (¿hacia dónde vamos?)</td><td><b>Confusión</b></td></tr>
        <tr><td>Motivación (¿por qué hacerlo?)</td><td><b>Resistencia</b></td></tr>
        <tr><td>Habilidades (¿cómo hacerlo?)</td><td><b>Ansiedad</b></td></tr>
        <tr><td>Recursos (¿con qué/quiénes?)</td><td><b>Frustración</b></td></tr>
        <tr><td>Plan de acción (¿cuándo?)</td><td><b>Sin rumbo</b></td></tr>
      </tbody>
    </table></div>
    <p>Una persona o equipo puede mostrar varios síntomas a la vez: indica que hay más de un factor comprometido.
    Detectarlos a tiempo aumenta las probabilidades de éxito.</p>

    <h2>Resistencia al cambio</h2>
    <p>Todo cambio genera resistencia (hábitos, miedo, incertidumbre); cuando el cambio es <b>radical</b>, el riesgo aumenta.
    Por eso un proceso como la <a class="inline" data-go="reingenieria" style="cursor:pointer">reingeniería</a> no solo
    rediseña procesos: también <b>gestiona el cambio</b>. Claves para gestionar la resistencia:</p>
    <ul>
      <li><b>Comunicar el objetivo:</b> mejorar, no culpar.</li>
      <li><b>Involucrar al personal clave</b> para lograr adaptación.</li>
      <li><b>Convertir la resistencia en compromiso:</b> participar para sostener el cambio.</li>
    </ul>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>El <b>road map / anteproyecto</b> = proceso de pensamiento o reorganización que se desea a futuro. Los 5 factores:
      <b>visión, motivación, habilidades, recursos y plan de acción</b> (si falta motivación → resistencia; si faltan
      habilidades → ansiedad). El cambio se sostiene con liderazgo y comunicación.</p>
    </div>
  `);
})();
