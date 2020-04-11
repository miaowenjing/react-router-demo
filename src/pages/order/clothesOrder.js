import React, { useState, useEffect } from "react";
import { Icon, Table, Collapse, Button, Modal, Upload } from "antd";
import "./order.scss";
import UserTable from "../../components/oTable/oTable";
// import { useState, useEffect } from 'react';
import api from "../../api/index";
import { Record } from "immutable";
function colthesOrder() {
    const [count, setCount] = useState(0);
    const [current, setCurrent] = useState(1);
    const [TableData, setTableData] = useState(null);
    const [fresh,setFresh] = useState(true);
    const columns = [
      {
        title: "订单编号",
        dataIndex: "cloOrderId",
        key: "cloOrderId"
      },
      {
        title: "套餐名称",
        dataIndex: "rentClothes",
        key: "rentClothes",
        render: text => <span>{text.cloName}</span>
      },
      {
        title: "金额",
        dataIndex: "price",
        key: "price",
        render: (text, Record) => <span>{Record.rentClothes.cloPrice}</span>
      },
      {
        title: "顾客信息",
        dataIndex: "customer",
        key: "customer",
        render: text => <span>{text.custName}</span>
      },
      {
        title: "订单时间",
        dataIndex: "clothesOrderDate",
        key: "clothesOrderDate"
      },
      {
        title: "租赁状态",
        dataIndex: "clothesOrderState",
        key: "clothesOrderState",
        render: text => <span>{text ? text.cosName : "无状态"}</span>
      },
      {
        title: "修改状态",
        dataIndex: "action",
        key: "action",
        render: (text, { clothesOrderState ,cloOrderId}) => (
          <span>
            <Button
              style={{ margin: "0 15px" }}
              onClick={() => {
                api.editClothesOrder({'clothesOrderState.cosId':3,cloOrderId:cloOrderId}).then(
                  ()=>{
                    setFresh(!fresh);
                  }
                )
              }}
              disabled={clothesOrderState.cosId == 2? false : true}
            >
              借出
            </Button>
            <Button
              style={{ margin: "0 15px" }}
              onClick={() => {
                api.editClothesOrder({'clothesOrderState.cosId':4,cloOrderId:cloOrderId}).then(
                  ()=>{
                    setFresh(!fresh);
                  }
                )
                
              }}
              disabled={clothesOrderState.cosId == 3 ? false : true}
            >
              归还
            </Button>
          </span>
        )
      }
    ];
   
    useEffect(() => {
                     getData();
                    }, [current,fresh]);
  
    // function chgState(orderId, osId) {
    //     console.log(orderId, osId);
    //     api.editOrderStateWithId(`${orderId}/${osId}`).then(res => {
    //         console.log(res);
    //     });
    // }
    function pageChange(page) {
        setCurrent(page);
    }
    function getData(){
      api
      .getAllClothesOrders({
          pageNum: current,
          rows: 5
      })
      .then(res => {
        setCount(res.data.total);
        setTableData(res.data.rows);
      });
    }
    return (
        <div id="order">
            <UserTable
                className="orderTable"
                dataSource={TableData}
                columns={columns}
                pageSize={5}
                total={count}
                onChange={pageChange}
            />
          
        </div>
    );
}
export default colthesOrder;
