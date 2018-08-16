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



//组件周期
class Component extends React.Component{
    constructor(props){
        super(props);
        /* 1，首先构造 */
        console.log('constructor');
        this.state={
            data: 'old state'
        }
        console.log('这里是初始化')
    }
    componentWillMount(){
        /* 2，整个组件还没有渲染出来，但是js可以开始执行了，异步的方法可以放这里 */
        console.log('componentWillMount');
    }
    componentDidMount(){
        /* 4，组件加载成功 */
        console.log('componentDidMount');
    }
    componentWillReceiveProps(){
        /* 接收父组件传过来的props 会触发 */
        console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate(){
        /* 数据发生变化的话，根据返回值 判断子组件是否更新 */
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(){
        //  组件将要更新
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        //   组件更新完成
        console.log('componentDidUpdate');
    }
    handleClick(){
        console.log('这里是更新')
        this.setState({
            data: 'New State'
        })
    }
    render(){
        /* 3，开始渲染 */
        console.log('render');
        return (
            <div className="">
                <span>props:{this.state.data}</span>
                <button onClick={()=>{ this.handleClick() }}>更新组件</button>
                <hr/>
            </div>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: 'old props'
        }
        console.log('这里是初始化')
    }

    render(){
        return (
            <div className="">
                <Component data={this.state.data}/>
                <button onClick={()=>{ this.handleClick() }}>改变props</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

/*
 * 声明周期节点
 * Mounting: 挂载阶段
 * Updating: 运行时阶段
 * Unmounting: 卸载阶段
 * Error Handling: 错误处理
 * */

