/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{html,js}"];
export const theme = {
	extend: {
		colors: {
			primary: "#ff6363",
			secondary: {
				100: "#e2e2d5",
				200: "#888883",
			},
		},
		fontFamily: {
			body: ["Nunito"],
		},
	},
};
export const plugins = [];
