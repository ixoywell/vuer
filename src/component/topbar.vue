<template>
  <div class="top-bar">
    <div class="main-title clearfix">
      <router-link to="/" class="logo">Inir</router-link>
      <span class="icon-menu" v-on:click="showSideBar" v-bind:class="{on: sidebar}"></span>
      <svg class="svg-icon icon-search"  v-on:click="showSearchBox" role="img" height="22" width="22" viewBox="0 0 22 22">
        <path d="M19.7,21.6L13,15c-1.3,1-3,1.5-4.8,1.5C3.7,16.5,0,12.8,0,8.2
  	C0,3.7,3.7,0,8.2,0s8.3,3.7,8.3,8.2c0,1.8-0.6,3.4-1.5,4.8l6.6,6.6c0.5,0.5,0.5,1.4,0,1.9C21.1,22.1,20.2,22.1,19.7,21.6z M8.2,2.7
  	c-3,0-5.5,2.5-5.5,5.5c0,3,2.5,5.5,5.5,5.5c1,0,2-0.3,2.8-0.8c0.8-0.5,1.5-1.1,1.9-1.9c0.5-0.8,0.8-1.8,0.8-2.8
  	C13.8,5.2,11.3,2.7,8.2,2.7z"></path>
      </svg>
    </div>
    <div class="find-wrapper" v-show="searchBox">
      <div class="input-wrapper">
        <input autocomplete="off" type="text" v-model="search" name="kw" placeholder="搜索商品">
        <svg class="search-btn" role="img" height="22" width="22" viewBox="0 0 22 22">
          <path d="M19.7,21.6L13,15c-1.3,1-3,1.5-4.8,1.5C3.7,16.5,0,12.8,0,8.2
  	C0,3.7,3.7,0,8.2,0s8.3,3.7,8.3,8.2c0,1.8-0.6,3.4-1.5,4.8l6.6,6.6c0.5,0.5,0.5,1.4,0,1.9C21.1,22.1,20.2,22.1,19.7,21.6z M8.2,2.7
  	c-3,0-5.5,2.5-5.5,5.5c0,3,2.5,5.5,5.5,5.5c1,0,2-0.3,2.8-0.8c0.8-0.5,1.5-1.1,1.9-1.9c0.5-0.8,0.8-1.8,0.8-2.8
  	C13.8,5.2,11.3,2.7,8.2,2.7z"></path>
        </svg>
      </div>
    </div>
    <nav id="new-left-menu" class="side-bar opened-menu" v-bind:class="{'on': sidebar}">
      <div class="mask" id="menu-mask"></div>
      <div class="close" v-on:click="showSideBar">X</div>
      <div class="menu-content">
        <!-- 菜单具体展示内容 -->
  
        <ul class="main-cat">
          <li class="cat-item">
            <router-link to="/">
              <span class="icon index"></span> 首页
              <span class="arrow"></span>
            </router-link>
          </li>
          <li class="cat-item" v-for="menu in menuList">
            <router-link :to="{path: 'productList', query:{ type: menu.name}}" data-type="51">
              <span class="icon clothes"></span> {{menu.value}}
              <span class="arrow"></span>
            </router-link>
          </li>
          <li class="cat-item">
            <router-link to="/productList/cloth" data-type="51">
              <span class="icon clothes"></span> 服装
              <span class="arrow"></span>
            </router-link>
          </li>
          <li class="cat-item">
            <router-link to="/productList/baby" data-type="51">
              <span class="icon muyin"></span> 母婴
              <span class="arrow"></span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  data() {
    return {
      menuList: [{ name: "cloth", value: "衣服", class: "clothes" }, { name: "baby", value: "母婴", class: "muyin" },],
      sidebar: false,
      searchBox: false,
      author: "jinkey-love",
      articles: [],
      search: "",
      title: "sdfsd"
    }
  },
  // computed: {
  //   title(){
  //     return this.$store.state.title
  //   }
  // },
  methods: {
    showSideBar: function () {
      this.sidebar = this.sidebar == false ? true : false;
    },
    showSearchBox: function () {
      this.searchBox = this.searchBox == false ? true : false;
    },
    toSearch: function () {
      // this.$store.state.author = this.search
      this.$store.commit('newAuthor', this.search);
      // store.commit('increment')
    }
  }
}
</script>

<style>
.main-title {
  background-color: #363946;
  height: 50px;
  overflow: hidden;
  color: #fff;
}

