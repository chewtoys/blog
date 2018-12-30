<template>
  <section class="message-wrap">
    <h2 class="page-subject">留言板</h2>
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item prop="content">
        <el-input v-model="form.content" rows="8" type="textarea" placeholder="有任何前端技术方面的疑问都可以留言（联系方式 + 问题)，我会第一时间给出回复。暂时只支持Github第三方登录。"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :disabled="!githubUser.login || !githubUser.avatar_url" type="primary" size="small" @click="submit">发表留言</el-button>
      </el-form-item>
    </el-form>
    <div class="message-history">
      <h3>留言({{ total }})</h3>
      <ul v-if="total">
        <li v-for="(item,index) in dataList" :key="index">
          <img :src="item.avatar_url" width="50">
          <div class="message-inner">
            <p class="message-account"><span>{{ item.account }}</span>   第{{ item.id }}楼</p>
            <p class="message-content">{{ item.content }}</p>
            <p class="message-time">{{ item.create_time | formatDate }}</p>
          </div>
        </li>
      </ul>
      <p v-else class="no-message">暂无留言，快来抢占沙发</p>
    </div>
  </section>
</template>

<script>
  import { addMessage,messageList } from '../lib/api'
  import { mapState } from 'vuex'
  export default {
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
        form: {
          content: ''
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
    methods: {
      submit() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            let data = {
              content: this.form.content,
              account: this.githubUser.login,
              avatar_url: this.githubUser.avatar_url
            };
            let res = await addMessage(data);
            res.flag && this.$notify.success({title: '操作提示', message: '发表成功'});
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
      font-size: 16px;
      font-weight: bold;
      margin: 10px 0;
    }
    ul {
      border-top: 2px solid #CCE7F1;
      li {
        padding: 15px 0;
        border-bottom: 1px solid #CCE7F1;
        @include centerBox(flex-start,flex-start);
        img {
          border-radius: 10px;
        }
        .message-inner {
          margin-left: 20px;
          .message-account {
            color: #9B9B9B;
            span {
              color: #f90;
              font-size: 16px;
            }
          }
          .message-content {
            padding: 20px 0;
            line-height: 20px;
          }
          .message-time {
            color: #9B9B9B;
          }
        }
      }
    }
    .no-message {
      color: red;
      margin: 20px;
      text-align: center;
    }
  }
}
</style>
