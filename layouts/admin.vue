<template>
  <no-ssr placeholder="Loading...">
    <div>
      <header>
        <div class="motto pr w">
          <p class="sub-title">If you don't walk out, you will think that this is the whole world</p>
          <el-button type="primary" plain size="small" class="admin-btn" @click="logout">退出</el-button>
        </div>
      </header>

      <div class="main-content">
        <nuxt/>
      </div>

      <Footer/>
    </div>
  </no-ssr>
</template>

<script>
  import Footer from '../components/footer'
  export default {
    components: {
      Footer,
    },
    created(){
      let isClient = process.client;
      if(isClient){
        let token = sessionStorage.getItem('token');
        if (!token) {
          this.$router.push('/login');
        }
      }
    },
    methods: {
      logout(){
        sessionStorage.removeItem('token');
        this.$router.push('/');
      }
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
        .sub-title {
          padding: 30px 30px 20px 0;
        }
        .admin-btn {
          position: absolute;
          top: 25px;
          right: 0;
        }
      }
    }
    .main-content {
      min-height: 750px;
    }
  }
</style>

