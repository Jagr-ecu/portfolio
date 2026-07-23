// ════════════════════════════════════════════════════════════════
//  DATOS DEL PORTFOLIO
//  Todo el contenido vive aquí. Edita este archivo para actualizar
//  el sitio: no necesitas tocar el HTML ni los estilos.
// ════════════════════════════════════════════════════════════════

export const perfil = {
  nombre: 'Jubert Adrian Goya Romero',
  rol: 'Desarrollador de Software Backend & Full-Stack',
  subtitulo: 'Microservicios · APIs RESTful · Agentes de IA',
  ubicacion: 'Guayaquil, Ecuador',
  // TODO: confirmar cuál email usar como contacto público
  email: 'jubert1999@gmail.com',
  telefono: '+593 991118803',
  resumen:
    'Desarrollador de software con 4 años de experiencia construyendo aplicaciones ' +
    'backend y full-stack sobre arquitecturas de microservicios y APIs RESTful. ' +
    'Sólida experiencia con Java/Spring Boot, Python y el ecosistema JavaScript/TypeScript, ' +
    'integración de sistemas y bases de datos relacionales y NoSQL. Enfocado en escribir ' +
    'código limpio, escalable y mantenible bajo buenas prácticas del ciclo de vida del ' +
    'software (SDLC) y principios de seguridad.',
  links: {
    github: 'https://github.com/Jagr-ecu',
    linkedin: 'https://linkedin.com/in/jubert-goya-6b2662228',
    cv: '#', // TODO: enlazar el PDF del CV cuando esté en /public
  },
};

// ─── SKILLS ─────────────────────────────────────────────────────
// nivel: 1 a 5. Ajusta los valores a tu criterio.
// Cada categoría tiene su color de acento.

export type Skill = { nombre: string; nivel: number };
export type CategoriaSkill = {
  titulo: string;
  color: string; // color de acento (CSS)
  icono: string; // emoji o símbolo
  skills: Skill[];
};

export const categoriasSkills: CategoriaSkill[] = [
  {
    titulo: 'Frontend',
    color: '#38bdf8',
    icono: '🎨',
    skills: [
      { nombre: 'TypeScript', nivel: 4 },
      { nombre: 'JavaScript', nivel: 4 },
      { nombre: 'React', nivel: 4 },
      { nombre: 'Angular', nivel: 4 },
      { nombre: 'React Native', nivel: 3 },
      { nombre: 'HTML & CSS / Sass', nivel: 4 },
    ],
  },
  {
    titulo: 'Backend',
    color: '#34d399',
    icono: '⚙️',
    skills: [
      { nombre: 'Java / Spring Boot', nivel: 5 },
      { nombre: 'APIs RESTful', nivel: 5 },
      { nombre: 'Microservicios', nivel: 4 },
      { nombre: 'Node.js (Express)', nivel: 4 },
      { nombre: 'C# / .NET', nivel: 3 },
      { nombre: 'PHP', nivel: 3 },
    ],
  },
  {
    titulo: 'Data & IA',
    color: '#fbbf24',
    icono: '🤖',
    skills: [
      { nombre: 'Python', nivel: 4 },
      { nombre: 'LangGraph', nivel: 4 },
      { nombre: 'Agentes de IA / MCP', nivel: 4 },
      { nombre: 'Integración de sistemas', nivel: 4 },
    ],
  },
  {
    titulo: 'Bases de datos',
    color: '#a78bfa',
    icono: '🗄️',
    skills: [
      { nombre: 'SQL Server', nivel: 4 },
      { nombre: 'PL/SQL', nivel: 4 },
      { nombre: 'MongoDB', nivel: 3 },
    ],
  },
  {
    titulo: 'DevOps & Herramientas',
    color: '#f472b6',
    icono: '🚀',
    skills: [
      { nombre: 'Git / Control de versiones', nivel: 5 },
      { nombre: 'Docker', nivel: 4 },
      { nombre: 'CI/CD', nivel: 3 },
      { nombre: 'Kubernetes', nivel: 3 },
    ],
  },
];

// ─── PROYECTOS ──────────────────────────────────────────────────
// Las imágenes se agregarán después. `imagenes` queda vacío por ahora
// y se muestra un placeholder. Cuando tengas capturas, ponlas en
// /public/proyectos/<slug>/ y añade las rutas al array.

export type Proyecto = {
  slug: string;
  titulo: string;
  descripcionCorta: string;
  descripcion: string;
  destacados: string[];
  tecnologias: string[];
  tipo: string; // etiqueta visible (ej. "Full-Stack", "Frontend + Serverless")
  repo: string;
  demo?: string; // solo si tiene demo en vivo
  imagenes: string[]; // vacío = placeholder
};

