/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				'screen': '75vh',  // Define screen height como 100% del viewport height (vh)
			  },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        surface: '#0e0e10',
        'on-surface': '#e6e4ec',
        primary: '#aac7ff',
        'accent-cyan': '#2faad5',
        'accent-green': '#64fd7d',
      },
		},
	},
	plugins: [
		require('daisyui'),
    require('@tailwindcss/typography'),
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
