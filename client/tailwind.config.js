/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			"2xl": { max: "1536px" },
			xl: { max: "1280px" },
			lg: { max: "992px" },
			md: { max: "768px" },
			sm: { max: "480px" },
		},
		container: {
			padding: "20px",
			center: true,
		},

		extend: {
			colors: {
				lightblack: "#3B3C40",
				lightwhite: "#F2F2F0",
				lightred: "#FF6D6D",
			},
			fontFamily: {
				Montserrat: "Montserrat",
			},

			fontSize: {
				sm: "1rem",
				lg: "3rem",
				base: "1.38rem",
				logo: "2.25rem",
				xl: "8rem",
				decor: "[132px]",
			},
			transitionDelay: {
				DEFAULT: "1000",
			},
			transitionTimingFunction: {
				DEFAULT: "ease-out",
			},
			borderRadius: {
				DEFAULT: "15px",
				btn: "7px",
			},
			borderColor: {
				DEFAULT: "#F2F2F0",
			},
			transitionProperty: {
				drop: "opacity, translate",
				spacing: "margin, padding",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
	],
};
