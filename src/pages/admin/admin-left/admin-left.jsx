import React from 'react'
import { DesktopOutlined,PieChartOutlined, NotificationOutlined } from '@ant-design/icons';
import {withRouter,Link} from 'react-router-dom'
import {Layout, Menu} from 'antd'

import './admin-left.css'
const { Sider } = Layout;
const { SubMenu } = Menu;
class Admin_Left extends React.Component{
    render(){
        return(
            <Sider width={200} className="site-layout-background">
        <Menu className="site-layout-menu"
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/home">
                  首页
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/book">
                  书籍管理
              </Link>
            </Menu.Item>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="设置">
            <Menu.Item key="9">
            <Link to="/setting">
                  用户设置
              </Link>
            </Menu.Item>
            <Menu.Item key="10">
            <Link to="/statis">
                  分析统计
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
        )
    }
}




export default withRouter(Admin_Left);