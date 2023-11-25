import {MenuOption} from "naive-ui";

const menuList: MenuOption = [
  {
    label: '仪表盘',
    key: 'hear-the-wind-sing',
  },
  {
    label: '灯具管理',
    key: 'pinball-1973',
    children: [
      {
        label: '哈哈',
        key: 'rat'
      }
    ]
  },
  {
    label: '订单管理',
    key: 'a-wild-sheep-chasesd',
  },
  {
    label: '私人定制',
    key: 'a-wild-sheep-chase',
  },
  {
    label: '站点管理',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '首页',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
          },
          {
            label: '羊男',
            key: 'sheep-man',
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
export default function useAdminSidebarConfig() {

  return {
    menuList
  }
}
