import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import index from './views/index.vue'
import productDetails from './views/productDetails.vue'
import goodsList from './component/goodsList.vue'
import goodsDetails from './component/goodsDetails.vue'
import test from './component/test.vue'

export default new VueRouter({
    mode: 'history',
    history: true, //html5模式 去掉锚点
    saveScrollPosition: true, //记住页面的滚动位置 html5模式适用
    base: __dirname,
    routes: [{
            path: '/',
            component: index
        },
        {
            path: '/productDetails/:id',
            component: productDetails
        },
        {
            path: '/goodsList',
            component: goodsList
        },
        {
            path: '/goodsDetails',
            component: goodsDetails
        },
        {
            path: '/test',
            component: test
        },
        { path: '*', redirect: '/' },
    ]
})