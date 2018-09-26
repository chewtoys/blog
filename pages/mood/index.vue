<template>
  <div class="mood-wrap w">
    <h2 class="page-subject">胡言乱语</h2>
    <ul class="moods">
      <li v-for="(item,index) in dataList" :key="index">
        <p class="moods-extract">{{ item.content }}</p>
        <p class="create_time">{{ item.create_time }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataList: [
          { id: 1,create_time: '2016-06-12',content: '出来混，迟早会还的' },
          { id: 2,create_time: '2016-06-12',content: '出来混，迟早会还的' },
          { id: 3,create_time: '2016-06-12',content: '出来混，迟早会还的' },
          { id: 4,create_time: '2016-06-12',content: '出来混，迟早会还的' },
          { id: 5,create_time: '2016-06-12',content: ' 当你老了，白发苍苍，睡意朦胧，在炉前打盹，慢慢吟诵，梦见你当年的双眼，那柔美的光芒与青幽的晕影。 ' },
          { id: 6,create_time: '2016-06-12',content: ' 当你老了，白发苍苍，睡意朦胧，在炉前打盹，慢慢吟诵，梦见你当年的双眼，那柔美的光芒与青幽的晕影。 ' },
        ]
      }
    },
    methods: {},
    created() {

    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  .mood-wrap {
    padding: 20px 0 80px;
    .moods {
      li {
        @include centerBox(space-between);
        color: #4d4d4d;
        background: #fafafa;
        line-height: 22px;
        padding: 20px 0 20px 20px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: 1px solid #e0e0e0;
        .moods-extract {
          flex: 1;
          line-height: 22px;
        }
        .create_time {
          width: 125px;
          padding-left: 25px;
          background-image: url("~assets/img/time.png");
          background-size: 16px;
          background-position: 0 2px ;
          background-repeat: no-repeat;
        }
      }
    }
  }
</style>
