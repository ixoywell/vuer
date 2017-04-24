import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const store = new VueX.Store({
    state: {
        author: 'hello ixoy',
        msg: 'hello ixoy',
        title: "vuer商城",
        count: 0
    },
    mutations: {
        newAuthor(state, msg){
            state.author = msg
        },
        increment(state){
            state.count++
        }
    }
})

export default store