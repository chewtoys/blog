<template>
  <div class="admin-about-wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">admin</el-breadcrumb-item>
      <el-breadcrumb-item>关于我</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="create-btn pa">
      <el-button type="primary" size="small" @click="editModel = true">编辑</el-button>
    </div>

    <el-form ref="form" :rules="rules" :model="info" label-width="70px">
      <el-form-item label="昵称" prop="nickname" class="w300">
        <el-input type="text" v-model="info.nickname"></el-input>
      </el-form-item>

      <el-form-item label="年龄" prop="age" class="w300">
        <el-input type="number" v-model="info.age"></el-input>
      </el-form-item>

      <el-form-item label="出生地" prop="birthplace" class="w300">
        <el-input type="text" v-model="info.birthplace"></el-input>
      </el-form-item>

      <el-form-item label="爱好" prop="hobby" class="w300">
        <el-input type="text" v-model="info.hobby"></el-input>
      </el-form-item>

      <el-form-item label="简介" prop="introduction">
        <rich-editor v-model="info.introduction"></rich-editor>
      </el-form-item>

      <el-form-item v-if="editModel">
        <el-button type="primary" size="small" @click="submit">保存</el-button>
        <el-button size="small" @click="editModel = false">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { aboutInfo,updateAbout } from "../../lib/api";
  import richEditor from '../../components/rich-editor';
  export default {
    components: {
      richEditor
    },
    async asyncData(){
      let { obj } = await aboutInfo();
      return { info: obj };
    },
    data(){
      return {
        editModel: false,
        articleForm: {
          title: '',
          brand_id: '',
          content: '',
        },
        rules: {
          nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' },],
          age: [{ required: true, message: '请输入年龄', trigger: 'blur' },],
          birthplace: [{ required: true, message: '请输入出生地', trigger: 'blur' },],
          hobby: [{ required: true, message: '请输入爱好', trigger: 'blur' },],
          introduction: [{ required: true }]
        }
      }
    },
    methods: {
      submit() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            let res = await updateAbout(this.info);
            this.info = res.obj;
            this.$notify.success({title: '操作提示', message: '更新成功'});
          }
        });
      },
    }
  }
</script>

<style lang="scss">

</style>
