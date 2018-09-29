<template>
  <div class="about-wrap w">
    <h2 class="page-subject">关于我</h2>
    <div class="about-text" v-html="info.introduction"></div>
  </div>
</template>

<script>
  import { aboutInfo } from "../../lib/api";
  export default {
    async asyncData(){
      let { obj } = await aboutInfo();
      return { info: obj };
    },
  }
</script>

<style lang="scss">
.about-wrap {
  padding: 20px 0;
  .about-text {
    padding: 20px;
    p {
      line-height: 24px;
      img {
        width: 400px;
        margin: 10px 0;
      }
    }
  }
}
</style>
