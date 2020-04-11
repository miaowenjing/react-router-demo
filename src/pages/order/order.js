import React, { useState, useEffect } from "react";
import { Icon, Table, Collapse, Button, Modal, Upload } from "antd";
import "./order.scss";
import UserTable from "../../components/oTable/oTable";
// import { useState, useEffect } from 'react';
import api from "../../api/index";
import config from '../../config'
import { Record } from "immutable";
const Panel = Collapse.Panel;
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
function order() {
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(1);
  const [TableData, setTableData] = useState(null);
  const [uploadVisible, setuploadVisible] = useState(false);
  const [previewVisible, setpreviewVisible] = useState(false);
  const [previewImage, setpreviewImage] = useState("");
  const [fileList, setfileList] = useState('');
  const [fresh,setFresh] = useState(true);
  useEffect(() => {
    api
      .getAllComboOrders({
        pageNum: current,
        rows: 10
      })
      .then(res => {
        setCount(res.data.total);
        setTableData(res.data.rows);
        console.log(res.data.rows);
      });
  }, [current,fresh]);
  const props = {
   
  };

  const columns = [
    {
      title: "订单编号",
      dataIndex: "comOrderId",
      key: "comOrderId"
    },
    {
      title: "套餐名称",
      dataIndex: "combo",
      key: "combo",
      render: text => <span>{text.coName}</span>
    },
    {
      title: "金额",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "顾客信息",
      dataIndex: "customer",
      key: "customer",
      render: text => <span>{text.custName}</span>
    },
    {
      title: "订单时间",
      dataIndex: "comOderDate",
      key: "comOderDate"
    },
    {
      title: "拍摄时间开始时间",
      dataIndex: "startDate",
      key: "startDate"
    },
    {
      title: "拍摄地点",
      dataIndex: "shootingLocation",
      key: "shootingLocation",
      render: text => <span>{text.lname}</span>
    },
    {
      title: "拍摄状态",
      dataIndex: "comboOrderState",
      key: "comboOrderState",
      render: text => <span>{text ? text.osState : "无状态"}</span>
    },
    {
      title: "拍摄状态",
      dataIndex: "action",
      key: "action",
      render: (text, { comOrderId, comboOrderState }) => (
        <span>
          <Button
            style={{ margin: "0 15px" }}
            onClick={() => {
              chgState(comOrderId, 3);
            }}
          disabled={comboOrderState.osId !== 2}
          >
            拍摄完成
          </Button>
          <Button
            style={{ margin: "0 15px" }}
            onClick={() => {
              chgState(comOrderId, 4);
            }}
          disabled={comboOrderState.osId==3||comboOrderState.osId==4}
          >
            取消订单
          </Button>
        </span>
      )
    },
    {
      title: "上传拍摄图片",
      dataIndex: "comboOrderProducts",
      key: "comboOrderProducts",
      render: (text, { comOrderId, comboOrderState }) => (
        <>
        <Upload 
         name='file'
         action={`${config.baseUrl}/uploadComboOrderPicture?comOrderId=${comOrderId}`}
         // fileList:fileList,
         // showUploadList:false,
         onChange={(info)=>{
           if (info.file.status === 'done') {
            //  setfileList(info.file.response) 
            setFresh(!fresh)
           }
         }}>
          <Button
            style={{ margin: "0 15px" }}
          
          disabled={comboOrderState.osId == 3 ? false : true}
          // onClick={() => {
          // setuploadVisible(true);
          // }}
          >
            上传图片
          </Button>
        </Upload>
        <Button
            style={{ margin: "0 15px" }}
          disabled={comboOrderState.osId !== 3||!text }
          onClick={() => {
            window.open(`${config.baseUrl}/fileDownload/{fileName}?fileName=${text}`)
          }}
          >
            下载图片
          </Button>
        </>

      )
    }
  ];

  async function handlePreview(file) {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setpreviewImage(file.url || file.preview);
    setpreviewVisible(true)

  }
  function chgState(orderId, osId) {
    api.editOrderStateWithId(`${orderId}/${osId}`).then(res => {
      setFresh(!fresh)
    });
  }
  function pageChange(page) {
    setCurrent(page);
  }
  return (
    <div id="order">
      <UserTable
        className="orderTable"
        dataSource={TableData}
        columns={columns}
        pageSize={10}
        total={count}
        onChange={pageChange}
      />
    </div>
  );
}
export default order;
