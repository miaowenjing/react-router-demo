import React, { Component } from 'react';

import { Layout, Icon } from 'antd';
import './App.css';
import Sider from './components/Sider/Sider'
import {Route,Switch} from 'react-router-dom'
import home from './pages/home/home'
import list from './pages/list/list'
import about from './pages/about/about'

const { Header, Content } = Layout;
class App extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  
  render() {

    return (
   
      <Layout style={{height:'100vh'}}>
        <Sider collapsed={this.state.collapsed}></Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header >
          <Content 
          >
           
		 <div>
    
     <Switch>
			<Route path="/" exact component={home} />
			<Route path="/list" component={list} />                                                                                                                                                                                                                                                                                   
		  <Route path='/about' component={about}></Route>     
      </Switch>                                                                                                                                                                                                                                                                                                                                                                                                                                
		</div>
	
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
