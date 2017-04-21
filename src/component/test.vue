<template>
  <div id="test">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
    <ul>
      <li v-for="article in articles">
      <h3>{{ article.title }}</h3>
      <p>{{ article.id }}</p>
      <img v-bind:src="article.images.small" />
      </li>
    </ul>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
        </div>
        <div v-for="article in articles" class="text item">
          {{article.title}}
        </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "jinkey-love",
      articles: [],
    }
  },
  mounted: function(){
    var self = this;
    // this.$http.get("https://api.douban.com/v2/movie/top250?count=10"
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true}
    ).then(function(response){
      console.log(response);
      self.articles = response.data.subjects;
    },function(response){
      console.log(response);
    })
  }
}
</script>

<style>
</style>