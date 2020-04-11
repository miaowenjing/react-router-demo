import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "./Sider.scss";
import api from "../../api";
import siderList from '../../config/sliderList'

export default function Sider({ collapsed }) {
  // console.log(collapsed);
  const [userManger, setuserManger] = useState([]);
  const [produce, setproduce] = useState([]);
  const [orde, setOrder] = useState([]);
  const admin = JSON.parse(localStorage.getItem('role'));
  const adminList = admin.map(ele => { return ele.pid })
  const name = localStorage.getItem("username");
  // useEffect(() => {
  //   console.log(adminList)
  // }, []);

  return (
    <Layout.Sider
      id="Sider"
      trigger={null}
      width={250}
      collapsible
      collapsed={collapsed}
      className="sider_container"
    >
      <div className='userInfo'>
        <div className='userPic'><img src='https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4187584683,1859490928&fm=26&gp=0.jpg'></img></div>
        <div className='userName'>{name}</div>
        <div className='solgan'>北国伊人管理系统</div>
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["11"]}
        defaultOpenKeys={["11"]}
        onSelect={(item, key) => {
          localStorage.setItem("menuName", item.key);
        }}
      >

        {
          siderList.map((ele, index) => (
            <Menu.SubMenu
              key={index}
              title={
                <span>
                  <Icon type="mail" />
                  <span>{ele.mainTitle}</span>
                </span>
              }
            >
              {
                ele.children.map(ele =>
                {
                  if (adminList.includes(ele.pid)) {
                    return <Menu.Item key={ele.title}>
                      {ele.title}
                      <Link to={ele.url} style={{ color: "#fff" }} />
                    </Menu.Item>
                  }
                }
                )
              }
            </Menu.SubMenu>
          ))
        }
      </Menu>
    </Layout.Sider>
  );
}
