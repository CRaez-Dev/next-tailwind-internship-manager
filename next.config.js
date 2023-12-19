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
