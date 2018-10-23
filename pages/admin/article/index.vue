<template>
  <div class="admin-article-wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">admin</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="create-btn pa">
      <el-button type="primary" size="small" @click="addArticle">新增文章</el-button>
    </div>

    <el-table :data="tableData" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="title" label="标题" min-width="250"></el-table-column>
      <el-table-column prop="brand" label="标签" width="100"></el-table-column>
      <el-table-column prop="viewnum" label="浏览量" width="100"></el-table-column>
      <el-table-column prop="create_time" label="发布日期">
        <template slot-scope="{ row }">{{ row.create_time | formatDate }}</template>
      </el-table-column>
      <el-table-column prop="update_time" label="更新日期">
        <template slot-scope="{ row }">{{ row.update_time | formatDate }}</template>
      </el-table-column>
      <el-table-column label="操作" width="280" class-name="tab-opera">
        <template slot-scope="{ row }">
          <nuxt-link :to="{ path: `/articleDetail/${row.id}` }" target="_blank">
            <el-button size="small" plain>查看</el-button>
          </nuxt-link>
          <nuxt-link :to="{ path: `/admin/article/${row.id}` }">
            <el-button type="primary" size="small" plain>编辑</el-button>
          </nuxt-link>
          <el-button type="danger" size="small" plain @click="delItem(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="pageNo"
      :page-size="pageSize"
      background
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import { mapState,mapActions,mapMutations } from "vuex"
  export default {
    async fetch ({ store }) {
      await store.dispatch('article/search');
    },
    computed: {
      ...mapState({
        tableData: state => state.article.dataList,
        pageNo: state => state.article.pageNo,
        pageSize: state => state.article.pageSize,
        total: state => state.article.total,
      })
    },
    methods: {
      ...mapActions('article',['search','addItem','delItem']),
      ...mapMutations('article',['toggleDialog','setPagination']),
      handleCurrentChange(pageNo){
        this.setPagination(pageNo);
        this.search();
      },
      addArticle(){
        this.$router.push("/admin/article/0"); // 0 表示新建
      },
    },
    filters: {
      formatDate(val){
        return val ? val.substring(0,19) : '';
      }
    }
  }
</script>

