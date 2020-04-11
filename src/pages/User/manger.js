import React, { useState, useEffect } from "react";
import {
  Table,
  Divider,
  Button,
  message,
  Input,
  Modal,
  Radio,
  Pagination
} from "antd";
import api from "../../api/index";
import OMobal from "../../components/oModal/oModal.js";
import "./User.scss";

const RadioGroup = Radio.Group;
function User() {
  const [addName, setAddName] = useState("");
  const [addPassword, setaddPassword] = useState("");
  const [addRole, setaddRole] = useState(1);
  const [count, setCount] = useState(0);
  const [searchData, setSearchData] = useState("");
  const [current, setCurrent] = useState(1);
  const [TableData, setTableData] = useState(null);
  // const [page,setPage]=useState(1)
  const [Addvisible, setAddVisible] = useState(false);
  const [chgvisible, setChgVisible] = useState(false);
  const [chgPassword, setchgPassword] = useState("");
  const [chgName,setchgName]=useState('');
  const [fresh,setFresh]=useState(true);

  useEffect(() => {
    api.getAllEmployee().then(res => {
        setCount(res.data.count);
      setTableData(res.data);
    });
  }, [fresh]);

  const columns = [
    {
      title: "序号",
      dataIndex: "eid",
      key: "eid"
    },
    {
      title: "姓名",
      dataIndex: "username",
      key: "username"
    },
    {
      title: "密码",
      dataIndex: "password",
      key: "password"
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
      render: (text, record) => <span>{text.rname}</span>
    },
    {
      title: "操作",
      dataIndex: "action",
      render: (text, record) => (
        <span>
          <Button
            type="dashed"
            onClick={() => {
              setChgVisible(true);
              setchgName(record.eid);
            }}
          >
            修改{record.username}信息
          </Button>
          <Divider type="vertical" />

          <Button
            onClick={() => {
              showDeleteConfirm(record.eid);
            }}
            type="danger"
          >
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
        api.deleteEmployee(id).then(res => {
          setChgVisible(false);
          message.error('已删除')
          setFresh(!fresh)
        });
      }
    });
  }
  function pageChange(page) {
    setCurrent(page);
  }
  function addSubmit() {
    console.log(addName, addPassword, addRole);
    api
      .addEmployee({
        username: addName,
        password: addPassword,
        "role.rid": addRole
      })
      .then(res => {
        message.info('叮~添加成功')
        setFresh(!fresh)
      });
      setAddVisible(false);
  }

  function chgSubmit(text) {
    api
      .editEmployee({
        password: chgPassword,
        eid:chgName
      })
      .then(res => {
        message.warning("修改完成");
        setChgVisible(false);
        setFresh(!fresh)
      });
  }
  return (
    <div id="user">
      <div className="information">
        <Button
          className="addButton"
          type="primary"
          onClick={() => {
            setAddVisible(true);
          }}
        >
          新增管理员
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
            <Input
              placeholder="请输入用户姓名"
              value={addName}
              onChange={val => {
                setAddName(val.target.value);
              }}
            />
          </div>
          <div className="item">
            <span>用户密码</span>
            <Input
              placeholder="请输入用户密码"
              value={addPassword}
              onChange={val => {
                setaddPassword(val.target.value);
              }}
            />
          </div>
          <div className="item">
            <RadioGroup
              onChange={val => {
                setaddRole(val.target.value);
              }}
              value={addRole}
            >
              <span>角色</span>
              <Radio value={1}>管理员</Radio>
              <Radio value={2}>摄影师</Radio>
            </RadioGroup>
          </div>
        </OMobal>
      </div>
      <Table
        className="userTable"
        dataSource={TableData}
        columns={columns}
        // pagination={false}
      />
      <OMobal
        visible={chgvisible}
        title="修改"
        onOk={() => {
          chgSubmit();
        }}
        onCancel={() => {
          setChgVisible(false);
        }}
        okText="修改"
        cancelText="取消"
      >
        <div className="item">
          <span>用户密码</span>
          <Input
            placeholder="请输入用户密码"
            value={chgPassword}
            onChange={val => {
              setchgPassword(val.target.value);
            }}
          />
        </div>
      </OMobal>
    </div>
  );
}

export default User;
