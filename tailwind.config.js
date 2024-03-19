/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: [ "./index.html" ,"./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				open: ["Open Sans", "sans-serif"],
				dela: ["Dela Gothic One", "sans-serif"],  
			},
		},
	},
	plugins: [],
}