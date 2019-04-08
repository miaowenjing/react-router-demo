import React from 'react';
import {Link} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import './Sider.js';

 
export default function Sider({collapsed}){
    return (
        <Layout.Sider trigger={null} collapsible collapsed={collapsed} className='sider_container'>
        <div className="logo" />
      
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>shouye</span>
            <Link to='/' className='link'></Link>
            
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
           
            <Link to='/list' style={{color:'#fff'}}>123</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <Link to='/about'>about</Link> 
          </Menu.Item>
        </Menu>
         </Layout.Sider>
    )
}