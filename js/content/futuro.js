(function () {
  "use strict";
  const GTH = window.GTH;
  const COMP = "Temas complementarios (PPT)";
  const U4 = "Unidad IV · Herramientas estratégicas";

  function reg(group, id, title, tag, html) {
    GTH.register({
      id, group, title, tag,
      render(el) {
        el.innerHTML = html;
        el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => GTH.go(c.dataset.go)));
      },
    });
  }

  /* ===================== TRANSFORMACIÓN DIGITAL ===================== */
  reg(COMP, "transformacion-digital", "Transformación Digital", "🚀", `
    <div class="page-head">
      <div class="page-kicker">Gestión del Talento Humano · 2º Parcial</div>
      <h1>Transformación Digital</h1>
      <p class="lead">Un <b>cambio de mentalidad</b> y de cultura organizacional, no solo tecnología.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Idea central</div>
      <p>Transformación Digital <b>≠ Digitalización</b>. No es tener presencia online ni aplicar nuevas tecnologías:
      es un <b>cambio en la mentalidad</b> de la compañía que afecta a todos los departamentos y crea una nueva cultura
      organizacional. Es <b>poner al cliente y al empleado en el primer lugar</b> de la estrategia.</p>
    </div>

    <h2>Las 5 competencias de la mentalidad digital</h2>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">🏗️ Construyo y transformo</h3><p>Comprender el poder de la transformación; alinearse con propósito y objetivos.</p></div>
      <div class="card"><h3 style="margin-top:0">📈 Decido con datos</h3><p>Elegir los indicadores críticos y transformar la información en conocimiento e innovación.</p></div>
      <div class="card"><h3 style="margin-top:0">⚡ Agilidad y aprendizaje</h3><p>Pragmatismo y empirismo para crear, probar y modificar. Aprender del error constantemente.</p></div>
      <div class="card"><h3 style="margin-top:0">🎨 Diseño experiencias</h3><p>Crear experiencias positivas: el Sentir, Pensar y Hacer del usuario en cada punto de contacto.</p></div>
      <div class="card"><h3 style="margin-top:0">🤝 Creo con otros</h3><p>Ser creativo desde la colaboración y la confianza en el equipo.</p></div>
    </div>

    <h2>La evolución de las culturas organizacionales (Laloux, colores)</h2>
    <p>Cada color es un paradigma de gestión (también se los nombra con metáforas:
    <b>manada de lobos → ejército → máquina → familia → sistema complejo</b>). Se nota en cómo se recompensa a la gente:</p>
    <ul>
      <li><b>Roja</b> (manada de lobos): el jefe reparte como quiere; lealtad por recompensa y castigo.</li>
      <li><b>Ámbar</b> (ejército): jerarquía rígida; "mismo rango, mismo sueldo", sin incentivos.</li>
      <li><b>Naranja</b> (máquina): incentivos individuales para premiar a las estrellas.</li>
      <li><b>Verde</b> (familia): bonos por equipo para fomentar la cooperación.</li>
      <li><b>Teal</b> (sistema complejo): <b>autogestión, plenitud y propósito evolutivo</b>.</li>
    </ul>
    <div class="callout warn">
      <p>La Transformación Digital es un cambio <b>radical pero paulatino</b> de cultura: pone al cliente y al empleado en
      el primer lugar de la estrategia del negocio.</p>
    </div>

    <h2>Propuesta de valor — triángulo</h2>
    <p><b>Relevante</b> (resuelve la necesidad del cliente) · <b>Diferente</b> (¿por qué elegirte a vos?) ·
    <b>Creíble</b> (coherencia entre lo que decís y lo que hacés: un ¡WOW!).</p>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Competencias de la mentalidad digital: <b>construyo y transformo, agilidad y aprendizaje, decido con datos,
      diseño de experiencia y creo con otros</b>. Un equipo TEAL = <b>autogestión, plenitud y propósito evolutivo</b>.</p>
    </div>
  `);

  /* ===================== UPSKILLING / RESKILLING ===================== */
  reg(COMP, "upskilling", "Upskilling & Reskilling", "🎓", `
    <div class="page-head">
      <div class="page-kicker">Gestión del Talento Humano · 2º Parcial</div>
      <h1>Upskilling &amp; Reskilling</h1>
      <p class="lead">Cómo las empresas desarrollan <b>nuevas habilidades y competencias</b> en sus colaboradores.</p>
    </div>

    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">⬆️ Upskilling</h3>
        <p>Proceso de <b>aprender nuevas habilidades</b> (o enseñarlas a los colaboradores) para <b>mejorar en el mismo puesto</b>.
        Potenciar lo que ya se hace.</p></div>
      <div class="card"><h3 style="margin-top:0">🔄 Reskilling</h3>
        <p>Proceso de <b>aprender nuevas habilidades para hacer un trabajo diferente</b>, o formar a la gente para otro rol.
        Permite <b>pivotear</b> de un puesto/función a otro.</p></div>
    </div>

    <div class="callout key">
      <div class="callout-title">🎯 Para qué</div>
      <p>A través del <b>reskilling y upskilling</b> las empresas buscan resolver la necesidad de desarrollar nuevas
      habilidades y competencias en los colaboradores frente a la revolución digital (Big Data, IA, etc.).</p>
    </div>

    <h2>Fundamentación</h2>
    <ul>
      <li>Las personas tienen <b>skillsets</b> transferibles entre profesiones. Un senior transfiere su <i>seniority</i> más rápido de lo que un junior evoluciona a senior.</li>
      <li>Los conocimientos previos (aunque no sean de IT) suman valor (un abogado sabe de leyes; un arquitecto, de estructura y diseño).</li>
      <li>Las personas maduras son más estables; las jóvenes, más flexibles.</li>
    </ul>

    <div class="callout info">
      <div class="callout-title">💰 Costos (Foro Económico Mundial)</div>
      <p>Capacitar a un empleado cuesta ~<b>25% menos</b> que los beneficios que genera ⟹ conviene como inversión.
      Capacitar a la plantilla también <b>enriquece la marca empleadora</b>.</p>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p><b>Upskilling</b> = nuevas habilidades para el mismo trabajo (Verdadero). <b>Reskilling</b> = nuevas habilidades para
      un trabajo <i>diferente</i> (¡la afirmación "Reskilling = aprender para hacer un trabajo diferente" es Verdadera;
      ojo con los enunciados que las cruzan!).</p>
    </div>
  `);

  /* ===================== LEARNABILITY ===================== */
  reg(COMP, "learnability", "Learnability", "🧠", `
    <div class="page-head">
      <div class="page-kicker">Gestión del Talento Humano · 2º Parcial</div>
      <h1>Learnability</h1>
      <p class="lead">La <b>capacidad de aprender nuevas habilidades a lo largo de la vida</b> para seguir siendo empleable.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Definición</div>
      <p>Capacidad para aprender nuevas habilidades a lo largo de la vida y <b>permanecer empleable a largo plazo</b>.
      Hoy la empleabilidad ya no depende solo de <b>lo que sabés</b>, sino de tu <b>capacidad de aprender</b> cosas nuevas.</p>
    </div>

    <h2>Dos dimensiones</h2>
    <ul>
      <li><b>Capacidad</b> de continuar aprendiendo.</li>
      <li><b>Deseo</b> de conocer por el gusto de conocer + actitud positiva ante nuevos retos.</li>
    </ul>

    <h2>El candidato ideal</h2>
    <p>Combina <b>habilidades técnicas</b> + <b>habilidades sociales</b>. Para detectar learnability se investigan tres rasgos:</p>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">🧭 Explorador</h3><p>Curioso, intelectual, le gusta vivir nuevas experiencias y conversar de cualquier tema.</p></div>
      <div class="card"><h3 style="margin-top:0">🔥 Motivador</h3><p>Tiene la actitud: desea crecer, mejorar, sobresalir. Permeable a estímulos externos.</p></div>
      <div class="card"><h3 style="margin-top:0">💡 Inconformista</h3><p>Independiente, creativo y original; precursor de la transformación.</p></div>
    </div>

    <div class="callout info">
      <div class="callout-title">🏅 Caso: Julius Yego</div>
      <p>El atleta keniano aprendió a lanzar jabalina <b>mirando YouTube</b> y ganó la medalla de plata en Río 2016.
      "Todos deberíamos ser un poco Julius Yego": mantenerse vigente no es solo acumular títulos, sino reconocer nuevas
      herramientas para aprender.</p>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>Learnability = <b>capacidad de aprender nuevas habilidades a lo largo de la vida</b> (Verdadero).
      Las habilidades <b>técnicas y sociales</b> hacen al candidato ideal.</p>
    </div>
  `);

  /* ===================== ENTREPRENEUR ===================== */
  reg(U4, "entrepreneur", "Entrepreneur", "🦄", `
    <div class="page-head">
      <div class="page-kicker">Gestión del Talento Humano · 2º Parcial</div>
      <h1>Entrepreneur / Emprendedorismo</h1>
      <p class="lead">La persona que <b>ve una oportunidad</b> y moviliza recursos para aprovecharla, asumiendo riesgos.</p>
    </div>

    <div class="callout key">
      <div class="callout-title">📌 Definición</div>
      <p>"Es la persona que percibe una <b>oportunidad de negocio</b> y tiene la motivación, el impulso y la habilidad de
      <b>movilizar recursos</b> para aprovecharla, <b>aceptando los riesgos</b> que esto conlleva."</p>
    </div>

    <h2>Entrepreneur vs. Intrapreneur</h2>
    <p><b>Entrepreneur:</b> emprende su propio negocio. <b>Intrapreneur:</b> emprende e innova <i>dentro</i> de una empresa existente.</p>

    <p>Su característica principal es la <b>innovación</b>: no solo detecta oportunidades, también aplica creatividad y
    metodologías para transformar ideas en proyectos reales. El <b>entrepreneurship</b> es el proceso de desarrollar
    proyectos innovadores o transformar ideas en actividades rentables, generando valor económico o social.</p>

    <h2>Estilos de emprendedor</h2>
    <p>Persuasivo · Por azar · Especialista · Rastreador · Visionario.</p>

    <h2>3 tipos de entrepreneur</h2>
    <div class="grid-2">
      <div class="card"><h3 style="margin-top:0">🔍 Descubridores de negocios</h3><p>Identifican nichos y detectan oportunidades que otros no ven.</p></div>
      <div class="card"><h3 style="margin-top:0">🏗️ Creadores de negocios</h3><p>Diseñan y ponen en marcha nuevos emprendimientos: estrategias y planes de acción.</p></div>
      <div class="card"><h3 style="margin-top:0">📈 Gestores de negocios</h3><p>Hacen crecer y consolidan proyectos, negociando y administrando su desarrollo a largo plazo.</p></div>
    </div>
    <p><b>3 recursos fundamentales:</b> sus <b>capacidades innatas</b>, las <b>habilidades adquiridas</b> (educación) y sus
    <b>redes de contactos</b>.</p>

    <h2>Los 7 pasos hacia el éxito empresarial</h2>
    <ol>
      <li><b>Descubrir</b> la oportunidad (detectar una necesidad con potencial).</li>
      <li><b>Evaluar</b> la oportunidad (viabilidad y rentabilidad).</li>
      <li><b>Comprometer recursos</b> (asumir riesgos, plan de negocios, invertir).</li>
      <li><b>Ingresar al mercado</b> (lanzar y validar con clientes).</li>
      <li><b>Despegue</b> (financiamiento, expandir, acelerar).</li>
      <li><b>Madurez y expansión</b> (consolidar y llegar a nuevos mercados).</li>
      <li><b>Cosechar resultados</b> (obtener beneficios o iniciar nuevos proyectos).</li>
    </ol>

    <div class="callout warn">
      <div class="callout-title">⚖️ Emprendedor vs. Startup</div>
      <p>Un <b>emprendedor</b> crea un negocio buscando rentabilidad y ganancias (corto plazo). Una <b>startup</b> se basa
      en la <b>innovación</b> (en general tecnológica) y prioriza el <b>crecimiento rápido y la escalabilidad</b>, aunque al
      principio no genere beneficios; suele buscar financiamiento externo para expandirse.</p>
    </div>

    <h2>8 puntos importantes</h2>
    <ol>
      <li>El <b>equipo</b> es lo más importante.</li>
      <li>Leer el <b>contexto</b> y definir la competencia.</li>
      <li><b>Hipótesis</b> + Piloto/MVP + Validar + recolectar datos + aprender.</li>
      <li>Escala, <b>sostenibilidad</b> y crecimiento controlado.</li>
      <li><b>Roadmap</b> (anteproyecto).</li>
      <li>Levantar fondos (<b>bootstrapping</b> o inversión).</li>
      <li><b>Formalizar</b> el camino.</li>
      <li>Toda empresa es una empresa de <b>comunicación</b>.</li>
    </ol>

    <div class="callout info">
      <div class="callout-title">🇦🇷 Unicornios argentinos</div>
      <p>Auth0, Aleph, Tiendanube, Ualá y Technisys: valuadas en más de US$1.000 millones.</p>
    </div>

    <div class="callout tip">
      <div class="callout-title">✅ Para el parcial</div>
      <p>"Una persona con gran decisión para comercializar un producto/servicio" → <b>Fundador</b>.
      "Todas nuestras ideas pueden hacerse realidad si tenemos el coraje de perseguirlos" (Walt Disney).</p>
    </div>
  `);
})();
