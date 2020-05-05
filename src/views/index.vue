<template>
  <div class="index">
    <el-container>
      <el-header>
        <div class="logo">
          <img src alt />
          <span>后台管理系统</span>
        </div>
        <el-button>退出系统</el-button>
      </el-header>
      <el-container class="center">
        <el-aside>
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :router="true"
                active-text-color="blue"
              >
                <el-submenu :index="item.id+''" v-for="(item,index) in menuList" :key="index">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.name}}</span>
                  </template>

                  <el-menu-item
                    :index="'/'+item.path"
                    v-for="(item,index) in item.children"
                    :key="index"
                  >
                    <i class="el-icon-location"></i>
                    <span>{{item.name}}</span>
                  </el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>

            
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      menuList: [
        {
          name: "首页",
          id: 100,
          order: 1,
          path: "index",
          children: [
            {
              name: "统计",
              id: 110,
              order: 2,
              path: "manage"
            }
          ]
        },
        {
          name: "用户管理",
          id: 120,
          order: 1,
          path: "user",
          children: [
            {
              name: "权限管理",
              id: 125,
              order: 2,
              path: "power"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" >
.el-header {
  width: 100%;
  height: 49px;
  background: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 20px;
    width: auto;
    // overflow: hidden;
    // margin-left: 50px;
    span {
      font-size: 20px;
      color: #fff;
    }
  }
  .el-button {
    background: #999;
    color: #fff;
  }
}
.center {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  .el-menu {
    overflow: hidden;
  }
}
</style>