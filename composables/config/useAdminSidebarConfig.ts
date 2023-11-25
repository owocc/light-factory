import type { MenuOption } from 'naive-ui'
import { NuxtLink } from '#components'

const menuList: MenuOption = [
  {
    label: () => h(NuxtLink, {
      to: '/admin'
    }, { default: () => '仪表盘' }),
    key: 'admin'
  },
  {
    label: () => h(NuxtLink, {
      to: '/admin/lamp'
    }, { default: () => '灯具分类管理' }),
    key:
      'pinball-19312'
  },
  {
    label: () => h(NuxtLink, {
      to: '/admin/lamp'
    }, { default: () => '灯具管理' }),
    key:
      'pinball-1973'
  },
  {
    label: '订单管理',
    key:
      'a-wild-sheep-chasesd'
  },
  {
    label: () => h(NuxtLink, {
      to: '/admin/lamp'
    }, { default: () => '站点管理' }),
    key:
      'pinball-asdasd'
  },
  {
    label: '私人定制',
    key:
      'a-wild-sheep-chase'
  }
]
export default function useAdminSidebarConfig () {
  return {
    menuList
  }
}
