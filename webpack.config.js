// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { css } = require('webpack');

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = MiniCssExtractPlugin.loader;

const commonHtmlConfig = {
    meta: {
      viewport: 'width=device-width, initial-scale=1'
    },
  };

const config = {
    entry: {
        layout: './src/style/layout.scss',
        index: './src/pages/index/index.js',
        login: './src/pages/login/login.js',
    },

    output: {
        clean: true,
        path: path.resolve(__dirname, 'docs'),
        filename: 'scripts/[name].bundle.js',
        assetModuleFilename: 'assets/[hash][ext]',
    },
    devServer: {
        open: true,
        host: 'localhost',
    },

    plugins: [
        new HtmlWebpackPlugin({
            ...commonHtmlConfig,
            chunks: ['index']
        }),

        new HtmlWebpackPlugin({
            ...commonHtmlConfig,
            filename: 'login.html',
            chunks: ['login']
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
