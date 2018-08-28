/**
 * Created by zhengshaohua on 2018/8/24.
 */

import React     from 'react';
import PageTitle from 'component/page-title/index.jsx';
import {Link}    from 'react-router-dom';


class Error extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userCount     : "-",
            productCount  : "-",
            orderCount    : "-"
        }
    }
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="出错啦"/>
                <div className="row">
                    <div className="col-md-12">
                        <span>找不到路径，</span>
                        <Link to="/">点我回首页</Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default Error;