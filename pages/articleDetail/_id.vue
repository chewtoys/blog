<template>
  <div class="article-detail-wrap w">
    <div class="article-detail">
      <h2 class="page-subject">博客正文</h2>
      <h3 class="article-title">{{ articleDetail.title }}</h3>
      <div class="quill-editor ql-container ql-snow">
        <div class="ql-editor article-content" v-html="articleDetail.content"></div>
      </div>
    </div>

    <article-category></article-category>
  </div>
</template>

<script>
  import articleCategory from '~/components/article-category.vue'
  import { getArticleDetail } from '../../lib/api'
  export default {
    head () {
      return {
        title: this.articleDetail.title,
        meta: [
          { hid: 'keywords', name: 'keywords', content: '养猪大户,养猪大户博客,前端博客,养猪大户技术文章,' + this.articleDetail.brand_name },
          { hid: 'description', name: 'description', content: '养猪大户技术文章详情--' + this.articleDetail.title }
        ]
      }
    },
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
      await store.dispatch('brand/search');
    },
  }
</script>

<style lang="scss">
  .article-detail-wrap {
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
