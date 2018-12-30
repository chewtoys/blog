<template>
  <section class="mood-wrap">
    <h2 class="page-subject">胡言乱语</h2>
    <ul class="moods">
      <li v-for="(item,index) in dataList" :key="index">
        <p class="moods-extract">{{ item.content }}</p>
        <p class="create_time"><i class="iconfont icon-shijian"></i>{{ item.create_time | formatDate }}</p>
      </li>
    </ul>
    <div class="loadmore">
      <el-button type="info" size="small" plain @click="loadMore">{{ loadMsg }}</el-button>
    </div>
  </section>
</template>

<script>
  import { moodList } from '../lib/api'
  export default {
    head () {
      return {
        title: '前端大户-生活感悟',
      }
    },
    async asyncData(){
      let res = await moodList({ pageNo: 1,pageSize: 10 });
      return {
        dataList: res.rows,
        total: res.total
      };
    },
    async fetch ({ store, params }) {
      if(store.state.brand.dataList.length) return;
      await store.dispatch('brand/search');
    },
    filters: {
      formatDate(val){
        return val ? val.substring(0,19) : '';
      }
    },
    data(){
      return {
        pageNo: 1,
        pageSize: 10,
        loadMsg: '加载更多'
      }
    },
    methods: {
      async loadMore(){
        if(this.pageNo*this.pageSize >= this.total ) {
          return this.loadMsg = '就只有这么多了'
        }
        this.pageNo += 1;
        let res = await moodList({ pageNo: this.pageNo,pageSize: this.pageSize });
        this.dataList = this.dataList.concat(res.rows);
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
          width: 180px;
          padding-left: 10px;
          .iconfont {
            color: #db6d4c;
            margin-right: 6px;
          }
        }
      }
    }
    .loadmore {
      text-align: center;
      padding: 20px 0;
    }
  }
</style>
