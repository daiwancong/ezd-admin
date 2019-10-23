<template>
  <div class="layout">
    <el-container class="layout-wrap">
      <el-aside :width="getAsideWidth"></el-aside>
      <el-container>
        <el-header>
          <div class="icon-wrap">
            <i class="el-icon-turn-off"  @click="onShrinkMenu"></i>
          </div>
        </el-header>
        <el-container class="main-wrap">
          <el-main></el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import "./index.less";
export default {
  name: "layout",
  data() {
    return {
        asideStatus:true,
        asideWidth: '250px'
    };
  },
  computed: {
      getAsideWidth:function() {
          return this.asideWidth = this.asideStatus?'250px':'65px'
      }
  },
  methods: {
    onShrinkMenu() {
        this.asideStatus = !this.asideStatus
    }
  }
};
</script>