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
            <span class="brand"><i class="iconfont icon-Shapecopy"></i>{{ item.brand }}</span>
            <span class="create_time"><i class="iconfont icon-shijian"></i>{{ item.create_time | formatDate }}</span>
            <!--<span class="viewnum">浏览({{ item.viewnum }})</span>-->
          </p>
        </div>
      </li>
    </ul>
    <div v-if="pageSubject !== '最新文章' && articleList.length" class="loadmore">
      <el-button type="info" size="small" plain @click="loadMore">{{ loadMsg }}</el-button>
    </div>
    <div v-if="!articleList.length" class="no-data">暂无数据</div>
  </div>
</template>

<script>
  import { getArticleList } from '../lib/api'
  import { baseImgPath } from "../lib/env";

  export default {
    filters: {
      abstractFormat(val){
        return val.replace(/<[^>]+>/g,'').substring(0,100);
      },
      formatDate(val){
        return val ? val.substring(0,19) : '';
      }
    },
    props: {
      dataList: {
        type: Array,
        required: false,
        default() {
          return [];
        }
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
    created(){
      if(this.pageSubject === '最新文章'){
        this.articleList = this.dataList;
      }else{
        this.search();
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
          return this.loadMsg = '就只有这么多了'
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
    }
  }
</script>

<style lang="scss">
  .article-list-wrap {
    flex: 1;
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
            a {
              color: #333;
              text-decoration: none;
            }
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
              .iconfont {
                color: #db6d4c;
                margin-right: 6px;
              }
              & + span {
                margin-left: 20px;
              }
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
