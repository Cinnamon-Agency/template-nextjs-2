// lint-staged.config.js
module.exports = {
	// Type check TypeScript files
	'**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

	// Lint then format TypeScript and JavaScript files
	'**/*.(ts|tsx|js|jsx)': filenames => [
		`pnpm prettier --write ${filenames.join(' ')}`,
		`pnpm eslint --fix ${filenames.join(' ')}`,
		`pnpm eslint ${filenames.join(' ')}`
	],

	// Format MarkDown and JSON
	'**/*.(md|json)': filenames => `pnpm prettier --write ${filenames.join(' ')}`
}
