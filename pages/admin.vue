<template>
  <div class="admin-wrap">
    <nav>
      <ul class="sidebar">
        <nuxt-link :to="{ path: '/admin' }" tag="li">关于我</nuxt-link>
        <nuxt-link :to="{ path: '/admin/mood' }" tag="li">胡言乱语</nuxt-link>
        <nuxt-link :to="{ path: '/admin/menu' }" tag="li">文章分类</nuxt-link>
        <nuxt-link :to="{ path: '/admin/article' }" tag="li">文章列表</nuxt-link>
      </ul>
    </nav>
    <div class="admin-content">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: 'userAuth',
  }
</script>

<style lang="scss">
.admin-wrap {
  @include centerBox(center,flex-start);
  margin: 20px 20px 50px;
  border-radius: 5px;
  nav {
    width: 150px;
    min-height: 500px;
    background: #fff;
    padding: 20px 10px;
    box-shadow: 0 0 5px 2px #ccc;
    .sidebar {
      color: #333;
      li {
        height: 40px;
        line-height: 40px;
        padding-left: 15px;
        cursor: pointer;
        border-bottom: 1px dashed #ccc;
        &:hover {
          color: #fff;
          background: #409EFF;
        }
      }
    }
  }
  .admin-content {
    background: #fff;
    box-shadow: 0 0 5px 2px #ccc;
    flex: 1;
    min-height: 800px;
    padding: 30px 20px;
    margin-left: 15px;
  }
}
</style>
