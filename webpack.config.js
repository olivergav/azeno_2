const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public')
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
};
