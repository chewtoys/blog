<template>
  <div class="login-wrap">
    <div class="login-method">

    </div>
    <el-form ref="form" :rules="rules" :model="form">
      <el-form-item prop="username" class="w300">
        <el-input type="text" clearable v-model="form.username">
          <template slot="prepend">用户名</template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password" class="w300">
        <el-input type="text" clearable v-model="form.password" @keypress.enter.native="submit">
          <template slot="prepend">密&nbsp;&nbsp;&nbsp;码</template>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="middle" @click="submit" class="w300">登  录</el-button>
      </el-form-item>

      <el-form-item class="login-back">
        <img src="~assets/img/github.png" width="30" alt="github账号登录" title="github账号登录" @click="gitLogin">
        <nuxt-link to="/">前往首页</nuxt-link>
      </el-form-item>
    </el-form>
    <canvas></canvas>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import { login,githubLoginInfo } from "../lib/api";
  import { canvas } from "../lib/canvas";
  export default {
    layout: 'login',
    head () {
      return {
        title: '前端大户博客管理后台',
        meta: [
          { hid: 'description', name: 'description', content: '前端大户博客后台管理登录页' }
        ]
      }
    },
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [{ required: true, message: '请输入用户名', trigger: 'blur' },],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' },],
        }
      }
    },
    methods: {
      ...mapMutations('common',['setGithubUserInfo']),
      submit(){
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            let res = await login(this.form);
            if(res.flag){
              sessionStorage.setItem('token',res.token);
              this.$notify.success({title: '操作提示', message: '登录成功'});
              this.$router.push('/admin');
            }else {
              this.$notify.success({title: '操作提示', message: res.msg});
            }
          }
        });
      },
      gitLogin(){
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=179734b4992801028c8d&redirect_uri=https://www.lzzj.online/login'
      },
      async getGithubUserInfo(code){
        let { obj } = await githubLoginInfo({code: code});
        this.setGithubUserInfo(obj);
        sessionStorage.setItem('github', obj);
        this.$notify.success({title: '操作提示', message: '登录成功'});
        this.$router.push('/');
      },
      getParams(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
          return unescape(r[2]);
        return null;
      }
    },
    mounted(){
      let code = this.getParams('code') || '';  // 获取url里面的code
      code && this.getGithubUserInfo(code);
      canvas();
    },
  }
</script>

<style lang="scss">
.login-wrap {
  .el-form {
    position: relative;
    z-index: 2;
  }
  background: #fff;
  padding: 40px 40px 10px;
  border-radius: 8px;
  .login-back {
    text-align: center;
    a {
      color: #409EFF;
    }
    img {
      float: left;
      cursor: pointer;
    }
  }
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}
</style>



