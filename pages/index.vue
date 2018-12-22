<template>
  <section class="home-wrap">
    <div class="page-subject">
      <h2>最新文章</h2>
      <nuxt-link to="article">
        查看更多<i class="el-icon-d-arrow-right"></i>
      </nuxt-link>
    </div>
    <ul class="articles">
      <li v-for="(item,index) in articleList" :key="index">
        <nuxt-link :to="{ path: '/articleDetail/' + item.id }" :title="item.title">
          <figure>
            <img :src="baseImgPath + item.brand + '.jpg'" alt="item.brand">
          </figure>
          <div class="news-inner">
            <h3>{{ item.title }}</h3>
            <p class="extro-info">
              <span class="brand"><i class="iconfont icon-Shapecopy"></i>{{ item.brand }}</span>
              <span class="create_time"><i class="iconfont icon-shijian"></i>{{ item.create_time | formatDate }}</span>
              <!--<span class="viewnum">浏览({{ item.viewnum }})</span>-->
            </p>
          </div>
        </nuxt-link>
      </li>
    </ul>

    <div class="page-subject">
      <h2>最近心情</h2>
      <nuxt-link to="mood">
        查看更多<i class="el-icon-d-arrow-right"></i>
      </nuxt-link>
    </div>
    <ul class="moods">
      <li v-for="(item,index) in moodList" :key="index">
        <p class="moods-extract">{{ item.content }}</p>
        <p class="create_time"><i class="iconfont icon-shijian"></i>{{ item.create_time | formatDate }}</p>
      </li>
    </ul>

  </section>
</template>

<script>
  import { baseImgPath } from "../lib/env";
  import { getArticleList, moodList } from "../lib/api"
  export default {
    async asyncData () {
      let res = await Promise.all([getArticleList(), moodList()]);
      return {
        articleList: res[0].rows.slice(0,5),
        moodList: res[1].rows.slice(0,5),
      };
    },
    async fetch ({ store, params }) {
      await store.dispatch('brand/search');
    },
    filters: {
      abstractFormat(val){
        return val.replace(/<[^>]+>/g,'').substring(0,200);
      },
      formatDate(val){
        return val ? val.substring(0,19) : '';
      }
    },
    data() {
      return {
        baseImgPath: baseImgPath,
      }
    }
  }
</script>

<style lang="scss">
  .home-wrap {
    .page-subject {
      display: flex;
      justify-content: space-between;
      a {
        color: #7d7d7d;
        font-size: 14px;
        text-decoration: none;
        &:hover {
          color: #db6d4c;
        }
      }
    }
    .articles {
      margin-bottom: 50px;
      li a {
        @include centerBox();
        color: #333;
        padding: 15px 0 10px 10px;
        position: relative;
        border-bottom: 1px solid #eaeaea;
        text-decoration: none;
        &:hover {
          background: #f1f1f1;
        }
        figure {
          width: 80px;
          img {
            display: block;
            width: 50px;
            height: 30px;
          }
        }
        .news-inner {
          flex: 1;
          display: flex;
          h3 {
            flex: 1;
            font-size: 16px;
            font-weight: bold;
            margin-top: 8px;
            transition: all .5s;
            margin-bottom: 10px;
            a {
              color: #333;
              text-decoration: none;
            }
          }
          .extro-info {
            width: 250px;
            margin: 10px 0;
            display: inline-block;
            color: #999;
            .brand {
              display: inline-block;
              width: 80px;
            }
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

    .moods {
      padding: 20px 0;
      li {
        display: flex;
        height: 40px;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        border-bottom: 1px solid #eaeaea;
        &:hover {
          background: #f1f1f1;
        }
        .create_time {
          color: #999;
          width: 160px;
          .iconfont {
            color: #db6d4c;
            margin-right: 6px;
          }
        }
      }
    }
  }
</style>

