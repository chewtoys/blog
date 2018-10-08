<template>
  <div class="mood-wrap w">
    <h2 class="page-subject">胡言乱语</h2>
    <ul class="moods">
      <li v-for="(item,index) in dataList" :key="index">
        <p class="moods-extract">{{ item.content }}</p>
        <p class="create_time">{{ item.create_time | formatDate  }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { moodList } from '../../lib/api'
  export default {
    async asyncData(){
      let { rows } = await moodList();
      return { dataList: rows };
    },
    filters: {
      formatDate(val){
          return val.replace('T',' ').replace('.000Z','');
      }
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
          width: 170px;
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
