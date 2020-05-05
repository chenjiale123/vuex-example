<template>
  <div>
    <h3>Welcome</h3>
    <div class="moreRules">
      <div class="moreRulesIn" v-for="(item, index) in addForm.moreNotifyObject" :key="item.key">
          <el-form  ref="form" >
        <el-form-item
          label="field"
          :prop="'moreNotifyObject.' + index +'.field'"
          :rules="[{ message: '请完善信息'}]"
        >
          <el-input v-model="item.field" placeholder="请输入field" class="el-select_box"></el-input>
        </el-form-item>
        <el-form-item
          label="name"
          :prop="'moreNotifyObject.'+ index +'.name'"
          :rules="[{ message: '请完善信息'}]"
        >
          <el-input v-model="item.name" placeholder="请输入name" class="el-select_box"></el-input>
        </el-form-item>
        <el-form-item
          label="max"
          :prop="'moreNotifyObject.'+ index +'.max'"
          :rules="[{ message: '请完善信息'}]"
        >
          <el-input v-model="item.max" placeholder="请输入max" class="el-select_box"></el-input>
        </el-form-item>
               <el-form-item>
                   <el-radio v-model="item.radio" label="1">备选项</el-radio>
                  <el-radio v-model="item.radio" label="2">备选项</el-radio>

               </el-form-item>
        <el-button @click="deleteRules(item, index)">删除</el-button>
          <el-button @click="addUser()">jia</el-button>
          </el-form>

      </div>
         <el-button type="primary" @click="onsubmit">立即创建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
      addForm: {
        moreNotifyObject: [
          {
            field: "111",
            name: "222",
            max: "333",
                radio: '1',
          }
        ]
      }
    };
  },
  created() {
    // this.initData();
  },
  methods: {
    initData() {
      this.addForm.moreNotifyObject = [];
    },
    addUser() {
      this.addForm.moreNotifyObject.push({
        field: "",
        name: "",
        max: "",
        radio:''
      });
    },
    deleteRules(item, index) {
      this.index = this.addForm.moreNotifyObject.indexOf(item);
      if (index !== -1) {
        this.addForm.moreNotifyObject.splice(index, 1);
      }
    },
    onsubmit(){
      console.log( this.addForm.moreNotifyObject)
    }
  }
};
</script>

<style scoped>
</style>