import React from 'react'
import { Icon ,Table ,Collapse} from 'antd';
import './order.scss'
const Panel = Collapse.Panel;
function order(){
    const dataSource = [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }];
      
      const columns = [{
        title: '订单编号',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '订单金额',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '收货人',
        dataIndex: 'address',
        key: 'address',
      },{
        title: '订单状态',
        dataIndex: 'age',
        key: 'age',
      },{
        title: '订单时间',
        dataIndex: 'age',
        key: 'age',
      },{
        title: '订单详情',
        dataIndex: 'age',
        key: 'age',
        render:()=>(
            <Collapse defaultActiveKey={['1']} onChange={callback}>
              <Panel header="订单详情" key="1">
               <p>25895</p>
              </Panel>
           </Collapse> )
      },];
      function callback(key) {
        console.log(key);
      }
 return(
     <div id='order'>
       <div className='desc'>
       <Icon type="bars" className='descIcon'/>
       <span>订单列表</span>
       </div>
       <Table dataSource={dataSource} columns={columns} />
     </div>
 )
}
export default order;