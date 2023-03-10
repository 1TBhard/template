// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
	? MiniCssExtractPlugin.loader
	: "style-loader";

const config = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devServer: {
		static: path.join(__dirname, "dist"),
		open: true,
		host: "localhost",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: "ts-loader",
				exclude: ["/node_modules/"],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, "css-loader", "postcss-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "public/[name][ext]",
				},
			},
		],
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, "src"),
			public: path.resolve(__dirname, "public"),
		},
		extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";

		config.plugins.push(new MiniCssExtractPlugin());
	} else {
		config.mode = "development";
	}
	return config;
};
