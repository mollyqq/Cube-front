const {resolve} = require("path");
const path = require('path')
const fs = require('fs')
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");


process.env.NODE_ENV = "production";
module.exports = function () {
    return {
        entry: "./service/app.js",
        output: {
            filename: "js/index.[contenthash:10].js",
            path: resolve(__dirname, "build")
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: "pre",
                loader: "eslint-loader",
                options: {
                    fix: true
                }

            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    cacheDirectory: true
                }

            }, {
                test: /module\.json$/,
                exclude: /node_modules/,
                type: "javascript/auto",
                use: [{
                    loader: __dirname + '/module-loader/index.js'
                }]
            }, {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env"
                                ]
                            }
                        }
                    }
                ],
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'fast-sass-loader']
            }, {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: '[hash:10].[ext]',
                        esModule: false,
                        outputPath: "meta/images"
                    }
                }]
            }, {
                test: /\.(eot|woff|svg|ttf|ico)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: '[hash:10].[ext]',
                        esModule: false,
                        outputPath: "meta/icon"
                    }
                }]
            }, {
                test: /\.html$/,
                loader: "html-withimg-loader"
            }, {
                exclude: /\.(css|scss|js|html|eot|woff|svg|ico|ttf|jpg|png|json|art|gif)/,
                loader: "file-loader",
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: "meta/others"
                }
            }]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./service/index.html",
                minify: {
                    collapseBooleanAttributes: true,
                    removeComments: true
                }
            }),
            new MiniCssExtractPlugin({
                filename: 'css/built.[contenthash:10].css'
            }),
            new OptimizeCssAssetsWebpackPlugin(),
        ],
        optimization: {
            splitChunks: {
                chunks: "all"
            }
        },
        devServer: {
            contentBase: resolve(__dirname, "build"),
            historyApiFallback: true,
            host: '127.0.0.1',
            compress: true,
            https: false,
            key: fs.readFileSync("C:\\Users\\s\\Desktop\\document\\server.key"),
            cert: fs.readFileSync("C:\\Users\\s\\Desktop\\document\\server.crt"),
            // ca: fs.readFileSync("C:\\Users\\s\\Desktop\\document\\ca.crt"),
            port: 3000,
            open: true,
            hot: true
        },
        // resolve: {
        //     fallback: {
        //         "child_process": 'empty',
        //         "fs": require.resolve("browserify-fs"),
        //         "util": require.resolve("util"),
        //         "http": require.resolve("stream-http"),
        //         "https": require.resolve("https-browserify"),
        //         "tls": require.resolve("tls-browserify"),
        //         "net": require.resolve("net-browserify"),
        //         "crypto": require.resolve("crypto-browserify"),
        //         "path": require.resolve("path-browserify"),
        //         "os": require.resolve("os-browserify"),
        //         "stream": require.resolve("stream-browserify"),
        //         "zlib": require.resolve("browserify-zlib")
        //     }
        // },
        mode: "production",
        devtool: "source-map"
    }
}