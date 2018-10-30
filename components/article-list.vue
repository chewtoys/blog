<template>
  <div class="article-list-wrap">
    <h2 class="page-subject">{{ pageSubject }}</h2>
    <ul class="articles">
      <li v-for="(item,index) in articleList" :key="index">
        <figure>
          <nuxt-link :to="{ path: '/articleDetail/' + item.id }" title="">
            <img :src="baseImgPath + item.brand + '.jpg'" alt="">
          </nuxt-link>
        </figure>
        <div class="news-inner">
          <h3>
            <nuxt-link :to="{ path: '/articleDetail/' + item.id }" title="">{{ item.title }}</nuxt-link>
          </h3>
          <p class="news-extract">
            {{ item.content | abstractFormat }}
            <nuxt-link :to="{ path: '/articleDetail/' + item.id }" title="">阅读全文</nuxt-link>
          </p>
          <p class="extro-info">
            <span class="brand">{{ item.brand }}</span>
            <span class="create_time">{{ item.create_time | formatDate }}</span>
            <!--<span class="viewnum">浏览({{ item.viewnum }})</span>-->
          </p>
        </div>
      </li>
    </ul>
    <div class="loadmore" v-if="pageSubject !== '最新文章' && articleList.length">
      <el-button type="info" size="small" plain @click="loadMore">{{ loadMsg }}</el-button>
    </div>
    <div class="no-data" v-if="!articleList.length">暂无数据</div>
  </div>
</template>

<script>
  import { getArticleList } from '../lib/api'
  import { baseImgPath } from "../lib/env";

  export default {
    props: {
      dataList: {
        type: Array,
        required: false
      },
      pageSubject: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        pageNo: 1,
        pageSize: 10,
        total: 10,
        articleList: [],
        loadMsg: '加载更多',
        brand: '',
        baseImgPath: baseImgPath,
      }
    },
    methods: {
      async search(){
        let data = {
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          brand: this.$route.params.category,
        };
        let res = await getArticleList(data);
        this.articleList = res.rows;
        this.total = res.total;
      },
      async loadMore(){
        if(this.pageNo*this.pageSize >= this.total ) {
          return this.loadMsg = '我是有底限的!!!'
        }
        this.pageNo += 1;
        let data = {
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          brand: this.$route.params.category,
        };
        let res = await getArticleList(data);
        this.articleList = this.articleList.concat(res.rows);
      }
    },
    created(){
      if(this.pageSubject === '最新文章'){
        this.articleList = this.dataList;
      }else{
         this.search();
      }
    },
    filters: {
      abstractFormat(val){
        return val.replace(/<[^>]+>/g,'').substring(0,200);
      },
      formatDate(val){
        return val ? val.substring(0,19) : '';
      }
    }
  }
</script>

<style lang="scss">
  .article-list-wrap {
    flex: 1;
    padding: 20px 0 80px;
    order: 1;
    .articles {
      li {
        @include centerBox();
        padding: 30px 0;
        position: relative;
        border-bottom: #BFAB86 1px solid;
        figure {
          width: 150px;
          img {
            display: block;
            width: 125px;
            height: 100px;
          }
        }
        .news-inner {
          flex: 1;
          h3 {
            font-size: 16px;
            font-weight: bold;
            transition: all .5s;
            margin-bottom: 10px;
          }
          .news-extract {
            line-height: 22px;
            a {
              color: #db6d4c;
              padding-left:5px;
            }
          }
          .extro-info {
            margin: 10px 0;
            display: inline-block;
            color: #999;
            span {
              margin: 0 20px 0 0;
              padding-left: 30px;
              background-size: 20px;
              background-repeat: no-repeat;
            }
            .brand {
              background-image: url("~assets/img/brand.png");
            }
            .create_time {
              background-image: url("~assets/img/time.png");
            }
            .viewnum {
              background-image: url("~assets/img/view.png");
              background-position: center left;
              background-size: 30px;
              padding-left: 35px;
            }
          }
        }
      }
    }
    .loadmore {
      text-align: center;
      padding: 20px 0;
    }
    .no-data {
      margin: 30px 0;
      text-align: center;
    }
  }
</style>
