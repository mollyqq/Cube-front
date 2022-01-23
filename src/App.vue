<template>
  <el-container>
    <el-scrollbar class="main-scrollbar">
      <el-header class="main-header">
        <el-menu class="main-menu" mode="horizontal" router="true" default-active="home">
          <el-image class="main-cube-logo"
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
      <el-main class="main-area">
        <router-view></router-view>
      </el-main>
      <el-footer class="main-footer">Footer</el-footer>
    </el-scrollbar>
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
  overflow: hidden;
}

.main-scrollbar {
  position: absolute;
  top: 0;
  bottom: -60px;
  left: 0;
  right: 0;

  .el-scrollbar__view{
    height: 100%;
  }

  .main-header {
    padding: unset;

    .main-menu {
      display: flex;
      padding: 0 calc(50% - 570px);

      .main-cube-logo {
        width: 100px;
        margin-right: 50px;
      }
    }
  }

  .main-area {
    height: calc(100% - 60px);
    padding: unset;
  }

  .main-footer {
    background: #f6f9fa;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
