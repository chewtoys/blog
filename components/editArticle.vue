<template>
    <div>
      <el-dialog :title="menuForm.id ? '修改目录':'添加目录'" :visible.sync="dialogVisible" :modal="false" width="480px" :before-close="toggleDialog">
        <el-form ref="form" :rules="rules" :model="articleForm" label-width="70px">
          <el-form-item label="标题" prop="title" class="w300">
            <el-input type="text" v-model="articleForm.title"></el-input>
          </el-form-item>

          <el-form-item label="标签" prop="brand" class="w300">
            <el-select v-model="articleForm.brand_id" placeholder="请选择">
              <el-option
                v-for="(item,index) in menuList"
                :key="index"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="内容" prop="content">
            <div class="quill-editor"
                 sytle="min-height: 500px;"
                 :content="articleForm.content"
                 @change="onEditorChange($event)"
                 @blur="onEditorBlur($event)"
                 @focus="onEditorFocus($event)"
                 @ready="onEditorReady($event)"
                 v-quill:myQuillEditor="editorOption"
            >
            </div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" size="small" @click="submit">保存</el-button>
            <el-button size="small">取消</el-button>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="toggleDialog">取 消</el-button>
          <el-button type="primary" size="small" @click="submit(menuForm.id)">提 交</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        editorOption: {
          modules: {
            toolbar: [['bold', 'italic', 'underline', 'strike'],['blockquote', 'code-block']]
          }
        },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
          ],
          brand_id: [
            { required: true, message: '请选择标签', trigger: 'blur' },
          ],
          content: [
            { required: true, message: '请输入内容', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      onEditorChange({ editor, html, text }) {
        this.info.introduction = html;
      },
    },
  }
</script>

<style lang="scss">

</style>
