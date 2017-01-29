module.exports = {
	entry: './js/todoStore',
	output: {
		filename: 'build.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					plugins: ['transform-decorators-legacy' ],
					presets: ['es2015', 'stage-0']
				}
			}
		]
	}
}