// TODO 取消此配置项,改用DOM直接渲染?

export default function useAdminSidebarConfig() {
  const menuList = ()=> [
    {
      to: '/admin/good',
      text: '灯具管理',
      icon: 'i-tabler-shopping-cart-cog',
      key: 'good-manage'
    },
    {
      to: '/admin/category',
      text: '分类管理',
      icon: 'i-tabler-category-2',
      key: 'category-manage'
    },
    {
      to: '/admin/order',
      text: '订单管理',
      icon: 'i-tabler-clipboard-data',
      key: 'order-manage'
    },
    {
      to: '/admin/customized',
      text: '定制信息',
      icon: 'i-tabler-ruler',
      key: 'customized-manage'
    },
    {
      to: '/admin/user',
      text: '用户管理',
      icon: 'i-tabler-user-cog',
      key: 'user-manage'
    },
  
  ]
  return {
    menuList:menuList()
  }
}
