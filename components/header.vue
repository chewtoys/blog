<template>
  <header>
    <div class="motto w pr">
      <nuxt-link to="/">
        <img src="~assets/img/logo.png" width="200" height="50">
      </nuxt-link>
      <span class="sub-title">If you don't walk out, you will think that this is the whole world</span>
      <span class="i-menu" @click="toggleSidebar"><i></i></span>
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
        currentIndex: 0,
      }
    },
    mounted(){
      if(window.outerWidth <= 768) return;
      window.addEventListener('scroll',this.handleScroll);
      switch (this.$route.name) {
        case 'index': this.currentIndex = 0; break;
        case 'article': this.currentIndex = 1; break;
        case 'mood': this.currentIndex = 2; break;
        case 'messageBoard': this.currentIndex = 3; break;
        case 'about': this.currentIndex = 4; break;
        default: this.currentIndex = 1; break;
      }
    },
    methods: {
      handleScroll(){
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        let t = document.querySelector('#sidebar').getBoundingClientRect().top;
        if(t <= 0) {
          document.querySelector('#sidebar').classList.add('fixed');
        }
        if(scrolltop < 70){
          document.querySelector('#sidebar').classList.remove('fixed');
        }
      },
      toggleSidebar(){
        if(window.outerWidth < 768) {
          document.querySelector('body').classList.toggle('side');
        }
      }
    }
  }
</script>

<style lang="scss">
  header {
    font-size: 0;
    background: #fff;
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
      &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
      }
    }
  }
</style>
