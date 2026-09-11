/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './supporting-cast.html', './*.js'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		// ...
	],
};
