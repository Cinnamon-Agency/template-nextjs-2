/* eslint-disable */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
})

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Still needed as css will not be loaded if removed.
	// https://github.com/vanilla-extract-css/vanilla-extract/issues/1086#issuecomment-1763836814
	experimental: {
		appDir: true
	},
	images: {
		domains: ['lh3.googleusercontent.com']
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: [
								{
									name: 'preset-default',
									params: {
										overrides: {
											removeViewBox: false
										}
									}
								}
							]
						}
					}
				}
			]
		})

		return config
	}
}

module.exports = withVanillaExtract(withBundleAnalyzer(nextConfig))
