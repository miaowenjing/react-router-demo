import React, { useState, useEffect } from "react";
import {Link, withRouter} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import {Spin , Card, Col, Row ,Icon, Avatar,Button} from 'antd';
import OMobal from "../../components/oModal/oModal.js";
import './product.scss'
 function Product() {
  const [Addvisible, setAddVisible] = useState(false);
   function addSubmit(){
  //  api.getList({
  //   addName,addIndex,addPassword,addSex
  //  })
  }  
  const numbers = 
  [{key:'a',
    imgSrc:'https://img.bj520.com/201812/4d8290bf3f.jpg',
    toRouter:'/produce/a',
    title:"服务",
}, {key:'b',
  imgSrc:'https://img.bj520.com/201812/4d8290bf3f.jpg',
toRouter:'/produce/a',
title:"服务",
},{key:'c',
  imgSrc:'https://img.bj520.com/201812/4d8290bf3f.jpg',
toRouter:'/produce/a',
title:"服务",
},{key:'d',
  imgSrc:'https://img.bj520.com/201812/4d8290bf3f.jpg',
toRouter:'/produce/a',
title:"6666服务",
}];

  function NumberList(props) {
    const numbers = props.numbers;
    const className=props.className;
    const listItems = numbers.map((number) =>
      <Col span={5} key={number.key}>
      <Card 
         className='cardItem'
          bordered={false}   
          cover={<img alt="example" src={number.imgSrc} />}
          actions={[<Icon type="edit" />, 
           <Icon type="ellipsis" 
          className='toDetail'
          onClick={()=>{
            createBrowserHistory({
              forceRefresh: true, // 是否强制刷新整个页面
            }).push('/produce/a')
            }}
          ></Icon> ]}>
             <Card.Meta
                 avatar={<Avatar src="https://img.bj520.com/201812/4d8290bf3f.jpg" />}
                 title={number.title}
             />
        </Card>
      </Col>
    
   
    );
    return (
      <Row className={className} type="flex" justify="space-around">
       {listItems}
   </Row>
  // <ul>{listItems}</ul>
    );
  }
  return(
         <div>
        <div className='AddProduct'>
         <span>
         <Icon type="bars" className='icon'/>
         <span>商品列表</span>
         </span>
         <Button type="primary" onClick={()=>{setAddVisible(true)}}>添加</Button>
         <OMobal
          visible={Addvisible}
          title="新增"
          onOk={addSubmit}
          onCancel={() => {
            setAddVisible(false);
          }}
          okText="添加"
          cancelText="取消"
        ></OMobal>
        </div>
        <div style={{ background: 'rgb(240, 242, 245)', padding: '10px 30px' }}>
            <NumberList numbers={numbers} />
            <NumberList numbers={numbers} className='twoLine'/>
      
   
       </div>
      </div>
     )
 }
 export default Product;