<template>
  <el-container class="home-container">
    <el-aside width="200px">
      <el-scrollbar>
        <el-row class="tac home-menu-row">
          <el-col :span="24">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo home-menu"
            >
              <el-menu-item index="0">
                <el-icon>
                  <house/>
                </el-icon>
                <span>全部</span>
              </el-menu-item>
              <el-sub-menu :index="index+1+''" v-for="(item,index) in menuList">
                <template #title>
                  <el-icon v-show="item.icon === 'reading'">
                    <reading/>
                  </el-icon>
                  <el-icon v-show="item.icon === 'connection'">
                    <connection/>
                  </el-icon>
                  <el-icon v-show="item.icon === 'cloud'">
                    <mostly-cloudy/>
                  </el-icon>
                  <el-icon v-show="item.icon === 'coin'">
                    <coin/>
                  </el-icon>
                  <el-icon v-show="item.icon === 'cpu'">
                    <cpu/>
                  </el-icon>
                  <el-icon v-show="item.icon === 'more'">
                    <more/>
                  </el-icon>
                  <span>{{ item.name }}</span>
                </template>
                <el-menu-item :index="index+1+''+_index" v-for="(_item,_index) in item.child">{{ _item.name }}
                </el-menu-item>
              </el-sub-menu>
              <!--            <el-menu-item index="3" disabled>-->
              <!--              <el-icon>-->
              <!--                <document/>-->
              <!--              </el-icon>-->
              <!--              <span>Navigator Three</span>-->
              <!--            </el-menu-item>-->
              <!--            <el-menu-item index="4">-->
              <!--                          <el-icon>-->
              <!--                            <setting/>-->
              <!--                          </el-icon>-->
              <!--                          <span>Navigator Four</span>-->
              <!--            </el-menu-item>-->
            </el-menu>
          </el-col>
        </el-row>
      </el-scrollbar>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>
<script setup>
import {
  More,
  Cpu,
  Coin,
  House,
  Reading,
  Connection,
  MostlyCloudy,
} from '@element-plus/icons-vue'
import {ref} from "vue";

let menuList = ref(
    [{
      "key": "language",
      "name": "语言",
      "icon": "reading",
      "child": [{
        "key": "all",
        "name": "All",
      }, {
        "key": "python",
        "name": "Python",
      }, {
        "key": "go",
        "name": "Go",
      }, {
        "key": "java",
        "name": "Java",
      }, {
        "key": "javaScript",
        "name": "JavaScript",
      }, {
        "key": "c++",
        "name": "C++",
      }, {
        "key": "c",
        "name": "C",
      }],
    }, {
      "key": "middleware",
      "name": "中间件",
      "icon": "connection",
      "child": [{
        "key": "all",
        "name": "All",
      }, {
        "key": "redis",
        "name": "Redis",
      }, {
        "key": "rabbitmq",
        "name": "Rabbitmq",
      }]
    }, {
      "key": "virtualization",
      "name": "云原生",
      "icon": "cloud",
      "child": [{
        "key": "all",
        "name": "All",
      }, {
        "key": "docker",
        "name": "Docker",
      }, {
        "key": "kubernetes",
        "name": "kubernetes",
      }, {
        "key": "microServices",
        "name": "微服务",
      }]
    }, {
      "key": "database",
      "name": "数据库",
      "icon": "coin",
      "child": [{
        "key": "all",
        "name": "All",
      }, {
        "key": "mysql",
        "name": "Mysql",
      }]
    }, {
      "key": "basics",
      "name": "计算机基础",
      "icon": "cpu",
      "child": [{
        "key": "all",
        "name": "All",
      }, {
        "key": "network",
        "name": "网络",
      }, {
        "key": "dataStructure",
        "name": "数据结构和算法",
      }, {
        "key": "operatingSystem",
        "name": "操作系统",
      }, {
        "key": "computerComposition",
        "name": "计算机组成原理",
      }]
    }, {
      "key": "other",
      "name": "其他",
      "icon": "more",
      "child": [{
        "key": "all",
        "name": "All",
      }, {
        "key": "live",
        "name": "生活",
      }]
    }]
)
</script>

<style scoped lang="scss">
.home-container {
  margin: 0 calc(50% - 570px);
  height: 100%;

  .home-menu-row {
    height: 100%;

    .home-menu {
      height: 100%;
    }

  }
}
</style>