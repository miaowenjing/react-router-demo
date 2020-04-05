import React, { useState, useEffect } from "react";
import {
  Table,
  Divider,
  Button,
  Input,
  Modal,
  Radio,
  message,
  Pagination,
  Upload,
  Icon,
} from "antd";
import api from "../../api/index";
import config from "../../config/index";
import OMobal from "../../components/oModal/oModal.js";
import "./clothes.scss";
import UserTable from "../../components/oTable/oTable";
const Dragger = Upload.Dragger;
const RadioGroup = Radio.Group;
function User() {
  const [addName, setAddName] = useState("");
  const [addPrice, setaddPrice] = useState("");
  const [addAmount, setaddAmount] = useState("");
  const [addType, setaddType] = useState("");
  const [addAvatar, setaddAvatar] = useState({});
  const [count, setCount] = useState(0);
  const [searchData, setSearchData] = useState("");
  const [current, setCurrent] = useState(1);
  const [TableData, setTableData] = useState(null);
  // const [page,setPage]=useState(1)
  const [Addvisible, setAddVisible] = useState(false);
  const [chgvisible, setChgVisible] = useState(false);
  const [addFormData, setAddFormData] = useState(null)

  useEffect(() => {
    api
      .getAllRentClothes({
        // pageNum: 1,
        // rows: 5
      })
      .then(res => {
        setCount(res.data.total);
        // setTableData(res.data.rows);
        setTableData(res.data);
        console.log(res.data);
      });
  }, []);

  const columns = [
    {
      title: "序号",
      dataIndex: "cloId",
      key: "eid"
    },
    {
      title: "图片",
      dataIndex: "cloPicture",
      key: "eid",
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
      render: (text, record) => <span>123</span>
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
            }}
          >
            修改{record.username}信息
          </Button>
          <Divider type="vertical" />

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

  function showDeleteConfirm(id) {
    Modal.confirm({
      title: "确定删除此服装?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        api.deleteRentClothesWithId(id).then(() => {
          message.error('删除成功')
        })
      }
    });
  }
  function pageChange(page) {
    setCurrent(page);
  }
  function addSubmit() {
    const formData = new FormData();
    console.log(addFormData, addName, addPrice, addAmount, addType)



  // api.addRentClothes()

    // formData.append( addAvatar);
    // console.log(addName, addPrice, addAmount, addType, addAvatar.name);
    // api
    //   .addRentClothes(
    //     `${addName}/${addPrice}/${addAvatar.name}/${addAmount}/${addType}`
    //   )
    //   .then(res => {
    //     console.log(res);
    //     message.info('biubiu，添加成功了');
    //     setAddVisible(false)
    //     // setAddVisible(true);

    //   }).catch(()=>{
    //     message.error('哎呀，添加失败了');
    //     setAddVisible(false)
    //   });
  }
  function handleSearch(e) {
    // api.getList({
    //   id: e
    // });
  }
  function chgSubmit() {
    const formData = new FormData();
    // formData.append( addAvatar);
    console.log()
    // api.chg
    // api
    //   .addRentClothes(
    //     `${addName}/${addPrice}/${addAvatar.name}/${addAmount}/${addType}`
    //   )
    //   .then(res => {
    //     console.log(res);
    //     message.info('嘻嘻嘻，修改成功了');
    //     setAddVisible(false)
    //     // setAddVisible(true);

    //   }).catch(() => {
    //     message.error('妈呀，修改失败了');
    //     setChgVisible(false);
    //   });
  }
  const props = {
    name: "file",
    multiple: true,
    // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    // action:`${api.addRentClothes}?cloName=dcsac&cloPrice=12&cloAmount=12&cloType=1`,
    onChange(info) {
      // const status = info.file.status;
      // let file = info.fileList[0];
      // setaddAvatar(file);
      // if (status !== "uploading") {
      //   console.log(info.file, info.fileList, file);
      // }
      // if (status === "done") {
      //   message.success(`${info.file.name} file uploaded successfully.`);
      // } else if (status === "error") {
      //   message.error(`${info.file.name} file upload failed.`);
      // }
      const obj = new FormData();
      obj.set('file', info.file.originFileObj)
      console.log(obj, info.file.originFileObj)
      setAddFormData(obj)
      api.addRentClothes(obj)
    }
  };


  function handleFileChange(e) {
    const input = e.target;
    const files = e.target.files;
    const formData = new FormData();
    if (files && files[0]) {
      const file = files[0];

      formData.append("file", file);
      console.log(file)
      api.addRentClothes(file)
      //  if(file.size > 1024 * 1024 *3) {
      //     //  fileTip.innerHTML = '文件大小不能超过3M!';
      //      input.value = '';
      //      return false;
      //  } else {
      //     //  fileTip.innerHTML = '';

      //  }
    }
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
            {/* <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <Icon type="user-add" />
              </p>
              <p className="ant-upload-text">点击或拖拽上传头像</p>
            </Dragger> */}
            <div className="section-pushInChannel-fileInput">
              <input id="file" onChange={handleFileChange} type="file" name="file" multiple="multiple"></input>
              {/* <div className="fileTip"></div> */}
            </div>
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
            <Input
              placeholder="输入类型"
              value={addType}
              onChange={val => {
                setaddType(val.target.value);
              }}
            />
          </div>
        </OMobal>
      </div>
      <Table
        className="userTable"
        dataSource={TableData}
        columns={columns}
        pagination={false}
      />
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
          <Input
            placeholder="修改服装名称"
            value={addName}
            onChange={val => {
              setAddName(val.target.value);
            }}
          />
        </div>
        {/* <div className="item">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="user-add" />
            </p>
            <p className="ant-upload-text">点击或拖拽上传</p>
          </Dragger>
        </div> */}
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
          <Input
            placeholder="输入类型"
            value={addType}
            onChange={val => {
              setaddType(val.target.value);
            }}
          />
        </div>
      </OMobal>
    </div>
  );
}

export default User;
