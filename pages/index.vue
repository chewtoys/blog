<template>
  <section class="w">
    <article-list :data-list="dataList" page-subject="最新文章"></article-list>
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

