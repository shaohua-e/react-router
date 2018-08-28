/**
 * Created by zhengshaohua on 2018/8/16.
 */

class MUtil{
    request(param){
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || "get",
                url: param.url || "",
                dataType: param.dataType || "json",
                data: param.data || null,
                success: res => {
                    //数据请求成功
                    if(0 === res.status){
                        //&&操作符表示前面成功的话 才回去执行后面
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    } else if(10 === res.status){ //没有登录状态，强制登录
                        this.doLogin();
                    } else {
                        typeof reject === 'function' && reject(res.msg || res.data)
                    }
                },
                error: err => {
                    typeof reject === 'function' && reject(err.statusText)
                }
            })
        })
    }
    //跳到登录
    doLogin(){
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }
    //获取url参数
    getUrlParam(name){
        let queryString = window.location.search.split('?')[1] || "",
            reg         = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result      = queryString.match(reg);

        return result ? decodeURIComponent(result[2]) : null;
    }
    // 错误提示
    errorTips(errMsg){
        alert(errMsg || '')
    }
    setStorage(name, data){
        let dataType = typeof data;
        //json对象
        if(typeof data === 'object'){
            window.localStorage.setItem(name, JSON.stringify(data))
        } else if(['number','string', 'boolean'].indexOf(dataType)){//基础类型
            window.localStorage.setItem(name, data);
        } else {//其他类型不支持
            alert('该类型不支持')
        }
    }
    getStorage(name){
        let data = window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data)
        } else {
            return "";
        }
    }
    removeStorage(name){
        window.localStorage.removeItem(name);
    }
}


export default  MUtil;