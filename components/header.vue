<template>
  <header>
    <div class="motto w pr">
      <img src="~assets/img/logo.png" width="200" height="50">
      <span class="sub-title">If you don't walk out, you will think that this is the whole world</span>
      <span class="i-menu" @click="toggleSidebar"><i></i></span>
      <p v-if="githubUser.login" class="user-info">
        <img :src="githubUser.avatar_url">
        <br>
        <span>{{ githubUser.login }}</span>
      </p>
      <p v-else class="user-info">
        <input type="button" value="登 录" @click="thirdLogin">
      </p>
    </div>
    <nav id="sidebar">
      <ul class="w" @click="toggleSidebar">
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="{ on: currentIndex === index }"
          @click="currentIndex = index"
        >
          <nuxt-link :to="{ path: item.route }">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        navList: [
          { title: '首页',route: '/' },
          { title: '技术分享',route: '/article' },
          { title: '胡言乱语',route: '/mood' },
          { title: '留言板',route: '/messageBoard' },
          { title: '关于我',route: '/about' },
        ],
        currentIndex: 1,
      }
    },
    computed: {
      ...mapState({
        githubUser: state => state.common.githubUser,
      })
    },
    methods: {
      toggleSidebar(){
        if(window.outerWidth < 768) {
          document.querySelector('body').classList.toggle('side');
        }
      },
      thirdLogin(){
        this.$router.push('/login');
      }
    }
  }
</script>

<style lang="scss">
  header {
    font-size: 0;
    .motto {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      font-size: 20px;
      .sub-title {
        padding-top: 10px;
      }
      .i-menu {
        display: none;
      }
      .user-info {
        padding-top: 10px;
        text-align: center;
        font-size: 12px;
        img {
          width: 50px;
          border-radius: 50%;
        }
        input {
          background: #f90;
          color: #fff;
          padding: 3px 8px;
          border-radius: 3px;
          border: 1px solid transparent;
          &:hover {
            background: #f70;
            border-color: #f10;
          }
        }
      }
    }
    nav {
      background: linear-gradient(to left,#f90,#000 40%);
      ul {
        @include centerBox(flex-start);
        font-size: 16px;
        li {
          height: 60px;
          line-height: 60px;
          cursor: pointer;
          color: #fff;
          a {
            color: inherit;
            text-decoration: none;
            display: block;
            padding: 0 15px;
          }
          &.on,&:hover {
            color: #fff;
            border-bottom: 5px solid #f90;
          }
        }
      }
    }
  }
</style>
