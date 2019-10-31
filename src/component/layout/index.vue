<template>
  <div class="layout">
    <el-container class="layout-wrap">
      <el-aside class="aside-wrap" :width="getAsideWidth">
        <!-- 导航组件 -->
            <nav-bar class="nav-bar" :isCollapse="asideStatus" />
      </el-aside>
      <el-container>
        <el-header>
          <shrink  class="shrink-wrap" @switchStatus="onShrinkMenu"/>
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
import NavBar from './componets/nav-bar'
import Shrink from '@/component/shrink/index'
export default {
  name: "layout",
  data() {
    return {
        asideStatus:true,
        asideWidth: '65px'
    };
  },
  computed: {
      getAsideWidth:function() {
          return this.asideWidth = this.asideStatus?'65px':'250px'
      }
  },
  methods: {
    onShrinkMenu (val) {
      this.asideStatus = val
    }
  },
  components: {
    NavBar,
    Shrink
  }
};
</script>