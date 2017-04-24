<template>
  <div id="index">
    <topbar></topbar>
    <div class="nav-bar">
      <ul class="nav-bar-list clearfix">
          <li class="active"><a rel="external" href="/index.php?r=index/wap&amp;u=1&amp;pv=6" class="cnzzCounter ui-link" data-cnzz-type="51" data-cnzz="0">今日新品</a></li>
          <li><a rel="external" href="/index.php?r=p/wap&amp;u=1&amp;pv=6" class="cnzzCounter ui-link" data-cnzz-type="52" data-cnzz="0">超级人气榜</a></li>
          <li><a rel="external" href="/index.php?r=index/9&amp;u=1&amp;pv=6" class="cnzzCounter ui-link" data-cnzz-type="53" data-cnzz="0">9块9包邮</a></li>
      </ul>
    </div>
    <goodsList></goodsList>
    <ul>
      <li>
        <router-link to="/first">第一页</router-link>
      </li>
      <li>
        <router-link to="/goodsList">goodsList</router-link>
      </li>
      <li>
        <router-link to="/goodsDetails">goodsDetails</router-link>
      </li>
      
      <li>
        <router-link to="/second">第二页</router-link>
      </li>
    </ul>
    <footerBox></footerBox>
  </div>
</template>

<script>
import topbar from '../component/topbar.vue'
import goodsList from '../component/goodsList.vue'
import footerBox from '../component/footer.vue'


export default
 {
  name: 'app',
  data () {
    return {
      hi: 'hello vue',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { topbar, goodsList, footerBox }
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
