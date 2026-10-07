import DefaultTheme from 'vitepress/theme';
import StartCards from './StartCards.vue';
import Layout from './Layout.vue';
import './style.css';
export default {extends:DefaultTheme, Layout, enhanceApp({app}) {app.component('StartCards',StartCards);}};
