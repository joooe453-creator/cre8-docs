import { defineConfig } from 'vitepress';
import sidebar from './sidebar.json' with { type: 'json' };
export default defineConfig({
  title:'CRE8 Docs', description:'Learn about CRE8 funds, plans and AI agents, and the rules each fund keeps.',
  lang:'en', cleanUrls:true, appearance:true, lastUpdated:false,
  sitemap:{ hostname:'https://docs.cre8.finance' },
  head:[
    ['link',{rel:'icon',type:'image/png',sizes:'32x32',href:'/favicon-b-32.png'}],
    ['link',{rel:'icon',type:'image/svg+xml',sizes:'any',href:'/favicon-b.svg'}],
    ['link',{rel:'shortcut icon',href:'/favicon-b.ico'}],
    ['link',{rel:'apple-touch-icon',sizes:'180x180',href:'/apple-touch-icon-b.png'}],
    ['meta',{name:'theme-color',content:'#16222d'}]
  ],
  locales:{ root:{label:'English',lang:'en'}, 'zh-cn':{label:'简体中文',lang:'zh-Hans',themeConfig:{
    nav:[{text:'主站',link:'https://cre8.finance'},{text:'打开应用',link:'https://app.cre8.finance'}],
    outline:{label:'本页内容'}, docFooter:{prev:'上一篇',next:'下一篇'},
    sidebarMenuLabel:'目录',returnToTopLabel:'返回顶部',darkModeSwitchLabel:'外观',langMenuLabel:'选择语言',
    notFound:{title:'找不到页面',quote:'这个页面可能已更名。请通过目录或搜索继续。',linkLabel:'回到首页',linkText:'回到首页'}
  }}},
  themeConfig:{
    logo:{light:'/logo-light.svg',dark:'/logo-dark.svg'},siteTitle:'Docs',
    nav:[{text:'CRE8 home',link:'https://cre8.finance'},{text:'Open app',link:'https://app.cre8.finance'}],
    sidebar:{'/zh-cn/':sidebar['zh-CN'],'/':sidebar.en},
    outline:{level:[2,3]},
    search:{provider:'local',options:{locales:{'zh-cn':{translations:{button:{buttonText:'搜索文档',buttonAriaLabel:'搜索文档'},modal:{noResultsText:'没有找到相关内容',resetButtonTitle:'清除搜索',backButtonTitle:'关闭搜索',displayDetails:'显示详细结果',footer:{selectText:'选择',navigateText:'切换',closeText:'关闭'}}}}}}},
    footer:{message:'CRE8 · Product documentation',copyright:'Prototype · Draft documents'}
  }
});
