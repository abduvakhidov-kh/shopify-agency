/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#f5c345',
				'primary-dark': '#d9ad3f',
			}
		},
	},
	plugins: [],
}
