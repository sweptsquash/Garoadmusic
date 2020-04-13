const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = env => {
	return {
		devtool: (env.NODE_ENV === 'production') ? '' : 'source-map',
		entry: path.resolve(__dirname, 'src/js/app.js'),
		plugins: [
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: '[name].[hash].css',
				chunkFilename: '[name].[hash].css',
			}),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'src/index.html'),
				filename: path.resolve(__dirname) + '/index.html',
			}),
			new CopyPlugin([
				{
					from: path.resolve(__dirname, 'src/img/icons'),
					to: path.resolve(__dirname, 'assets/img/icons'),
				},
			]),
		],
		output: {
			path: path.resolve(__dirname, 'assets'),
			filename: '[name].[hash].js',
			chunkFilename: '[name].[hash].js',
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: (env.NODE_ENV === 'production'),
								importLoaders: 1,
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: (env.NODE_ENV === 'production'),
							},
						},
					],
					include: path.resolve(__dirname, 'src/scss'),
				},
				{
					test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[folder]/[name].[hash].[ext]',
							},
						},
					],
				},
				{
					test: /\.(png|jpe?g|gif|webp)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[folder]/[name].[hash].[ext]',
								publicPath: 'assets',
							},
						},
					],
				},
			],
		},
		optimization: {
			moduleIds: 'hashed',
			runtimeChunk: 'single',
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},
			minimizer: [
				new UglifyJsPlugin(),
			],
		},
		devServer: {
			publicPath: path.resolve(__dirname, 'dist'),
			compress: true,
			writeToDisk: true,
			historyApiFallback: true,
		},
	};
};