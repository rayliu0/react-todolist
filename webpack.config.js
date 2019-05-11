const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry:'./src/index.js',
    output:{
        filename: './[name]_[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use:  {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
　　 　　new HtmlWebpackPlugin({
　　　　 　　template: path.resolve(__dirname, './src/index.html'),
　　　　　　 inject: true
　　　　 }),
        new CleanWebpackPlugin(),  //打包前先清空
        new UglifyJsPlugin()
　　],
    devServer:{
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        port: 3000,
        open: true, //自动打开浏览器
    }
}