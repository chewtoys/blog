<template>
  <section class="article-wrap">
    <article-list page-subject="技术分享"></article-list>
  </section>
</template>

<script>
  import articleList from '~/components/article-list.vue'
  export default {
    components: {
      'article-list': articleList,
    },
    async fetch ({ store, params }) {
      if(store.state.brand.dataList.length) return;
      await store.dispatch('brand/search');
    },
  }
</script>

<style lang="scss">
  .article-wrap {
    @include centerBox(center,flex-start);
  }
</style>

