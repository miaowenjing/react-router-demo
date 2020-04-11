import React, { useState, useEffect } from "react";
import {
  Table,
  Divider,
  Tag,
  Cascader,
  TreeSelect,
  Button,
  DatePicker,
  Input,
  List,
  message,
  Modal,
  Skeleton
} from "antd";
import api from "../../api";
const TreeNode = TreeSelect.TreeNode;
function ProDetail(props) {
  const [tableData, setTableData] = useState([]);
  const [visible, setvisible] = useState(false);
  const id = props.match.params.id;
  console.log(props.match.params.id);
  useEffect(() => {
    api.getCombosWithAid(id).then(res => {
      // setCount(res.data.total);
      setTableData(res.data);
      // console.log(tableData);
    });
  }, []);
  const columns = [
    {
      title: "序号",
      dataIndex: "coId",
      key: "coId"
    },
    {
      title: "套餐名称",
      dataIndex: "coName",
      key: "coName"
    },
    {
      title: "类型",
      dataIndex: "coType",
      key: "coType"
    },
    {
      title: "描述",
      dataIndex: "coDesc",
      key: "coDesc"
    },
    {
      title: "可拍摄地点",
      dataIndex: "shootingLocations",
      key: "shootingLocations",
      render: (text, record) => (
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={text}
          renderItem={item => (
            <List.Item
              actions={[
                <a
                  onClick={() => {
                    setvisible(true);
                  }}
                >
                  修改价格
                </a>,
                <a
                  onClick={() => {
                    message.error("删除成功");
                  }}
                >
                  删除该地点
                </a>
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  title={<span>{item.lname}</span>}
                />
                <p>{`￥${item.comboLocation.comboPrice}`}</p>
              </Skeleton>
            </List.Item>
          )}
        />
      )
    },
    //  {
    //   title: '商品价格',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: tags => (
    //     <span>
    //       {tags.map(tag => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
    //       })}
    //     // import React  ,{useState} from 'react';
    //   ),// import React  ,{useState} from 'react';
    // // },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <span>
          <a
            href="javascript:;"
            onClick={() => {
              setvisible(true);
            }}
          >
            新增拍摄地点
          </a>
          <Divider type="vertical" />
          <a
            href="javascript:;"
            onClick={() => {
              message.error("删除成功");
            }}
          >
            删除该套餐
          </a>
        </span>
      )
    }
  ];

  return (
    <div>
      <Table columns={columns} dataSource={tableData} bordered={true} />
      <Modal
        title="修改信息"
        visible={visible}
        onOk={() => {
          setvisible(false);
          message.warn("嘿~，修改了");
        }}
        onCancel={() => {
          setvisible(false);
        }}
      >
        <span>地点</span>
        <Input placeholder="" style={{ margin: "20px 0" }} />
        {/* <span>套餐描述：</span>

        <Input placeholder="" style={{ margin: "20px 0" }} />*/}
        <span>套餐价格：</span>
        <Input placeholder="" style={{ margin: "20px 0" }} /> 
      </Modal>
    </div>
  );
}

export default ProDetail;
// import React  from 'react';
// function ProDetail (){
//   return(
//       <div>258954878784587879</div>
//   )
// }
// export default ProDetail;
