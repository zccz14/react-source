var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel'] }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ title: 'React Demo' })]
}