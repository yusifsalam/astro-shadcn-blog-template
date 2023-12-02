/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	semi: false,
	printWidth: 100,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss', 'prettier-plugin-css-order'],
	pluginSearchDirs: false
}
