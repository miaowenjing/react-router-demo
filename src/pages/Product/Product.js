import React  from 'react';
import {Link} from 'react-router-dom'
import { Card, Col, Row ,Icon, Avatar,Button} from 'antd';
 function Product() {

     return(
         <div>
        <div class='AddProduct'>
         <span>
         <Icon type="pic-center" />
         <span>商品列表</span>
         </span>
         <Button type="primary">添加</Button>
        </div>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
          <Link to='/produce/skincare'>
            <Card 
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                 <Card.Meta
                    //  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                     title="护肤"
                     description="This is the description"
                 />
            </Card>
            </Link>
          </Col>
          <Col span={8}>
          <Link to='/produce/skincare'>
          <Card 
              bordered={false}   
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                 <Card.Meta
                     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                     title="彩妆"
                     description="This is the description"
                 />
            </Card>
            </Link>
          </Col>
          <Col span={8}>
          <Link to='/produce/skincare'>
          <Card 
              bordered={false}   
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                 <Card.Meta
                     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                     title="香水"
                     description="This is the description"
                 />
            </Card>
            </Link>
          </Col>
        </Row>
      </div>
        {/* {this.props.children} */}
      </div>
     )
 }
 export default Product;