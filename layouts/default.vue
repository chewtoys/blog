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
      <p class="copyright">Copyright © 2018 - 亲爱的混蛋</p>
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
    mounted(){
      // console.log("%c亲爱的混蛋"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
      console.log("%c亲爱的混蛋"," text-shadow: 0 0 4px white, 0 -5px 6px #FFE500, 2px -10px 5px #FFCC00, -2px -2px 20px #FFCC00, 0px -10px 5px #FF8000; color: #f90;font-weight: 700; font-size:5em");
    }
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
            display: block;
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

