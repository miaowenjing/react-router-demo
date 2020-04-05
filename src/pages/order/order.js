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
  const [fileList, setfileList] = useState([
  ]);
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
  }, [current]);
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
      // console.log(text.osState)
    },
    {
      title: "拍摄状态",
      dataIndex: "action",
      key: "action",
      render: (text, { comOrderId, comboOrderState }) => (
        <span>
          {/* <Button
            style={{ margin: "0 15px" }}
            onClick={() => {
              console.log(comboOrderState.osId);
              chgState(comOrderId, 2);
            }}
            disabled={comboOrderState.osId == 1 ? false : true}
          >
            付款
          </Button> */}
          <Button
            style={{ margin: "0 15px" }}
            onClick={() => {
              chgState(comOrderId, 3);
            }}
            // disabled={comboOrderState.osId == 2 ? false : true}
          >
            拍摄完成
          </Button>
          <Button
            style={{ margin: "0 15px" }}
            onClick={() => {
              chgState(comOrderId, 4);
            }}
            // disabled={comboOrderState.osId !== 3 ? false : true}
          >
            取消订单
          </Button>
        </span>
      )
    },
    {
      title: "上传拍摄图片",
      dataIndex: "upload",
      key: "upload",
      render: (text, { comOrderId, comboOrderState }) => (
        <Button
          style={{ margin: "0 15px" }}
          // disabled={comboOrderState.osId == 3 ? false : true}
          onClick={() => {
            setuploadVisible(true);
          }}
        >
          上传图片
        </Button>
      )
    }
  ];
  function handleCancel() {
   setpreviewVisible(false)
  }
  async function handlePreview(file) {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
      setpreviewImage(file.url || file.preview);
      setpreviewVisible(true)
    
  }

  function handleChange({ fileList }) {
    console.log(fileList)
    setfileList(fileList)
  }

  function handleUpload() {
    setuploadVisible(true);



  }

  function chgState(orderId, osId) {
    console.log(orderId, osId);
    api.editOrderStateWithId(`${orderId}/${osId}`).then(res => {
      console.log(res);
    });
  }
  function pageChange(page) {
    setCurrent(page);
  }
  function callback(key) {
    console.log(key);
  }
  // const { previewVisible, previewImage, fileList } = this.state;
  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  return (
    <div id="order">
      <UserTable
        className="orderTable"
        dataSource={TableData}
        columns={columns}
        total={count}
        onChange={pageChange}
        //  onChange={(page)=>{console.log(page)}}
      />
      <Modal
        title="Basic Modal"
        visible={uploadVisible}
        onOk={handleUpload}
        onCancel={() => {
          setuploadVisible(false);
        }}
      >
        <div className="clearfix">
          <Upload
            action={config.baseUrl+'/uploadPicture'}
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </div>
      </Modal>
    </div>
  );
}
export default order;
