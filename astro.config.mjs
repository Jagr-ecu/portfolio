import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN PARA GITHUB PAGES
//
// Si publicas en un repo normal (ej. github.com/Jagr-ecu/Portfolio):
//   site: 'https://Jagr-ecu.github.io'
//   base: '/Portfolio'   ← el nombre EXACTO del repositorio
//
// Si el repo se llama Jagr-ecu.github.io (sitio de usuario):
//   site: 'https://Jagr-ecu.github.io'
//   base: '/'
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://Jagr-ecu.github.io',
  base: '/portfolio',
});
