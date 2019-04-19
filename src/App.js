import React, { useState } from 'react';

import { Layout, Icon } from 'antd';
import './App.scss';
import Sider from './components/Sider/Sider'
// import {Route,Switch} from 'react-router-dom'
import Content from './components/Content/Content';


const { Header} = Layout;
function App (){
 const[collapsed,setCollapsed]=useState(false)

  function toggle (){
    setCollapsed(!collapsed);
   
  }
  


    return (
   
      <Layout style={{height:'100vh'}} id='app'>
        <Sider collapsed={collapsed}></Sider>
        <Layout>
          <Header className='v-header' >
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
              style={ {'marginLeft':'20px'}}
            />
            <div className='header-right'>
             <span>你好，苗文静</span>
             <Icon type="close-circle" className='exit'/>
            </div> 
            
          </Header >
          <Content></Content>
        </Layout>
      </Layout>
    );
  }


export default App;