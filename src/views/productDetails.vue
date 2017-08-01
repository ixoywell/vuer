<template>
    <div class="goods-detail">
        <topbar></topbar>
        <div class="loading" v-if="loading">
            Loading...
        </div>
        <div class="detail-wrapper">
            <div class="img" style="max-width: 310px">
                <img class="normal-img" v-bind:src="details.imgUrl" v-bind:alt="details.title" v-bind:data-href="details.imgUrl">
                <span>疯抢中，手慢无！</span>
            </div>
            <div class="title-wrapper clearfix">
                <span class="taobao"></span>{{details.title}}
            </div>
            <div class="recommend-wrapper">
                <div class="text">
                    {{ $route.params.id }}
                    <span>小编推荐</span>{{details.intro}}
                </div>
            </div>
        </div>
        <div class="buy-wrapper" style="padding-right: 0;">
            <span class="price">券后价：<i>¥<b style="font-size:22px;">{{details.price}}</b></i></span>
            <span class="coupon">¥{{details.totalPrice}}</span>
            <a style="background-color: #fc3616;color: #ffffff;float: right;width: 120px;text-align: center;font-size: 16px;" class="normal-btn ui-link" href="http://uland.taobao.com/coupon/edetail?activityId=d9cc8839600a40e3adf54b002280d273&amp;pid=mm_123456_23456_123456&amp;itemId=544541166621&amp;src=qtka_wxxt&amp;dx=1">领券购买&nbsp;&gt;</a>
            <a v-bind:href="details.productUrl" class="normal-btn ui-link" style="float: right; background: #f69919; line-height: 20px; text-align: center; color: #ffffff; font-size: 12px; width: 64px; height: 50px; padding-top: 4px;">
            优惠券<br><span style="font-size: 15px;color: #ffffff; ">{{details.discount}}元</span>
            </a>
        </div>
    
        <div class="pos-box clearfix">
            <p class="pos-title"><i></i>精品推荐</p>
            <div class="ads-list">
                <div class="goods-item">
                    <a data-transition="slide" href="/index.php?r=p/d&amp;id=224310&amp;u=1&amp;pv=8" class="img QtkSelfClick cnzzCounter ui-link" data-cnzz-type="1" data-cnzz="224310">
                        <span class="coupon-wrapper">
                        <span class="coupon">独家券</span>
                        <span class="price">5元</span>
                        </span>
                        <img src="http://img.alicdn.com/imgextra/i4/TB1i2CLPFXXXXbcXVXXXXXXXXXX_!!0-item_pic.jpg_290x290.jpg" alt="【麦隆】速溶经典纯黑咖啡原味40条装">
                    </a>
                    <a data-transition="slide" href="/index.php?r=p/d&amp;id=224310&amp;u=1&amp;pv=8" class="title QtkSelfClick cnzzCounter ui-link" data-cnzz-type="1" data-cnzz="224310">
                        <div class="text" style=" color:#777777;">【麦隆】速溶经典纯黑咖啡原味40条装</div>
                    </a>
                    <div class="price-wrapper">
                        <span class="text">券后</span>
                        <span class="price">￥14.8</span>
                        <div class="sold-wrapper">
                            <span class="sold-num" style="font-size: 10px;">8868</span>
                            <span class="text" style="font-size: 10px;">人已买</span>
                        </div>
                    </div>
                </div>
                <div class="goods-item">
                    <a data-transition="slide" href="/index.php?r=p/d&amp;id=225737&amp;u=1&amp;pv=8" class="img QtkSelfClick cnzzCounter ui-link" data-cnzz-type="1" data-cnzz="225737">
                        <span class="today-wrapper">
                        <span>今日</span>
                        <span>新品</span>
                        </span>
                        <span class="coupon-wrapper">
                        <span class="coupon">独家券</span>
                        <span class="price">40元</span>
                        </span>
                        <img src="http://img.alicdn.com/imgextra/i1/2285451198/TB2KkV4aHFkpuFjy1XcXXclapXa_!!2285451198.jpg_290x290.jpg" alt="日本KISS ME梦幻泪眼眼线笔">
                    </a>
                    <a data-transition="slide" href="/index.php?r=p/d&amp;id=225737&amp;u=1&amp;pv=8" class="title QtkSelfClick cnzzCounter ui-link" data-cnzz-type="1" data-cnzz="225737">
                        <div class="text" style=" color:#777777;">日本KISS ME梦幻泪眼眼线笔</div>
                    </a>
                    <div class="price-wrapper">
                        <span class="text">券后</span>
                        <span class="price">￥29</span>
                        <div class="sold-wrapper">
                            <span class="sold-num" style="font-size: 10px;">1262</span>
                            <span class="text" style="font-size: 10px;">人已买</span>
                        </div>
                    </div>
                </div>
                <div class="goods-item">
                    <a data-transition="slide" href="/index.php?r=p/d&amp;id=225933&amp;u=1&amp;pv=8" class="img QtkSelfClick cnzzCounter ui-link" data-cnzz-type="1" data-cnzz="225933">
                        <span class="today-wrapper">
                        <span>今日</span>
                        <span>新品</span>
                        </span>
                        <span class="coupon-wrapper">
                        <span class="coupon">独家券</span>
                        <span class="price">5元</span>
                        </span>
                        <img src="http://img.alicdn.com/imgextra/i1/752152336/TB2UTbHmrJkpuFjy1zcXXa5FFXa_!!752152336.jpg_290x290.jpg" alt="卡通可爱儿童凉鞋小孩包头拖鞋">
                    </a>
                    <a data-transition="slide" href="/index.php?r=p/d&amp;id=225933&amp;u=1&amp;pv=8" class="title QtkSelfClick cnzzCounter ui-link" data-cnzz-type="1" data-cnzz="225933">
                        <div class="text" style=" color:#777777;">卡通可爱儿童凉鞋小孩包头拖鞋</div>
                    </a>
                    <div class="price-wrapper">
                        <span class="text">券后</span>
                        <span class="price">￥9.9</span>
                        <div class="sold-wrapper">
                            <span class="sold-num" style="font-size: 10px;">1993</span>
                            <span class="text" style="font-size: 10px;">人已买</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import topbar from '../component/topbar.vue'
    import data from '../assets/list.js'
    
    export default {
        data() {
            return {
                loading: false,
                author: "jinkey-love",
                articles: [],
                id: null,
                details: {}
            }
        },
        created() {
            this.getDetails();
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'getDetails'
        },
        methods: {
            getDetails: function() {
                this.loading = true;
                this.id = this.$route.params.id;
    
                this.$http.get("http://localhost:3001/list").then((response) => {
                    console.log(response)
                    this.loading = false;
                    this.details = data.details;
                    console.log(this.details);
                    //console.log(response.list);
                }).catch(function(response) {
                    console.log(response)
                })
            }
        },
        components: {
            topbar
        }
    }
