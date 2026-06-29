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

  /* ===================== LA ERA DEL CAPITAL HUMANO ===================== */
  reg("p1-capital-humano", "La Era del Capital Humano", "👥", `
    <div class="page-head">
      <div class="page-kicker">${K}</div>
      <h1>La Era del Capital Humano — Claus Möller</h1>
      <p class="lead">El <b>Employeeship</b>: poner al empleado por encima de todo. Empleados felices → clientes felices → ganancias.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Employeeship</div>
      <p>Juego de palabras: <i>employee</i> (empleado) + <i>-ship</i> (habilidad/condición). Las organizaciones ponen al
      <b>empleado por sobre todo</b>: este se siente parte de la compañía, <b>asume responsabilidad por los éxitos y los
      fracasos</b>, y existe <b>confianza</b> entre empleados y gerentes.</p>
    </div>

    <div class="callout info">
      <div class="callout-title">🍷 "Sábado a la noche"</div>
      <p>Cuando recibimos invitados un sábado, damos lo mejor sin que nadie nos lo pida: porque nos sentimos
      <b>dueños</b> del proyecto, de los éxitos y los fracasos. Esa es la actitud del employeeship.</p>
    </div>

    <h2>Los 3 criterios para el éxito</h2>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">📈 Productividad</h3><p>No gastar más de lo que se tiene (si invierto $1, debo ganar al menos $1,5).</p></div>
      <div class="card"><h3 style="margin-top:0">🤝 Relaciones humanas</h3><p>Empleados felices; capital humano comprometido con el proyecto.</p></div>
      <div class="card"><h3 style="margin-top:0">⭐ Calidad</h3><p>Clientes felices: los que vuelven son los clientes, no los productos.</p></div>
    </div>
    <p>Deben darse en los <b>3 niveles</b>: gerencial, equipo e individual. <b>Orden de prioridad:</b>
    1.º empleados → 2.º clientes → 3.º ganancias.</p>

    <div class="callout warn">
      <div class="callout-title">🐟 "Aquarium administrativo"</div>
      <p>No hay que esperar a que todo esté mal para actuar: hay que <b>cambiar antes de que sea necesario</b> (cuando
      ascendemos, no cuando caemos), para poder elegir nuestras propias estrategias.</p>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Los 3 criterios de Möller son <b>Productividad, Relaciones humanas y Calidad</b> (¡ojo!: "compromiso, relaciones
      humanas y confianza" es <b>Falso</b>). Prioridad: empleados → clientes → ganancias.</p>
    </div>
  `);

  /* ===================== GESTIÓN DEL TALENTO ===================== */
  reg("p1-gestion-talento", "Gestión del Talento", "🎯", `
    <div class="page-head">
      <div class="page-kicker">${K}</div>
      <h1>Gestión del Talento</h1>
      <p class="lead">Proceso de <b>desarrollar, incorporar y retener</b> recursos humanos, destacando a quienes tienen alto potencial.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Definición</div>
      <p>La gestión del talento es el proceso de <b>desarrollar, incorporar y retener</b> recursos humanos a la fuerza laboral,
      buscando <b>destacar a las personas de alto potencial (talento)</b> en su puesto. El talento es la única <b>ventaja
      competitiva sustentable</b> de las organizaciones.</p>
    </div>

    <h2>Mapa generacional — cada una, cómo piensa y qué dice</h2>
    <p>Lo que más se toma: identificar a qué generación corresponde una <b>frase</b>. Fijate en la 💬 de cada tarjeta.</p>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">👴 Tradicionalistas <span class="pill amber">los abuelos</span></h3>
        <p><b>Mentalidad:</b> se criaron en adversidad (guerra, escasez); ahorro y esfuerzo, autoritarismo. <b>Viven para el trabajo</b>.</p>
        <p><b>Tecnología:</b> la Radio.</p>
        <p>💬 <i>"Tener empleo es ser afortunado."</i></p></div>

      <div class="card"><h3 style="margin-top:0">📺 Baby Boomers <span class="pill indigo">1945-64 · ~27%</span></h3>
        <p><b>Mentalidad:</b> apuestan a la <b>estabilidad</b> y a la empresa "de por vida"; valoran la reputación del empleador. A diferencia de sus padres, <b>desean participar</b>.</p>
        <p><b>Tecnología:</b> la TV. Antigüedad media: 8 años.</p>
        <p>💬 <i>"Crezco dentro de una misma empresa toda mi carrera."</i></p></div>

      <div class="card"><h3 style="margin-top:0">💻 Generación X <span class="pill indigo">1964-80 · ~36%</span></h3>
        <p><b>Mentalidad:</b> <b>desconfiados e individualistas</b> (vieron fracasar a sus padres en la empresa). Buscan equilibrio vida-trabajo; informales; reemplazan reuniones por mail. Impulsores de la tecnología.</p>
        <p><b>En el trabajo:</b> piden <b>logros, no presencia física</b>.</p>
        <p>💬 <i>"El compromiso no se mide por horas silla, sino por objetivos."</i></p></div>

      <div class="card"><h3 style="margin-top:0">📱 Generación Y / Millennials <span class="pill indigo">1980-95 · ~24%</span></h3>
        <p><b>Mentalidad:</b> buscan <b>propósito</b>, aprendizaje continuo y <b>flexibilidad</b>; poco apego al puesto. Quieren jefes desarrolladores y feedback permanente. "El trabajo no es todo".</p>
        <p><b>Buscan:</b> contexto (clima), compensación (también emocional) y aprendizaje. Cuidan el medio ambiente.</p>
        <p>💬 <i>"No permito que el trabajo arruine mis planes personales."</i></p></div>

      <div class="card"><h3 style="margin-top:0">🌐 Generación Z / Centennials <span class="pill indigo">1995-2010 · ~13%</span></h3>
        <p><b>Mentalidad:</b> <b>nativos digitales</b>, "de cristal", impacientes; detestan perder el tiempo. Sus padres los involucran en las decisiones. Buscan placer y sentido en lo que hacen.</p>
        <p><b>Tecnología:</b> las redes sociales.</p>
        <p>💬 <i>"Si no le encuentro sentido, no me comprometo."</i></p></div>

      <div class="card" style="background:var(--brand-soft)"><h3 style="margin-top:0">⚠️ Turbulencia generacional</h3>
        <p>Por primera vez conviven generaciones con <b>concepciones del mundo (y del trabajo) muy distintas</b>. Lo diferente
        se percibe como "malo". Hay que mirar las <b>causas raíz</b>, no la punta del iceberg, para retener el talento.</p></div>
    </div>

    <h2>Talento y miedo</h2>
    <p>El <b>miedo</b> es el factor que más inhibe el talento; se contrarresta con <b>comunicación clara</b>. Los líderes que
    fomentan el talento incentivan la participación y promueven a quienes arriesgan; los que operan desde el miedo eligen
    gente poco brillante "para que no les haga sombra".</p>

    <h2>¿Qué buscan los Millennials? (3 motivaciones)</h2>
    <ul>
      <li><b>Contexto:</b> buen clima, relaciones interpersonales, informalidad.</li>
      <li><b>Compensación:</b> no solo dinero, también beneficios emocionales.</li>
      <li><b>Aprendizaje y desarrollo:</b> desafíos y <b>feedback permanente</b>; jefes desarrolladores / coaching.</li>
    </ul>
    <p style="font-size:.9rem;color:var(--ink-soft)">"Se unen a las organizaciones por dinero y se van por sus jefes."
    Distribución aproximada en el trabajo: Baby Boomers ~27% (antigüedad 8 años), Gen X ~36% (6 años),
    Gen Y ~24% (1,5 años), Gen Z ~13%.</p>

    <h2>Cómo comprometer a los Millennials (10 atributos)</h2>
    <ol style="columns:2;column-gap:1.6rem">
      <li><b>Trabajo con sentido</b> (propósito e impacto social).</li>
      <li><b>Foco en resultados</b> (Result Management, no Face Management).</li>
      <li><b>Aprendizaje continuo</b> y variedad (proyectos, liderazgos rotativos).</li>
      <li><b>Participación</b> activa.</li>
      <li><b>Diversidad</b> (inclusión, equidad, accesibilidad).</li>
      <li><b>Transparencia</b> y coherencia.</li>
      <li><b>Innovación.</b></li>
      <li><b>Diversión</b> y celebración.</li>
      <li><b>Nuevos jefes</b> (desarrolladores, creadores de sentido y de contexto).</li>
      <li><b>Gestión diferencial del tiempo</b> (horarios flexibles, home office).</li>
    </ol>

    <h2>Mentoring vs. Coaching</h2>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">🎯 Coaching</h3><p>Relación a <b>corto plazo</b>, más formal, enfocado en problemas del trabajo. Libera el potencial.</p></div>
      <div class="card"><h3 style="margin-top:0">🧭 Mentoring</h3><p>Relación a <b>largo plazo</b>, informal. Mentor interno con prestigio, de otra área; acompaña la toma de decisiones.</p></div>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Gestión del talento = <b>desarrollar, incorporar y retener</b> RRHH (Verdadero). Las generaciones se distinguen por
      su mentalidad y su relación con la tecnología y el trabajo.</p>
    </div>
  `);
})();
