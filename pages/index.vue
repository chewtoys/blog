<template>
  <section class="home">
    <div class="home-l flex1">
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