</script>

<style>
    .detail-wrapper {
        padding: 0 15px 15px 15px;
        margin-top: 10px;
        background-color: #FFF;
    }
    
    .detail-wrapper .title-wrapper {
        position: relative;
        font-size: 14px;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #E6E6E6;
        overflow: hidden;
    }
    
    .detail-wrapper .title-wrapper .tmall {
        background: url("/images/tmall.png") 0 0 no-repeat;
        width: 16px;
        height: 16px;
        display: block;
        float: left;
        margin-right: 5px;
        margin-top: 12px;
    }
    
    .detail-wrapper .title-wrapper .taobao {
        background: url("/images/taobao.png") 0 0 no-repeat;
        width: 16px;
        height: 16px;
        display: block;
        float: left;
        margin-top: 12px;
        margin-right: 5px;
    }
    
    .detail-wrapper .img {
        position: relative;
        margin: 0 auto;
    }
    
    .detail-wrapper .img img {
        display: block;
        border: 0;
        max-width: 100%;
        height: auto;
    }
    
    .detail-wrapper .img span {
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding-right: 15px;
        text-align: right;
        color: #FFF;
        font-size: 12px;
        background-color: rgba(40, 40, 40, .7);
        z-index: 2;
    }
    
    .detail-wrapper .recommend-wrapper {
        margin-top: 15px;
    }
    
    .detail-wrapper .recommend-wrapper .text {
        color: #565656;
        font-size: 14px;
        line-height: 22px;
        color: #FF3C00;
    }
    
    .detail-wrapper .recommend-wrapper .text span {
        padding: 3px 5px;
        margin-right: 10px;
        color: #FF3C00;
        border: 1px solid #FF3C00;
        font-size: 12px;
    }
    
    .detail-wrapper .coupon-text-wrapper {
        font-size: 14px;
        color: #8c8c8c;
        position: relative;
        margin: 10px 0;
    }
    
    .detail-wrapper .coupon-text-wrapper .num {
        color: #db4040;
        margin: 0 10px;
    }
    
    .detail-wrapper .coupon-text-wrapper .over {
        position: absolute;
        right: 0;
        top: 0;
    }
    
    .detail-wrapper .coupon-text-wrapper .over .num {
        margin: 0 3px;
    }
    
    .detail-wrapper .coupon-wrapper {
        border: 1px solid #fdafaf;
        display: block;
        text-align: center;
        padding: 19px 0;
    }
    
    .detail-wrapper .coupon-wrapper .text1 {
        font-weight: bold;
        font-size: 14px;
    }
    
    .detail-wrapper .coupon-wrapper .price1 {
        color: #f0215b;
        font-size: 24px;
        font-weight: bold;
    }
    
    .detail-wrapper .coupon-wrapper .text2 {
        margin-left: 35px;
        color: #767676;
        font-size: 14px;
    }
    
    .detail-wrapper .coupon-wrapper .price2 {
        color: #767676;
        font-size: 14px;
    }
    
    .buy-wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        padding: 0 10px;
        line-height: 50px;
        box-shadow: 0 0 5px 0 rgba(218, 218, 218, 0.75);
        background-color: #FFF;
        font-size: 12px;
        overflow: hidden;
        z-index: 100;
    }
    
    .buy-wrapper span {
        color: #3E3E3E;
    }
    
    .buy-wrapper span i {
        color: #FF6600;
        font-style: normal;
    }
    
    .buy-wrapper span i b {
        margin-left: 2px;
        font-weight: normal;
    }
    
    .buy-wrapper .coupon {
        margin-left: 5px;
        text-decoration: line-through;
    }
    
    @media screen and (max-width: 350px) {
        .buy-wrapper .price i b {
            font-size: 14px;
        }
        .buy-wrapper .coupon i b {
            font-size: 14px;
        }
        .buy-wrapper .coupon-btn {
            width: 50px;
        }
        .buy-wrapper .buy-btn {
            width: 50px;
        }
    }
    
    @media screen and (min-width: 351px) {
        .buy-wrapper .price i b {
            font-size: 18px;
        }
        .buy-wrapper .coupon i b {
            font-size: 16px;
        }
    }
    
    .buy-wrapper .coupon-btn {
        position: relative;
        float: right;
        height: 38px;
        line-height: 38px;
        margin-top: 6px;
        padding-left: 10px;
        text-align: left;
        background-color: #FFF1E7;
    }
    
    .buy-wrapper .coupon-btn .coupon-btn-l {
        color: #FF3C00;
    }
    
    .buy-wrapper .coupon-btn .coupon-btn-l i {
        margin: 0 3px;
        font-size: 18px;
    }
    
    .buy-wrapper .coupon-btn .coupon-btn-r {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 43px;
        height: 38px;
        padding: 4px 0;
        line-height: 15px;
        text-align: center;
        color: #FFF;
        background-image: url("/images/coupon-btn.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-origin: padding-box;
        background-size: 100% 100%;
    }
    
    .buy-wrapper .buy-btn {
        float: right;
        height: 38px;
        line-height: 38px;
        margin-top: 6px;
        margin-left: 10px;
        background-color: #FF3C00;
        color: #FFF;
        text-align: center;
    }
    
    @media screen and (max-width: 350px) {
        .buy-wrapper .coupon-btn {
            width: 70px;
            text-align: center;
            padding-left: 0;
        }
        .buy-wrapper .coupon-btn .coupon-btn-r {
            display: none;
        }
        .buy-wrapper .buy-btn {
            width: 70px;
        }
    }
    
    @media screen and (min-width: 351px) and (max-width: 480px) {
        .buy-wrapper .coupon-btn {
            width: 110px;
        }
        .buy-wrapper .buy-btn {
            width: 65px;
        }
    }
    
    @media screen and (min-width: 481px) {
        .buy-wrapper .coupon-btn {
            width: 120px;
        }
        .buy-wrapper .buy-btn {
            width: 120px;
        }
    }
    
    .pos-box {
        padding: 10px 15px 60px 15px;
    }
    
    .pos-box .pos-title {
        height: 24px;
        line-height: 24px;
        color: #565656;
    }
    
    .pos-box .pos-title i {
        float: left;
        width: 22px;
        height: 20px;
        margin-top: 1px;
        margin-right: 10px;
        background: url("/images/show-pos.png") no-repeat center center;
        background-size: 100%;
    }
    
    .pos-box .goods-list {
        padding: 0;
        background-color: transparent;
    }
</style>