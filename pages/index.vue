<template>
  <section class="w home">
    <div class="home-l flex1">
      <!--<el-carousel trigger="click" height="150px">-->
        <!--<el-carousel-item v-for="item in 1" :key="item">-->
          <!--<img src="../assets/img/banner1.jpg" alt="">-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
      <article-list :data-list="dataList" page-subject="最新文章"></article-list>
    </div>
    <div class="home-r"></div>
  </section>
</template>

<script>
  import { getArticleList } from "../lib/api"
  import articleList from '~/components/article-list.vue'
  export default {
    components: {
      'article-list': articleList
    },
    data(){
      return {}
    },
    async asyncData ({ params }) {
      let res = await getArticleList();
      return {
        dataList: res.rows,
      };
    },
  }
</script>

<style lang="scss">
  .home {
    //@include centerBox();
    .home-l {

    }
    .home-r {
      /*width: 250px;*/
    }
  }
</style>

