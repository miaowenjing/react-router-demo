import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "./Sider.scss";
import api from "../../api";

export default function Sider({ collapsed }) {
  // console.log(collapsed);
  const [userManger, setuserManger] = useState([]);
  const [produce, setproduce] = useState([]);
  const [orde, setOrder] = useState([]);
  const [admin, setAdmin] = useState({});
  const obj = {};
  useEffect(() => {
    const eid = localStorage.getItem("eid");
    api
      .getPermissionsByEid(eid)
      .then(res => {
        console.log(res.data);
        res.data.forEach(ele => {
          if (ele == "customer:index") {
            obj["customer"] = true;
          } else if (ele == "rentClothes:index") {
            obj["rentClothes"] = true;
          } else if (ele == "como:index") {
            obj["como"] = true;
          } else if (ele == "employee:index") {
            obj["employee"] = true;
          } else if (ele == "comboorder:index") {
            obj["comboorder"] = true;
          } else {
            obj["clothesorder"] = true;
          }
        });
      })
      .then(() => {
        setAdmin(obj);
      });
  }, []);

  // const obj = {
  //   "customer:index": false,
  //   "rentClothes:index": false,
  //   "como:index": false,
  //   "employee:index": false,
  //   "comboorder:index": false,
  //   "clothesorder:index": false
  // };

  //  return(<div>1234</div>)

  return (
    <Layout.Sider
      id="Sider"
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="sider_container"
    >
      <div className="logo" />
      <h2>{collapsed ? "单椒煜泽" : "单椒煜泽后台管理系统"}</h2>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["11"]}
        defaultOpenKeys={["11"]}
        onSelect={(item, key) => {
          console.log(item.key);
          localStorage.setItem("menuName", item.key);
        }}
        style={{ height: "100%" }}
      >
        <Menu.SubMenu
          key="1"
          title={
            <span>
              <Icon type="mail" />
              <span>用户管理</span>
            </span>
          }
        >
          {admin.customer ? (
            <Menu.Item key="用户信息管理">
              用户信息管理
              <Link to="/logined/user" style={{ color: "#fff" }} />
            </Menu.Item>
          ) : (
            <div />
          )}

          {admin.employee ? (
            <Menu.Item key="管理员信息管理">
              管理员信息管理
              <Link to="/logined/manger" style={{ color: "#fff" }} />
            </Menu.Item>
          ) : (
            <div />
          )}
        </Menu.SubMenu>

        <Menu.SubMenu
          key="2"
          title={
            <span>
              <Icon type="mail" />
              <span>产品管理</span>
            </span>
          }
        >
          {admin.como ? (
            <Menu.Item key="拍摄套餐管理">
              拍摄套餐管理
              <Link to="/logined/produce" style={{ color: "#fff" }} />
            </Menu.Item>
          ) : (
            <div />
          )}

          {admin.rentClothes ? (
            <Menu.Item key="租赁服装管理">
              租赁服装管理
              <Link to="/logined/clothes" style={{ color: "#fff" }} />
            </Menu.Item>
          ) : (
            <div />
          )}
        </Menu.SubMenu>

        <Menu.SubMenu
          key="3"
          title={
            <span>
              <Icon type="mail" />
              <span>订单管理</span>
            </span>
          }
        >
          {admin.comboorder ? (
            <Menu.Item key=" 拍摄订单管理">
              拍摄订单管理
              <Link to="/logined/order" style={{ color: "#fff" }} />
            </Menu.Item>
          ) : (
            <div />
          )}

          {admin.clothesorder ? (
            <Menu.Item key=" 服装租赁管理">
              服装租赁管理
              <Link to="/logined/clothesOrder" style={{ color: "#fff" }} />
            </Menu.Item>
          ) : (
            <div />
          )}
        </Menu.SubMenu>

        <Menu.SubMenu
          key="4"
          title={
            <span>
              <Icon type="mail" />
              <span>数据分析</span>
            </span>
          }
        >
          <Menu.Item key="用户分析">
            用户分析
            <Link to="/logined/echart/a" className="link" />
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
