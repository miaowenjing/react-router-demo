import React, { useState } from "react";
import { Table, Divider, Button ,Input} from "antd";
import OMobal from "./oModal.js";
function User() {
  const [Addvisible, setVisible] = useState(false);
  const dataSource = [
    {
      key: "1",
      name: "lalala",
      index: "胡彦斌",
      password: 32,
      address: "西湖区湖底公园1号"
    },
    {
      key: "2",
      name: "lalala",
      index: "胡彦祖",
      password: 42,
      address: ["西湖区湖底公园1号",123,123]
    },
    {
      key: "1",
      name: "lalala",
      index: "胡彦斌",
      password: 32,
      address: ["西湖区湖底公园1号",123,123]
    },
    {
      key: "2",
      name: "lalala",
      index: "胡彦祖",
      password: 42,
      address: ["西湖区湖底公园1号",123,123]
    },
    {
      key: "1",
      name: "lalala",
      index: "胡彦斌",
      password: 32,
      address: ["西湖区湖底公园1号",123,123]
    },
    {
      key: "2",
      name: "lalala",
      index: "胡彦祖",
      password: 42,
      address: ["西湖区湖底公园1号",123,123]
    }
  ];

  const columns = [
    {
      title: "序号",
      dataIndex: "key",
      key: "key"
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "账号",
      dataIndex: "index",
      key: "index"
    },
    {
      title: "密码",
      dataIndex: "password",
      key: "password"
    },
    {
      title: "收货地址",
      dataIndex: "address",
      key: "address",
      // render: tags => (
      //   <span>
      //     {tags.map(tag => {
      //     console.log(tag)
            
      //       return <span>123</span>;
      //     })}
      //   </span>
      // ),
    },
    {
      title: "操作",
      dataIndex: "action",
      render: () => (
        <span>
          <a href="javascript:;">修改密码 </a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
        </span>
      )
    }
  ];
  return (
    <div id="user">
      <div className="information">
        <span>共20条数据</span>
        <Button 
         type="primary" 
         onClick ={() =>{
           setVisible(true)
         }}>新增</Button>
        <OMobal 
          visible={Addvisible} 
          title='新增'
          onOk={()=>{setVisible(true)}}
          onCancel={()=>{setVisible(false)}} 
          >
          123</OMobal>
          <span class='search'>
          <Input.Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 500 }}
    />
          </span>
      </div>
      
      
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default User;
