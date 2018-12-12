<template>
  <div>
    <Header/>
    <div class="main-content w">
      <nuxt/>
      <Right/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  import Right from '../components/right'
  export default {
    components: {
      Header,
      Footer,
      Right
    },
    mounted(){
      let _hmt = _hmt || [];
      (function() {
        let hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c8c197b156c1d5a3e827ebe9f2b8df60";
        let s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      let title = document.title;
      window.onblur = ()=> {
        document.title = '愿你归来仍是少年';
      };
      window.onmouseover = window.onmouseenter = window.onclick = ()=> {
        document.title = title;
      };
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
    background: #fafafa;
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
    .main-content {
      display: flex;
      min-height: 750px;
      margin: 20px auto;
      &>section {
        flex: 1;
        padding: 20px 15px 80px;
        margin-right: 270px;
        background: #fff;
        box-shadow: 0 0 10px 5px #eaeaea;
      }
    }
  }
}
</style>

