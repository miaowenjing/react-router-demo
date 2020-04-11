import React  from 'react';
import { Table ,Pagination } from 'antd';
import './oTable.scss'
function oTable ({className,dataSource,  columns,pageSize, total,onChange,children,...res},){

    return (
        <div className={className}>
   <Table
      dataSource={dataSource} 
      columns={columns}
      pagination={false} 
      {...res}/>
      
    <Pagination 
      // showQuickJumper 
      pageSize={pageSize}
      total={total}  
      onChange={onChange}
      />
        </div>
 
    );

}

export default oTable;
