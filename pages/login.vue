<template>
  <div class="login-wrap">
    <el-form ref="form" :rules="rules" :model="form">
      <el-form-item prop="username" class="w300">
        <el-input type="text" clearable v-model="form.username">
          <template slot="prepend">用户名</template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password" class="w300">
        <el-input type="text" clearable v-model="form.password">
          <template slot="prepend">密&nbsp;&nbsp;&nbsp;码</template>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="middle" @click="submit" class="w300">保存</el-button>
      </el-form-item>

      <el-form-item class="login-back">
        <nuxt-link to="/">前往首页</nuxt-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { login } from "../lib/api";

  export default {
    layout: 'login',
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
      }
    },
  }
</script>

<style lang="scss">
.login-wrap {
  background: #fff;
  padding: 40px 40px 10px;
  border-radius: 8px;
  .login-back {
    text-align: center;
    a {
      color: #409EFF;
    }
  }
}
</style>
