<template>
  <el-container>
    <el-scrollbar class="main-scrollbar">
      <el-header class="main-header">
        <el-menu class="main-menu" mode="horizontal" :router=true :default-active="defaultActiveIndex">
          <el-image class="main-cube-logo"
                    :src="logoImageUrl"
                    fit="contain"
          ></el-image>
          <el-menu-item class="main-menu-item" :route="item.state" :index="item.state" v-for="item in menulist">{{ item.name }}
          </el-menu-item>
          <el-row class="main-search">
            <el-input v-model="input4" class="w-50 m-2" placeholder="Type something">
              <template #prefix>
                <el-icon class="el-input__icon">
                  <search/>
                </el-icon>
              </template>
            </el-input>
          </el-row>
          <div style="flex-grow: 1"></div>
          <el-tooltip content="我要发表" placement="bottom" effect="light">
            <el-badge :hidden=true class="main-menu-icon">
              <el-icon :size="20">
                <edit/>
              </el-icon>
            </el-badge>
          </el-tooltip>
          <el-tooltip content="我的消息" placement="bottom" effect="light">
            <el-badge :value="messageValue" :max="99" class="main-menu-icon" :hidden=messageCount(messageValue)>
              <el-icon :size="20" @click="add">
                <message/>
              </el-icon>
            </el-badge>
          </el-tooltip>
          <el-avatar class="main-user-image" :size="35" :src="userImageUrl"></el-avatar>
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
import {ref, reactive, toRefs} from 'vue'
import {Calendar, Search, Edit, Message} from '@element-plus/icons-vue'

const url = reactive({
  userImageUrl: new URL(`./assets/images/user.jpg`, import.meta.url).href,
  logoImageUrl: new URL(`./assets/images/cube.svg`, import.meta.url).href
})
const {userImageUrl, logoImageUrl} = toRefs(url)
const defaultActiveIndex = "home"
const menulist = ref([{
  id: 0,
  key: "home",
  name: "首页",
  state: "home",
}, {
  id: 1,
  key: "community",
  name: "江湖",
  state: "community",
}, {
  id: 2,
  key: "about",
  name: "关于Cube",
  state: "about",
}])
let messageValue = ref(0)

function messageCount(value) {
  return value === 0
}

function add() {
  messageValue.value += 1
}


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

  .el-scrollbar__view {
    height: 100%;
  }

  .main-header {
    padding: unset;

    .main-menu {
      display: flex;
      padding: 0 calc(50% - 570px);
      align-items: center;

      .main-menu-item {
        padding: 0 30px;
      }

      .main-cube-logo {
        width: 100px;
        margin-right: 100px;
      }

      .main-search {
        margin-left: 10px;
        margin-right: 10px;
      }

      .main-menu-icon {
        color: hsl(0, 0%, 48%);
        margin: 0 15px;
        cursor: pointer;
      }

      .main-menu-icon:hover {
        color: var(--el-menu-active-color);
      }

      .main-user-image {
        margin: 0 15px;
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
