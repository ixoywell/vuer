<template>
  <div id="index">
    <topbar></topbar>
    <div class="nav-bar">
      <ul class="nav-bar-list clearfix">
          <li v-for="(tab, $index) in tabList" v-bind:class="{active: tab.id == id}" @click="getList(tab.id)">{{tab.name}}</li>
      </ul>
    </div>
    <goodsListCom :goodsLi="goods"></goodsListCom>
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
import goodsListCom from '../component/goodsList.vue'
import footerBox from '../component/footer.vue'


export default {
  name: 'app',
  data () {
    return {
      tabList: [{id: 0, name:'今日新品'},{id: 1, name:'超级人气榜'},{id: 2, name:'9块9包邮'}],
      goods: [],
      id: 0,
      hi: 'hello vue',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    getList(id){
     this.id = id;
    var self = this;
      this.$http.get("http://localhost:3001/list").then( (data) =>{
        console.log(data);
        //this.$store.commit('getGoodsList', data.list);
        self.goods=data.list;
      });
    }
  },
  components: { topbar, goodsListCom, footerBox }
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
  color: #6f6f6f;
  font-size: 15px;
  line-height: 2.2em;
  display: block;
  border-bottom: 1px solid #d8d8d8;
}
.nav-bar .nav-bar-list li:focus,
.nav-bar .nav-bar-list li:hover {
  color: #FF6600;
}
.nav-bar .nav-bar-list .active {
  color: #FF6600;
  border-bottom: 1px solid #FF6600;
}
</style>
