import React, { useState } from 'react';

import { Layout, Icon } from 'antd';
import { Route, Switch, Link } from "react-router-dom";
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
  const username=localStorage.getItem('username')
  


    return (
      <div>
        <Layout style={{ height: "100vh" }} id="app">
          <Sider collapsed={collapsed} />
          <Layout>
            <Header className="v-header">
              <Icon
                className="trigger"
                type={collapsed ? "menu-unfold" : "menu-fold"}
                onClick={toggle}
                style={{ marginLeft: "20px" }}
              />
              <Link to='/'>
                <div className="header-right" >
                  <span>你好，{username}</span>
                  <Icon type="close-circle" className="exit" />
                </div>
              </Link>
            </Header>
            <Content />
          </Layout>
        </Layout>
      </div>
    );
  }


export default App;