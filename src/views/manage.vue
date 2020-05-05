<template>
  <div class="manage">
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>统计</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="search">
      <el-card class="box-card">
        <el-col :span="12">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="content"></el-input>
        </el-col>

        <el-button type="primary">搜索用户</el-button>
      </el-card>
      <el-card class="box-card">
        <el-table :data="userList" border>
          <el-table-column type="index"></el-table-column>
          <el-table-column label="姓名" prop="name"></el-table-column>
          <el-table-column label="手机号" prop="phone"></el-table-column>
          <el-table-column label="邮箱" prop="email"></el-table-column>
          <el-table-column label="角色" prop="role"></el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <!-- {{scope.row}} -->
              <el-switch v-model="scope.row.state"></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200px">
            <template>
              <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
              <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
              <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
            </template>
          </el-table-column>
        </el-table>
         <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
      currentPage4:'',
      userList: [
        {
          name: "张三",
          phone: "15795632584",
          email: "176885@qq.com",
          role: "管理员",
          state: true
        },
        {
          name: "张三",
          phone: "15795632584",
          email: "176885@qq.com",
          role: "超级管理员",
          state: false
        },
        {
          name: "张三",
          phone: "15795632584",
          email: "176885@qq.com",
          role: "普通用户",
          state: true
        }
      ]
    };
  },
  methods:{
      handleSizeChange(){

      },
      handleCurrentChange(){

      }
  }
};
</script>

<style lang="scss">
.search {
  margin-top: 20px;
}
.el-input input {
  color: #000;
}
</style>