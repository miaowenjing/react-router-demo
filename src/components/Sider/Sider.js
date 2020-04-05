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
  useEffect(() => {
    // const eid = localStorage.getItem("eid");
    console.log(adminList)

    // api
    //   .getPermissionsByEid(eid)
    //   .then(res => {
    //     console.log(res.data);
    //     // res.data.forEach(ele => {
    //     //   if (ele == "customer:index") {
    //     obj["customer"] = true;
    //     // } else if (ele == "rentClothes:index") {
    //     obj["rentClothes"] = true;
    //     // } else if (ele == "como:index") {
    //     obj["como"] = true;
    //     // } else if (ele == "employee:index") {
    //     obj["employee"] = true;
    //     // } else if (ele == "comboorder:index") {
    //     obj["comboorder"] = true;
    //     // } else {
    //     obj["clothesorder"] = true;
    //     // }
    //     // });
    //   })
    //   .then(() => {
    //     setAdmin(obj);
    //   });
  }, []);

  // const obj = {
  //   "customer:index": false,
  //   "rentClothes:index": false,
  //   "como:index": false,
  //   "employee:index": false,
  //   "comboorder:index": false,
  //   "clothesorder:index": false
  // };

  return (
    <Layout.Sider
      id="Sider"
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="sider_container"
    >
      <div className='userInfo'>
        <div className='userPic'><img src='https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4187584683,1859490928&fm=26&gp=0.jpg'></img></div>
        <div className='userName'>name</div>
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
        style={{ height: "100%" }}
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
                // console.log(adminList.includes(ele.pid));
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











// <Menu.SubMenu
// key="2"
// title={
//   <span>
//     <Icon type="mail" />
//     <span>产品管理</span>
//   </span>
// }
// >
// {/* {admin.como ? ( */}
//   {true ? (
//   <Menu.Item key="拍摄套餐管理">
//     拍摄套餐管理
//     <Link to="/logined/produce" style={{ color: "#fff" }} />
//   </Menu.Item>
// ) : (
//   <div />
// )}

// {/* {admin.rentClothes ? ( */}
//   {true ? (
//   <Menu.Item key="租赁服装管理">
//     租赁服装管理
//     <Link to="/logined/clothes" style={{ color: "#fff" }} />
//   </Menu.Item>
// ) : (
//   <div />
// )}
// </Menu.SubMenu>

// <Menu.SubMenu
// key="3"
// title={
//   <span>
//     <Icon type="mail" />
//     <span>订单管理</span>
//   </span>
// }
// >
// {/* {admin.comboorder ? ( */}
//   {true ? (
//   <Menu.Item key=" 拍摄订单管理">
//     拍摄订单管理
//     <Link to="/logined/order" style={{ color: "#fff" }} />
//   </Menu.Item>
// ) : (
//   <div />
// )}

// {/* {admin.clothesorder ? ( */}
//   {true ? (
//   <Menu.Item key=" 服装租赁管理">
//     服装租赁管理
//     <Link to="/logined/clothesOrder" style={{ color: "#fff" }} />
//   </Menu.Item>
// ) : (
//   <div />
// )}
// </Menu.SubMenu>

// <Menu.SubMenu
// key="4"
// title={
//   <span>
//     <Icon type="mail" />
//     <span>数据分析</span>
//   </span>
// }
// >
// <Menu.Item key="用户分析">
//   用户分析
//   <Link to="/logined/echart/a" className="link" />
// </Menu.Item>
// <Menu.Item key="42">
//   订单分析
//   <Link to="/echart/b" style={{ color: "#fff" }} />
// </Menu.Item>
// </Menu.SubMenu>

