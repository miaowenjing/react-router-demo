import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Spin, Card, Col, Row, Icon, Avatar, Button } from "antd";
import OMobal from "../../components/oModal/oModal.js";
import "./product.scss";
function Product() {
  const [Addvisible, setAddVisible] = useState(false);
  function addSubmit() {
    //  api.getList({
    //   addName,addIndex,addPassword,addSex
    //  })
  }
  const numbers = [
    {
      key: "1",
      imgSrc: require("../../imgs/type2.jpg"),
      title: "婚纱摄影"
    },
    {
      key: "2",
      imgSrc: require("../../imgs/type4.jpg"),
      title: "古风特写"
    },
    {
      key: "3",
      imgSrc: require("../../imgs/type1.jpg"),
      title: "个人写真"
    },
    {
      key: "4",
      imgSrc: require("../../imgs/type7.jpg"),
      title: "情侣写真"
    },
    {
      key: "5",
      imgSrc: require("../../imgs/type6.jpg"),
      title: "童年记忆"
    },
    {
      key: "6",
      imgSrc: require("../../imgs/type5.jpg"),
      title: "毕业季"
    },
    {
      key: "7",
      imgSrc: require("../../imgs/type3.jpg"),
      title: "亲子照"
    },
    {
      key: "8",
      imgSrc: require("../../imgs/type8.jpg"),
      title: "cosplay"
    }
  ];

  function NumberList(props) {
    const numbers = props.numbers;
    const className = props.className;
    const listItems = numbers.map(number => (
      <Col span={5} key={number.key}>
        <Card
          className="cardItem"
          bordered={false}
          cover={<img alt="example" src={number.imgSrc} />}
          actions={[
            // <Icon type="edit" />,
            <Link to={`/logined/produce/${number.key}`}>
              <p type="ellipsis" className="toDetail">
                查看此类型所有套餐
              </p>
            </Link>
          ]}
        >
          <Card.Meta
            avatar={<Avatar src={number.imgSrc} />}
            title={number.title}
          />
        </Card>
      </Col>
    ));
    return (
      <Row className={className} type="flex" justify="space-around">
        {listItems}
      </Row>
      // <ul>{listItems}</ul>
    );
  }
  return (
    <div>
      <div className="AddProduct">
        <span>
          <Icon type="bars" className="icon" />
          <span>商品列表</span>
        </span>
        <Button
          type="primary"
          onClick={() => {
            setAddVisible(true);
          }}
        >
          添加
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
        />
      </div>
      <div style={{ background: "rgb(240, 242, 245)", padding: "10px 30px" }}>
        <NumberList numbers={numbers} />
      </div>
    </div>
  );
}
export default Product;