export const proyectos: Proyecto[] = [
  {
    slug: 'reactivities',
    titulo: 'Reactivities',
    tipo: 'Full-Stack · .NET + React',
    descripcionCorta:
      'App social de gestión de actividades con chat en tiempo real, perfiles y seguidores.',
    descripcion:
      'Aplicación full-stack para crear y gestionar actividades sociales: asistencia a ' +
      'eventos, perfiles de usuario, sistema de seguidores, subida de fotos, comentarios ' +
      'y chat en tiempo real. Backend en .NET 5 con Clean Architecture y patrón CQRS.',
    destacados: [
      'Clean Architecture con 5 capas separadas (API, Application, Domain, Persistence, Infrastructure)',
      'Patrón CQRS implementado con MediatR',
      'Chat en tiempo real con SignalR (WebSockets)',
      'Autenticación JWT con ASP.NET Identity',
      'Subida de imágenes a Cloudinary',
    ],
    tecnologias: [
      'C#',
      '.NET 5',
      'Entity Framework',
      'MediatR',
      'SignalR',
      'React',
      'TypeScript',
      'MobX',
    ],
    repo: 'https://github.com/Jagr-ecu',
    imagenes: [],
  },
  {
    slug: 'clothes-store',
    titulo: 'Clothes Store',
    tipo: 'Frontend + Serverless · E-commerce',
    descripcionCorta:
      'Tienda de ropa online con catálogo, carrito, autenticación y pagos reales con Stripe.',
    descripcion:
      'E-commerce completo de ropa: catálogo por categorías, carrito de compras persistente, ' +
      'autenticación de usuarios y pagos reales con Stripe. SPA en React + TypeScript con ' +
      'gestión de estado avanzada mediante Redux-Saga y backend serverless en Netlify.',
    destacados: [
      'Gestión de estado con Redux + Redux-Saga + Redux-Persist + Reselect',
      'Autenticación con Firebase (email y Google)',
      'Pagos con Stripe vía función serverless de Netlify',
      'PWA instalable y con soporte offline (Workbox)',
      'UI con styled-components y Sass',
    ],
    tecnologias: [
      'React',
      'TypeScript',
      'Redux-Saga',
      'Firebase',
      'Stripe',
      'Styled-components',
      'Netlify',
    ],
    repo: 'https://github.com/Jagr-ecu',
    // demo: 'https://...', // TODO: añadir si se redespliega en Netlify
    imagenes: [],
  },
];

// ─── EXPERIENCIA ────────────────────────────────────────────────

export type Experiencia = {
  puesto: string;
  empresa: string;
  periodo: string;
  ubicacion: string;
  logros: string[];
};

export const experiencia: Experiencia[] = [
  {
    puesto: 'Desarrollador de Software',
    empresa: 'Consul.Ti — servicios para Telconet S.A.',
    periodo: 'Dic. 2022 – Actualidad',
    ubicacion: 'Guayaquil, Ecuador',
    logros: [
      'Analicé la migración hacia un nuevo sistema, evaluando compatibilidad tecnológica, riesgos y estrategias de transición.',
      'Construí módulos front-end en Angular y back-end en Spring/Java como parte de la migración a una nueva arquitectura.',
      'Diseñé APIs REST orientadas a recursos que reemplazaron los endpoints por acción del sistema anterior.',
      'Desarrollé agentes de IA y supervisores con Python y LangGraph, aplicando Model Context Protocol (MCP).',
      'Resolví incidencias en producción y brindé soporte a los usuarios, contribuyendo a la estabilidad de las aplicaciones.',
    ],
  },
  {
    puesto: 'Desarrollador de Aplicaciones',
    empresa: 'Viamatica',
    periodo: 'Oct. 2021 – Jun. 2022',
    ubicacion: 'Guayaquil, Ecuador',
    logros: [
      'Desarrollé una app móvil de ventas en React Native (catálogo, carrito, descuentos personalizados, login y dashboards).',
      'Implementé almacenamiento local con react-native-mmkv para acceso offline a un gran volumen de datos.',
      'Colaboré en el desarrollo de SPAs con React para paneles de administración.',
      'Implementé funcionalidades en APIs con Node.js en distintos proyectos.',
    ],
  },
];

// ─── EDUCACIÓN ──────────────────────────────────────────────────

export const educacion = [
  {
    titulo: 'Ingeniería en Sistemas Computacionales',
    institucion: 'Universidad de Guayaquil',
    periodo: 'Graduado: Oct. 2022',
  },
  {
    titulo: 'Bachillerato',
    institucion: 'Unidad Educativa Fiscomisional Domingo Comín',
    periodo: 'Mar. 2017',
  },
];

export const idiomas = [
  { idioma: 'Español', nivel: 'Nativo' },
  { idioma: 'Inglés', nivel: 'Avanzado' },
];
