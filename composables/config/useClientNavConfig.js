const navbarMenuList = [
  {
    to: "/",
    title: "首页",
  },
  {
    to: "/all",
    title: "全部",
  },
  {
    to: "/category",
    title: "分类",
  },
  {
    to: "/search",
    title: "搜索",
  },
];

const footerLinks = [
  {
    title: "页面导航",
    links: [
      {
        label: "首页",
        href: "#",
      },
      {
        label: "灯具推荐",
        href: "#popular",
      },
      {
        label: "星光评说 ",
        href: "#choose",
      },
      {
        label: "特色亮点",
        href: "#features",
      },
    ],
  },
  {
    title: "星光互动",
    links: [
      {
        label: "星光评说",
        to:'/admin'
      },
    ],
  },
  {
    title: "星光管理",
    links: [
      {
        label: "后台管理",
        to:'/admin'
      },
    ],
  },
];

const featuredList = [
  {
    title: "品牌保障",
    desc: "星光灯坊以卓越品质和创新设计为标志，为您带来品质保障",
  },
  {
    title: "高效照明",
    desc: "灯具以高效能源设计，为您提供明亮、舒适的照明体验，节省能源的同时彰显品质",
  },
  {
    title: "时尚设计",
    desc: "以时尚为灵感，星光灯坊的设计兼具艺术感与实用性，为您的空间增色不少",
  },
  {
    title: "私人定制",
    desc: "星光灯坊提供独特的私人定制服务，让您的灯具成为个性空间的独特亮点",
  },
];

export default function useClientNavConfig() {
  return {
    navbarMenuList,
    footerLinks,
    featuredList,
  };
}
