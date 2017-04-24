<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      hi: 'hello vue',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created:function(){
       this.$router.push('index'); // 页面加载时跳转
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

.nav-bar .nav-bar-list {
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: #fafafa;
}
.nav-bar .nav-bar-list li {
  list-style: none;
  float: left;
  width: 33.333%;
  text-align: center;
}
.nav-bar .nav-bar-list li a {
  color: #6f6f6f;
  font-size: 15px;
  line-height: 2.2em;
  display: block;
  border-bottom: 1px solid #d8d8d8;
}
.nav-bar .nav-bar-list li a:focus,
.nav-bar .nav-bar-list li a:hover {
  color: #FF6600;
}
.nav-bar .nav-bar-list .active a {
  color: #FF6600;
  border-bottom: 1px solid #FF6600;
}
</style>
