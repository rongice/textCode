let path = require('path');
let HtmlWeb = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	plugins: [
		new HtmlWeb({
			template: path.join(__dirname, './src/index.html'),
			filename: 'index.html'
		})
	],
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }
		]
	},
	resolve: {
		extensions: [".js", ".jsx",".vue",".json"],
		alias: {
			'@': path.join(__dirname, './src')
		}
	}
}