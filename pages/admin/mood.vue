<template>
  <div class="admin-article-wrap">
    <el-table :data="tableData" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="content" label="心情内容" min-width="250"></el-table-column>
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

    <el-dialog title="发表心情" :visible.sync="dialogVisible" :modal="false" width="480px" :before-close="handleClose">
      <el-form ref="form" :model="newMood">
        <el-form-item>
          <div>记录点滴心情:</div>
          <el-input type="textarea" :rows="3" v-model="newMood.content"></el-input>
          <div class="tip ar">还可输入{{ 120 - newMood.content.length }}个字</div>
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
            "content": "If you don't walk out, you will think that this is the whole world",
            "create_time": "2018-10-03T14:54:04.000Z"
          },
          {
            "id": 2,
            "content": "If you don't walk out, you will think that this is the whole world",
            "create_time": "2018-10-03T14:54:26.000Z"
          },
          {
            "id": 3,
            "content": "If you don't walk out, you will think that this is the whole world",
            "create_time": "2018-10-03T14:54:36.000Z"
          },
          {
            "id": 11,
            "content": "测试插入数据库",
            "create_time": "2018-10-07T14:22:27.000Z"
          }
        ],
        dialogVisible: true,
        newMood: {
          content: '',
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
