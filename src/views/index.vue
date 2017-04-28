<template>
  <div id="index">
    <topbar></topbar>
    <div class="nav-bar">
      <ul class="nav-bar-list clearfix">
          <li v-for="(tab, $index) in tabList" v-bind:class="{active: tab.id == id}" @click="getList(tab.id)">{{tab.name}}</li>
      </ul>
    </div>
    <goodsListCom v-bind:goods-list="goods"></goodsListCom>
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
import data from '../assets/list.js'


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
  mounted() {
    this.getList(this.id)
  },
  methods:{
    getList(id){
     this.id = id;
     var self = this;
      this.$http.get("http://localhost:3001/list").then((response) => {
          
          this.goods = data.list;
          console.log(this.goods);
          //console.log(response.list);
				})
				.catch(function(response) {
					console.log(response)
				})
    }
  },
  components: { topbar, goodsListCom, footerBox }
}
</script>

<style>
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
  color: #363946;
}
.nav-bar .nav-bar-list .active {
  color: #363946;
  border-bottom: 1px solid #363946;
}
</style>
