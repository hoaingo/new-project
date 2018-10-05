const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = merge(common, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new UglifyJsPlugin({
            // uglifyOptions: {
            //         compress: {
            //         warnings: false, // Suppress uglification warnings
            //         pure_getters: true,
            //         unsafe: true,
            //         unsafe_comps: true,
            //     },
            //     comments: false,
            // },
            // sourceMap: false,
            // exclude: [/\.min\.js$/gi] // skip pre-minified libs
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0
        }),
        new WebpackShellPlugin({
            onBuildEnd: 'node copy-file.js'
        }),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "3rd-library",
                    priority: -20,
                    chunks: "all"
                }
            },
        },
        
   }
});



