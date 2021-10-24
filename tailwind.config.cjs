const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		gradientColorStops: theme => ({
			...theme('colors'),
			'from': 'rgba(84, 58, 183, 1)',
			'to': 'rgba(0, 172, 193, 1)',
		}),
		extend: {
			zIndex: {
				'-10': '-10',
			},
			spacing: {
				'huge': '36rem'
			},
		}
	},

	plugins: []
};

module.exports = config;
