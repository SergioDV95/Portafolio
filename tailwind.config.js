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
				navbarOpen: "navbar 1s forwards",
				navbarClose: "navbar 1s reverse forwards",
			},
			keyframes: {
				navbar: {
					from: {
						"width": "63px",
						"height": "63px",
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