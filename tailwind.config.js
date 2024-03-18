/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				'hanson': ['Hanson', 'sans-serif'],
				'neulis': ['Neulis', 'sans-serif'],
				'awesome': ['Awesome', 'sans-serif'],
			},
		},
	},
	plugins: [],
}