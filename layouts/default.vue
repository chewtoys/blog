<template>
  <div>
    <header>
      <div class="motto pr">
        <p class="pa">If you don't walk out, you will think that this is the whole world</p>
        <img src="~assets/img/header-bg.jpg" width="100%">
        <span class="i-menu" @click="toggleSidebar"><i></i></span>
      </div>
      <nav id="sidebar">
        <ul class="w" @click="toggleSidebar">
          <li v-for="(item,index) in navList" :key="index">
            <nuxt-link :to="{ path: item.route }">{{ item.title }}</nuxt-link>
          </li>
          <li @click="toAdmin">管理博客</li>
        </ul>
      </nav>
    </header>

    <div class="main-content">
      <nuxt/>
    </div>

    <footer>
      <p class="copyright">Copyright © 2018 - 前端大户 <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target="_blank">鄂ICP备17003180号-1</a></p>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList: [
          { title: '首页',route: '/' },
          { title: '技术分享',route: '/article' },
          { title: '胡言乱语',route: '/mood' },
          { title: '关于我',route: '/about' },
        ],
      }
    },
    methods: {
      toAdmin(){
        let isClient = process.client;
        if(isClient && sessionStorage.getItem('token')){
          this.$router.push('/admin');
        }else {
          this.$router.push('/login');
        }
      },
      toggleSidebar(){
        if(window.outerWidth < 768) {
          document.querySelector('body').classList.toggle('side');
        }
      }
    },
    mounted(){
      console.log("%c前端大户"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
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
  body {
    transition: transform .2s cubic-bezier(.4,.01,.165,.99),-webkit-transform .2s cubic-bezier(.4,.01,.165,.99);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    &.side {
      position: fixed;
      transform: translate3D(250px,0,0);
      .i-menu {
        i {
          opacity: 0;
        }
        &:before {
          width: 24px;
          top: 25px;
          transform: rotate(-45deg);
        }
        &:after {
          width: 24px;
          bottom: 24px;
          transform: rotate(45deg);
        }
      }
    }
    header {
      font-size: 0;
      .motto {
        font-size: 20px;
        p {
          top: 50px;
          left: 20px;
        }
        .i-menu {
          display: none;
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
            &:hover {
              background: #f90;
            }
            &:last-child {
              padding: 0 15px;
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
        a {
          color: #666;
          text-decoration: none;
        }
      }
    }
  }
}
</style>

