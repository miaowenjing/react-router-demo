import React from 'react';
import { Layout, Breadcrumb } from 'antd';


import {Route,Switch,Link} from 'react-router-dom'

import home from '../../pages/home/home'
import User from '../../pages/User/User'
import Product from '../../pages/Product/Product'
import Order from '../../pages/order/order'
import ProDetail from '../../pages/Product/ProDetail'
import userEchart from '../../pages/echarts/echarts'

const contentStyle = {
  borderTop: '1px solid #F0F2F5',
  minHeight: 280,
};

const descStyle = {
  padding: '18px 32px',
  paddingLeft: '32px',
  backgroundColor: '#fff',
};

export default function Content() {
  const routes = [{
        path: '/',
        breadcrumbName: '首页'
      }, {
        path: 'list',
        breadcrumbName: '一级面包屑'
      }, {
        path: 'Product',
        breadcrumbName: '当前页面'
      }];
    
      function itemRender(route, params, routes, paths) {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
      }
  return (
      
    <Layout.Content style={contentStyle}>
      <div style={descStyle}>
        {/* <Breadcrumb style={{ margin: '0 0 18px 0' }}>
          <Breadcrumb.Item>黑天鹅</Breadcrumb.Item>
          <Breadcrumb.Item>{}</Breadcrumb.Item>
        </Breadcrumb> */}
        <Breadcrumb itemRender={itemRender} routes={routes} style={{ margin: '0 0 18px 0' }}/>
        <h2 style={{ margin: 0 }}>
          产品管理-
          {  '未登录' }
        </h2>
      </div>
      <Switch>
     
      <Route path="/" exact component={home} />
      <Route path="/user" exact component={User} />  
      <Route path='/manger' component={User}></Route>                                                                                                                                                                                                                                                                                 
		  <Route path='/produce'  exact component={Product}/>
      <Route path='/produce/a'  component={ProDetail}/>
      <Route path='/order' component={Order}/>
      <Route path="/echart/a" component={userEchart} />
     
      
     
  
      </Switch> 

 
    </Layout.Content>
  );
}