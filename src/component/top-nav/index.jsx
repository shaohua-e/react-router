/**
 * Created by zhengshaohua on 2018/8/14.
 */
import React from 'react';
import {Link } from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import User  from 'service/user-service.jsx';

const _mm = new MUtil();
const _user = new User();
class TopNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: _mm.getStorage('userInfo').username
        }
    }
    //退出登录
    onLogout(){
        _user.logout().then( res => {
            _mm.removeStorage('userInfo');
            //此时history找不到
            //this.props.history.push('/login');
            window.location.href = '/login';
        }, errMsg => {
            _mm.errorTips(errMsg);
        })
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
                            <span>欢迎，{this.state.username}</span>
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