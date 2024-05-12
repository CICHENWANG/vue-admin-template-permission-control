<template>
  <div class="dashboard-container">
    <div style="font-size: 30px">
      首页
    </div>
    <br><br><br><br><br><br>
    <div style="margin: 3%">
      <el-button class="light-blue-button" type="primary" icon="el-icon-s-order">会议管理</el-button>
      <el-button class="red-button" type="primary" icon="el-icon-edit-outline">协同办公</el-button>
      <el-button class="blue-button" type="primary" icon="el-icon-date">团队日程</el-button>
    </div>
    <br><br><br><br>
    <div style="font-size: 30px">当日会议日程</div>
    <table-view
      name1="会议名称"
      name2="会议时间"
      name3="会议类型"
      name4="会议方式"
      name5="会议号"
      name6="会议详情"
    />
  </div>
</template>

<script>
import tableView from '../table/index.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    tableView
  },
  data() {
    return {
      name: 'Dashboard'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
<style scoped>
.light-blue-button{
  font-size: 20px;
  margin-left: 0% ;
  margin-right: 15%;
  min-width: 200px;
  min-height: 100px;
  background-color: #20a0ff;
}
.light-blue-button:hover{
  font-size: 22px;
  margin-left: 0% ;
  margin-right: 15%;
  min-width: 200px;
  min-height: 100px;
  background-color: powderblue;
}
.red-button{
  font-size: 20px;
  margin-left: 5% ;
  margin-right: 15%;
  min-width: 200px;
  min-height: 100px;
  background-color: brown;
}
.red-button:hover{
  font-size: 22px;
  margin-left: 5% ;
  margin-right: 15%;
  min-width: 200px;
  min-height: 100px;
  background-color: red;
}
.blue-button{
  font-size: 20px;
  margin-left: 5% ;
  min-width: 200px;
  min-height: 100px;
  background-color: mediumblue;
}
.blue-button:hover {
  font-size: 22px;
  margin-left: 5%;
  min-width: 200px;
  min-height: 100px;
  background-color: skyblue;
}
</style>
