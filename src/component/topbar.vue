<template>
  <div class="top-bar" @touchstart="_touchStart" @touchmove="_touchMove" @touchend="_touchEnd">
    <div class="main-title clearfix">
      <a class="mui-action-menu mui-pull-left main-icon ui-link" href="javascript:void(0)" v-on:click="showSideBar = true"></a>
      <h1 class="mui-title main-title-text">{{title}}</h1>
      <router-link to="/" rel="external" class="main-home cnzzCounter ui-link"></router-link>
    </div>
    <transition name="fade">
      <nav id="new-left-menu" class="side-bar opened-menu" v-show="showSideBar">
  
        <transition name="slide-fade">
          <div class="menu-content" v-if="showSideBar">
            <div class="close" v-on:click="showSideBar = false">X</div>
            <!-- 菜单具体展示内容 -->
            <div class="find-wrapper clearfix">
              <div class="border-btm clearfix">
                <div class="input-wrapper">
                  <input autocomplete="off" type="text" v-model="search" name="kw" placeholder="搜索商品">
                </div>
                <div class="search-btn-wrapper">
                  <button type="submit" v-on:click="toSearch"></button>
                </div>
              </div>
            </div>
            <ul class="main-cat">
              <li class="cat-item">
                <router-link to="/">
                  <span class="icon index"></span> 首页
                  <span class="arrow"></span>
                </router-link>
              </li>
              <li class="cat-item">
                <router-link to="/" rel="external" href="/index.php?r=index/cat&amp;cid=1&amp;u=1&amp;pv=5" class="cnzzCounter ui-link" data-cnzz-type="51" data-cnzz="1">
                  <span class="icon clothes"></span> 服装
                  <span class="arrow"></span>
                </router-link>
              </li>
              <li class="cat-item">
                <a rel="external" href="/index.php?r=index/cat&amp;cid=2&amp;u=1&amp;pv=5" class="cnzzCounter ui-link" data-cnzz-type="51" data-cnzz="2">
                  <span class="icon muyin"></span> 母婴
                  <span class="arrow"></span>
                </a>
              </li>
            </ul>
          </div>
        </transition>
      </nav>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sidebar: false,
        author: "jinkey-love",
        articles: [],
        search: "",
        title: "sdfsd",
        showSideBar: false, //显示目录栏
        startX: 0, //触摸位置
        moveX: 0, //滑动时的位置
        disX: 0, //移动距离
      }
    },
    // computed: {
    //   title(){
    //     return this.$store.state.title
    //   }
    // },
    methods: {
      showSideBar: function() {
        this.sidebar = this.sidebar == false ? true : false;
      },
      toSearch: function() {
        // this.$store.state.author = this.search
        this.$store.commit('newAuthor', this.search);
        // store.commit('increment')
      },
      _touchStart: function(ev) {
        ev = ev || event;
        if (ev.touches.length == 1) {
          // 手指按下的时候记录按下的位置
          this.startX = ev.touches[0].clientX;
          console.log(this.startX)
        }
      },
      _touchMove: function(ev) {
        ev = ev || event;
        if (ev.touches.length == 1) {
          // 滑动过程中的实时位置
          this.moveX = ev.touches[0].clientX
          // 滑动过程中实时计算滑动距离
          this.disX = this.startX - this.moveX;
          //console.log('disX==>',this.disX)
          // 如果是向左滑动，关闭目录栏
          if (this.disX >= 100) {
            // console.log('向左滑动');
            this.showSideBar = false;
          } else if (this.disX <= -100) {
            this.showSideBar = true;
          }
        }
      },
      _touchEnd: function(ev) {
        if (event.changedTouches.length == 1) {
          // 手指移动结束后的水平位置
          let endX = event.changedTouches[0].clientX;
          console.log(endX);
          // 触摸开始与结束,手指移动的距离
          this.disX = this.startX - endX;
          console.log(this.disX);
          // 如果距离小于100向左滑动，关闭目录栏
          // if(this.disX > 100) {
          //     // console.log('向左滑动');
          //     this.showSideBar = false;
          // }
        }
      },
    }
  }
</script>

<style>
  .fade-enter-active {
    transition: opacity 1s;
  }
  
  .fade-leave-active {
    transition: opacity 1s ease .5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  .slide-fade-enter-active {
    transition: all .5s ease .3s;
  }
  
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0) 0s;
  }
  
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(-80%);
  }
  
  .slide-fade-enter-to,
  .slide-fade-leave {
    transform: translateX(0px);
  }
  
  .main-title {
    background-color: #FF6600;
    height: 40px;
  }
  
  .main-title .main-icon {
    position: absolute;
    z-index: 100;
    background: url("/static/images/wap-menu.png") no-repeat;
    width: 29px;
    height: 29px;
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
    left: 0%;
    top: 0;
    overflow-y: scroll;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .side-bar.on {
    left: 0px;
    display: block;
  }
  
  .side-bar .close {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 100%;
    top: 0px;
    color: #333;
    background: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 24px;
  }
  
  .side-bar .mask {
    width: 100%;
    height: 100%;
  }
  
  .side-bar .menu-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background-color: #fff;
  }
  
  .side-bar.on .menu-content {
    left: 0;
  }
  
  #menu-mask {
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .main-cat {
    margin: 0;
  }
  
  .find-wrapper {
    padding: 40px 25px 0 25px;
    position: relative;
  }
  
  .find-wrapper .border-btm {
    float: left;
    border: 1px solid #FF6600;
    width: 100%;
  }
  
  .find-wrapper .border-btm .input-wrapper {
    float: left;
    width: 88%;
  }
  
  .find-wrapper .border-btm .input-wrapper input {
    margin-bottom: 0;
    padding: 0 10px;
    line-height: 32px;
    height: 32px;
    font-size: 12px;
    border: 0;
  }
  
  .find-wrapper .border-btm .search-btn-wrapper button {
    background: url("/static/images/wap-search.png?v=23") no-repeat;
    width: 16px;
    height: 20px;
    margin: 6px 0;
    border: none;
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
    top: 0;
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