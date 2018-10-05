const path = require('path');
const webpack = require('webpack');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: {
        App: './src/app.js'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].bundle.js',
        chunkFilename: "[name].bundle.js",
    },
    resolve: {
        alias: {
            AlertComponent: path.resolve(__dirname, './src/components/alert-component/'),
            style_component: path.resolve(__dirname, './src/style/')
        },
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.jsx?$/,
            exclude: /node_modules/,
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        }, {
            test: /\.(png|woff|woff2|eot|ttf)$/,
            loader: 'url-loader?limit=100000'
        },
        {
            test: /\.svg$/,
            loader: 'svg-loader'
        }]
    },
    plugins: [
        // new UnminifiedWebpackPlugin()
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ]
};