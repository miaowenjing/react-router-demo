import React, { useState, useEffect } from "react";
import { Table, Divider, Button, Input,message, Modal, Radio, Pagination } from "antd";
import api from "../../api/index";

import "./User.scss";
import UserTable from "../../components/oTable/oTable";
// import OMobal from "../../components/oModal/oModal.js";

function User() {
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(1);
  const [TableData, setTableData] = useState(null);
  const [fresh,setFresh] = useState(true)

  // useEffect(() => {
  //    api.customerIndex().then((res)=>{
  //      console.log(res)
  //    })
  // }, []);
  useEffect(() => {
    getData();
  }, [current,fresh]);


  const columns = [
    {
      title: "序号",
      dataIndex: "custId",
      key: "custId"
    },
    {
      title: "姓名",
      dataIndex: "custName",
      key: "custName"
    },
    {
      title: "账号",
      dataIndex: "custPhone",
      key: "custPhone"
    },
    {
      title: "密码",
      dataIndex: "password",
      key: "password"
    },
    {
      title: "操作",
      dataIndex: "action",
      render: (text, record) => (
        <Button onClick={()=>{showDeleteConfirm(record.custId)}} type="danger">
          删除
        </Button>
      )
    }
  ];

  function getData(){
    api
    .getAllCustomer({
      pageNum: current,
      rows: 10
    })
    .then(res => {
      setCount(res.data.total);
      setTableData(res.data.rows);
    });
  }
  function showDeleteConfirm(id) {
    Modal.confirm({
      title: "确认删除?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        // api.deleteCustomer(id).then(()=>{
        //   message.error('删除完成')
        // })
        setFresh(!fresh);
        console.log(fresh);
      },
    });
  }
  function pageChange(page) {
    setCurrent(page);
    console.log(page);
  }
  return (
    <div id="user">
      <UserTable
        className="userTable"
        dataSource={TableData}
        columns={columns}
        total={count}
        onChange={pageChange}
        pagination={false}
        //  onChange={(page)=>{console.log(page)}}
      />
    </div>
  );
}

export default User;
