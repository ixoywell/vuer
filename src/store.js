import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const store = new VueX.Store({
    state: {
        author: '丘',
        msg: 'hello ixoy',
        title: "vuer商城",
        count: 0,
        // goodsList: []
    },
    mutations: {
        // getGoodsList(state, list){
        //     state.goodsList = list
        // },
        newAuthor(state, msg){
            state.author = msg
        },
        increment(state){
            state.count++
        }
    }
})

export default store