<template>
  <section class="article-cate-wrap">
    <article-list page-subject="技术专题"></article-list>
  </section>
</template>

<script>
  import articleList from '~/components/article-list.vue'
  export default {
    components: {
      'article-list': articleList,
    },
    validate ({ params }) {
      return /^[a-z&A-Z]+$/.test(params.category);  // Must be a string
    },
    async fetch ({ store, params }) {
      if(store.state.brand.dataList.length) return;
      await store.dispatch('brand/search');
    },
  }
</script>

<style lang="scss">
  .article-cate-wrap {
    @include centerBox(center,flex-start);
  }
</style>

