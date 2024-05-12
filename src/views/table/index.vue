<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column :label="name1" width="180" prop="meetingName" />
      <el-table-column :label="name2" width="130" align="center" prop="meetingTime" />
      <el-table-column :label="name3" width="130" align="center" prop="meetingType" />
      <el-table-column :label="name4" width="130" align="center" prop="meetingMethod" />
      <el-table-column :label="name5" width="180" align="center" prop="meetingTeam" />
      <el-table-column class-name="status-col" :label="name6" width="110" align="center">
        <template>
          <el-tag @click="toDetail">详情</el-tag>
        </template>
      </el-table-column>
      <!--      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    name1: String,
    // eslint-disable-next-line vue/require-default-prop
    name2: String,
    // eslint-disable-next-line vue/require-default-prop
    name3: String,
    // eslint-disable-next-line vue/require-default-prop
    name4: String,
    // eslint-disable-next-line vue/require-default-prop
    name5: String,
    // eslint-disable-next-line vue/require-default-prop
    name6: String
  },
  data() {
    return {
      list: [],
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    toDetail() {
      router.push('/form/index')
    },
    fetchData() {
      this.listLoading = true
      var config = {
        method: 'get',
        url: 'http://127.0.0.1:4523/m1/4437688-0-default/homepage',
        headers: {
          'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
          'Accept': '*/*',
          'Host': '127.0.0.1:4523',
          'Connection': 'keep-alive'
        }
      }
      axios(config)
        .then((response) => {
          this.list = response.data.data
          console.log(this.list)
        })
        .catch(function(error) {
          console.log(error)
        })
      this.listLoading = false
    }
  }
}
</script>
