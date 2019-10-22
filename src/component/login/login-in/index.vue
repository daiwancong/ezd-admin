<template>
  <div class="login-form">
    <el-form ref="formLoginIn" class="form-wrap" status-icon :rules="rules" :model="form" hide-required-asterisk label-width="60px" size="smal" label-position="left">
      <el-form-item label="账号" prop="username" >
        <el-input v-model="form.username"  placeholder="请输入账号"></el-input>
      </el-form-item>
       <el-form-item label="密码"  prop="password">
        <el-input v-model="form.password"  placeholder="请输入密码" show-password></el-input>
      </el-form-item>
       <el-form-item label="验证码"  prop="verification">
        <el-input v-model="form.verification" placeholder="请输入验证码" class="verif-input"></el-input>
       <el-image :src="url" class="verif-img" fits="scale-down" @click="onverifImg"></el-image>
      </el-form-item>
      <el-button type="primary"  @click="onSubmit('formLoginIn',form)" class="log-in">登录</el-button>
    </el-form>
  </div>
</template>
<script>
import './index.less'
import verifyImg from "@/assets/images/verfi.png";
export default {
  name: "loginin",
  data() {
    return {
      url: verifyImg,
      form: {
        username: "",
        password: "",
        verification: ""
      },
      rules: {
        username:[
           {
             required: true,
             pattern: /^1[34578]\d{9}$/,
             message: '请输入正确的手机号',
             trigger: 'blur' 
           }
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        // 验证码验证
         verification:[
          { required: true,message: '请输入验证码', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    onSubmit(formLoginIn,value) {
       this.$refs[formLoginIn].validate((valid) => {
         if(valid) {
           this.$emit('formLoginIn',value)
         }
       })
    },
    onverifImg() {
      //图片切换
      console.log(233)
    }
  }
};
</script>