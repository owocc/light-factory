interface NavbarMenu {
  to: string
  title: string
}

export default function useClientNavConfig () {
  const navbarMenuList: NavbarMenu[] = [{
    to: '/',
    title: '首页'
  },
  {
    to: '/category',
    title: '灯具分类'
  },
  {
    to: '/search',
    title: '搜索灯具'
  }
  ]

  const footerLinks = [{
    title: '页面导航',
    links: [
      {
        label: '首页',
        href: '#'
      },
      {
        label: '灯具推荐',
        href: '#popular'
      },
      {
        label: '选购指南',
        href: '#choose'
      }, {
        label: '特色亮点',
        href: '#features'
      }
    ]
  }]
  return {
    navbarMenuList,
    footerLinks
  }
}
