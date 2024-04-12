/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "3rem",
				md: "4rem",
				lg: "5rem",
			},
		},
		extend: {},
	},
	plugins: [],
};
