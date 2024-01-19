/** @type {import('next').NextConfig} */
module.exports = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true,
			},
			{
				source: '/home',
				destination: '/home/dashboard',
				permanent: true,
			},
			{
				source: '/dashboard',
				destination: '/home/dashboard',
				permanent: true,
			},

			{
				source: '/login',
				destination: '/auth',
				permanent: true,
			},
			{
				source: '/auth',
				destination: '/auth/login',
				permanent: true,
			},

			{
				source: '/profile',
				destination: '/home/profile',
				permanent: true,
			},

			{
				source: '/reset-password',
				destination: '/home/settings/reset-password',
				permanent: true,
			},

			{
				source: '/letters',
				destination: '/home/ppp/letters',
				permanent: true,
			},
			{
				source: '/direct-boss',
				destination: '/home/ppp/direct-boss',
				permanent: true,
			},

			{
				source: '/ppp',
				destination: '/home/reports/ppp',
				permanent: true,
			},
			{
				source: '/control-sheet',
				destination: '/home/reports/control-sheet',
				permanent: true,
			},
			{
				source: '/final-report',
				destination: '/home/reports/final-report',
				permanent: true,
			},
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.unfv.edu.pe',
				port: '',
				pathname: '/images/**',
			},
		],
	},
	compiler: {
		styledComponents: true,
	},
}
