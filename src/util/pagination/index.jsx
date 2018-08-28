/**
 * Created by zhengshaohua on 2018/8/27.
 */
import React from 'react';
import RcPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

//通用分页组件
class Pagination extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination {...this.props} />
                </div>
            </div>
        )
    }
}

export default Pagination;