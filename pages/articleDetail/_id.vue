<template>
  <div class="article-wrap w">
    <div class="article-detail">
      <h2 class="page-subject">技术分享</h2>
      <h3 class="article-title">{{ articleDetail.title }}</h3>
      <div class="article-content" v-html="articleDetail.content"></div>
    </div>

    <article-category></article-category>
  </div>
</template>

<script>
  import articleCategory from '~/components/article-category.vue'
  import { getArticleDetail } from '../../lib/api'
  export default {
    components: {
      'article-category': articleCategory,
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)  // 必须是number类型
    },
    async asyncData ({ params }) {
      let { obj } = await getArticleDetail(params);
      return { articleDetail: obj };
    },
    async fetch ({ store, params }) {
      store.dispatch('menu/getMenuList');
    },
  }
</script>

<style lang="scss">
  .article-wrap {
    @include centerBox(center,flex-start);
    .article-detail {
      padding: 20px 0;
      flex: 1;
      h3.article-title {
        font-size: 24px;
        font-weight: 400;
        padding: 20px 0;
        color: #38485A;
      }
    }
  }
</style>
