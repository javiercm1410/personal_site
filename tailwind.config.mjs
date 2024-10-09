/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				'screen': '0vh',  // Define screen height como 100% del viewport height (vh)
			  }
		},
	},
	plugins: [
		require('daisyui'),
	],
  daisyui: {
    themes: false,  // Desactiva todos los temas
    darkTheme: "",  // Desactiva el tema oscuro
    base: false,    // No aplica colores base por defecto
    styled: false,  // Desactiva los estilos predefinidos de DaisyUI para componentes
    utils: true,    // Mantiene las clases utilitarias
    prefix: "",     // Sin prefijo en las clases
    logs: false,    // Desactiva los logs en la consola
    themeRoot: ":root",
  },
}
