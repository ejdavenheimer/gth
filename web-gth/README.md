# Gestión del Talento Humano · Resumen 2º Parcial (UTN.BA)

Web interactiva con el resumen de **todos los temas del segundo parcial** de Gestión del Talento Humano, más las **preguntas de parcial resueltas** y un **modelo de parcial** para practicar.

No usa build, servidor ni dependencias: es HTML + CSS + JavaScript plano.

## Cómo levantarla

**Opción 1 — doble clic:** abrí `index.html` con doble clic y se abre en el navegador.

**Opción 2 — servidor local (recomendado):**
```bash
cd web-gth
python3 -m http.server 8000
```
Luego entrá a http://localhost:8000 (para frenar: `Ctrl+C`).

## Contenido

### Temas (resumen)
- **Personas & cultura:** Organizaciones saludables (discriminación y ética), Empresas conscientes, RSE & sustentabilidad, Cambio.
- **Herramientas estratégicas:** Empowerment, Reingeniería, Benchmarking, Outsourcing, Outplacement.
- **Talento & futuro:** Transformación digital, Upskilling/Reskilling, Learnability, Entrepreneur.
- **Bienestar & gestión:** Fatiga/Estrés/Burnout, Estructura de la Gerencia de RRHH, Reuniones efectivas.

### Parcial
- **Preguntas de parcial:** las preguntas reales que corresponden a los temas del 2º parcial, interactivas y filtrables por tema (las de otros parciales se descartaron).
- **Modelo de parcial:** preguntas de práctica elaboradas en el estilo del examen (V/F, opción múltiple, completar, desarrollar y unir). No son las reales.

## Estructura

```
index.html
styles.css
favicon.svg
README.md
js/
  core.js              · registro de secciones + helpers de DOM
  app.js               · navegación, routing por hash y menú mobile
  widgets/quiz.js      · cuestionario interactivo (V/F, opción múltiple, multi, abierta, unir)
  content/
    inicio.js          · portada
    personas.js        · Personas & cultura
    herramientas.js    · Herramientas estratégicas
    futuro.js          · Talento & futuro
    bienestar.js       · Bienestar & gestión
    parcial.js         · preguntas reales del parcial
    simulacro.js       · modelo de parcial (práctica)
```

## Cómo agregar o editar contenido

Cada sección se registra con `GTH.register({ id, group, title, tag, render(el) { ... } })`.
Para sumar un tema nuevo: editá/creá un archivo en `js/content/`, registrá la sección y agregá el `<script>` correspondiente en `index.html` (antes de `js/app.js`).

Para sumar preguntas, editá el array `QUESTIONS` en `parcial.js` o `simulacro.js`. Cada pregunta admite los tipos: `vf`, `mc`, `multi`, `open` y `match`.
