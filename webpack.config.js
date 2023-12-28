const path = require('path');
// ./public/bundles/ui/index.tsx',
let entitryFile = '/index.tsx';
let rootPath = path.resolve(__dirname, './public/bundles/ui');
let distPath = path.resolve(__dirname, './public/dist');
// const {createDatagridRegistry} = require('./webpack/requirejs-utils');
function getEntryFiles() {
    const entries = {
        'bundle': rootPath + entitryFile,
    };

    return entries;
}
// createDatagridRegistry(Object.keys(aliases), rootDir);
const projectConfiguration = {
	mode: 'development',
	entry: getEntryFiles(),
	output: {
		path: path.resolve(__dirname, distPath),
		filename: '[name].js',
	},
	resolve: {
		alias: {
			'@': rootPath,
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
		// fallback: {
		// 	util: false,
		// },
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(scss|sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}
		]
	}
};

module.exports = projectConfiguration