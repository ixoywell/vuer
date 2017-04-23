import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter);
Vue.use(VueResource);

//ElementUI --- 一套基于 Vue 2.0 的桌面端组件库，http://element.eleme.io/
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en' //设置语言，默认是中文，
Vue.use(ElementUI, { locale })

const firstPage = {
    template: "<div><h3>这是第一个页面</h3></div>"
}
import test from './component/test.vue'
import goodsList from './component/goodsList.vue'
import goodsDetails from './component/goodsDetails.vue'

const router = new VueRouter({
    mode: 'history',
    history: true, //html5模式 去掉锚点
    saveScrollPosition: true, //记住页面的滚动位置 html5模式适用
    base: __dirname,
    routes: [{
            path: '/first',
            component: firstPage
        },
        {
            path: '/second',
            component: test
        },
        {
            path: '/goodsList',
            component: goodsList
        },
        {
            path: '/goodsDetails',
            component: goodsDetails
        }
    ]
})

const app = new Vue({
        el: '#app',
        router: router,
        render: h => h(App)
    })
    //.$mount("#app")