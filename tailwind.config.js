/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ["./index.html" ,"./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				open: ["Open Sans", "sans-serif"],
				dela: ["Dela Gothic One", "sans-serif"],  
			},
			backgroundImage: {
				navbar: "linear-gradient(to bottom, #FFFFFF26, #FFFFFF80)",
				navbutton: "linear-gradient(to right, #41BD7526, #41BD7580)",
			},
			animation: {
				navbar: "navbar 2s forwards",
			},
			keyframes: {
				navbar: {
					from: {
						"width": "fit-content",
						"height": "fit-content",
						"align-items": "center",
						"border-radius": "100%",
						
					},
					to: {
						"width": "50%",
						"height": "50vh",
						"align-items": "normal",
						"border-radius": "0px 100% 100% 0px",
					},
				}
			}
		},
	},
	plugins: [],
}