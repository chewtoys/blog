<template>
  <div class="article-wrap w">
    <article-list page-subject="技术分享"></article-list>
    <article-category></article-category>
  </div>
</template>

<script>
  import articleList from '~/components/article-list.vue'
  import articleCategory from '~/components/article-category.vue'
  export default {
    components: {
      'article-list': articleList,
      'article-category': articleCategory,
    }
  }
</script>

<style lang="scss">
  .article-wrap {
    @include centerBox(center,flex-start);
  }
</style>

