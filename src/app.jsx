/**
 * Created by zhengshaohua on 2018/5/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';



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