<template>
  <div class="admin-mood-wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">admin</el-breadcrumb-item>
      <el-breadcrumb-item>胡言乱语</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="create-btn pa">
      <el-button type="primary" size="small" @click="toggleDialog">新增心情</el-button>
    </div>

    <el-table :data="tableData" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="content" label="心情内容" min-width="250"></el-table-column>
      <el-table-column prop="create_time" label="发布日期">
        <template slot-scope="{ row }">{{ row.create_time | formatDate }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{ row }">
          <el-button type="danger" size="small" plain @click="delItem(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :current-page="pageNo"
      :page-size="pageSize"
      :total="total"
      background
      layout="total, prev, pager, next"
      @current-change="handlePageChange"
    >
    </el-pagination>

    <el-dialog :visible.sync="dialogVisible" :modal="false" :before-close="toggleDialog" title="发表心情" width="480px">
      <el-form ref="form" :rules="rules" :model="dialogForm">
        <el-form-item prop="content">
          <div>记录点滴心情:</div>
          <el-input v-model="dialogForm.content" :rows="3" type="textarea"></el-input>
          <div class="tip ar">
            <span v-if="dialogForm.content.length <= 120">还可输入{{ 120 - dialogForm.content.length }}个字</span>
            <span v-else>输入超过{{ dialogForm.content.length - 120 }}个字</span>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="toggleDialog">取 消</el-button>
        <el-button type="primary" size="small" @click="submit">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { mapState,mapActions,mapMutations } from "vuex"
  export default {
    filters: {
      formatDate(val){
        return val ? val.substring(0,19) : '';
      }
    },
    data() {
      return {
        rules: {
          content: [
            { required: true, message: '请输入心情', trigger: 'blur' },
            { max: 120, message: '最多输入120个字符', trigger: 'blur' }
          ],
        }
      }
    },
    async fetch ({ store }) {
      await store.dispatch('mood/search');
    },
    computed: {
      ...mapState({
        tableData: state => state.mood.dataList,
        pageNo: state => state.mood.pageNo,
        pageSize: state => state.mood.pageSize,
        total: state => state.mood.total,
        dialogVisible: state => state.mood.dialogVisible,
        dialogForm: state => state.mood.dialogForm,
      })
    },
    methods: {
      ...mapActions('mood',['search','addItem','delItem']),
      ...mapMutations('mood',['toggleDialog','setPagination']),
      handlePageChange(pageNo){
        this.setPagination(pageNo);
        this.search();
      },
      submit(){
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.addItem();
          }
        });
      }
    }
  }
</script>
