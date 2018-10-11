<template>
  <div class="admin-article-wrap">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="title" label="标题" width="180"></el-table-column>
      <el-table-column prop="brand" label="标签" width="180"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="viewnum" label="浏览量"></el-table-column>
      <el-table-column prop="create_time" label="发布日期"></el-table-column>
      <el-table-column prop="update_time" label="更新日期"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            "id": 1,
            "title": "阿里云CentOS下nodejs安装",
            "brand": "node",
            "content": "web前端开发,专注前端开发,关注用户体验,关注国内外最新最好的前端开发技术和前端开发资讯的专业博客",
            "viewnum": 99,
            "create_time": "2018-10-03T15:25:47.000Z",
            "update_time": "2018-10-03T15:25:47.000Z",
            "brand_id": 7
          },
          {
            "id": 2,
            "title": "将HTMLString转换为纯文本 - CSDN博客",
            "brand": "vue",
            "content": "将带有标签的HTML文本转换为正常文本... 将带有标签的HTML文本转换为正常文本 有些时候服务器会返回带HTML标签格式的文本给到我们前端,这个时候我们还...",
            "viewnum": 66,
            "create_time": "2018-10-03T15:25:50.000Z",
            "update_time": "2018-10-03T15:25:50.000Z",
            "brand_id": 3
          },
          {
            "id": 3,
            "title": "vue打包速度优化",
            "brand": "vue",
            "content": "这是一个很头疼的问题，webpack极大的简化了前端自动化配置，但是打包速度实在是不如人意。在此之前，本人也尝试过网友的一些方法，但是，很多坑，跳进去就出不来，经过多个项目实践，现总结一下我用到的优化方式",
            "viewnum": 88,
            "create_time": "2018-10-03T15:25:51.000Z",
            "update_time": "2018-10-03T15:25:51.000Z",
            "brand_id": 3
          },
        ]
      }
    },
  }
</script>

<style lang="scss">
.admin-article-wrap {

}
</style>
