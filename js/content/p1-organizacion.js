(function () {
  "use strict";
  const GTH = window.GTH;
  const K = "Gestión del Talento Humano · 1er Parcial";

  function cap(titulo, contenido, abierto) {
    return '<details class="qa"' + (abierto ? " open" : "") + '><summary>' + titulo +
      "</summary><div>" + contenido + "</div></details>";
  }

  GTH.register({
    id: "p1-organizacion-aprende",
    group: "1er Parcial",
    title: "La Organización que Aprende",
    tag: "📚",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">${K}</div>
          <h1>La Organización que Aprende</h1>
          <p class="lead">Swieringa &amp; Wierdsma · Cap. 1-10 y 16-17. <b>Es el tema que más cae en el parcial.</b>
          Una organización que aprende es la que <b>expande continuamente su capacidad de crear su futuro</b>.</p>
        </div>

        <div class="callout key">
          <div class="callout-title">📌 Los 3 niveles que controlan la conducta</div>
          <p>Toda organización se rige por tres niveles (de lo más cercano a la conducta a lo más profundo):</p>
          <ul style="margin:.3rem 0">
            <li><b>Reglas:</b> lo que se debe hacer y lo permitido.</li>
            <li><b>Insights:</b> lo que se sabe y se entiende; <b>explican y fundamentan las reglas</b>.</li>
            <li><b>Principios:</b> lo que se es o se desea ser. Lo más difícil de cambiar.</li>
          </ul>
        </div>

        <div class="callout tip">
          <div class="callout-title">🧠 Cómo estudiar este tema (es muy teórico — usá estos trucos)</div>
          <ul style="margin:.3rem 0">
            <li><b>Recuerdo activo:</b> usá las 🃏 flashcards del final — tapá la definición e intentá decirla vos antes de mirar.</li>
            <li><b>Asociá a algo real:</b> pensá la organización como una <b>familia/empresa que crece</b> (lo vas a ver en las fases).</li>
            <li><b>El trío clave:</b> <b>Reglas / Insights / Principios = lo que hacés / lo que entendés / quién sos</b>. Se repite en todo el tema.</li>
            <li><b>Técnica Feynman:</b> explicá cada concepto <b>en voz alta y con tus palabras</b>. Si lo podés enseñar, lo sabés.</li>
          </ul>
        </div>

        <h2>Organización: dos sentidos</h2>
        <div class="grid-2">
          <div class="card"><h3 style="margin-top:0">🏛️ Sentido institucional</h3>
            <p><b>Asociación específica de personas</b> que trabajan juntas. Involucra <b>Reglas, Insights y Principios</b>.
            Es una <b>construcción social</b> (más que la suma de las partes).</p></div>
          <div class="card"><h3 style="margin-top:0">⚙️ Sentido instrumental</h3>
            <p>Se define por <b>Estrategia, Estructura, Sistemas y Cultura</b> (visión desde la Teoría General de Sistemas).</p></div>
        </div>

        <h2>Gerencia vs. Liderazgo</h2>
        <div class="grid-2">
          <div class="card"><h3 style="margin-top:0">🧭 Liderazgo</h3><p>Actúa sobre <b>estrategia, reglas, insights y principios</b>. Influencia <b>directa</b> sobre las personas.</p></div>
          <div class="card"><h3 style="margin-top:0">🗂️ Gerencia</h3><p>Actúa sobre <b>estructura, sistemas y cultura</b> (control del comportamiento). Influencia <b>indirecta</b>.</p></div>
        </div>

        <h2>Cómo nace y crece la empresa (Cap. 1) — y de dónde sale la "élite"</h2>
        <p>El <b>comportamiento organizacional</b> (los patrones colectivos de conducta) se va formando mientras la empresa
        atraviesa <b>3 fases</b>. Pensalo como una <b>familia que crece</b>:</p>
        <div class="flow">
          <span class="node">1 · Fase inicial</span><span class="arrow">→</span>
          <span class="node">2 · Crecimiento</span><span class="arrow">→</span>
          <span class="node">3 · Establecida</span>
        </div>
        <div class="mapgrid">
          <div class="maprow"><span class="from">1 · Fase inicial</span><span class="ar">→</span>
            <span class="to">El <b>fundador</b> (gran decisión para comercializar un producto/servicio) emplea gente que comparte su visión y <b>fija las reglas</b>. Es quien más influye.<small>Analogía: quien arranca la familia.</small></span></div>
          <div class="maprow"><span class="from">2 · Crecimiento</span><span class="ar">→</span>
            <span class="to">Al sumar gente, los <b>más veteranos se convierten en la «élite»</b>. El fundador contrata asistentes → departamentos → gerencias medias → aparecen la estructura y la cultura.<small>Analogía: los hijos mayores que ya "saben cómo es la casa".</small></span></div>
          <div class="maprow"><span class="from">3 · Establecida</span><span class="ar">→</span>
            <span class="to">El <b>gerente sucede al fundador</b>. Estructura, sistemas, cultura y estrategia controlan la conducta. La <b>élite tiene más poder</b>: determina la identidad, <b>transmite la cultura</b> y custodia las fronteras.<small>Analogía: los herederos que sostienen los valores.</small></span></div>
        </div>
        <div class="callout info">
          <p>👉 <b>La «élite»</b> son las personas que <b>estaban con el fundador desde el comienzo</b>, comparten sus valores y
          visión, y son las encargadas de <b>transmitir la cultura</b> a los nuevos. <i>(Por eso, en la pregunta de parcial,
          el "conjunto que acompaña al fundador y transmite la cultura" = élite.)</i></p>
        </div>
        <div class="callout warn">
          <p><b>Idea fina del Cap. 1:</b> cambiar las <b>reglas no cambia</b> la conducta. Primero se cambia la <b>conducta</b>
          (mediante el <b>aprendizaje colectivo</b>) y las reglas la siguen.</p>
        </div>

        <h2>El aprendizaje (Cap. 3-4)</h2>
        <p>Aprender es un <b>cambio de conducta</b> y el motor de la transformación. Según cómo se da:</p>
        <div class="grid-2">
          <div class="card"><h3 style="margin-top:0">🙈 Inconsciente</h3>
            <p><b>Informal:</b> por imitación.<br><b>Formal:</b> por recompensas y castigos.</p></div>
          <div class="card"><h3 style="margin-top:0">🎓 Consciente</h3>
            <p><b>Metódico / técnico:</b> aulas, seminarios. Progresivo y acumulativo → mayor competencia.</p></div>
        </div>

        <h3>🔄 El ciclo de Kolb</h3>
        <p>Aprender es un proceso <b>cíclico e interminable</b>. El recuadro es un <b>ciclo cerrado</b>: cuando llegás al final,
        <b>volvés a empezar</b>.</p>
        <div class="kolb">
          <div class="kolb-flow">
            <span class="node">① Hacer</span><span class="arrow">→</span>
            <span class="node">② Reflexionar</span><span class="arrow">→</span>
            <span class="node">③ Pensar</span><span class="arrow">→</span>
            <span class="node">④ Decidir</span>
          </div>
          <div class="kolb-loop">↺ … y volvés a Hacer (Re-hacer) — el ciclo nunca termina</div>
        </div>
        <p style="font-size:.88rem;color:var(--ink-soft)">💡 Para memorizar el orden: <b>"Hago, Reflexiono, Pienso, Decido"</b> → <b>H · R · P · D</b>.</p>

        <h3>La educación como intervención en el ciclo</h3>
        <p>Cada etapa del ciclo se "ayuda" con un tipo de intervención educativa:</p>
        <div class="mapgrid">
          <div class="maprow"><span class="from">Ayudar a hacer</span><span class="ar">→</span>
            <span class="to"><b>Capacitación</b><small>adquisición de habilidades</small></span></div>
          <div class="maprow"><span class="from">Ayudar a pensar</span><span class="ar">→</span>
            <span class="to"><b>Educación</b> (sentido restringido)<small>conocimientos y comprensión</small></span></div>
          <div class="maprow"><span class="from">Ayudar a reflexionar</span><span class="ar">→</span>
            <span class="to"><b>Formación</b><small>desarrollo de aptitudes/actitudes</small></span></div>
          <div class="maprow"><span class="from">Ayudar a decidir</span><span class="ar">→</span>
            <span class="to"><b>Consultoría</b></span></div>
        </div>

        <h3>Aprender a aprender (metaaprendizaje)</h3>
        <p>Requiere <b>autoconocimiento</b>, que tiene 3 niveles:</p>
        <div class="levels">
          <div class="level"><span class="lvl-n">1</span><div>Lo que uno <b>puede hacer</b> (capacidades).</div></div>
          <div class="level"><span class="lvl-n">2</span><div>Lo que uno <b>sabe y entiende</b>.</div></div>
          <div class="level"><span class="lvl-n">3</span><div><b>Quiénes somos</b> y quiénes deseamos ser (identidad).</div></div>
        </div>

        <h3>🃏 Flashcards — repasá los conceptos clave</h3>
        <p>Tratá de recordar la definición antes de tocar cada tarjeta.</p>
        <div id="oqa-fc"></div>

        <h2>Aprendizaje organizacional y los 3 ciclos (Cap. 5)</h2>
        <p>El aprendizaje individual es <b>condición necesaria pero NO suficiente</b>: la organización aprende cuando el cambio
        de conducta de un individuo <b>afecta la conducta de otros</b> (es <b>colectivo</b>).</p>
        <div class="table-wrap"><table class="data">
          <thead><tr><th>Ciclo</th><th>Cambia</th><th>Pregunta</th><th>Resultado</th><th>Plazo</th></tr></thead>
          <tbody>
            <tr><td>Simple</td><td>Reglas</td><td>¿Cómo?</td><td><b>Mejoramiento</b></td><td>A diario</td></tr>
            <tr><td>Doble</td><td>Insights</td><td>¿Por qué?</td><td><b>Renovación</b></td><td>Meses</td></tr>
            <tr><td>Triple</td><td>Principios (identidad)</td><td>¿Para qué / quiénes somos?</td><td><b>Desarrollo</b></td><td>Años</td></tr>
          </tbody>
        </table></div>
        <div class="callout info">
          <div class="callout-title">🍽️ Analogía: un restaurante</div>
          <p><b>Simple</b> = ajustar la <b>receta</b> que salió mal (cambio de reglas). <b>Doble</b> = cambiar el <b>menú</b>
          porque entendiste que tus clientes quieren otra cosa (cambio de insights). <b>Triple</b> = replantear <b>qué tipo de
          restaurante</b> querés ser (cambio de principios/identidad). Por eso el triple ciclo es "desarrollo".</p>
        </div>

        <h2>Los 4 tipos de organización</h2>
        <div class="grid-2">
          <div class="card"><h3 style="margin-top:0">🚀 Emprendedora (Cap. 6)</h3><p>Joven y pequeña; estructura <b>simple y centralizada</b>, cultura de poder. Aprende rápido haciendo, pero es vulnerable ante cambios externos o de liderazgo.</p></div>
          <div class="card"><h3 style="margin-top:0">🏭 Prescriptiva / burocracia (Cap. 7)</h3><p>Funciona como una <b>máquina</b>. Aprende mucho individualmente pero poco organizacionalmente. Los <b>sistemas son de control</b>, no de apoyo.</p></div>
          <div class="card"><h3 style="margin-top:0">🔧 Que desaprende (Cap. 8)</h3><p>Burocracia en proceso de cambio. Usa el método del <b>anteproyecto (road map / blueprint)</b>: diseña el futuro deseado e intenta convencer a la gente de cambiar.</p></div>
          <div class="card"><h3 style="margin-top:0">📚 Que aprende (Cap. 9)</h3><p>Capaz de <b>aprender y aprender a aprender</b>; se adapta sin perder identidad. Aprendizaje colectivo, consciente y multilateral.</p></div>
        </div>

        <h2>Cómo convertirse en una que aprende (Cap. 10)</h2>
        <div class="grid-2">
          <div class="card"><h3 style="margin-top:0">🧳 Modelo Turista (prescriptiva)</h3><p>Primero <b>planifica</b>, después actúa.</p></div>
          <div class="card"><h3 style="margin-top:0">🎒 Modelo Viajero (que aprende)</h3><p>Elige una dirección y <b>arranca</b>: el cambio de conducta conduce al pensamiento.</p></div>
        </div>
        <div class="callout warn">
          <p>La transición <b>requiere liderazgo, no solo gerenciamiento</b>: los líderes deben demostrar con su conducta
          que también están dispuestos a aprender.</p>
        </div>

        <h2>Recorrido por los capítulos</h2>
        ${cap("Cap. 16 — El aprendizaje colectivo: un proceso paradójico", `
          <p><b>3 paradojas:</b></p>
          <ol>
            <li>Aprender <b>individualmente</b> NO equivale a aprender <b>colectivamente</b>.</li>
            <li>Debemos <b>desaprender</b> individualmente lo que aprendimos en grupo.</li>
            <li>Colectivamente se hacen y piensan cosas con las que individualmente no se está del todo de acuerdo.</li>
          </ol>
          <p><b>Reacciones ante las paradojas:</b> ceguera colectiva (actúan como si el problema no existiera), evasión
          colectiva (miedo a quedar en ridículo), renuencia colectiva (uno o más no quieren participar) e ignorancia
          colectiva (tienen el valor pero les falta el conocimiento).</p>
        `)}
        ${cap("Cap. 17 — El papel del staff de capacitación", `
          <p>En las <b>prescriptivas</b>: el cambio organizacional está <b>separado</b> del cambio de conducta → cursos fuera de la empresa.</p>
          <p>En las que <b>aprenden</b>: el cambio organizacional <b>coincide</b> con el cambio de conducta → asesor y capacitador colaboran de forma integrada.</p>
        `)}

        <div class="callout tip">
          <div class="callout-title">✅ Para el parcial (lo que más toman)</div>
          <ul style="margin:.3rem 0">
            <li>Aprendizaje organizacional = <b>colectivo</b>; el individual es necesario pero no suficiente.</li>
            <li>Triple ciclo = <b>desarrollo</b> (toca los principios/identidad).</li>
            <li><b>Insights</b> = lo que se sabe y entiende <b>sobre las reglas</b>.</li>
            <li>Aprender a aprender = <b>metaaprendizaje</b>; prerrequisitos: autoconocimiento + potencial de aprendizaje.</li>
            <li>En las prescriptivas los sistemas son de <b>control</b> (no de apoyo) → la afirmación inversa es Falsa.</li>
            <li>La transición requiere <b>liderazgo</b>, no solo gerenciamiento.</li>
            <li>Paradoja real: aprender <b>individual</b> ≠ aprender <b>colectivo</b> (los enunciados invertidos son Falsos).</li>
            <li>Fundador = "gran decisión para comercializar un producto/servicio". Anteproyecto/road map = proceso de pensamiento o reorganización a futuro.</li>
          </ul>
        </div>
      `;
      GTH.flashcards(el.querySelector("#oqa-fc"), [
        { front: "Insights", back: "Lo que se sabe y se entiende; explican y fundamentan las reglas." },
        { front: "Metaaprendizaje", back: "Aprender a aprender. Requiere autoconocimiento y potencial de aprendizaje." },
        { front: "Triple ciclo", back: "Cambia los principios/identidad → produce desarrollo. Se mide en años." },
        { front: "Élite", back: "Personas que comparten valores, creencias y visión del fundador; transmiten la cultura." },
        { front: "Anteproyecto / road map", back: "Proceso de pensamiento o reorganización que se desea a futuro (lo usa la org. que desaprende)." },
        { front: "Modelo viajero", back: "Elige una dirección y arranca: el cambio de conducta conduce al pensamiento (org. que aprende)." },
        { front: "Fundador", back: "Persona con gran decisión para comercializar un producto o servicio." },
        { front: "Aprendizaje organizacional", back: "Es colectivo. El aprendizaje individual es necesario pero no suficiente." },
      ]);
      el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => GTH.go(c.dataset.go)));
    },
  });
})();
