<template>
  <section class="message-wrap">
    <h2 class="page-subject">留言板</h2>
    <div class="message-history">
      <h3 @click="showDialog()">既然来了，留句话吧</h3>
      <ul>
        <li v-for="(item,index) in dataList" :key="index">
          <div class="message-box">
            <img :src="item.avatar_url" width="50">
            <div class="message-inner">
              <p class="message-account">
                <span>{{ item.account === 'xiaoyao316' ? '前端大户': item.account }}</span>
                <span>  # 第{{ total - index }}楼</span>
                <button @click="showDialog(item.id, item.account, total - index)">回复</button>
              </p>
              <div class="message-content" v-html="item.content"></div>
              <p class="message-time">{{ item.create_time | formatDate }}</p>
            </div>
          </div>
          <div v-if="item.children" class="message-reply">
            <div v-for="(reply,idx) in item.children" :key="idx" class="message-box">
              <img :src="reply.avatar_url" width="25">
              <div class="message-inner">
                <p class="message-account">
                  <span>{{ reply.account === 'xiaoyao316' ? '前端大户': reply.account }}</span>
                  <span>{{ reply.create_time | formatDate }}</span>
                </p>
                <div class="message-content" v-html="reply.content"></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <el-dialog
      :title="form.parent_id ? '回复 #' + form.floor + '楼 @' + form.account : '添加留言'"
      :visible.sync="dialogVisible"
      :before-close="hideDialog"
      width="1000px"
      center
    >
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="content">
          <rich-editor v-model="form.content"></rich-editor>
        </el-form-item>
        <el-form-item align="center">
          <el-button type="primary" size="small" @click="submit">保&nbsp;&nbsp;&nbsp;&nbsp;存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </section>
</template>

<script>
  import { addMessage,messageList } from '../lib/api'
  import richEditor from '../components/rich-editor.vue'
  import { mapState } from 'vuex'
  export default {
    components: {
      richEditor,
    },
    head () {
      return {
        title: '前端大户-前端学习交流平台',
      }
    },
    async asyncData(){
      let res = await messageList();
      return {
        dataList: res.rows,
        total: res.total
      };
    },
    async fetch ({ store, params }) {
      if(store.state.brand.dataList.length) return;
      await store.dispatch('brand/search');
    },
    filters: {
      formatDate(val){
        return val ? val.substring(0,19) : '';
      }
    },
    data() {
      return {
        dialogVisible: false,
        form: {
          content: '',
          parent_id: '',
          account: '',
          floor: ''
        },
        rules: {
          content: [{ required: true, message: '请输入留言', trigger: 'blur' },],
        }
      }
    },
    computed: {
      ...mapState({
        githubUser: state => state.common.githubUser,
      })
    },
    watch: {
      ['form.content']() {
        this.$refs.form.validateField('content');
      }
    },
    methods: {
      showDialog(pid, account, floor) {
        this.dialogVisible = true;
        if(pid) {
          this.form.parent_id = pid;
          this.form.account = account;
          this.form.floor = floor;
        }
      },
      hideDialog(){
        this.$refs.form.resetFields();
        this.form = {
          content: '',
          parent_id: '',
          account: '',
          floor: ''
        };
        this.dialogVisible = false;
      },
      submit() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            let data = {
              content: this.form.content,
              parent_id: this.form.parent_id,
              account: this.githubUser.login,
              avatar_url: this.githubUser.avatar_url
            };
            let res = await addMessage(data);
            res.flag && this.$notify.success({title: '操作提示', message: '发表成功'});
            this.hideDialog();
            let resp = await messageList();
            this.dataList = resp.rows;
            this.total = resp.total;
          }
        });
      },
    }
  }
</script>

<style lang="scss">
.message-wrap {
  padding: 20px 0 80px;
  .el-form {
    margin: 20px 0;
    .el-form-item:first-child {
      margin-bottom: 15px;
    }
  }
  .message-history {
    h3 {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      margin: 30px 0;
      cursor: pointer;
      text-decoration: underline;
      &:hover {
        color: #666;
      }
    }
    &>ul {
      border-top: 2px solid #CCE7F1;
      &>li {
        padding: 15px 0;
        border-bottom: 1px solid #CCE7F1;
        .message-box {
          @include centerBox(flex-start,flex-start);
          img {
            border-radius: 6px;
          }
          .message-inner {
            flex: 1;
            margin-left: 20px;
            .message-account {
              color: #9B9B9B;
              span:first-child {
                color: #f90;
                font-size: 16px;
              }
              button {
                display: none;
                float: right;
                background: #fff;
                border: none;
                outline: none;
                color: #E8673F;
                cursor: pointer;
              }
            }
            .message-content {
              padding: 20px 0;
              line-height: 20px;
              img {
                max-width: 100%;
                max-height: 100px;
              }
            }
            .message-time {
              color: #9B9B9B;
            }
          }
        }
        .message-reply {
          background: #f7f8fa;
          padding: 20px 10px 10px;
          margin-top: 5px;
          margin-left: 70px;
          font-size: 12px;
          img {
            border-radius: 3px;
          }
          .message-account span{
            font-size: 12px !important;
            &:last-child {
              color: #7d7d7d;
              margin-left: 20px;
            }
          }
          .message-content {
            color: #7d7d7d;
            padding: 10px 0 !important;
          }
        }
        &:hover .message-box .message-inner .message-account button{
          display: block;
        }
      }
    }
  }
}
</style>
