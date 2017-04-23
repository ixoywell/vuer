<template>
  <div class="top-bar main-title clearfix">
            <a class="mui-action-menu mui-pull-left main-icon ui-link" href="javascript:void(0)"></a>
            <h1 class="mui-title main-title-text">Vuer商城</h1>
            <a href="/index" rel="external" class="main-home cnzzCounter ui-link" data-cnzz-type="51" data-cnzz="0"></a>
        </div>
</template>

<script>
export default {
  data() {
    return {
      author: "jinkey-love",
      articles: [],
    }
  }
}
</script>

<style>
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
  background-size:100%;
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
  background-size:100%;
}
</style>