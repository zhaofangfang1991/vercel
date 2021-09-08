const sidebar = {
  default: [
    {
      text: '应用',
      children: [
        {text: 'TEST', link: '/'},
      ]
    }
  ]
}

module.exports = {
  title: '标题',
  description: '描述',
  lang: 'zh-Hans-CN',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '基础范式',
        link: '/base'
      },
      {
        text: '示例模板',
        link: '/template'
      }
    ],
    sidebar: {
      '/': sidebar.default
    }
  }
}