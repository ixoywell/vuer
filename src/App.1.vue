<template>
  <div id="app">
    <sidebar></sidebar>
    <topbar></topbar>
    <img src="./assets/logo.png">
    <h1>{{hi}}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <sidebar></sidebar>
    <tip></tip>
    <ul>
      <li>
        <router-link to="/first">第一页</router-link>
      </li>
      
      <li>
        <router-link to="/second">第二页</router-link>
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import tip from './component/tip.vue'
import test from './component/test.vue'
import sidebar from './component/sidebar.vue'
import topbar from './component/topbar.vue'

export default
 {
  name: 'app',
  data () {
    return {
      hi: 'hello vue',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { tip, test, sidebar ,topbar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
