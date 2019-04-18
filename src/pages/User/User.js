import React, { useState ,useEffect} from "react";
import { Table, Divider, Button ,Input ,Modal,Radio} from "antd";
import api from '../../api/index'
import OMobal from "./oModal.js";
import './User.scss'
// const confirm = Modal.confirm;
// const { Option } = Select;

function User() {
  const [Addvisible, setVisible] = useState(false);
  useEffect(() =>{
     var res= getData()
    console.log(res.data)
    

  })
  async function getData (){
    api.getList()
  }
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
      title: "性别",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "更多",
      dataIndex: "address",
      key: "address",
      render:()=>(<a>查看更多信息</a>)
    },
    {
      title: "操作",
      dataIndex: "action",
      render: () => (
        <span>
          <Button onClick={showDeleteConfirm} type="dashed">修改用户信息</Button>
          <Divider type="vertical" />
          <Button onClick={showDeleteConfirm} type="danger">删除 </Button>
        </span>
      )
    }
  ];

  function showDeleteConfirm() {
    Modal.confirm({
      title: '确定删除此用户?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }


  return (
    <div id="user">
      <div className="information">
        <span>共20条数据</span>
        <Button  
         className='addButton'
         type="primary" 
         onClick ={() =>{
           setVisible(true)
         }}>新增</Button>
        <OMobal 
          visible={Addvisible} 
          title='新增'
          onOk={()=>{setVisible(true)}}
          onCancel={()=>{setVisible(false)}} 
          okText='添加'
          cancelText= '取消'
          >
          <div className='item'>
           <span>用户姓名</span>
           <Input placeholder="Basic usage" />
          </div>
          <div className='item'>
           <span>用户帐号</span>
           <Input placeholder="Basic usage" />
          </div>
          <div className='item'>
           <span>用户密码</span>
           <Input placeholder="Basic usage" />
          </div>
         
     
          </OMobal>
          <span class='search'>
          <Input.Search
            placeholder="请输入用户帐号"
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
