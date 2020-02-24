const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: "./src/js/index.js",


    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/pages/index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: 'src/pages/about.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: 'src/pages/contact.html',
            chunks: ['main']
        })
    ],

    module: {
        rules: [

            {
                test: /\.html/,
                use: [{
                    loader: "html-loader",

                }]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images",
                        esModule: false,
                    }
                }
            }
        ]
    }
}