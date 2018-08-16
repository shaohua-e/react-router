/**
 * Created by zhengshaohua on 2018/8/13.
 */
//页面路由
window.location.href = "http://www.baidu.com";
history.back();

//hash 路由
window.location = "#hash";
window.onhashchange = function(){
    console.log('current hash:' , window.location.hash);
}

//h5 路由
// 推进一个状态
history.pushState('name', 'title', '/path');
//替换一个状态
history.replaceState('name', 'title', '/path');
//popstate
window.onpopstate = function(){
    console.log(window.location.href);
    console.log(window.location.pathname);
    console.log(window.location.hash);
    console.log(window.location.search);
}


import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class A extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div>
            Component A
            <Switch>
                <Route exact path={`${this.props.match.path}`} render={(route) => {
                    return <div>不带参数</div>
                }}/>
                <Route exact path={`${this.props.match.path}/sub`} render={(route) => {
                    return <div>sub</div>
                }}/>
                <Route  path={`${this.props.match.path}/:id`} render={(route) => {
                    return <div>带参数，参数是：{route.match.params.id}</div>
                }}
                />
            </Switch>
        </div>)
    }
}

class B extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>Component B</div>
    }
}
class Wrapper extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <Link to="/a">组件A</Link>
            <br/>
            <Link to="/a/123">带参数的组件A</Link>
            <br/>
            <Link to="/b">组件B</Link>
            <br/>
            <Link to="/a/sub">带参数的组件A,子路径</Link>

            {this.props.children}
        </div>)
    }
}

//Route 控制条件，路径为/a的时候 渲染A组件
ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
        </Wrapper>
    </Router>,
    document.getElementById('root')
)