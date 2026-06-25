# Resumen interactivo de Gestión del Talento Humano (UTN.BA)

Una web **interactiva** para estudiar el **2º parcial** de Gestión del Talento Humano: el resumen de
todos los temas, las **preguntas de parcial resueltas** y un **modelo de parcial** para practicar.

> Sin instalación: se abre con doble clic en `index.html`. No necesita servidor ni build.

## ✨ Qué incluye

- **Personas & cultura:** Organizaciones saludables (discriminación y ética empresarial), Empresas
  conscientes (Kofman), RSE & sustentabilidad y Cambio.
- **Herramientas estratégicas:** Empowerment, Reingeniería, Benchmarking, Outsourcing y Outplacement
  (con casos reales: Mercado Libre, SanCor, Garbarino, Lemon Cash).
- **Talento & futuro:** Transformación digital, Upskilling/Reskilling, Learnability y Entrepreneur.
- **Bienestar & gestión:** Fatiga/Estrés/Burnout, Estructura de la Gerencia de RRHH y Reuniones efectivas.
- **Preguntas de parcial** reales (filtrables por tema, con la respuesta correcta marcada) y un
  **modelo de parcial** con preguntas de práctica en el estilo del examen.

## 🧩 Piezas interactivas

- **Cuestionario** con corrección al instante: Verdadero/Falso, opción única, selección múltiple,
  preguntas a desarrollar y de unir con flechas.
- **Filtro por tema** y contador de aciertos para practicar enfocado.

## 🚀 Cómo usar

1. Cloná o descargá el repo.
2. Abrí `index.html` en el navegador (o serví la carpeta con `python3 -m http.server 8000`).

## 🛠️ Tecnología

HTML + CSS + JavaScript vanilla (sin frameworks ni build). Estructura:

```
index.html
styles.css
js/
  core.js          · registro de secciones + helpers de DOM
  app.js           · navegación y routing
  widgets/         · cuestionario interactivo
  content/         · una sección por bloque de temas + parcial + modelo de parcial
```

## 📄 Licencia

[MIT](LICENSE) — podés usar, modificar y compartir libremente.

## 🙌 Créditos

- Material de base: cátedra de **Gestión del Talento Humano**, **UTN.BA** (los PDFs y PPT de la cátedra
  no se incluyen en el repo por derechos de autor).

## 👤 Autor

**ejdavenheimer**

- GitHub: https://github.com/ejdavenheimer
- LinkedIn: https://www.linkedin.com/in/ejdavenheimer/
- Discord: https://discord.gg/7S3uZXYrE7
- Plan de estudio UTN: https://planutn.dhem.tech/

📦 **Código de este proyecto:** https://github.com/ejdavenheimer/gth
