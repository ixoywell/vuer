<template>
  <div class="goods-list">
    <div class="goods-item" v-for="goods in goodsLi">
      <router-link to="/productDetail/:id" class="img">
        <span class="today-wrapper" v-if="goods.new == 1">
          <span>今日<br/>新品</span>
        </span>
        <span class="coupon-wrapper">
        <span class="coupon" style="color: #EDFF00;">优惠券</span>
        <span class="price">{{goods.discount}}元</span>
        </span>
        <img v-bind:src="goods.img" v-bind:alt="goods.title">
      </a>
        <div class="text">{{goods.title}}</div>
      </router-link>
      <div class="price-wrapper">
        <span class="text">券后</span>
        <span class="price">￥{{goods.price}}</span>
        <div class="sold-wrapper">
          <span style="font-size: 10px;" class="sold-num">{{goods.salesNum}}</span>
          <span style="font-size: 10px;" class="text">人已买</span>
        </div>
      </div>
    </div>
  
    <div class="goods-item">
      <a data-transition="slide" data-qtk-url="/index.php?r=p/d&amp;id=226031&amp;u=1&amp;pv=6" class="img QtkSelfClick cnzzCounter ui-link" data-cnzz-type="1" data-cnzz="226031">
        <span class="today-wrapper">
          <span>今日</span>
          <span>新品</span>
        </span>
        <span class="coupon-wrapper">
                        <span class="coupon" style="color: #EDFF00;">独家券</span>
        <span class="price">20元</span>
        </span>
        <img src="http://img.alicdn.com/imgextra/i4/2754743150/TB2lXAgak5M.eBjSZFrXXXPgVXa_!!2754743150.jpg_230x230.jpg" alt="">
      </a>
      <a data-transition="slide" data-qtk-url="/index.php?r=p/d&amp;id=226031&amp;u=1&amp;pv=6" class="title QtkSelfClick cnzzCounter ui-link" data-cnzz-type="1" data-cnzz="226031">
        <div class="text">宝宝学步带婴幼儿学走路</div>
      </a>
      <div class="price-wrapper">
        <span class="text">券后</span>
        <span class="price">￥36.5</span>
        <div class="sold-wrapper">
          <span style="font-size: 10px;" class="sold-num">158</span>
          <span style="font-size: 10px;" class="text">人已买</span>
        </div>
      </div>
    </div>
    <div class="goods-item">
      <a data-transition="slide" data-qtk-url="/index.php?r=p/d&amp;id=225936&amp;u=1&amp;pv=6" class="img QtkSelfClick cnzzCounter ui-link" data-cnzz-type="1" data-cnzz="225936">
        <span class="today-wrapper">
                            <span>今日</span>
        <span>新品</span>
        </span>
        <span class="coupon-wrapper">
                        <span class="coupon" style="color: #EDFF00;">独家券</span>
        <span class="price">15元</span>
        </span>
        <img src="http://img.alicdn.com/imgextra/i1/2890257402/TB2MpttpdRopuFjSZFtXXcanpXa_!!2890257402.jpg_230x230.jpg" alt="">
      </a>
      <a data-transition="slide" data-qtk-url="/index.php?r=p/d&amp;id=225936&amp;u=1&amp;pv=6" class="title QtkSelfClick cnzzCounter ui-link" data-cnzz-type="1" data-cnzz="225936">
        <div class="text">欧孕大牌18条礼盒装婴儿可洗尿布</div>
      </a>
      <div class="price-wrapper">
        <span class="text">券后</span>
        <span class="price">￥54</span>
        <div class="sold-wrapper">
          <span style="font-size: 10px;" class="sold-num">2192</span>
          <span style="font-size: 10px;" class="text">人已买</span>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "jinkey-love",
      articles: [],
      //goodsLi: [],
    }
  },
  props: ['goodsLi'],
  // computed: {
  //   goodsList () {
  //     return this.$store.state.goodsList;
  //   }
  // }
}
</script>

<style>
.goods-list {
  background-color: #fff;
  padding: 0.2em;
  padding-top: 0.4em;
  /* text-align: center; */
  background: #eee;
  overflow: hidden
}

.goods-list .goods-item {
  width: 48%;
  float: left;
  text-align: left;
  margin-bottom: 0.7em;
  margin-right: 0.15em;
  background: #fff;
}

.goods-list .goods-item:nth-child(2n) {
  float: right;
}

.goods-list .goods-item a.img {
  width: 100%;
  position: relative;
  display: block;
}

.goods-list .goods-item a.img .today-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  text-align: center;
  background-color: #2BD4C2;
  color: #FFFFFF;
  padding: 3px 0;
}

.goods-list .goods-item a.img .today-wrapper span {
  display: block;
  font-size: 10px;
  line-height: 16px;
  padding: 0 4px;
}

.goods-list .goods-item a.img .coupon-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  text-align: center;
  background-color: #FF2F65;
  padding: 3px 0;
}

.goods-list .goods-item a.img .coupon-wrapper span {
  display: block;
  font-size: 10px;
  line-height: 16px;
  padding: 0 3px;
}

.goods-list .goods-item a.img .coupon-wrapper .coupon {
  color: #EDFF00;
}

.goods-list .goods-item a.img .coupon-wrapper .price {
  color: #FFF;
}

.goods-list .goods-item a.img img {
  width: 100%;
  border: none;
}

.goods-list .goods-item a.title {
  width: 100%;
}

.goods-list .goods-item a.title .text {
  word-break: break-all;
  width: 100%;
  overflow: hidden;
  color: #a3a3a3;
  font-size: 12px;
  text-align: center;
  height: 18px;
}

.goods-list .goods-item .price-wrapper {
  position: relative;
  margin: 0.2em 0;
}

.goods-list .goods-item .price-wrapper .text {
  color: #a3a3a3;
  font-size: 12px;
  display: inline-block;
}

.goods-list .goods-item .price-wrapper .price {
  color: #ff4b5f;
  font-size: 14px;
  margin-left: -0.3em;
  display: inline-block;
  margin-top: 0.1em;
}

.goods-list .goods-item .price-wrapper .sold-wrapper {
  position: absolute;
  right: 0;
  top: 0.05em;
}

.goods-list .goods-item .price-wrapper .sold-wrapper .sold-num {
  color: #ecabab;
  font-size: 12px;
}

.goods-list .goods-item .price-wrapper .sold-wrapper .text {
  color: #a3a3a3;
  font-size: 12px;
}

.load-more {
  text-align: center;
  background-color: #fff;
  color: #a3a3a3;
}
</style>