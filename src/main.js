import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueX from 'vuex'
import store from './store'
import router from './router';

Vue.use(VueX)
Vue.use(VueRouter);
Vue.use(VueResource);

//ElementUI --- 一套基于 Vue 2.0 的桌面端组件库，http://element.eleme.io/
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en' //设置语言，默认是中文，
Vue.use(ElementUI, { locale })

const app = new Vue({
        el: '#app',
        router: router,
        store: store,
        render: h => h(App)
})
    //.$mount("#app")