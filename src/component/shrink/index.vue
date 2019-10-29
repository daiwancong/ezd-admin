<template>
  <el-switch 
  v-model="value" 
  active-color="#ff4949" 
  inactive-color="#13ce66"
  @change="onChange"
  >
  </el-switch>
</template>
<script>
  export default {
    data() {
      return {
        value: true
      }
    },
    methods: {
        onChange(value) {
            this.$emit('switchStatus',value)
        }
    }
  };
</script>