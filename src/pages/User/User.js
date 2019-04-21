import React, { useState, useEffect } from "react";
import { Table, Divider, Button, Input, Modal, Radio ,Pagination} from "antd";
import api from "../../api/index";
import OMobal from "../../components/oModal/oModal.js";
import "./User.scss";
import UserTable from '../../components/oTable/oTable'
const RadioGroup = Radio.Group;
function User() {
  const [addName, setAddName] = useState('')
  const [addIndex, setaddIndex] = useState('')
  const [addPassword, setaddPassword] = useState("")
  const [addSex, setaddSex] = useState(1)
  const [count, setCount] = useState(0);
  const [searchData,setSearchData] = useState('')
  const [current, setCurrent] = useState(1)
  const [TableData,setTableData] =  useState(null)
  // const [page,setPage]=useState(1)
  const [Addvisible, setAddVisible] = useState(false);
  const [chgvisible, setChgVisible] = useState(false);

  useEffect(() => {
    api.getList({
      page:current,
      pageSize:10
    }).then(res => {
      setCount(res.data.count);
      setTableData(res.data.data);
      console.log(res.data);
    });
  },[current]);



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
      key: "address"
    },
    {
      title: "更多",
      dataIndex: "address",
      key: "address",
      render: () => <a>查看更多信息</a>
    },
    {
      title: "操作",
      dataIndex: "action",
      render: (text,record) => (
        <span>
          <Button type="dashed" onClick={()=>{setChgVisible(true)}}>
            修改{record.name}信息
          </Button>
          <Divider type="vertical" />
        
          <Button onClick={()=>{showDeleteConfirm(record.key)}} type="danger">
            删除
          </Button>
        </span>
      )
    }
  ];

 
  function showDeleteConfirm(id) {
    Modal.confirm({
      title: "确定删除此用户?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        api.getList({
          id:id
        })
      },
    });
  }
  function pageChange (page){
    setCurrent(page)
  }
  function addSubmit(){
   api.getList({
    addName,addIndex,addPassword,addSex
   })
  }
function handleSearch(e){
 api.getList({
    id:e
 })
}
function chgSubmit(){
  api.getList({
    
   })
}
  return (
    <div id="user">
      <div className="information">
        <span>共{count}条数据</span>
        <Button
          className="addButton"
          type="primary"
          onClick={() => {
            setAddVisible(true);
          }}
        >
          新增
        </Button>
        <OMobal
          visible={Addvisible}
          title="新增"
          onOk={addSubmit}
          onCancel={() => {
            setAddVisible(false);
          }}
          okText="添加"
          cancelText="取消"
        >
          <div className="item">
            <span>用户姓名</span>
            <Input placeholder="请输入用户姓名" value={addName} onChange={val =>{setAddName(val.target.value)}}/>
          </div>
          <div className="item">
            <span>用户帐号</span>
            <Input placeholder="请输入用户帐号" value={addIndex} onChange={val =>{setaddIndex(val.target.value)}}/>
          </div>
          <div className="item">
            <span>用户密码</span>
            <Input placeholder="请输入用户密码" value={addPassword} onChange={val =>{setaddPassword(val.target.value)}}/>
          </div>
          <div className="item">
            <RadioGroup  onChange={val => {setaddSex(val.target.value)}} value={addSex}>
              <span>性别</span>
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
            </RadioGroup>
          </div>
        </OMobal>
        <span class="search">
          <Input.Search
            placeholder="请输入用户帐号"
            // value={searchData}
            onSearch={handleSearch}
            style={{ width: 500 }}
          />
        </span>
      </div>
     < UserTable 
     className='userTable'
     dataSource={TableData}
     columns={columns}
     total={count}  
     onChange={pageChange}
    //  onChange={(page)=>{console.log(page)}}
     ></UserTable>
      <OMobal
          visible={chgvisible}
          title="修改"
          onOk={chgSubmit}
          onCancel={() => {
            setChgVisible(false);
          }}
          okText="修改"
          cancelText="取消"
          
        >
          <div className="item">
            <span>用户密码</span>
            <Input placeholder="请输入用户密码" value={addPassword} onChange={val =>{setaddPassword(val.target.value)}}/>
          </div>
        </OMobal>
    </div>
  );
}

export default User;
