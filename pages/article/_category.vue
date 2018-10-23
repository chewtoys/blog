<template>
  <div class="article-cate-wrap w">
    <article-list page-subject="技术专题"></article-list>
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
    },
    validate ({ params }) {
      return /^[a-zA-Z]+$/.test(params.category);  // Must be a string
    }
  }
</script>

<style lang="scss">
  .article-cate-wrap {
    @include centerBox(center,flex-start);
  }
</style>

