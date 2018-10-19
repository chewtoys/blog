<template>
  <div class="rich-editor">
    <el-upload
      class="uploader-hide"
      :action="serverUrl"
      name="file"
      :headers="header"
      :show-file-list="false"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :before-upload="beforeUpload">
    </el-upload>
    <el-row v-loading="quillUpdateImg">
      <div class="quill-editor"
           sytle="min-height: 500px;"
           :content="richText"
           ref="myQuillEditor"
           @change="onEditorChange($event)"
           @blur="onEditorBlur($event)"
           @focus="onEditorFocus($event)"
           @ready="onEditorReady($event)"
           v-quill:myQuillEditor="editorOption"
      >
      </div>
    </el-row>
  </div>
</template>

<script>
  import { baseImgPath } from "../lib/env";
  export default {
    props: {
      value: {
        type: String,
        required: true,
        default: ''
      }
    },
    data() {
      const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{'header': 1}, {'header': 2}],                   // custom button values
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{'indent': '-1'}, {'indent': '+1'}],             // outdent/indent
        [{'size': ['small', false, 'large', 'huge']}],   // custom dropdown
        [{'header': [1, 2, 3, 4, 5, 6, false]}],
        [{'color': []}, {'background': []}],              // dropdown with defaults from theme
        [{'align': []}],
        ['link', 'image'],
        ['clean']                                         // remove formatting button
      ];
      return {
        richText: '',                               // 文本编辑器内容
        quillUpdateImg: false,                     // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
        serverUrl: 'http://127.0.0.1:5000/upload',  // 这里写你要上传的图片服务器地址
        header: {},                                 // 有的图片服务器要求请求头需要有token之类的参数，写在这里
        editorOption: {
          placeholder: '请输入内容',
          theme: 'snow',                            // or 'bubble'
          modules: {
            toolbar: {
              container: toolbarOptions,            // 工具栏
              handlers: {
                image(value) {                      // 改写图片上传回调
                  if (value) {
                    document.querySelector('.uploader-hide input').click()
                  } else {
                    this.quill.format('image', false);
                  }
                }
              }
            }
          }
        },
      }
    },
    methods: {
      beforeUpload(res, file) {
        // 显示loading动画
        this.quillUpdateImg = true
      },
      // 上传图片成功
      uploadSuccess(res, file) {
        // res为图片服务器返回的数据
        // 获取富文本组件实例
        // let quill = this.$refs.myQuillEditor.quill;
        let quill = this.myQuillEditor;
        // 如果上传成功
        if (res.filename) {
          // 获取光标所在位置
          let length = quill.getSelection().index;
          // 插入图片  res.info为服务器返回的图片地址
          quill.insertEmbed(length, 'image', baseImgPath + res.filename)
          // 调整光标到最后
          quill.setSelection(length + 1)
        } else {
          this.$message.error('图片插入失败')
        }
        // loading动画消失
        this.quillUpdateImg = false
      },
      // 上传图片失败
      uploadError(res, file) {},
      onEditorChange({ editor, html, text }) {
        this.richText = html;
        this.$emit('input',html);
      },
      onEditorBlur(editor) {},
      onEditorFocus(editor) {},
      onEditorReady(editor) {},
    },
    mounted(){
      this.richText = this.value;
    }
  }
</script>

<style lang="scss">
  .uploader-hide {
    display: none;
  }
</style>
