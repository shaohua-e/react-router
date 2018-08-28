/**
 * Created by zhengshaohua on 2018/5/22.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //创建html
const ExtractTextPlugin = require('extract-text-webpack-plugin');//
module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),//path.resolve是在__dirname(当前文件所在目录)目录下寻找dist
        publicPath: '/dist/',
        filename: 'js/app.js'
    },
    resolve: {//工具对象
        alias: {//处理别名
            page: path.resolve(__dirname, 'src/page'),
            component: path.resolve(__dirname, 'src/component'),
            util: path.resolve(__dirname, 'src/util'),
            service: path.resolve(__dirname, 'src/service'),
        }
    },
    module: {
        rules: [
            //(react)的处理
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',//通过babel-loader加载jsx
                    options: {
                        presets: ['env', 'react'] //两个插件对jsx进行转化，env:根据环境来打包，浏览器环境或node环境；
                    }
                }
            },
            //css语法的处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            //scss语法的处理
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            //图片的配置
            {
                test: /\.(png|jpg|gif)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            //font配置
            {
                test: /\.(woff2|woff|ttf|svg|eot|otf)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'font/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        //处理html文件
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        //独立css文件,css/[name].css表示生成文件的目录和名字
        new ExtractTextPlugin('css/[name].css'),
        //提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        })
    ],
    devServer: {
        port: 8081,
        historyApiFallback:{//404的路径 会跳转到这个路径
            index: '/dist/index.html'
        },
        proxy: {// 自动代理到后端的接口上
            "/manage": {
                target: 'http://admintest.happymmall.com',
                changeOrigin: true
            },
            '/user/logout.do': {
                target: 'http://admintest.happymmall.com',
                changeOrigin: true
            }
        }
    }
}