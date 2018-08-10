/**
 * Created by zhengshaohua on 2018/6/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';
//基础写法
function Component(){
    return (
        <div>
            <h1>Rosen</h1>
        </div>
    )
}

class Es6Component extends React.Component{
    render(){
        return <h1>I am Rosen</h1>
    }
}

//statu和props用法

class Component extends React.Component{
    constructor(props){
        super(props);//把父级的指针拿里
        this.state = {
            name: 'Rosen'
        }
    }
    render(){
        // setTimeout(()=>{
        //     this.setState({
        //         name: 'Rosen Test'
        //     })
        // }, 2000)
        return <h1>I am {this.state.name}</h1>
    }
}


ReactDOM.render(
    <div>
        <Component />
    </div>,
    document.getElementById('root')
)

//事件处理方式一
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Rosen',
            age: 18
        }
        this.handleClick = this.handleClick.bind(this);//作用域的改变
    }

    handleClick(){
        this.setState({
            age: this.state.age + 1
        })
    }
    render(){
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>I am {this.state.age}years old!</p>
                <button onClick={this.handleClick}>加一岁</button>
            </div>
        )
    }
}

//事件处理方式二
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Rosen',
            age: 18
        }
        //this.handleClick = this.handleClick.bind(this);//作用域的改变, 可以通过箭头函数解决
    }

    handleClick(){
        this.setState({
            age: this.state.age + 1
        })
    }
    onValueChange(e){
        this.setState({
            age: e.target.value
        })

    }
    render(){
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>I am {this.state.age}years old!</p>
                <button onClick={()=>{this.handleClick()}}>加一岁</button>
                <input type="text" onChange={(e) => {this.onValueChange(e)}} />
            </div>
        )
    }
}
//数据通信
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Rosen',
            age: 18
        }
        //this.handleClick = this.handleClick.bind(this);//作用域的改变, 可以通过箭头函数解决
    }

    handleClick(){
        this.setState({
            age: this.state.age + 1
        })
    }
    onValueChange(e){
        this.setState({
            age: e.target.value
        })

    }
    render(){
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>I am {this.state.age}years old!</p>
                <button onClick={()=>{this.handleClick()}}>加一岁</button>
                <input type="text" onChange={(e) => {this.onValueChange(e)}} />
            </div>
        )
    }
}
//容器式的组件
class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(props){
        return <h1>{this.props.children}</h1>
    }
}

class App extends React.Component{
    render(){
        return (
            <div className="">
                {/* 容器式的组件 */}
                <Title>
                    <span>App Title</span>
                    <a href="http://www.baidu.com">跳转</a>
                </Title>
                <hr/>
                {/* 单纯的组件 */}
                <Component/>
            </div>
        )
    }
}

//兄弟组件传数据
class Child1 extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(){
        this.props.changeColor('red');
    }
    render(){
        return (
            <div>
                <button onClick={(e)=>{this.handleClick(e)}}>改变child2组件颜色</button>
            </div>
        )
    }
}

class Child2 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>child2组件背景色：{this.props.bgColor}</h1>
            </div>
        )
    }
}

class Father extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bgColor: '#222'
        }
    }
    onBgColorChange(color){
        this.setState({
            bgColor: color
        })
    }
    render(props){
        return (
            <div>
                <Child1 changeColor={(color)=>{this.onBgColorChange(color)}} />
                <Child2 bgColor = {this.state.bgColor} />
            </div>
        )

    }
}

