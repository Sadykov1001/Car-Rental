const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['cdn.pixabay.com'],
	},
}

module.exports = withNextIntl(nextConfig)
