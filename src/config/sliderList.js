export default [
    {
      mainTitle: '用户信息管理',
      children: [{
        title: '用户信息管理',
        url: '/logined/user',
        pid:1,
      },
      {
        title: '管理员信息管理',
        url: '/logined/manger',
        pid:4,
      }]
    }, {
      mainTitle: '产品管理',
      children: [{
        title: '拍摄套餐管理',
        url: '/logined/produce',
        pid:3,
      },
      {
        title: '租赁服装管理',
        url: '/logined/clothes',
        pid:2,
      }]
    },
    {
      mainTitle: '订单管理',
      children: [{
        title: '拍摄订单管理',
        url: '/logined/order',
        pid:5,
      },
      {
        title: '服装租赁管理',
        url: '/logined/clothesOrder',
        pid:6
      }]
    },
   
  ]