Coloca aquí las capturas de cada proyecto, en una subcarpeta por proyecto:

  public/proyectos/reactivities/01-listado.webp
  public/proyectos/reactivities/02-chat.gif
  public/proyectos/clothes-store/01-home.webp
  ...

Luego añade las rutas al array `imagenes` de cada proyecto en
src/data/portfolio.ts, por ejemplo:

  imagenes: [
    '/portfolio/proyectos/reactivities/01-listado.webp',
    '/portfolio/proyectos/reactivities/02-chat.gif',
  ]

Nota: la ruta empieza con /portfolio porque es el `base` configurado
en astro.config.mjs. Si cambias el base, cambia también estas rutas
(o usa import.meta.env.BASE_URL).

Formatos recomendados: .webp para capturas estáticas (ligero) y
.gif o .mp4 para flujos animados.
