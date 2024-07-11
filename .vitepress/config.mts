import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tingyuan ZHANG",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Bio', link: '/bio/' },
      { text: 'Blogs', link: '/blogs/'},
      { text: 'Projects', link: '/projects/'}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tzhang-dev' }
    ]
  },

  // locales: {
  //   root: {
  //     label: 'English',
  //     lang: 'en'
  //   },
  //   cn: {
  //     label: '中文',
  //     lang: 'zh_cn', // optional, will be added  as `lang` attribute on `html` tag
  //     themeConfig: {
  //       nav: [
  //         { text: '主页', link: '/cn' },
  //         { text: '简介', link: '/cn/bio' },
  //         { text: '项目', link: '/projects'}
  //       ]
  //     }

  //     // other locale specific properties...
  //   }
  // }
})
