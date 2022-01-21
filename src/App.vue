<template>
  <el-container>
    <el-header>
      <el-menu class="el-menu-cube" mode="horizontal" router="true" default-active="home">
        <el-image class="el-cube-logo"
                  :src="getImageUrl()"
                  :fit="fit"
        ></el-image>
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="community">江湖</el-menu-item>
        <el-menu-item index="blog">我要发表</el-menu-item>
        <el-menu-item index="message">消息动态</el-menu-item>
        <el-menu-item index="search">站内搜索</el-menu-item>
        <el-menu-item index="about">关于cube</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
            <router-view></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script setup>
import {ref} from 'vue'

const getImageUrl = () => {
  return new URL(`./assets/images/cube.svg`, import.meta.url).href
}
const fit = ref("contain")
</script>
<style lang="scss">
body {
  margin: unset;
}

.el-container {
  position: absolute;
  top: 0;
  bottom: -60px;
  left: 0;
  right: 0;

  .el-header {
    padding: unset;

    .el-menu-cube {
      display: flex;
      padding: 0 calc(50% - 570px);

      .el-cube-logo {
        width: 100px;
        margin-right: 50px;
      }
    }
  }

  .el-main {
    height: calc(100% - 60px);
  }

  .el-footer {
    background: #f6f9fa;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
