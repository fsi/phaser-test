module.exports = {
	entry: './client/index.js',
	output: {
		filename: 'dist/index.js'
	},
	module: {
		loaders: [{
			test: /(\.png|\.jpg)$/,
			loader: 'url-loader?name=img-[sha512:Hash:base64:7].[ext]&limit=8192'
		}]
	}
};