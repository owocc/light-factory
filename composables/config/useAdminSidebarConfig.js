// TODO 取消此配置项,改用DOM直接渲染?

export default function useAdminSidebarConfig() {
  const menuList = () => [
    {
      to: "/admin/good",
      text: "灯具管理",
      icon: "i-heroicons-computer-desktop",
      key: "good-manage",
    },
    {
      to: "/admin/category",
      text: "分类管理",
      icon: "i-heroicons-squares-2x2",
      key: "category-manage",
    },
    {
      to: "/admin/order",
      text: "订单管理",
      icon: "i-heroicons-clipboard-document-list",
      key: "order-manage",
    },
    {
      to: "/admin/customized",
      text: "定制信息",
      icon: "i-heroicons-inbox-arrow-down",
      key: "customized-manage",
    },
  ];
  return {
    menuList: menuList(),
  };
}
