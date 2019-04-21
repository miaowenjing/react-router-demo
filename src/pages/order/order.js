import React, {useState,useEffect } from 'react'
import { Icon ,Table ,Collapse} from 'antd';
import './order.scss'
import UserTable from '../../components/oTable/oTable'
// import { useState, useEffect } from 'react';
import api from '../../api/index'
const Panel = Collapse.Panel;
function order(){
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(1)
  const [TableData,setTableData] =  useState(null)
  useEffect(() => {
    api.getList({
      page:current,
      pageSize:5
    }).then(res => {
      setCount(res.data.count);
      setTableData(res.data.data);
      console.log(res.data);
    });
  },[current]);
      const columns = [{
        title: '订单编号',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '订单金额',
        dataIndex: 'key',
        key: 'key',
      }, {
        title: '收货人',
        dataIndex: 'address',
        key: 'address',
      },{
        title: '订单状态',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '订单类别',
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
        className:'orderDetail',
        render:()=>(
            <Collapse 
            onChange={callback}>
              <Panel  header="订单详情">
                <img src='http://e.hiphotos.baidu.com/image/pic/item/c75c10385343fbf29663a22ebe7eca8065388f6b.jpg'></img>
                
              </Panel>
           </Collapse> )
      }];
      function pageChange (page){
        setCurrent(page)
      }
      function callback(key) {
        console.log(key);
      }
 return(
     <div id='order'>
       <div className='desc'>
       <Icon type="bars" className='descIcon'/>
       <span>订单列表</span>
       </div>
       < UserTable 
     className='orderTable'
     dataSource={TableData}
     columns={columns}
     total={count}  
     onChange={pageChange}
    //  onChange={(page)=>{console.log(page)}}
     ></UserTable>
      </div>
 )
}
export default order;