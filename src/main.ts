import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router/index'
import { key, store } from './store'

createApp(App).use(router).use(store, key).use(Antd).use(ElementPlus).mount('#app')
