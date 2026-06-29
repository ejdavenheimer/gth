(function () {
  "use strict";
  const GTH = window.GTH;

  function vf(correct) {
    return [{ t: "Verdadero", ok: correct === "V" }, { t: "Falso", ok: correct === "F" }];
  }

  // Preguntas MODELO (no son las reales): elaboradas a partir de los temas del 2º
  // parcial y del estilo de examen (V/F, opción múltiple, completar, desarrollar, unir).
  const QUESTIONS = [
    { n: 1, topic: "Learnability", type: "vf",
      q: "Learnability tiene dos dimensiones: la capacidad de continuar aprendiendo y el deseo de conocer por el gusto de conocer.",
      options: vf("V") },

    { n: 2, topic: "Learnability", type: "mc",
      q: "¿Cuál NO es uno de los 3 rasgos para evaluar la learnability?",
      options: [
        { t: "Explorador", ok: false },
        { t: "Motivador", ok: false },
        { t: "Inconformista", ok: false },
        { t: "Conformista", ok: true },
      ] },

    { n: 3, topic: "Transformación Digital", type: "vf",
      q: "Transformación digital es lo mismo que digitalización.",
      options: vf("F"),
      explain: "La digitalización es usar tecnología; la transformación digital es un cambio de cultura/mentalidad." },

    { n: 4, topic: "Transformación Digital", type: "open",
      q: "Complete: la propuesta de valor se apoya en tres atributos: relevante, diferente y ______.",
      answer: "Creíble (coherencia entre lo que se dice y lo que se hace)." },

    { n: 5, topic: "Transformación Digital", type: "mc",
      q: "¿Qué implica ser un equipo TEAL?",
      options: [
        { t: "Autoridad, lealtad y propósito", ok: false },
        { t: "Autogestión, plenitud y propósito evolutivo", ok: true },
        { t: "Autonomía, liderazgo y colaboración", ok: false },
      ] },

    { n: 6, topic: "Upskilling/Reskilling", type: "match",
      q: "Una cada concepto con su definición.",
      pairs: [
        { l: "Upskilling", r: "Aprender nuevas habilidades para mejorar en el MISMO puesto." },
        { l: "Reskilling", r: "Aprender nuevas habilidades para hacer un trabajo DIFERENTE." },
      ] },

    { n: 7, topic: "Upskilling/Reskilling", type: "vf",
      q: "El upskilling busca que el colaborador cambie completamente de profesión o de puesto.",
      options: vf("F"),
      explain: "Eso es reskilling. El upskilling potencia al colaborador en su mismo puesto." },

    { n: 8, topic: "Empowerment", type: "vf",
      q: "En el empowerment se delega la tarea, la autoridad y la toma de decisiones, pero no la responsabilidad sobre el resultado.",
      options: vf("V") },

    { n: 9, topic: "Empowerment", type: "mc",
      q: "Los tres pilares del empowerment son:",
      options: [
        { t: "Relaciones, Disciplina y Compromiso", ok: true },
        { t: "Confianza, Cambio y Cooperación", ok: false },
        { t: "Autonomía, Liderazgo y Propósito", ok: false },
      ] },

    { n: 10, topic: "Reingeniería", type: "vf",
      q: "La reingeniería es un proceso de mejora continua e incremental.",
      options: vf("F"),
      explain: "Es un rediseño RADICAL de procesos, no incremental." },

    { n: 11, topic: "Reingeniería", type: "open",
      q: "Desarrolle: mencione las 5 fases de la reingeniería.",
      answer: "1) Planificación; 2) Aprendizaje interno (situación actual); 3) Aprendizaje externo (nuevas ideas); 4) Rediseño; 5) Implementación." },

    { n: 12, topic: "Benchmarking", type: "vf",
      q: "El benchmarking consiste en copiar exactamente lo que hace la competencia.",
      options: vf("F"),
      explain: "No es copiar: es comparar y aprender de las mejores prácticas para adaptarlas." },

    { n: 13, topic: "Benchmarking", type: "mc",
      q: "La razón principal por la que una empresa aplica benchmarking es:",
      options: [
        { t: "Mejorar la competitividad y rentabilidad", ok: true },
        { t: "Reducir la cantidad de empleados", ok: false },
        { t: "Evitar la transformación digital", ok: false },
      ] },

    { n: 14, topic: "Outsourcing", type: "vf",
      q: "El outsourcing se aplica a las actividades centrales (core business) de la empresa.",
      options: vf("F"),
      explain: "Se terceriza lo NO central, para enfocarse en el core business." },

    { n: 15, topic: "Outsourcing", type: "open",
      q: "Complete: el alcance del outsourcing puede ser total o ______.",
      answer: "Parcial (solo se delegan algunas actividades)." },

    { n: 16, topic: "Outplacement", type: "vf",
      q: "El outplacement es un programa de apoyo a empleados desvinculados para facilitar su reinserción laboral o desarrollo profesional.",
      options: vf("V") },

    { n: 17, topic: "Outplacement", type: "open",
      q: "Nombre los dos enfoques del outplacement.",
      answer: "Tradicional (orientado a conseguir un nuevo empleo en relación de dependencia) y Emprendedor (fomenta el autoempleo / creación de negocios)." },

    { n: 18, topic: "Fatiga/Estrés/Burnout", type: "match",
      q: "Una cada tipo de estrés con su efecto.",
      pairs: [
        { l: "Eustrés", r: "Positivo: impulsa y ayuda a rendir mejor." },
        { l: "Distrés", r: "Negativo: paraliza y afecta la salud." },
      ] },

    { n: 19, topic: "Fatiga/Estrés/Burnout", type: "mc",
      q: "Las tres dimensiones del síndrome de Burnout son:",
      options: [
        { t: "Agotamiento, Escepticismo e Ineficacia", ok: true },
        { t: "Cansancio, Enojo y Pereza", ok: false },
        { t: "Estrés, Fatiga y Sueño", ok: false },
      ] },

    { n: 20, topic: "Estructura de RRHH", type: "vf",
      q: "El HR Business Partner (HRBP) es el nexo entre el negocio y RRHH.",
      options: vf("V") },

    { n: 21, topic: "Estructura de RRHH", type: "open",
      q: "Complete: el área de RRHH que liquida sueldos, vacaciones y licencias es ______.",
      answer: "Nómina." },

    { n: 22, topic: "Reuniones efectivas", type: "vf",
      q: "Una reunión diaria debería durar no más de 15 minutos.",
      options: vf("V") },

    { n: 23, topic: "Cambio", type: "match",
      q: "Una cada factor faltante con el síntoma que provoca.",
      pairs: [
        { l: "Falta Visión", r: "Confusión" },
        { l: "Falta Motivación", r: "Resistencia" },
        { l: "Faltan Habilidades", r: "Ansiedad" },
        { l: "Faltan Recursos", r: "Frustración" },
        { l: "Falta Plan de acción", r: "Sin rumbo" },
      ] },

    { n: 24, topic: "Cambio", type: "vf",
      q: "Si en un proceso de cambio falta el factor “habilidades”, el síntoma típico es la ansiedad.",
      options: vf("V") },

    { n: 25, topic: "Empresas Conscientes", type: "vf",
      q: "Según Kofman, el protagonista asume la responsabilidad de sus decisiones, mientras que la víctima culpa a factores externos.",
      options: vf("V") },

    { n: 26, topic: "Empresas Conscientes", type: "mc",
      q: "Los tres pilares de la Empresa Consciente (Kofman) son:",
      options: [
        { t: "Propósito más allá del beneficio, impacto en todas las partes interesadas y liderazgo auténtico", ok: true },
        { t: "Rentabilidad, marketing y expansión", ok: false },
        { t: "Visión, misión y valores", ok: false },
      ] },

    { n: 27, topic: "Organizaciones Saludables", type: "vf",
      q: "La discriminación positiva da un trato preferencial a grupos desfavorecidos para compensar desigualdades sufridas.",
      options: vf("V") },

    { n: 28, topic: "Organizaciones Saludables", type: "open",
      q: "Nombre los tres subtipos de discriminación injusta.",
      answer: "Directa, Indirecta y Segregación." },

    { n: 29, topic: "RSE & Sustentabilidad", type: "open",
      q: "Complete: la RSE aplica a todas las empresas; la RSC suele referirse a las ______ corporaciones.",
      answer: "Grandes." },

    { n: 30, topic: "RSE & Sustentabilidad", type: "vf",
      q: "La sustentabilidad busca satisfacer las necesidades actuales sin comprometer las de las generaciones futuras.",
      options: vf("V") },

    { n: 31, topic: "Entrepreneur", type: "vf",
      q: "Una startup prioriza el crecimiento rápido y la escalabilidad, generalmente apoyada en innovación tecnológica.",
      options: vf("V") },

    { n: 32, topic: "Entrepreneur", type: "open",
      q: "Desarrolle: mencione los 3 tipos de entrepreneur.",
      answer: "Descubridores de negocios, Creadores de negocios y Gestores de negocios." },
  ];

  // Se expone el array para la sección unificada de práctica del 2do parcial.
  GTH.modelo2Questions = QUESTIONS;
})();
