/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Geist', 'sans-serif'],
				serif: [`'Source Serif 4'`, 'serif'],
				display: [`'Big Shoulders Display'`, 'sans-serif'],
			},
		},
	},
	plugins: [],
}
