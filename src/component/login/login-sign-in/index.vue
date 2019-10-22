<template>
  <div class="login-sign-in">
    <el-form ref="formLoginSign" class="form-wrap" status-icon :rules="rules" :model="form" label-width="80px" hide-required-asterisk size="smal" label-position="left">
      <el-form-item label="注册账号" prop="username">
        <el-input v-model="form.username"  placeholder="请输入手机号"></el-input>
      </el-form-item>
       <el-form-item label="注册密码" prop="password">
        <el-input v-model="form.password"  placeholder="请输入密码" show-password></el-input>
      </el-form-item>
       <el-form-item label="验证码" prop="verification">
        <el-input v-model="form.verification" placeholder="请输入手机验证码" class="verif-input"></el-input>
       <el-button type="primary" class="verif-button" :disabled="disabled" @click.native="onNote">获取短信息</el-button>
      </el-form-item>
      <el-button type="primary"  @click="onLoginSign('formLoginSign',form)" class="log-in">注册</el-button>
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
    onNote(event) {
      //倒计时方法暂时保留
      // event.toElement.innerHTML = 60
      this.$message({
          message: '发送短信成功',
          type: 'success'
        });
      this.disabled = true
    },
    onLoginSign(formLoginSign,value) {
       this.$refs[formLoginSign].validate((valid) => {
         if(valid) {
           this.$emit('formLoginSign',value)
         }
       })
    }
  }
};
</script>