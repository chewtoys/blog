<template>
  <div class="sidebar-wrap">
    <h3>文章分类</h3>
    <ul>
      <li>
        <nuxt-link :to="{ path: '/article/category/htmlcss' }">html/css</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ path: '/article/category/javascript' }">javascript</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ path: '/article/category/vue' }">vue</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ path: '/article/category/nuxt' }">nuxt</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ path: '/article/category/angular' }">angular</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ path: '/article/category/rn' }">react native</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ path: '/article/category/node' }">node</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        created() {

        },
        mounted() {

        }
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
      background: linear-gradient(to left,#f90,#000);
      border-bottom: 1px solid #f90;
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
