<template>
  <div class="about-wrap">
    <el-form ref="form" :model="info" label-width="70px">
      <el-form-item label="昵称" class="w300">
        <el-input type="text" v-model="info.nickname"></el-input>
      </el-form-item>

      <el-form-item label="年龄" class="w300">
        <el-input type="number" v-model="info.age"></el-input>
      </el-form-item>

      <el-form-item label="出生地" class="w300">
        <el-input type="text" v-model="info.birthplace"></el-input>
      </el-form-item>

      <el-form-item label="爱好" class="w300">
        <el-input type="text" v-model="info.hobby"></el-input>
      </el-form-item>

      <el-form-item label="简介">
        <div class="quill-editor"
           :content="info.introduction"
           @change="onEditorChange($event)"
           @blur="onEditorBlur($event)"
           @focus="onEditorFocus($event)"
           @ready="onEditorReady($event)"
           v-quill:myQuillEditor="editorOption"
        >
        </div>

      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="small" @click="onSubmit">保存</el-button>
        <el-button size="small">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { aboutInfo } from "../../lib/api";
  export default {
    data(){
      return {
        editorOption: {
          modules: {
            toolbar: [['bold', 'italic', 'underline', 'strike'],['blockquote', 'code-block']]
          }
        }
      }
    },
    async asyncData(){
      let { obj } = await aboutInfo();
      return { info: obj };
    },
    methods: {
      onSubmit() {

      },
      onEditorBlur(editor) {
        // console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        // console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        // console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        // console.log('editor change!', editor, html, text)
        this.content = html
      }

    },
  }
</script>

<style lang="scss">
.about-wrap {
  .w300 {
    width: 300px;
  }
}
</style>
