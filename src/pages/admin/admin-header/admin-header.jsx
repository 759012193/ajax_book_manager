import React from 'react'
import {Layout,Button,message,Modal} from 'antd'
// 引入路由组件
import {withRouter} from 'react-router-dom'
import {removeAdmin,checkLogOut} from './../../../api/adminApi'

import { ExclamationCircleOutlined } from '@ant-design/icons';
import './admin-header.css'
import logo from './../images/logo.png'
const {Header}=Layout;
const {confirm}=Modal;
class Admin_Header extends React.Component{
    render(){
        return(
            <Header className="header">
            <div className="logo" >
                 <img src={logo}/>
            </div>
                <Button  className="exit-btn" onClick={()=>this._logOut()}>
                    退出
                </Button>
            </Header>
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
export default withRouter(Admin_Header);