/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mydarktheme: {
					"primary": "#277297",
					"secondary": "#246688",
					"accent": "#72FFF0",
					"neutral": "#011826",
					"base-100": "#081A28",
					"info": "#1D4E6B",
					"success": "#00101C",
					"warning": "#19435D",
					"error": "#15384F",
				},
				mylighttheme: {
					"primary": "#00C6ED",
					"secondary": "#28FBFF",
					"accent": "#1D4E6B",
					"neutral": "#0BD6C1",
					"base-100": "#C6FFFF",
					"info": "#72FFF0",
					"success": "#F8FFCB",
					"warning": "#FFF0A9",
					"error": "#7385FA",
				}
			},
			// {
			// 	mylighttheme: {
			// 		"primary": "#00C6ED",
			// 		"secondary": "#28FBFF",
			// 		"accent": "#0CF79C",
			// 		"neutral": "#0BD6C1",
			// 		"base-100": "#C6FFFF",
			// 		"info": "#72FFF0",
			// 		"success": "#F8FFCB",
			// 		"warning": "#FFF0A9",
			// 		"error": "#7385FA",
			// 	}
			// },
		],
		// darkTheme: "night",
	}
}
