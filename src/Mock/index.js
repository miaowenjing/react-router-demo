import Mock from 'mockjs'

Mock.mock('/hhhhhh', {
    code: 0,
    codeMsg: '成功',
    data: { table:[
        {
          key: "1",
          name: "lalala",
          index: "胡彦斌",
          password: 32,
          address: "西湖区湖底公园1号"
        },
        {
          key: "2",
          name: "lalala",
          index: "胡彦祖",
          password: 42,
          address: ["西湖区湖底公园1号",123,123]
        },
        {
          key: "1",
          name: "lalala",
          index: "胡彦斌",
          password: 32,
          address: ["西湖区湖底公园1号",123,123]
        },
        {
          key: "2",
          name: "lalala",
          index: "胡彦祖",
          password: 42,
          address: ["西湖区湖底公园1号",123,123]
        },
        {
          key: "1",
          name: "lalala",
          index: "胡彦斌",
          password: 32,
          address: ["西湖区湖底公园1号",123,123]
        },
        {
          key: "2",
          name: "lalala",
          index: "胡彦祖",
          password: 42,
          address: ["西湖区湖底公园1号",123,123]
        }
      ]}
})