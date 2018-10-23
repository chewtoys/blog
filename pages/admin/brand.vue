<template>
  <div class="admin-menu-wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">admin</el-breadcrumb-item>
      <el-breadcrumb-item>文章分类</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="create-btn pa">
      <el-button type="primary" size="small" @click="toggleDialog">新增文章分类</el-button>
    </div>

    <el-table :data="tableData" border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="brand_name" label="名称"></el-table-column>
      <el-table-column prop="disable" label="状态">
        <template slot-scope="{ row }">
          <i class="el-icon-circle-check green f16" v-if="row.disable"></i>
          <i class="el-icon-circle-close red f16" v-else></i>
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="发布日期">
        <template slot-scope="{ row }">{{ row.create_time | formatDate }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{ row }">
          <el-button type="primary" size="small" plain @click="editItem(row)">编辑</el-button>
          <el-button type="danger" size="small" plain @click="delItem(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="dialogForm.id ? '修改目录':'添加目录'" :visible.sync="dialogVisible" :modal="false" width="480px" :before-close="toggleDialog">
      <el-form ref="form" :rules="rules" :model="dialogForm">
        <el-form-item prop="brand_name" label="目录名称">
          <el-input type="text" v-model="dialogForm.brand_name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="toggleDialog">取 消</el-button>
        <el-button type="primary" size="small" @click="submit(dialogForm.id)">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { mapState,mapActions,mapMutations } from "vuex"
  export default {
    async fetch ({ store, params }) {
      await store.dispatch('brand/search');
    },
    data(){
      return{
        rules: {
          brand_name: [
            { required: true, message: '请输入目录名称', trigger: 'blur' },
            { max: 12, message: '最多输入12个字符', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      ...mapState({
        tableData: state => state.brand.dataList,
        dialogVisible: state => state.brand.dialogVisible,
        dialogForm: state => state.brand.dialogForm,
      })
    },
    methods: {
      ...mapActions('brand',['search','addItem','delItem','updateItem']),
      ...mapMutations('brand',['toggleDialog','setDialogForm']),
      submit(id){
        this.$refs.form.validate((valid) => {
          if (valid) {
            id ? this.updateItem() : this.addItem();
          }
        });
      },
      editItem(row){
        this.toggleDialog();
        this.setDialogForm(row);
      }
    },
    filters: {
      formatDate(val){
        return val ? val.substring(0,19) : '';
      }
    }
  }
</script>

