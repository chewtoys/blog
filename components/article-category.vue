<template>
  <div class="sidebar-wrap">
    <h3>文章分类</h3>
    <ul>
      <li v-for="(brand,index) in brandList" :key="index">
        <nuxt-link :to="{ path: `/article/${brand.name}` }">{{ brand.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState,mapActions } from 'vuex'
    export default {
      data() {
          return {}
      },
      computed: {
        ...mapState({
          brandList: state => state.brand.dataList,
        })
      },
      methods: {
        ...mapActions('brand',['search']),
      },
      created(){
        this.search();
      },
    }
</script>

<style lang="scss">
  .sidebar-wrap {
    width: 150px;
    margin: 55px 0 20px 20px;
    background: #FAFCFD;
    border-radius: 5px;
    box-shadow: 1px 1px 2px #A7A8AD;
    h3 {
      height: 30px;
      line-height: 30px;
      color: #fff;
      padding-left: 15px;
      background: linear-gradient(to left,#f90,#000);
      border-bottom: 1px solid #f90;
      border-radius: 3px 3px 0 0 ;
    }
    ul {
      line-height: 1.5;
      li {
        text-indent: 1em;
        padding: 10px 5px;
        border-bottom: 1px solid #DADFE1;
        border-top: 1px solid #FFFFFF;
        a {
          display: block;
          text-indent: 1em;
          font-size: 14px;
          color: black;
          text-decoration: none;
          &:link,&:visited,&:focus {
            color: black;
            text-decoration: none;
          }
          &:hover {
            color: #db6d4c;
          }
        }
      }
    }
  }
</style>
