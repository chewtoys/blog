<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin/article' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
      <el-breadcrumb-item>文章详情</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="article-detail">
      <h2 class="page-subject">技术分享</h2>
      <h3 class="article-title">{{ articleDetail.title }}</h3>
      <div class="article-content" v-html="articleDetail.content"></div>
    </div>
  </div>
</template>

<script>
  import { getArticleDetail } from "../../../lib/api";
  export default {
    data() {
        return {}
    },
    async asyncData ({ params }) {
      let { obj } = await getArticleDetail(params);
      return { articleDetail: obj };
    },
    methods: {},
    created() {

    },
    mounted() {

    }
  }
</script>

<style lang="scss">

</style>
