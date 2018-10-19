<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin/article' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
      <el-breadcrumb-item>文章详情</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="article-detail">
      <el-form ref="form" :rules="rules" :model="articleForm" label-width="60px">
        <el-form-item label="标题" prop="title" class="w300">
          <el-input type="text" v-model="articleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="标签" prop="brand" class="w300">
          <el-select v-model="articleForm.brand_id" clearable placeholder="请选择">
            <el-option
              v-for="item in brandList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="内容" prop="content">
          <rich-editor v-model="articleForm.content"></rich-editor>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="small" @click="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { getArticleDetail,menuList,addArticle,updateArticle } from "../../../lib/api";
  import richEditor from '../../../components/rich-editor';

  export default {
    components: {
      richEditor
    },
    async asyncData ({ params }) {
      if(params.id == 0) {
        let { rows } = await menuList();
        return { brandList: rows };
      }else {
        let res = await Promise.all([
          menuList(),
          getArticleDetail(params)
        ]);
        return {
          brandList: res[0].rows,
          articleForm: res[1].obj,
        };
      }
    },
    data() {
      return {
        articleForm: {
          id: 0,
          title: '',
          brand_id: '',
          content: '',
        },
        rules: {
          title: [{ required: true, message: '请输入标题', trigger: 'blur' },],
          brand_id: [{ required: true, message: '请选择标签', trigger: 'blur' },],
          content: [{ required: true }]
        }
      }
    },
    methods: {
      submit(){
        this.$refs.form.validate((valid) => {
          if (valid) {
            let res = this.articleForm.id ? updateArticle(this.articleForm) : addArticle(this.articleForm);
            res.then(res => {
              this.$notify.success({title: '操作提示', message: this.articleForm.id ? '更新成功': '添加成功'});
              this.$router.push('/admin/article');
            }).catch(err => {
              this.$notify.success({title: '操作提示', message: this.articleForm.id ? '更新失败': '添加失败'});
            });
          }
        });
      }
    },
  }
</script>
