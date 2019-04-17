import React, { useState } from 'react';

import { Layout, Icon } from 'antd';
import './App.css';
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
   
      <Layout style={{height:'100vh'}}>
        <Sider collapsed={collapsed}></Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
            <span>你好，苗文静</span>
            <Icon type="close-circle" />
          </Header >
          <Content>
           
		 {/* <div>
    
     <Switch>
			<Route path="/" exact component={home} />
			<Route path="/list" component={list} />                                                                                                                                                                                                                                                                                   
		  <Route path='/about' component={about}></Route>     
      </Switch>                                                                                                                                                                                                                                                                                                                                                                                                                                
		</div>
	 */}
          </Content>
        </Layout>
      </Layout>
    );
  }


export default App;