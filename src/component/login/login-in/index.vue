<template>
  <div class="login-form">
    <el-form ref="form" class="form-wrap" :model="form" label-width="60px" size="smal" label-position="left">
      <el-form-item label="账号">
        <el-input v-model="form.username"  placeholder="请输入账号"></el-input>
      </el-form-item>
       <el-form-item label="密码">
        <el-input v-model="form.password"  placeholder="请输入密码" show-password></el-input>
      </el-form-item>
       <el-form-item label="验证码">
        <el-input v-model="form.verification" placeholder="请输入验证码" class="verif-input"></el-input>
       <el-image :src="url" class="verif-img" fits="scale-down"></el-image>
      </el-form-item>
      <el-button type="primary"  @click="onSubmit" class="log-in">登录</el-button>
    </el-form>
  </div>
</template>
<script>
import './index.less'
export default {
  name: "loginin",
  data() {
    return {
      url:'@/assets/images/verfi.png',
      form: {
        username: "",
        password: "",
        verification: ""
      }
    };
  },
  methods: {
    onSubmit() {
     
      console.log(this.src)
    }
  }
};
</script>