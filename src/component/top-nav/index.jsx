/**
 * Created by zhengshaohua on 2018/8/14.
 */
import React from 'react';
import {Link } from 'react-router-dom';
class TopNav extends React.Component{
    constructor(props){
        super(props);
    }
    //退出登录
    onLogout(){

    }
    render(){
        return (
            <div className="navbar navbar-default top-navbar" role="navigation">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><b>In</b>sight</Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;" >
                            <i className="fa fa-user fa-fw"></i>
                            <span>欢迎，admin***</span>
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a href="javascript:;" onClick={()=>{this.onLogout()}}>
                                    <i className="fa fa-user fa-fw"></i>
                                    <span>退出登录</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TopNav;