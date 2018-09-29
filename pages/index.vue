<template>
  <section class="w">
    <news-list :data-list="topnews" page-subject="最新文章"></news-list>
  </section>
</template>

<script>
  import { getArticleList } from "../lib/api"
  import newslist from '~/components/news-list.vue'
  export default {
    components: {
      'news-list': newslist
    },
    data(){
      return {}
    },
    async asyncData ({ params }) {
      let { rows } = await getArticleList();
      return { topnews: rows };
    },
  }
</script>