.top-bar .main-title .logo {
  display: inline-block;
  background: url("/static/images/logo.png") no-repeat;
  width: 40px;
  height: 40px;
  background-size: 40px;
  padding-left: 40px;
  line-height: 40px;
  margin: 5px;
  color: #fff;
}

.svg-icon {
  fill: currentColor;
  display: inline-block;
  vertical-align: text-top;
}

.icon-search {
  float: right;
  margin-right: 12px;
  height: 22px;
  display: inline-block;
  line-height: 22px;
  vertical-align: middle;
  color: #a3a3a3;
  margin-top: 14px;
}

.icon-menu.on {
  transform: rotate(90deg);
 
}

.icon-menu {
  float: right;
  display: inline-block;
  background: url("/static/images/menu-icon.png") no-repeat;
  width: 30px;
  height: 30px;
  background-size: 30px;
  line-height: 30px;
  margin: 10px;
   -webkit-transition: transform 1s;
  -moz-transition: transform 1s;
  transition: transform 1s;
}

.main-title .main-icon {
  position: absolute;
  z-index: 100;
  background: url("/static/images/wap-menu.png") no-repeat;
  width: 30px;
  height: 30px;
  left: 0.6em;
  top: 0.45em;
  background-size: 100%;
}

.main-title .main-icon2 {
  position: absolute;
  z-index: 100;
  background: url("/static/images/wap-arrow-left.png") no-repeat;
  width: 29px;
  height: 25px;
  left: 0.6em;
  top: 0.45em;
}

.main-title .main-title-text {
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
}

.main-title .main-home {
  background: url("/static/images/wap-home.png") no-repeat;
  width: 29px;
  height: 29px;
  position: absolute;
  right: 0.6em;
  top: 0.45em;
  background-size: 100%;
}

.cat-item {
  padding: 10px 0;
}

.cat-item a {
  margin: 0;
}

.side-bar {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 100%;
  top: 50px;
  overflow-y: scroll;
  z-index: 100;
  transition: left 1s;
}

.side-bar.on {

  left: 0px;
}

.side-bar .close {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 80%;
  top: 0px;
  color: #333;
  background: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 24px;
}

#new-left-menu .mask {
  width: 100%;
  height: 100%;
}

#new-left-menu .menu-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background-color: #fff;
  overflow-y: auto;
}

#menu-mask {
  background-color: rgba(0, 0, 0, 0.4);
}

.main-cat {
  margin: 0;
}

.find-wrapper {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  z-index: 99;
  box-shadow: 0px 1px 3px #999;
}

.find-wrapper:before {
  z-index: 1;
  content: "";
  position: absolute;
  top: -9px;
  right: 65px;
  border-top: 0 solid transparent;
  border-bottom: 12px solid #fff;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
}

.find-wrapper .input-wrapper {
  border: 1px solid #363946;
  width: 90%;
  margin: 10px auto;
}

.find-wrapper .input-wrapper input {
  margin-bottom: 0;
  padding: 0 10px;
  line-height: 30px;
  height: 30px;
  font-size: 14px;
  border: 0;
      width: 80%;
}

.find-wrapper .search-btn {
  /*width: 30px;
  height: 30px;*/
  border: none;
  float: right;
  margin: 4px;
}

.main-cat {
  list-style: none;
  padding: 20px 25px 0 25px;
}

.main-cat a {
  color: #4a4956;
  display: block;
  position: relative;
  padding-left: 30px;
}

.main-cat a .icon {
  position: absolute;
  left: 0;
  top: 0px;
  background: url("/static/images/wap-icons.png") no-repeat;
  display: block;
  width: 22px;
  height: 22px;
}

.main-cat a .arrow {
  background: url("/static/images/wap-arrow-right.png") no-repeat;
  width: 8px;
  height: 14px;
  display: block;
  position: absolute;
  right: 0;
  top: 5px;
}

.main-cat a .index {
  background-position: -10px 0;
}

.main-cat a .clothes {
  background-position: -10px -72px;
}

.main-cat a .muyin {
  background-position: -10px -143px;
}

.main-cat a .hzp {
  background-position: -11px -208px;
}

.main-cat a .jj {
  background-position: -12px -278px;
  width: 24px;
  height: 27px;
}

.main-cat a .xbps {
  background-position: -10px -353px;
  width: 24px;
}

.main-cat a .ms {
  background-position: -11px -421px;
}

.main-cat a .wtyp {
  background-position: -10px -491px;
  width: 23px;
  height: 23px;
}

.main-cat a .smjd {
  background-position: -10px -561px;
}
</style>