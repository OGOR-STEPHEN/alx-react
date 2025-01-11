const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, '../dist'),
        hot: true,
        open: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: { progressive: true },
                            optipng: { optimizationLevel: 5 },
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../dist/index.html'),
            filename: 'index.html'
        })
    ]
};
