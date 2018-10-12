<template>
  <div class="admin-article-wrap">
    <el-table :data="tableData" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="title" label="标题" min-width="250"></el-table-column>
      <el-table-column prop="brand" label="标签"></el-table-column>
      <el-table-column prop="viewnum" label="浏览量"></el-table-column>
      <el-table-column prop="create_time" label="发布日期">
        <template slot-scope="{ row }">{{ row.create_time | formatDate }}</template>
      </el-table-column>
      <el-table-column prop="update_time" label="更新日期">
        <template slot-scope="{ row }">{{ row.update_time | formatDate }}</template>
      </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="{ row }">
          <nuxt-link :to="{ path: `/admin/article/${row.id}` }">查看详情</nuxt-link>
          <nuxt-link to="/">编辑</nuxt-link>
          <nuxt-link to="/">启用</nuxt-link>
          <nuxt-link to="/">禁用</nuxt-link>
          <nuxt-link to="/">删除</nuxt-link>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="pageNo"
      :page-size="pageSize"
      background
      layout="total, prev, pager, next"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>

<script>
  import { getArticleList } from "../../../lib/api";
  export default {
    data() {
      return {
        pageNo: 1,
        pageSize: 2,
      }
    },
    async asyncData(){
      let { rows } = await getArticleList();
      return { tableData: rows };
    },
    methods: {
      handleCurrentChange(){

      }
    },
    filters: {
      formatDate(val){
        return val.replace('T',' ').replace('.000Z','');
      }
    }
  }
</script>

<style lang="scss">
.admin-article-wrap {

}
</style>
