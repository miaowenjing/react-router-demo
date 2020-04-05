import React ,{useState}from "react";
import { Layout, Breadcrumb } from "antd";

import { Route, Switch, Link } from "react-router-dom";

// import home from "../../pages/home/home";
import User from "../../pages/User/User";
import Manger from "../../pages/User/manger";
import Product from "../../pages/Product/Product";
import Clothes from "../../pages/Product/clothes";
import Order from "../../pages/order/order";
import clothesOrder from "../../pages/order/clothesOrder";
import ProDetail from "../../pages/Product/ProDetail";
import userEchart from "../../pages/echarts/echarts";

const contentStyle = {
  // borderTop: "1px solid #F0F2F5",
  minHeight: 280
};

const descStyle = {
  padding: "18px 32px",
  paddingLeft: "32px",
  // backgroundColor: "#fff"
};

export default function Content() {
  const menuName = localStorage.getItem('menuName')
  // const [menuName, setMenuName] = useState('')
  const routes = [
    {
      path: "/",
      breadcrumbName: "首页"
    },
    {
      path: "list",
      breadcrumbName: "一级面包屑"
    },
    {
      path: "Product",
      breadcrumbName: "当前页面"
    }
  ];


  return (
    <Layout.Content style={contentStyle}>
      <div style={descStyle}>
        <h2 style={{ margin: 0 }}>{menuName}- 已登录</h2>
      </div>
      <Switch>
        <Route path="/logined" exact component={User} />
        <Route path="/logined/user" exact component={User} />
        <Route path="/logined/manger" component={Manger} />
        <Route path="/logined/produce" exact component={Product} />
        <Route path="/logined/clothes" exact component={Clothes} />
        <Route path="/logined/produce/:id" component={ProDetail} />
        <Route path="/logined/order" component={Order} />
        <Route path="/logined/clothesOrder" component={clothesOrder} />
        <Route path="/logined/echart/a" component={userEchart} />
      </Switch>
    </Layout.Content>
  );
}
