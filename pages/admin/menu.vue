<template>
  <div class="admin-article-wrap">
    <el-table :data="tableData" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="name_sub" label="名称简写"></el-table-column>
      <el-table-column prop="disable" label="状态"></el-table-column>
      <el-table-column prop="create_time" label="发布日期">
        <template slot-scope="{ row }">{{ row.create_time | formatDate }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{ row }">

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

    <el-dialog title="添加目录" :visible.sync="dialogVisible" :modal="false" width="480px" :before-close="handleClose">
      <el-form ref="form" :model="menuForm">
        <el-form-item prop="name" label="目录名称">
          <el-input type="text" v-model="menuForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="name_sub" label="名称简写">
          <el-input type="text" v-model="menuForm.name_sub"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" size="small" @click="dialogVisible = false">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pageNo: 1,
        pageSize: 2,
        tableData: [
          {
            "id": 1,
            "name": "html css",
            "name_sub": "htmlcss",
            "create_time": "2018-10-03T14:51:58.000Z",
            " disable": 1
          },
          {
            "id": 2,
            "name": "javascript",
            "name_sub": "js",
            "create_time": "2018-10-03T14:51:59.000Z",
            " disable": 1
          },
          {
            "id": 3,
            "name": "vue",
            "name_sub": "vue",
            "create_time": "2018-10-03T14:52:00.000Z",
            " disable": 1
          },
          {
            "id": 4,
            "name": " nuxt",
            "name_sub": "nuxt",
            "create_time": "2018-10-03T14:52:01.000Z",
            " disable": 1
          },
          {
            "id": 5,
            "name": "Angular",
            "name_sub": "ng",
            "create_time": "2018-10-03T14:52:02.000Z",
            " disable": 1
          },
          {
            "id": 6,
            "name": "react native",
            "name_sub": "rn",
            "create_time": "2018-10-03T14:52:03.000Z",
            " disable": 1
          },
          {
            "id": 7,
            "name": "node",
            "name_sub": "node",
            "create_time": "2018-10-03T14:52:05.000Z",
            " disable": 1
          }
        ],
        dialogVisible: true,
        menuForm: {
          name: '',
          name_sub: '',
        }
      }
    },
    methods: {
      handleCurrentChange(){

      },
      handleClose(){

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
