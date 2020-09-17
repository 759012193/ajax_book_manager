import React from 'react'
import {connect} from 'react-redux'
import {Redirect,Switch,Router,Route} from 'react-router-dom'
import {isLogin} from './../../api/adminApi'
import {Layout, Breadcrumb} from 'antd'
import './css/admin.css'
import Admin_Header from './admin-header/admin-header'
import Admin_Left from './admin-left/admin-left'
import Home from './../home/home'
import Book from './../book/book'
const {Content} = Layout;


class Admin extends React.Component{
    render(){
        // 判断是否是登录的
        
        if(!isLogin()){

            console.log(isLogin());
            // 如果没有登录, 则切换到登录界面
            return <Redirect to={'/login'}/>
        }
        return(
            <Layout className='admin-panel'>
    <Admin_Header />
    <Layout>
      <Admin_Left/>
      <Layout style={{ padding: '0 24px 24px' }} className="site-layout-background">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Switch>
                               <Redirect from={"/"} to={"/home"} exact />
                               <Route path={"/home"} component={Home}/>
                               <Route path={"/book"} component={Book}/>
                        </Switch>
        </Content>
      </Layout>
    </Layout>
  </Layout>
            
        )
    }

    
}

export default connect(null,null)(Admin);