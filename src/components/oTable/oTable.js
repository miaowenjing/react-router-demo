import React  from 'react';
import { Table ,Pagination } from 'antd';
function oTable ({className,dataSource,  columns, total,onChange,children,...res},){

    return (
        <div className={className}>
   <Table
      dataSource={dataSource} 
      columns={columns}
      pagination={false} 
      {...res}/>
      
    <Pagination 
      showQuickJumper 
      total={total}  
      onChange={onChange}
      />
        </div>
 
    );

}

export default oTable;
