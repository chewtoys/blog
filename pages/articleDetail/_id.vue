<template>
  <section class="article-detail-wrap">
    <div class="article-detail">
      <h2 class="page-subject">博客正文</h2>
      <h3 class="article-title">{{ articleDetail.title }}</h3>
      <div class="quill-editor ql-container ql-snow">
        <div class="ql-editor article-content" v-html="articleDetail.content"></div>
      </div>
    </div>
  </section>
</template>

<script>
  import { getArticleDetail } from '../../lib/api'
  export default {
    head () {
      return {
        title: this.articleDetail.title,
        meta: [
          { hid: 'keywords', name: 'keywords', content: '前端大户,前端大户博客,前端博客,前端大户技术文章,' + this.articleDetail.brand },
          { hid: 'description', name: 'description', content: '前端大户技术文章详情--' + this.articleDetail.title }
        ]
      }
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)  // 必须是number类型
    },
    async asyncData ({ params }) {
      let { obj } = await getArticleDetail(params);
      return { articleDetail: obj };
    },
    async fetch ({ store, params }) {
      if(store.state.brand.dataList.length) return;
      await store.dispatch('brand/search');
    },
  }
</script>

<style lang="scss">
  .article-detail-wrap {
    padding: 20px 0;
    h3.article-title {
      font-size: 24px;
      font-weight: 400;
      padding: 20px 0;
      color: #38485A;
    }
  }
</style>
