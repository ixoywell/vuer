<template>
  <div id="index">
    <topbar></topbar>
    <div class="you-wrapper">
      <div class="title-wrapper">
          <div class="text">搜索“<span style="color: #ff3366;padding: 0 5px">{{$route.query.type}}</span>”的结果</div>
      </div>
    </div>
    <goodsListCom v-bind:goods-list="goods"></goodsListCom>
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
      type: "",
      goods: [],
      id: 0,
    }
  },
  mounted() {
    this.getList()
  },
  methods:{
    getList(id){
     this.type = this.$route.query.type;
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
.you-wrapper {
  border: 0;
  margin-top: 0.45em;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
}
.you-wrapper .title-wrapper {
  padding: 0.2em 0.2em 0.2em 0.7em;
}
.you-wrapper .title-wrapper .text {
  color: #363535;
  border-left: 0.2em solid #FF6600;
  line-height: 1.4em;
  margin: 0.4em 0;
  padding-left: 0.5em;
  font-weight: bolder;
  position: relative;
}
.you-wrapper .title-wrapper .text .index {
  display: block;
  padding-top: 2px;
  line-height: 23px;
}
.you-wrapper .title-wrapper .main-badge {
  background-color: #2BD4C2;
  font-weight: normal;
  position: absolute;
  left: 139px;
  top: 3px;
}


</style>
