<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#001529"
    text-color="#adb2bb"
    active-text-color="#2086e2"
    :collapse-transition="false"
  >
    <submenu-item v-for="(item,index) in arrData" :key="index"  :items="item" />
  </el-menu>
</template>
<script>
import submenuItem from './submenuItem';
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      arrData: [
        {
          title: "导航一",
          icon: "el-icon-location",
          children: [
            {
              title: "选项1"
            },
            {
              title: "选项2"
            },
            {
              title: "选项3"
            }
          ]
        },
        {
          title: "导航二",
          icon: "el-icon-menu"
        },
        {
          title: "导航三",
          icon: "el-icon-document"
        },
        {
          title: "导航四",
          icon: "el-icon-setting"
        }
      ]
    };
  },
  components: {
    submenuItem
  }
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
}
</style>