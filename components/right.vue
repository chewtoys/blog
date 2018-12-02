<template>
  <div class="main-right">
    <div class="focus">
      <h2>第三方账号登录</h2>
      <div v-if="!githubUser.login" class="third-account">
        <div class="account-box ac" @click="gitLogin">
          <i class="iconfont icon-github" title="Github账号登录"></i>
          <p>Github</p>
        </div>
      </div>
      <div v-else class="user-info">
        <img :src="githubUser.avatar_url">
        <br>
        <span>{{ githubUser.login }}</span>
      </div>
      <h2>标签列表</h2>
      <ul class="band ac">
        <li v-for="(brand,index) in brandList" :key="index" :class="{ on: $route.path.includes(brand.name) }">
          <nuxt-link :to="{ path: `/article/${brand.name}` }" :style="{ background: colors[index] }">{{ brand.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        colors: ['#036463','#E8673F','#3EB7AB','#FE4163','#FB9C9A','#83AC9A','#859513']
      }
    },
    computed: {
      ...mapState({
        brandList: state => state.brand.dataList,
        githubUser: state => state.common.githubUser,
      })
    },
    mounted(){
      if(window.outerWidth <= 768) return;
      window.addEventListener('scroll',this.handleScroll);
    },
    methods: {
      handleScroll(){
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        let t = document.querySelector('.main-right').getBoundingClientRect().top;
        if(t <= 0) {
          document.querySelector('.main-right').classList.add('fixed');
        }
        if(scrolltop < 70){
          document.querySelector('.main-right').classList.remove('fixed');
        }
      },
      gitLogin() {
        this.$router.push('/login');
      }
    },
  }
</script>

<style lang="scss">
.main-right {
  position: absolute;
  top: 150px;
  right: calc((100% - 1200px)/2);
  width: 250px;
  height: 500px;
  padding: 20px 15px;
  background: #fff;
  box-shadow: 0 0 10px 5px #eaeaea;
  h2 {
    font-size: 16px;
    line-height: 36px;
    border-bottom: 1px solid #ccc;
  }
  .third-account {
    display: flex;
    padding: 10px 0;
    margin-bottom: 20px;
    .account-box {
      width: 50px;
      cursor: pointer;
      .iconfont {
        font-size: 32px;
      }
      p {
        margin-top: 3px;
      }
    }
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
  .band {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    li {
      a {
        display: block;
        padding: 5px 8px;
        margin: 5px;
        color: #fff;
        background: #036463;
        text-decoration: none;
        border-radius: 3px;
      }
    }
  }
  &.fixed {
    position: fixed;
    top: 70px;
  }
}
</style>
