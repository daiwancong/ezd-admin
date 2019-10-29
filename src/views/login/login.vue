<template>
  <div class="login">
    <div class="login-from">
      <el-card class="box-card">
        <i class="el-icon-share"></i>
        <span>易账单</span>
      </el-card>
      <!-- 登录form -->
      <login-in v-if="loginOrSign" @formLoginIn="onloginIn"></login-in>
      <!-- 注册form -->
      <login-sign v-else @formLoginSign="onLoginSign"></login-sign>
      <el-button class="login-txt" type="text"  @click.native="loginChange">{{loginTxt}}</el-button>
    </div>
  </div>
</template>

<script>
import "./login.less";
import LoginIn from "@/component/login/login-in";
import LoginSign from "@/component/login/login-sign-in";
const loginInTxt = '有账号,立即登录';
const loginSignTxt = '没有账号？立即注册';
export default {
  name: 'login',
  components: {
    LoginIn,
    LoginSign
  },
  data() {
    return {
      loginOrSign:true,
      loginTxt:loginInTxt
    };
  },
  methods: {
    //登录的方法
    onloginIn(val) {
      console.log('验证的ad',val)
    },
    //注册的方法
    onLoginSign(val) {
      console.log('注册的方法',val)
    },
    loginChange(event) {
      if(this.loginOrSign) {
        this.loginTxt = loginSignTxt
      }else {
        this.loginTxt = loginInTxt
      }
      this.loginOrSign = !this.loginOrSign
    }
  }
};
</script>
