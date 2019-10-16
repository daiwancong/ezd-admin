<template>
  <div class="login">
    <div class="login-from">
      <el-card class="box-card">
        <i class="el-icon-share"></i>
        <span>易账单</span>
      </el-card>
      <!-- 登录form -->
      <login-in v-if="loginOrSign"></login-in>
      <!-- 注册form -->
      <login-sign v-else></login-sign>
      <el-button type="text"  @click.native="loginChange">没有账号?立即注册</el-button>
    </div>
  </div>
</template>

<script>
import "./login.less";
import LoginIn from "@/component/login/login-in";
import LoginSign from "@/component/login/login-sign-in";
export default {
  name: 'login',
  components: {
    LoginIn,
    LoginSign
  },
  data() {
    return {
      loginOrSign:true
    };
  },
  methods: {
    loginChange(event) {
      if(this.loginOrSign) {
        event.toElement.innerHTML ='有账号,立即登录'
      }else {
        event.toElement.innerHTML ='没有账号？立即注册'
      }
      this.loginOrSign = !this.loginOrSign
    }
  }
};
</script>
