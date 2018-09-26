<template>
  <div>
    <header>
      <div class="motto pr">
        <p class="pa">If you don't walk out, you will think that this is the whole world</p>
        <img src="~assets/img/header-bg.jpg" width="100%" height="150">
      </div>
      <nav>
        <ul class="w">
          <nuxt-link :to="{ path: '/' }" tag="li">首页</nuxt-link>
          <nuxt-link :to="{ path: '/article' }" tag="li">技术分享</nuxt-link>
          <nuxt-link :to="{ path: '/mood' }" tag="li">胡言乱语</nuxt-link>
          <nuxt-link :to="{ path: '/about' }" tag="li">关于我</nuxt-link>
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
        color: #fff;
        font-size: 16px;
        li {
          height: 60px;
          line-height: 60px;
          padding: 0 15px;
          cursor: pointer;
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

