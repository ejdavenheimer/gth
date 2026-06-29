(function () {
  "use strict";
  const GTH = window.GTH;

  function vf(c) { return [{ t: "Verdadero", ok: c === "V" }, { t: "Falso", ok: c === "F" }]; }

  /* ===================== BANCO DE PREGUNTAS (reales, por tema) ===================== */
  const BANCO = [
    { n: 1, topic: "Marca Personal", type: "vf",
      q: "La marca personal es un concepto del entorno 1.0.", options: vf("F"),
      explain: "La marca personal nace en la cultura <b>2.0</b> (web colaborativa, redes): consiste en considerarse a uno mismo como una marca." },
    { n: 2, topic: "Carta de Presentación", type: "open",
      q: "Desarrolle las características que debería cumplir toda carta de presentación.",
      answer: "Tener 3 párrafos: 1) referirse al aviso; 2) situación actual; 3) despedida.",
      explain: "La carta acompaña al CV y no lo repite: busca captar la atención y conseguir la entrevista." },
    { n: 3, topic: "La Organización que Aprende", type: "vf",
      q: "Una de las paradojas que presenta el autor es: aprender en forma grupal no significa haber aprendido en forma individual.",
      options: vf("F"),
      explain: "Está invertida. La 1ª paradoja real es: aprender en forma <b>individual</b> no significa haber aprendido en forma <b>colectiva</b>." },
    { n: 4, topic: "Currículum Vitae", type: "mc",
      q: "¿Cómo sugerimos que se llame el archivo en el que vamos a enviar el CV?",
      options: [
        { t: "CV_Nombre_Apellido_v2.doc", ok: false },
        { t: "CV_Nombre_Apellido.pdf", ok: true },
        { t: "CV_Nombre_Apellido.doc", ok: false },
        { t: "CV.pdf", ok: false },
        { t: "Mi CV 2020.pdf", ok: false },
      ],
      explain: "Nombre claro y profesional, en PDF (no editable), sin “v2” ni nombres genéricos como “CV.pdf”." },
    { n: 5, topic: "La Organización que Aprende", type: "fill",
      q: "Dentro de una organización que aprende, el aprendizaje se orienta hacia el desarrollo del potencial para aprender a aprender. Este concepto se llama:",
      answer: "Metaaprendizaje", accept: ["metaaprendizaje", "metaprendizaje"],
      explain: "Metaaprendizaje = aprender a aprender. Sus prerrequisitos son el autoconocimiento y el potencial de aprendizaje." },
    { n: 6, topic: "Empresas 2.0", type: "vf",
      q: "La Web 1.0 es el nuevo escenario para la búsqueda de empleo y para los profesionales que quieren demostrar lo que valen.",
      options: vf("F"), explain: "El nuevo escenario es la <b>Web 2.0</b> (colaborativa, redes): hacé que te encuentren." },
    { n: 7, topic: "La Organización que Aprende", type: "vf",
      q: "La estructura de una organización familiar (emprendedora) es simple y centralizada.",
      options: vf("V"),
      explain: "La organización emprendedora es joven y pequeña: estructura <b>simple y centralizada</b> y cultura de poder en torno al fundador." },
    { n: 8, topic: "La Organización que Aprende", type: "multi",
      q: "Seleccione la definición de Organización (sentido institucional). (Una o más de una)",
      options: [
        { t: "Nombre que se le da a las instituciones educativas", ok: false },
        { t: "Asociación específica de personas que trabajan juntas", ok: true },
        { t: "Involucra reglas, insights, principios", ok: true },
      ],
      explain: "Sentido institucional = asociación de personas; se rige por reglas, insights y principios (≠ sentido instrumental: estrategia, estructura, sistemas, cultura)." },
    { n: 9, topic: "La Organización que Aprende", type: "mc",
      q: "Seleccione la opción correcta que responde a la definición de Insights.",
      options: [
        { t: "Todas las opciones", ok: false },
        { t: "No existe definición para ese concepto", ok: false },
        { t: "Representan lo que se sabe y se entiende sobre esas reglas", ok: true },
        { t: "Representan lo que se sabe y se entiende sobre un tema", ok: false },
      ],
      explain: "Los insights explican y fundamentan las <b>reglas</b>; por eso “sobre esas reglas” (no “sobre un tema”)." },
    { n: 10, topic: "Currículum Vitae", type: "vf",
      q: "Aunque tengas una gran experiencia, tratá de que tu CV esté contenido en 2 carillas.",
      options: vf("F"),
      explain: "⚠️ Fuentes contradictorias: el <b>Manual</b> dice “máximo dos carillas” (→ Verdadero), pero el <b>PPT</b> usa “una página” y la planilla la marcó <b>Falso</b>. Confirmá con tu cátedra." },
    { n: 11, topic: "La Organización que Aprende", type: "vf",
      q: "El aprendizaje en triple ciclo produce como resultado un desarrollo.", options: vf("V"),
      explain: "El triple ciclo discute los <b>principios/identidad</b> de la organización → produce desarrollo (se mide en años)." },
    { n: 12, topic: "La Organización que Aprende", type: "vf",
      q: "La transición a una organización que aprende se logra a través del gerenciamiento únicamente.",
      options: vf("F"),
      explain: "Requiere <b>liderazgo</b> (influencia directa sobre las personas), no solo gerenciamiento (estructura/sistemas)." },
    { n: 13, topic: "Empresas 2.0", type: "vf",
      q: "Es correcto decir que el Empleo 2.0 no es buscar oportunidades, es hacer que te encuentren.",
      options: vf("V"),
      explain: "El Empleo 2.0 se basa en posicionamiento y reputación profesional: que los reclutadores te encuentren." },
    { n: 14, topic: "La Organización que Aprende", type: "vf",
      q: "En las organizaciones prescriptivas los sistemas son de apoyo a los pensadores y hacedores.",
      options: vf("F"),
      explain: "En las prescriptivas (burocracias) los sistemas son de <b>control</b>. El apoyo a pensadores/hacedores es propio de la que aprende." },
    { n: 15, topic: "Empresas 2.0", type: "mc",
      q: "¿Cuáles son las bases de la cultura 2.0?",
      options: [
        { t: "Conocimiento, Colaboración, Confianza, Corresponsabilidad y Humildad", ok: false },
        { t: "Colaboración, Cooperación, Cambio, Responsabilidad y Humildad", ok: false },
        { t: "Confianza, Cocreación, Compromiso, Colaboración y Humildad", ok: false },
        { t: "Cooperación, Corresponsabilidad, Compromiso y Lealtad", ok: false },
        { t: "Confianza, Colaboración, Compromiso, Corresponsabilidad y Humildad", ok: true },
      ],
      explain: "Las 5 “C”: Confianza, Colaboración, Compromiso, Corresponsabilidad y Humildad." },
    { n: 16, topic: "La Organización que Aprende", type: "vf",
      q: "El aprendizaje organizacional es un aprendizaje colectivo.", options: vf("V"),
      explain: "La organización aprende cuando el cambio de conducta de un individuo afecta a otros: el individual es necesario pero no suficiente." },
    { n: 17, topic: "Currículum Vitae", type: "mc",
      q: "Currículum Vitae significa:",
      options: [
        { t: "Currícula Vital", ok: false },
        { t: "Hoja de ruta", ok: false },
        { t: "Hoja de vida", ok: true },
      ],
      explain: "“Currículum Vitae” es latín por <b>hoja de vida</b>." },
    { n: 18, topic: "La Organización que Aprende", type: "vf",
      q: "El aprender a aprender tiene como prerrequisitos el autoconocimiento y el potencial de aprendizaje.",
      options: vf("V"),
      explain: "El metaaprendizaje se apoya en el autoconocimiento (saber qué puedo, qué sé y quién soy) y el potencial de aprendizaje." },
    { n: 19, topic: "Marca Personal", type: "vf",
      q: "La marca personal es un concepto de desarrollo personal moderno que consiste en considerarse a uno mismo como una marca.",
      options: vf("V"),
      explain: "Es la definición exacta: pensarte como una marca para diferenciarte profesionalmente." },
    { n: 20, topic: "Entrevista Laboral", type: "vf",
      q: "Antes de una entrevista laboral, es importante investigar sobre la empresa que nos va a entrevistar.",
      options: vf("V"),
      explain: "Investigar la empresa demuestra interés y te permite adecuar tus respuestas (una de las claves de la entrevista)." },
    { n: 21, topic: "La Organización que Aprende", type: "mc",
      q: "Referente al concepto del término Aprendizaje Organizacional:",
      options: [
        { t: "Es solo un aprendizaje individual", ok: false },
        { t: "Es un término abstracto", ok: false },
        { t: "Ninguna de las opciones anteriores", ok: false },
        { t: "Es un aprendizaje colectivo", ok: true },
      ],
      explain: "Es colectivo: cambia el comportamiento organizacional (los patrones colectivos de conducta)." },
    { n: 22, topic: "Entrevista Laboral", type: "mc",
      q: "¿Cuáles son tips para una entrevista laboral exitosa?",
      options: [
        { t: "Interrumpir al entrevistador siempre que tengas alguna duda", ok: false },
        { t: "Llevar la documentación que te hayan solicitado y/o creas de utilidad", ok: true },
        { t: "Llegar media hora antes de lo acordado a la entrevista", ok: false },
        { t: "Decir que querés renunciar a tu actual trabajo porque te llevás mal con tu jefe", ok: false },
      ],
      explain: "Llevá la documentación solicitada/útil; no interrumpas, no llegues con demasiada anticipación ni hables mal de empleos anteriores." },
    { n: 23, topic: "La Organización que Aprende", type: "mc",
      q: "La educación como intervenciones en el ciclo de aprendizaje de Kolb:",
      options: [
        { t: "Ayudar a hacer = capacitación · Ayudar a pensar = educar (restringido) · Ayudar a reflexionar = formación · Ayudar a decidir = consultoría", ok: true },
        { t: "Ayudar a hacer = educar (restringido) · Ayudar a pensar = capacitación · Ayudar a reflexionar = formación · Ayudar a decidir = consultoría", ok: false },
        { t: "Ayudar a hacer = capacitación · Ayudar a pensar = educar · Ayudar a reflexionar = consultoría · Ayudar a decidir = formación", ok: false },
      ],
      explain: "Hacer→Capacitación, Pensar→Educación (restringido), Reflexionar→Formación, Decidir→Consultoría." },
  ];

  /* ===================== EXAMEN 1 (real, 10) ===================== */
  const EXAMEN_1 = [
    { n: 1, topic: "Marca Personal", type: "vflist",
      q: "Marca personal — indique Verdadero o Falso:",
      items: [
        { label: "a", t: "Consiste en pensarse como una marca.", ok: "V" },
        { label: "b", t: "Se trata de ponerle nombre a una cosa.", ok: "F" },
        { label: "c", t: "No utiliza las redes sociales.", ok: "F" },
      ],
      explain: "Marca personal = considerarse uno mismo como una marca (entorno 2.0), y se apoya fuertemente en redes sociales." },
    { n: 2, topic: "Gestión del Talento", type: "vf",
      q: "La gestión del talento es el proceso de desarrollar, incorporar y retener recursos humanos a la fuerza laboral.",
      options: vf("V"), explain: "Es la definición exacta; busca destacar a las personas de alto potencial." },
    { n: 3, topic: "La Organización que Aprende", type: "fill",
      q: "Complete: ¿cómo llama el autor al conjunto de personas que acompañan al fundador desde el comienzo y transmiten a los nuevos la cultura y los valores de la empresa?",
      answer: "Élite", accept: ["elite", "élite", "la elite", "la élite"],
      explain: "Cap. 1: al crecer la empresa, los más veteranos (los que estaban con el fundador y comparten su visión) se convierten en la <b>élite</b>: tienen más poder, determinan la identidad y transmiten la cultura." },
    { n: 4, topic: "La Organización que Aprende", type: "vflist",
      q: "Indique Verdadero o Falso:",
      items: [
        { label: "a", t: "Educación en sentido restringido = adquisición de conocimientos y comprensión.", ok: "V" },
        { label: "b", t: "Formación = desarrollo de actitudes específicas.", ok: "V" },
      ],
      explain: "Educación (restringido) = ayudar a pensar; Formación = ayudar a reflexionar (actitudes)." },
    { n: 5, topic: "Comunicación", type: "vflist",
      q: "Comunicación efectiva — indique Verdadero o Falso:",
      items: [
        { label: "a", t: "Lo correcto es interpretar un solo gesto de la comunicación no verbal.", ok: "F" },
        { label: "b", t: "Para conclusiones acertadas, observar los gestos en su conjunto.", ok: "V" },
      ],
      explain: "Los gestos se interpretan <b>en conjunto</b> (y son una cuestión de cultura); uno aislado no concluye nada." },
    { n: 6, topic: "La Organización que Aprende", type: "fill",
      q: "Complete las frases:",
      blanks: [
        { t: "a) El aprendizaje es un…", answer: "cambio de conducta", accept: ["un cambio de conducta", "cambio de conducta", "cambio de comportamiento"] },
        { t: "b) La remuneración pretendida en una entrevista sugerimos que sea…", answer: "bruta", accept: ["bruta"] },
      ],
      explain: "Aprender es un cambio de conducta (motor de la transformación). La remuneración pretendida se informa en bruto (y en la carta, no en el CV)." },
    { n: 7, topic: "La Era del Capital Humano", type: "vf",
      q: "Los tres criterios para el éxito según Claus Möller son: compromiso, relaciones humanas y confianza.",
      options: vf("F"), explain: "Son <b>Productividad, Relaciones humanas y Calidad</b> (prioridad: empleados → clientes → ganancias)." },
    { n: 8, topic: "La Organización que Aprende", type: "vflist",
      q: "Organización que aprende — indique Verdadero o Falso:",
      items: [
        { label: "a", t: "El aprendizaje organizacional es un aprendizaje colectivo.", ok: "V" },
        { label: "b", t: "Si no hay un aprendizaje individual no puede haber uno organizacional.", ok: "V" },
      ],
      explain: "Es colectivo y el aprendizaje individual es condición <b>necesaria pero no suficiente</b>." },
    { n: 9, topic: "Gestión del Talento", type: "mc",
      q: "La frase “Voy a comenzar un curso de pintura, por lo tanto debería salir todos los jueves a las 16 hs.” ¿a qué generación identifica?",
      options: [
        { t: "Generación X", ok: false },
        { t: "Baby Boomers", ok: false },
        { t: "Generación Y", ok: true },
      ],
      explain: "La Generación Y (Millennials) prioriza el equilibrio vida-trabajo y sus actividades personales; no permite que el trabajo arruine sus planes." },
    { n: 10, topic: "La Organización que Aprende", type: "open",
      q: "Desarrolle el ciclo de Kolb, sus características y la educación como intervención en el ciclo de Kolb.",
      answer: "Kolb: proceso cíclico e interminable de 4 etapas: Hacer → Reflexionar → Pensar → Decidir → (Re)hacer. La educación interviene: ayudar a hacer = Capacitación; ayudar a pensar = Educación (restringido); ayudar a reflexionar = Formación; ayudar a decidir = Consultoría." },
  ];

  /* ===================== EXAMEN 2 (real, otro curso) ===================== */
  const EXAMEN_2 = [
    { n: 1, topic: "Comunicación", type: "vf",
      q: "Los gestos son parte de las costumbres (una cuestión de cultura).",
      options: vf("V"), explain: "Los gestos se aprenden inconscientemente del entorno: son una cuestión de cultura." },
    { n: 2, topic: "La Era del Capital Humano", type: "open",
      q: "Desarrolle los tres criterios para el éxito de una organización (Möller).",
      answer: "Productividad, Relaciones humanas y Calidad. Deben darse en los 3 niveles (gerencial, equipo e individual). Prioridad: empleados → clientes → ganancias.",
      explain: "Empleados felices (relaciones humanas) → clientes felices (calidad) → resultado económico (productividad)." },
    { n: 3, topic: "Carta de Presentación", type: "open",
      q: "Desarrolle: ¿qué es una carta de presentación, cómo está formada y qué pasos tiene?",
      answer: "Acompaña al CV; capta la atención, te diferencia y busca la entrevista (no repite el CV). 3 párrafos: 1) introducción (referirse al aviso); 2) cuerpo (situación actual); 3) cierre/despedida (disponibilidad y remuneración pretendida)." },
    { n: 4, topic: "Gestión del Talento", type: "mc",
      q: "Una persona de 55 años entrevista a una de 20 y pico. ¿Qué debe ofrecerle para que se quede en la empresa?",
      options: [
        { t: "Cuidado del medio ambiente y home office", ok: true },
        { t: "Trabajar los domingos", ok: false },
        { t: "Horarios rígidos de 9 a 18 hs y presencialidad total", ok: false },
        { t: "Un puesto sin posibilidad de aprendizaje ni desarrollo", ok: false },
      ],
      explain: "Las generaciones Y/Z valoran la sustentabilidad, la flexibilidad (home office) y el sentido del trabajo." },
    { n: 5, topic: "Marca Personal", type: "vf",
      q: "La marca personal consiste en considerarse a uno mismo como una marca.",
      options: vf("V"), explain: "Definición exacta de marca personal (entorno 2.0)." },
    { n: 6, topic: "Marca Personal", type: "vf",
      q: "La marca personal es un concepto del entorno 1.0.",
      options: vf("F"), explain: "Es del entorno <b>2.0</b>." },
    { n: 7, topic: "Currículum Vitae", type: "vf",
      q: "En el CV se debe indicar la remuneración pretendida y la disponibilidad horaria.",
      options: vf("F"), explain: "Eso va en la <b>carta de presentación</b>, no en el CV." },
    { n: 8, topic: "Presentaciones Efectivas", type: "vf",
      q: "Según el gráfico de una buena presentación, su estructura tiene 3 elementos.",
      options: vf("F"), explain: "Son <b>4</b>: Preparación, Apertura, Desarrollo y Resumen/Cierre." },
    { n: 9, topic: "Reuniones efectivas", type: "vf",
      q: "Las reuniones diarias sirven para solucionar los problemas.",
      options: vf("F"), explain: "Las diarias sirven para <b>identificar</b> y destrabar problemas, no para resolverlos." },
  ];

  /* ===================== MODELO 1 (generado, 10) ===================== */
  const MODELO_1 = [
    { n: 1, topic: "Conceptos", type: "match",
      q: "Una cada concepto con su definición.",
      pairs: [
        { l: "Currículum Vitae", r: "Hoja de vida; herramienta para buscar trabajo." },
        { l: "Marca personal", r: "Considerarse a uno mismo como una marca (2.0)." },
        { l: "Employeeship", r: "Poner al empleado por sobre todo; se siente dueño." },
        { l: "Insights", r: "Lo que se sabe y entiende sobre las reglas." },
      ],
      explain: "Repasá: CV = hoja de vida; marca personal = pensarse como marca; employeeship (Möller); insights = nivel que explica las reglas." },
    { n: 2, topic: "Carta de Presentación", type: "vf",
      q: "La carta de presentación debe repetir la información del CV.",
      options: vf("F"), explain: "No repite el CV: refleja interés, comunicación y personalidad." },
    { n: 3, topic: "Empresas 2.0", type: "vf",
      q: "El Empleo 2.0 no es buscar oportunidades, es hacer que te encuentren.",
      options: vf("V"), explain: "Se basa en posicionamiento y reputación digital." },
    { n: 4, topic: "La Organización que Aprende", type: "fill",
      q: "Complete: el proceso de “aprender a aprender” se denomina ______.",
      answer: "Metaaprendizaje", accept: ["metaaprendizaje", "metaprendizaje"],
      explain: "Requiere autoconocimiento y potencial de aprendizaje." },
    { n: 5, topic: "Currículum Vitae", type: "mc",
      q: "Currículum Vitae significa:",
      options: [{ t: "Hoja de ruta", ok: false }, { t: "Hoja de vida", ok: true }, { t: "Currícula vital", ok: false }],
      explain: "Es latín por “hoja de vida”." },
    { n: 6, topic: "Marca Personal", type: "vflist",
      q: "Marca personal — Verdadero o Falso:",
      items: [
        { label: "a", t: "Consiste en pensarse como una marca.", ok: "V" },
        { label: "b", t: "No utiliza las redes sociales.", ok: "F" },
      ],
      explain: "Se apoya justamente en las redes (LinkedIn, blog, etc.)." },
    { n: 7, topic: "Entrevista Laboral", type: "vf",
      q: "Antes de una entrevista conviene investigar a la empresa que te va a entrevistar.",
      options: vf("V"), explain: "Demuestra interés y te permite adecuar respuestas." },
    { n: 8, topic: "Empresas 2.0", type: "fill",
      q: "Complete: las bases de la cultura 2.0 son Confianza, Colaboración, Compromiso, ______ y Humildad.",
      answer: "Corresponsabilidad", accept: ["corresponsabilidad"],
      explain: "Las 5 “C” de la cultura 2.0." },
    { n: 9, topic: "Gestión del Talento", type: "mc",
      q: "“Mi compromiso no se mide por horas silla sino por objetivos.” ¿A qué generación corresponde?",
      options: [{ t: "Baby Boomers", ok: false }, { t: "Generación X", ok: true }, { t: "Tradicionalistas", ok: false }],
      explain: "La Generación X exige resultados/objetivos, no presencia física." },
    { n: 10, topic: "Presentaciones Efectivas", type: "open",
      q: "Desarrolle las 4 etapas de una presentación efectiva.",
      answer: "Preparación (objetivo, audiencia, estructura, ensayo), Apertura (captar la atención), Desarrollo (idea principal + secundarias + evidencia; 80% del tiempo) y Resumen y Cierre (síntesis + llamado a la acción)." },
  ];

  /* ===================== MODELO 2 (generado, 10) ===================== */
  const MODELO_2 = [
    { n: 1, topic: "La Organización que Aprende", type: "match",
      q: "Una cada intervención educativa con su etapa del ciclo de Kolb.",
      pairs: [
        { l: "Capacitación", r: "Ayudar a hacer." },
        { l: "Educación (restringido)", r: "Ayudar a pensar." },
        { l: "Formación", r: "Ayudar a reflexionar." },
        { l: "Consultoría", r: "Ayudar a decidir." },
      ],
      explain: "La educación interviene cada etapa del ciclo Hacer → Pensar → Reflexionar → Decidir." },
    { n: 2, topic: "Comunicación", type: "vf",
      q: "Los gestos deben interpretarse de forma aislada, uno por uno.",
      options: vf("F"), explain: "Se interpretan <b>en conjunto</b>; además son una cuestión de cultura." },
    { n: 3, topic: "La Organización que Aprende", type: "vf",
      q: "En las organizaciones prescriptivas (burocracias) los sistemas son de control.",
      options: vf("V"), explain: "Funcionan como máquinas: los sistemas controlan, no apoyan." },
    { n: 4, topic: "La Organización que Aprende", type: "fill",
      q: "Complete: el conjunto de veteranos que comparten los valores y la visión del fundador se llama ______.",
      answer: "Élite", accept: ["elite", "élite"],
      explain: "La élite determina la identidad de la organización y transmite la cultura." },
    { n: 5, topic: "La Organización que Aprende", type: "vflist",
      q: "Indique Verdadero o Falso:",
      items: [
        { label: "a", t: "Educación en sentido restringido = conocimientos y comprensión.", ok: "V" },
        { label: "b", t: "Capacitación = adquisición de habilidades.", ok: "V" },
      ],
      explain: "Educación = ayudar a pensar; Capacitación = ayudar a hacer (habilidades)." },
    { n: 6, topic: "La Era del Capital Humano", type: "mc",
      q: "Los tres criterios de éxito según Möller son:",
      options: [
        { t: "Compromiso, relaciones humanas y confianza", ok: false },
        { t: "Productividad, relaciones humanas y calidad", ok: true },
        { t: "Calidad, costos y tiempos", ok: false },
      ],
      explain: "Productividad, Relaciones humanas y Calidad, en los 3 niveles (gerencial, equipo, individual)." },
    { n: 7, topic: "Comunicación", type: "vf",
      q: "Influir y manipular son lo mismo.",
      options: vf("F"), explain: "Influir es voluntario; manipular afecta la libre elección (connotación negativa)." },
    { n: 8, topic: "La Organización que Aprende", type: "fill",
      q: "Complete: el aprendizaje es un ______.",
      answer: "cambio de conducta", accept: ["cambio de conducta", "un cambio de conducta", "cambio de comportamiento"],
      explain: "Es el motor de los procesos de transformación." },
    { n: 9, topic: "Comunicación", type: "mc",
      q: "“Una persona consigue lo que se proponía por la creencia de que puede lograrlo.” Este efecto se llama:",
      options: [{ t: "Efecto Pigmalión", ok: true }, { t: "Efecto dominó", ok: false }, { t: "Efecto halo", ok: false }],
      explain: "Efecto Pigmalión = profecía autocumplida: las expectativas influyen en el rendimiento." },
    { n: 10, topic: "La Era del Capital Humano", type: "open",
      q: "Desarrolle qué es el Employeeship y nombre los 3 criterios de éxito de Möller.",
      answer: "Employeeship: poner al empleado por sobre todo; el empleado se siente parte, asume responsabilidad por éxitos y fracasos, y hay confianza con los gerentes. Criterios: Productividad, Relaciones humanas y Calidad." },
  ];

  /* ===================== MODELO 3 (generado, 10) ===================== */
  const MODELO_3 = [
    { n: 1, topic: "La Organización que Aprende", type: "match",
      q: "Una cada tipo de organización con su rasgo.",
      pairs: [
        { l: "Emprendedora", r: "Joven y pequeña; estructura simple y centralizada." },
        { l: "Prescriptiva", r: "Burocracia que funciona como una máquina." },
        { l: "Que desaprende", r: "Burocracia en cambio; usa el anteproyecto (road map)." },
        { l: "Que aprende", r: "Aprende y aprende a aprender; se adapta sin perder identidad." },
      ],
      explain: "Los 4 tipos van de la flexible (emprendedora) a la que domina el metaaprendizaje (que aprende)." },
    { n: 2, topic: "Marca Personal", type: "vf",
      q: "La marca personal es un concepto del entorno 2.0.",
      options: vf("V"), explain: "Nace con la web colaborativa y las redes." },
    { n: 3, topic: "Currículum Vitae", type: "vf",
      q: "El CV debe incluir la remuneración pretendida.",
      options: vf("F"), explain: "La remuneración pretendida va en la <b>carta de presentación</b>." },
    { n: 4, topic: "La Organización que Aprende", type: "fill",
      q: "Complete: el fundador es una persona con gran decisión para comercializar un ______.",
      answer: "producto o servicio", accept: ["producto o servicio", "producto/servicio", "producto", "servicio", "producto y servicio"],
      explain: "Cap. 1: la base de toda empresa es su fundador." },
    { n: 5, topic: "La Organización que Aprende", type: "vflist",
      q: "Aprendizaje organizacional — Verdadero o Falso:",
      items: [
        { label: "a", t: "Es un aprendizaje colectivo.", ok: "V" },
        { label: "b", t: "El aprendizaje individual alcanza por sí solo para que la organización aprenda.", ok: "F" },
      ],
      explain: "El individual es necesario pero <b>no suficiente</b>: debe afectar la conducta de otros." },
    { n: 6, topic: "La Organización que Aprende", type: "mc",
      q: "El aprendizaje en triple ciclo:",
      options: [
        { t: "Cambia las reglas (mejoramiento)", ok: false },
        { t: "Cambia los insights (renovación)", ok: false },
        { t: "Cambia los principios/identidad (desarrollo)", ok: true },
      ],
      explain: "Triple ciclo = desarrollo: discute los principios y la identidad; se mide en años." },
    { n: 7, topic: "La Organización que Aprende", type: "vf",
      q: "La transición a una organización que aprende requiere liderazgo, no solo gerenciamiento.",
      options: vf("V"), explain: "El líder debe demostrar con su conducta que también está dispuesto a aprender." },
    { n: 8, topic: "Empresas 2.0", type: "fill",
      q: "Complete: la cultura 2.0 implica pasar de la gestión del control a la gestión de las ______.",
      answer: "personas", accept: ["personas"],
      explain: "La cultura 2.0 es un cambio de mentalidad: del control a las personas." },
    { n: 9, topic: "Presentaciones Efectivas", type: "mc",
      q: "¿Cuál es el orden correcto de una presentación efectiva?",
      options: [
        { t: "Apertura → Preparación → Cierre → Desarrollo", ok: false },
        { t: "Preparación → Apertura → Desarrollo → Resumen y Cierre", ok: true },
        { t: "Desarrollo → Apertura → Preparación → Cierre", ok: false },
      ],
      explain: "Forma de diamante: Preparación → Apertura → Desarrollo (80%) → Resumen y Cierre." },
    { n: 10, topic: "La Organización que Aprende", type: "open",
      q: "Desarrolle los 3 ciclos de aprendizaje organizacional (simple, doble y triple) y qué cambia cada uno.",
      answer: "Simple (mejoramiento): cambia las reglas, pregunta «¿cómo?», ocurre a diario. Doble (renovación): cambia los insights, «¿por qué?», en meses. Triple (desarrollo): cambia los principios/identidad, en años." },
  ];

  const EXAMS = { banco: BANCO, "1": EXAMEN_1, "2": EXAMEN_2, m1: MODELO_1, m2: MODELO_2, m3: MODELO_3 };

  GTH.register({
    id: "p1-practica",
    group: "1er Parcial",
    title: "Preguntas y exámenes",
    tag: "📝",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">1er Parcial · práctica</div>
          <h1>Preguntas y exámenes</h1>
          <p class="lead">Todo para practicar en un solo lugar, interactivo y con corrección y explicación al instante.
          Elegí con las pestañas.</p>
        </div>
        <div class="legend-box">
          <span><b>📘 Preguntas</b>: banco filtrable por tema.</span>
          <span><b>📄 Exámenes</b>: parciales reales tomados.</span>
          <span><b>🧪 Modelos</b>: generados para practicar (10 preguntas).</span>
        </div>
        <div class="tabs">
          <button class="tab active" data-ex="banco">📘 Preguntas</button>
          <button class="tab" data-ex="1">📄 Examen 1</button>
          <button class="tab" data-ex="2">📄 Examen 2</button>
          <button class="tab" data-ex="m1">🧪 Modelo 1</button>
          <button class="tab" data-ex="m2">🧪 Modelo 2</button>
          <button class="tab" data-ex="m3">🧪 Modelo 3</button>
        </div>
        <div id="exMount"></div>
      `;
      const mount = el.querySelector("#exMount");
      const show = (n) => { mount.innerHTML = ""; GTH.quiz(mount, EXAMS[n] || BANCO); };
      el.querySelectorAll(".tab").forEach((t) => {
        t.addEventListener("click", () => {
          el.querySelectorAll(".tab").forEach((x) => x.classList.toggle("active", x === t));
          show(t.dataset.ex);
        });
      });
      show("banco");
    },
  });
})();
