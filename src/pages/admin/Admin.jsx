import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {isLogin,removeAdmin,checkLogOut} from './../../api/adminApi'
import {Button,message,Modal} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';

const {confirm} =Modal;
class Admin extends React.Component{
    render(){
        // 判断是否是登录的
        
        if(!isLogin()){

            console.log(isLogin());
            // 如果没有登录, 则切换到登录界面
            return <Redirect to={'/login'}/>
        }
        return(
            <div>
                <Button type="danger" className="exit-btn" onClick={()=>this._logOut()}>
                    退出
                </Button>
            </div>
        )
    }

    // 退出登录
    _logOut(){
        confirm({
            title: '确定退出登录吗?',
            icon: <ExclamationCircleOutlined />,
            okText: '确定',
            cancelText: '取消',
            onOk: ()=>{
                // 发起退出登录请求
                checkLogOut().then((result)=>{
                    let res = result.data;
                    if(res && res.status === 1){ // 退出登录成功
                        // 清除本地的管理员信息
                        removeAdmin();
                        message.success(res.msg);
                        // 跳转登录界面
                        this.props.history.replace('/login');
                    }else {
                       message.error('退出登录失败, 服务器内部错误!');
                    }
                }).catch((error)=>{
                    console.log(error);
                    message.error('网络出现一点问题!');
                });
            },
            onCancel: ()=>{}
        })
    }
}

export default connect(null,null)(Admin);