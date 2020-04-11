import React, { useState, useEffect } from "react";
import {
  Table,
  Divider,
  Button,
  Input,
  Modal,
  Radio,
  message,
  Select,
  Upload,
  Icon,
} from "antd";
import api from "../../api/index";
import config from "../../config/index";
import OMobal from "../../components/oModal/oModal.js";
import "./clothes.scss";
import UserTable from "../../components/oTable/oTable";

const { Option } = Select;
const RadioGroup = Radio.Group;
function User() {
  const [addName, setAddName] = useState("");
  const [addPic, setaddPic] = useState("");
  const [addPrice, setaddPrice] = useState("");
  const [addAmount, setaddAmount] = useState("");
  const [addType, setaddType] = useState("");
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(1);
  const [TableData, setTableData] = useState(null);
  const [Addvisible, setAddVisible] = useState(false);
  const [fresh, setFresh] = useState(true)

  const props = {
    name: "file",
    action: config.baseUrl + '/uploadPicture',
    onChange(info) {
      const status = info.file.status;
      if (status === "done") {
        setaddPic(info.file.response)
      }

    }
  };
  const typeList=[null,'礼服','婚纱','汉服','cosplay']

  const columns = [
    {
      title: "序号",
      dataIndex: "cloId",
      key: "cloId"
    },
    {
      title: "图片",
      dataIndex: "cloPicture",
      key: "cloPicture",
      render: (text, record) => (
        // <img className="pic" src={require(`../../imgs/${text}`)} />
        <img className="pic" src={`${config.baseUrl}/images/${text}`} />
      )
    },
    {
      title: "名称",
      dataIndex: "cloName",
      key: "cloName"
    },
    {
      title: "价格",
      dataIndex: "cloPrice",
      key: "cloPrice",
      render: (text, record) => <span>{`￥${text}`}</span>
    },
    {
      title: "数量",
      dataIndex: "cloAmount",
      key: "cloAmount"
    },
    {
      title: "类型",
      dataIndex: "cloType",
      key: "cloType",
      render: (text, record) => <span>{typeList[text]}</span>
    },
    {
      title: "操作",
      dataIndex: "action",
      render: (text, record) => (
        <span>
          {/* <Button
            type="dashed"
            onClick={() => {
              setChgVisible(true);
            }}
          >
            修改{record.username}信息
          </Button>
          <Divider type="vertical" /> */}

          <Button
            onClick={() => {
              showDeleteConfirm(record.cloId);
            }}
            type="danger"
          >
            删除
          </Button>
        </span>
      )
    }
  ];
  useEffect(() => {
    api
      .getAllRentClothes({
        pageNum: current,
        rows: 3
      })
      .then(res => {
        console.log(res)
        setCount(res.data.total);
        setTableData(res.data.rows);
      });
  }, [current, fresh]);

  function showDeleteConfirm(id) {
    Modal.confirm({
      title: "确定删除此服装?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        api.deleteRentClothesWithId(id).then(() => {
          message.error('删除成功');
          setFresh(!fresh)
        })
      }
    });
  }
  function pageChange(page) {
    setCurrent(page);
  }
  function addSubmit() {
    api.addRentClothes(`cloName=${addName}&cloPrice=${addPrice}&cloPicture=${addPic}&cloAmount=${addAmount}&cloType=${addType}`).then(res => {
      message.info('biubiu，添加成功了');
      setAddVisible(false);
      setFresh(!fresh)
    }).catch(() => {
      message.error('哎呀，添加失败了');
      setAddVisible(false)
    });
  }

  return (
    <div className="clothes">
      <div className="information">
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
            <Input
              placeholder="请输入服装名称"
              value={addName}
              onChange={val => {
                setAddName(val.target.value);
              }}
            />
          </div>
          <div className="item">
            <Upload {...props}>
              <p className="ant-upload-drag-icon">
                <Button>点击上传图片</Button>
              </p>
            </Upload>
          </div>
          <div className="item">
            <Input
              placeholder="输入价格"
              value={addPrice}
              onChange={val => {
                setaddPrice(val.target.value);
              }}
            />
          </div>
          <div className="item">
            <Input
              placeholder="输入数量"
              value={addAmount}
              onChange={val => {
                setaddAmount(val.target.value);
              }}
            />
          </div>
          <div className="item">
            {/* <Input
              placeholder="输入类型"
              value={addType}
              onChange={val => {
                setaddType(val.target.value);
              }} */}
            <Select defaultValue="1" style={{ width: 120 }} onChange={val => {
                setaddType(val);
                // console.log(val)
              }}>
              <Option value="1">礼服</Option>
              <Option value="2">婚纱</Option>
              <Option value="3">汉服</Option>
              <Option value="4">cosplay</Option>
            </Select>
            {/* /> */}
          </div>
        </OMobal>
      </div>
      <UserTable
        className="userTable"
        dataSource={TableData}
        columns={columns}
        total={count}
        pageSize={3}
        onChange={pageChange}
      />

    </div>
  );
}

export default User;
