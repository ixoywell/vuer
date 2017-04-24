<template>
  <nav id="new-left-menu" class="side-bar opened-menu" style="z-index: 100; left: 0px; display:none;">
    <div class="mask" id="menu-mask"></div>
    <div class="menu-content">
        <!-- 菜单具体展示内容 -->
        <div class="find-wrapper clearfix">
            <form data-ajax="false" action="/index.php?r=index/search&amp;pv=5" method="get" style="position: relative">
                <input type="hidden" name="r" value="index/search">
                <input type="hidden" name="u" value="1">

                <div class="l-border"></div>
                <div class="border-btm clearfix">
                    <div class="input-wrapper">
                        <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input autocomplete="off" type="text" name="kw" placeholder="搜索商品"></div>
                    </div>
                    <div class="search-btn-wrapper">
                        <button type="submit" class="cnzzCounter ui-btn ui-shadow ui-corner-all" data-cnzz-type="54" data-cnzz="1"></button>
                    </div>
                </div>
                <div class="r-border"></div>
            </form>
        </div>
        <ul class="main-cat">
            <li class="cat-item mm-nolistview">
                <a rel="external" href="/index.php?r=index/wap&amp;u=1&amp;pv=5" class="cnzzCounter ui-link" data-cnzz-type="51" data-cnzz="0">
                    <span class="icon index"></span>
                    首页
                    <span class="arrow"></span>
                </a>
            </li>
            <li class="cat-item">
                <a rel="external" href="/index.php?r=index/cat&amp;cid=1&amp;u=1&amp;pv=5" class="cnzzCounter ui-link" data-cnzz-type="51" data-cnzz="1">
                    <span class="icon clothes"></span>
                    服装
                    <span class="arrow"></span>
                </a>
            </li>
            <li class="cat-item">
                <a rel="external" href="/index.php?r=index/cat&amp;cid=2&amp;u=1&amp;pv=5" class="cnzzCounter ui-link" data-cnzz-type="51" data-cnzz="2">
                    <span class="icon muyin"></span>
                    母婴
                    <span class="arrow"></span>
                </a>
            </li>
            <li class="cat-item">
                <a rel="external" href="/index.php?r=index/cat&amp;cid=3&amp;u=1&amp;pv=5" class="cnzzCounter ui-link" data-cnzz-type="51" data-cnzz="3">
                    <span class="icon hzp"></span>
                    化妆品
                    <span class="arrow"></span>
                </a>
            </li>
            <li class="cat-item">
                <a rel="external" href="/index.php?r=index/cat&amp;cid=4&amp;u=1&amp;pv=5" class="cnzzCounter ui-link" data-cnzz-type="51" data-cnzz="4">
                    <span class="icon jj"></span>
                    居家
                    <span class="arrow"></span>
                </a>
            </li>
            <li class="cat-item">
                <a rel="external" href="/index.php?r=index/cat&amp;cid=5&amp;u=1&amp;pv=5" class="cnzzCounter ui-link" data-cnzz-type="51" data-cnzz="5">
                    <span class="icon xbps"></span>
                    鞋包配饰
                    <span class="arrow"></span>
                </a>
            </li>
            <li class="cat-item">
                <a rel="external" href="/index.php?r=index/cat&amp;cid=6&amp;u=1&amp;pv=5" class="cnzzCounter ui-link" data-cnzz-type="51" data-cnzz="6">
                    <span class="icon ms"></span>
                    美食
                    <span class="arrow"></span>
                </a>
            </li>
            <li class="cat-item">
                <a rel="external" href="/index.php?r=index/cat&amp;cid=7&amp;u=1&amp;pv=5" class="cnzzCounter ui-link" data-cnzz-type="51" data-cnzz="7">
                    <span class="icon wtyp"></span>
                    文体用品
                    <span class="arrow"></span>
                </a>
            </li>
            <li class="cat-item">
                <a rel="external" href="/index.php?r=index/cat&amp;cid=8&amp;u=1&amp;pv=5" class="cnzzCounter ui-link" data-cnzz-type="51" data-cnzz="8">
                    <span class="icon smjd"></span>
                    数码家电
                    <span class="arrow"></span>
                </a>
            </li>
        </ul>
    </div>
</nav>
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
 .cat-item {
        padding: 15px 0;
    }

    .cat-item a {
        margin: 0;
    }

    #new-left-menu {
        position: fixed;
        height: 100%;
        width: 100%;
        left: -100%;
        top: 0;
        overflow-y: scroll;
    }

    #new-left-menu .mask {
        width: 100%;
        height: 100%;

    }

    #new-left-menu .menu-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 80%;
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
  padding: 50px 25px 0 25px;
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
.find-wrapper .border-btm .search-btn-wrapper {
  position: absolute;
  display: block;
  top: 0px;
  right: 2px;
}
.find-wrapper .border-btm .search-btn-wrapper button {
  background: url("/static/images/wap-search.png?v=23") no-repeat;
  width: 16px;
  height: 20px;
  margin:6px 0;
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
  padding-left: 50px;
}
.main-cat a .icon {
  position: absolute;
  left: 0;
  top: -3px;
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