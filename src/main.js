import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAsyncManager, { lazy } from 'vue-async-manager'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueAsyncManager)
Vue.use(VueRouter)

const Theme = lazy(() => import('./theme.vue'))
const Page1 = lazy(() => import('./page1.vue'))

const router = new VueRouter({
  routes: [
    { name: 'demo-theme', path: '/', component: Theme, meta: { title: '主题', keepAlive: false } },
    { name: 'demo-theme', path: '/demo/page1', component: Page1, meta: { title: '测试1', keepAlive: false } },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
