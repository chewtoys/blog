<template>
  <section class="about-wrap">
    <h2 class="page-subject">关于我</h2>
    <div class="quill-editor ql-container">
      <div class="ql-editor about-text" v-html="info.introduction"></div>
    </div>
  </section>
</template>

<script>
  import { aboutInfo } from "../lib/api";
  export default {
    head () {
      return {
        title: '关于前端大户',
        meta: [
          { hid: 'description', name: 'description', content: '关于前端大户,前端大户简介' }
        ],
        script: [
          { src: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js' }
        ]
      }
    },
    async asyncData(){
      let { obj } = await aboutInfo();
      return { info: obj };
    },
    async fetch ({ store, params }) {
      if(store.state.brand.dataList.length) return;
      await store.dispatch('brand/search');
    },
  }
</script>

<style lang="scss">
.about-wrap {
  padding: 20px 0;
  h3 {
    padding: 50px 20px 0;
  }
  .about-text {
    padding: 20px;
    p {
      text-indent: 2em;
      line-height: 30px;
    }
  }
}
</style>
