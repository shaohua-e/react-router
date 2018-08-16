/**
 * Created by zhengshaohua on 2018/5/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
//create-react-app脚手架中在webpack.config里进行里scss的配置，不需要用配置node-sass编译
import './style/app.css';
//布局
import Layout from 'component/layout/index.jsx';
//页面
import Home from 'page/home/index.jsx';



//<Redirect from="*" to="/"/> 表示如果找不到就都跳到to
//<Router> 里只能渲染一个盒子
//这里用<Switch>代替<div>, 表示只匹配第一个匹配到的东西
class App extends React.Component{
    render(){
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/product" component={Home} />
                        <Route path="/product.category" component={Home} />
                    </Switch>
                </Layout>
            </Router>
    )}
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)