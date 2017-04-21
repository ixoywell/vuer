import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en' //设置语言，默认是中文，
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI, { locale })

const firstPage = {
  template: "<div><h3>这是第一个页面</h3></div>"
}
import test from './component/test.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: firstPage
    },
    {
      path: '/second',
      component: test
    }
  ]
})

const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
//.$mount("#app")
