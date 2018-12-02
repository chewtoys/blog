<template>
  <section class="home-wrap">
    <h2 class="page-subject">最新文章</h2>
    <ul class="articles">
      <li v-for="(item,index) in articleList" :key="index">
        <figure>
          <nuxt-link :to="{ path: '/articleDetail/' + item.id }" title="">
            <img :src="baseImgPath + item.brand + '.jpg'" alt="item.brand">
          </nuxt-link>
        </figure>
        <div class="news-inner">
          <h3>
            <nuxt-link :to="{ path: '/articleDetail/' + item.id }" title="">{{ item.title }}</nuxt-link>
          </h3>
          <p class="extro-info">
            <span class="brand"><i class="iconfont icon-Shapecopy"></i>{{ item.brand }}</span>
            <span class="create_time"><i class="iconfont icon-shijian"></i>{{ item.create_time | formatDate }}</span>
            <!--<span class="viewnum">浏览({{ item.viewnum }})</span>-->
          </p>
        </div>
      </li>
    </ul>

    <h2 class="page-subject">最近心情</h2>
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
        moodList: res[1].rows.slice(0,5)
      };
    },
    async fetch ({ store, params }) {
      if(store.state.brand.dataList.length) return;
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
    .articles {
      margin-bottom: 50px;
      li {
        @include centerBox();
        padding: 15px 0 10px;
        position: relative;
        border-bottom: 1px solid #eaeaea;
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
            width: 230px;
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

    .moods {
      padding: 20px 0;
      li {
        display: flex;
        height: 40px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eaeaea;
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

