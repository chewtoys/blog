<template>
  <div class="topnews">
    <h2 class="page-subject">{{ pageSubject }}</h2>
    <ul class="articles">
      <li v-for="(item,index) in dataList" :key="index">
        <figure>
          <nuxt-link :to="{ path: '/article/' + item.id }" title="">
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=73254038,3341181425&fm=26&gp=0.jpg" alt="">
          </nuxt-link>
        </figure>
        <div class="news-inner">
          <h3>
            <nuxt-link :to="{ path: '/article/' + item.id }" title="">{{ item.title }}</nuxt-link>
          </h3>
          <p class="news-extract">
            {{ item.content.substr(0,200) + '...' }}
            <nuxt-link :to="{ path: '/article/' + item.id }" title="">阅读全文</nuxt-link>
          </p>
          <p class="extro-info">
            <span class="brand">{{ item.brand }}</span>
            <span class="create_time">{{ item.create_time }}</span>
            <span class="viewnum">浏览({{ item.viewnum }})</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      dataList: {
        type: Array,
        required: true,
      },
      pageSubject: {
        type: String,
        required: true,
        default: '',
      }
    },
    data() {
      return {}
    },
    methods: {},
    created() {

    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  .topnews {
    flex: 1;
    padding: 20px 0 80px;
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
  }
</style>
