import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon} from "antd";
import './Sider.scss';

export default function Sider({ collapsed }) {
  return (
    <Layout.Sider
      id='Sider'
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="sider_container"
    >
      <div className="logo" />
      <h2>xx管理系统</h2>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>用户管理</span>
            </span>
          }
        >
          <Menu.Item key="21">
            用户信息管理
            <Link to="/user" style={{ color: "#fff" }} />
          </Menu.Item>
          <Menu.Item key="22">
            管理员信息管理
            <Link to="/manger" style={{ color: "#fff" }} />
          </Menu.Item>
        </Menu.SubMenu>
    
          <Menu.Item key="6">
            <Icon type="mail" />
              <span>产品管理</span>
            <Link to="/produce" style={{ color: "#fff" }}>
              商品管理
            </Link>
          </Menu.Item>
          <Menu.Item key="41">
          <Icon type="table" />
          <span>订单管理</span>
            <Link to="/order" style={{ color: "#fff" }} />
          </Menu.Item>

          <Menu.SubMenu
          key="5"
          title={
            <span>
              <Icon type="mail" />
              <span>数据分析</span>
            </span>
          }
        >
          <Menu.Item key="1">
          用户分析
          <Link to="/echart/a" className="link" />
        </Menu.Item>
          <Menu.Item key="42">
            订单分析
            <Link to="/echart/b" style={{ color: "#fff" }} />
          </Menu.Item>
        </Menu.SubMenu>

         
      </Menu>
    </Layout.Sider>
  );
}
