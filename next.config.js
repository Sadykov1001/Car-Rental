const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.pixabay.com',
			},
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
			},
			{
				protocol: 'https',
				hostname: 'i.ibb.co',
			},
			{
				protocol: 'https',
				hostname: 'i.postimg.cc',
			},
		],
	},
}

module.exports = withNextIntl(nextConfig)
