import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Switch } from "antd";
// import './Sider.js';

export default function Sider({ collapsed }) {
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="sider_container"
    >
      <div className="logo" />

      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>首页</span>
          <Link to="/" className="link" />
        </Menu.Item>
        <Menu.SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>用户管理</span>
            </span>
          }
        >
          <Menu.Item key="2">
            用户信息管理
            <Link to="/user" style={{ color: "#fff" }} />
          </Menu.Item>
          <Menu.Item key="3">
            管理员信息管理
            <Link to="/user" style={{ color: "#fff" }} />
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>产品管理</span>
            </span>
          }
        >
          <Menu.Item key="6">
            <Link to="/produce" style={{ color: "#fff" }}>
              123
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            Option 2
            <Link to="/produce" style={{ color: "#fff" }}>
              123
            </Link>
          </Menu.Item>
          <Menu.Item key="8">Option 3</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  );
}
