import React  ,{useState} from 'react';
import { Table, Divider, Tag,Cascader ,TreeSelect,Button,DatePicker } from 'antd';
const TreeNode = TreeSelect.TreeNode;
function ProDetail (){
 const [value,setValue]=useState(undefined)
    const columns = [{
        title: '序号',
        dataIndex: 'key',
        key: 'key',
      }, {
        title: '商品图片',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '商品名称',
        dataIndex: 'address',
        key: 'address',
      }, 
      {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
      }, 
      {
        title: '商品描述',
        dataIndex: 'desc',
        key: 'desc',
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
      // },
       {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;">编辑 {record.name}</a>
            <Divider type="vertical" />
            <a href="javascript:;">删除</a>
          </span>
        ),
      }];
      
      const data = [{
        key: '1',
        name: 'John Brown',
        age: 32,
        time:11111,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        time:11111,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        time:11111,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      }];
      const options = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [{
            value: 'xihu',
            label: 'West Lake',
          }],
        }],
      }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
          value: 'nanjing',
          label: 'Nanjing',
          children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          }],
        }],
      }];
      function onChange(value) {
        console.log(value);
      }
      function filter(inputValue, path) {
        return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
      }
    return (
        <div>
            <div className='information'>
            <span>查找商品</span>
            <TreeSelect
        showSearch
        style={{ width: 300 }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        multiple
        treeDefaultExpandAll
        // onChange={this.onChange}
      >
        <TreeNode value="parent 1" title="parent 1" key="0-1">
          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
            <TreeNode value="leaf1" title="my leaf" key="random" />
            <TreeNode value="leaf2" title="your leaf" key="random1" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
            <span>按价格查询</span>
            <Cascader options={options} onChange={onChange} placeholder="Please select"  showSearch={{ filter }} style={{width:'200px'}}/>
            <span>按时间查询</span>
            <DatePicker.RangePicker/>
            <Button type="primary">提交</Button>
            </div>
           <Table columns={columns} dataSource={data} />    
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