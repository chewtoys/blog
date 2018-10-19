<template>
  <div>
    <header>
      <div class="motto pr">
        <p class="pa">If you don't walk out, you will think that this is the whole world</p>
        <img src="~assets/img/header-bg.jpg" width="100%" height="150">
      </div>
      <nav>
        <ul class="w">
          <li>
            <nuxt-link :to="{ path: '/' }">首页</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{ path: '/article' }">技术分享</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{ path: '/mood' }">胡言乱语</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{ path: '/about' }">关于我</nuxt-link>
          </li>
          <li @click="toAdmin">管理博客</li>
        </ul>
      </nav>
    </header>

    <div class="main-content">
      <nuxt/>
    </div>

    <footer>
      <p class="copyright">Copyright © 2018</p>
    </footer>
  </div>
</template>

<script>
  export default {
    methods: {
      toAdmin(){
        let isClient = process.client;
        if(isClient && sessionStorage.getItem('token')){
          this.$router.push('/admin');
        }else {
          this.$router.push('/login');
        }
      }
    },
  }
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  header {
    font-size: 0;
    .motto {
      font-size: 20px;
      .pa {
        top: 50px;
        left: 20px;
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
          padding: 0 15px;
          cursor: pointer;
          color: #fff;
          a {
            color: inherit;
            text-decoration: none;
          }
          &:hover {
            background: #f90;
          }
        }
      }
    }
  }
  .main-content {
    min-height: 750px;
  }
  footer{
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: #000;
    .copyright {
      color: #fff;
    }
  }
}
</style>

