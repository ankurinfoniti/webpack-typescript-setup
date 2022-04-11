const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
      static: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
         title: 'My first Output',
         template: './src/index.html',
      }),
    ],
    module: {
        rules: [
          {
            test: /\.ts$/,
            use: {
                loader: 'ts-loader'
            },
            exclude: /node_modules/,
          },
        ],
    },
    devtool: false,
    resolve: {
        extensions: ['.ts', '.js'],
    },
}