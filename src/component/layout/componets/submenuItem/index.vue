<template>
    <el-menu-item v-if="!items.children">
       <i :class="items.icon"></i>
       <template slot="title">
          <span>{{items.title}}</span>
        </template>
    </el-menu-item>
    <el-submenu v-else>
      <template slot="title">
        <i :class="items.icon"></i>
        <span>{{items.title}}</span>
      </template>
      <submenu-item v-for="(item,i) in items.children" :key="i" :items="item"/>
    </el-submenu>
</template>
<script>
export default {
  name: "submenuItem",
  props: {
    items: {
      type: Object,
      default: () => {}
    },
  }
};
</script>