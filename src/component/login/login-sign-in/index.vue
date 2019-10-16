<template>
  <div class="login-sign-in">
    <el-form ref="form" class="form-wrap" :model="form" label-width="80px" size="smal" label-position="left">
      <el-form-item label="注册账号">
        <el-input v-model="form.username"  placeholder="请输入手机号"></el-input>
      </el-form-item>
       <el-form-item label="注册密码">
        <el-input v-model="form.password"  placeholder="请输入密码" show-password></el-input>
      </el-form-item>
       <el-form-item label="验证码">
        <el-input v-model="form.verification" placeholder="请输入手机验证码" class="verif-input"></el-input>
       <el-button type="primary" class="verif-button" :disabled="disabled" @click.native="onNote">获取短信息</el-button>
      </el-form-item>
      <el-button type="primary"  @click="onLoginSign" class="log-in">注册</el-button>
    </el-form>
  </div>
</template>
<script>
import './index.less'
export default {
  name: "loginsiginin",
  data() {
    return {
      form: {
        username: "",
        password: "",
        verification: ""
      },
      disabled:false,
    };
  },
  methods: {
    onNote(event) {
      //倒计时方法暂时保留
      // event.toElement.innerHTML = 60
      this.$message({
          message: '发送短信成功',
          type: 'success'
        });
      this.disabled = true
    },
    onLoginSign(event) {
      console.log(event)
    }
  }
};
</script>