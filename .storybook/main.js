const path = require('path')

const toPath = _path => path.join(process.cwd(), _path)

module.exports = {
	stories: ['../**/*stories.tsx', '../**/*stories.mdx'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5'
	},
	webpackFinal: async (config, { configType }) => {
		config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules']

		return config
	}
}
