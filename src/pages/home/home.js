import React, { Component } from 'react';
import { Carousel ,Card } from 'antd';
import './home.scss'
const { Meta } = Card;
class home extends Component {


render() {
    return (
        <div>
   <Carousel vertical autoplay>
 <div>
    <Card
    hoverable
    style={{ width: '200px ' ,height:'100px'}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </Card>
  </div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
        </div>
    );
}
}

export default home;