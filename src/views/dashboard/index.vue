<template>
  <div class="container">
    <div class="filter">
      <el-button :type="show_data === 'api_key'?'primary':''" @click="changeTab('api_key')">
        API_KEY
      </el-button>

      <el-button :type="show_data === 'proxy'?'primary':''" @click="changeTab('proxy')">
        PROXY
      </el-button>
    </div>

    <div class="table">

      <template v-if="show_data==='api_key'">
        <el-table
          v-loading="loading"
          :data="table_data[show_data + '_status']"
          border
          style="width: 100%;margin-top: 40px"
        >
          <el-table-column
            prop="api_key"
            label="api_key"
          />
          <el-table-column
            prop="tbh"
            label="临时黑名单"
            width="140"
          >
            <template slot-scope="scope">
              <span v-if="scope.row.tbh" style="color: #f36b6b">临时黑名单</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="gbh"
            label="永久黑名单"
            width="140"
          >
            <template slot-scope="scope">
              <span v-if="scope.row.gbh" style="color: #f36b6b">永久黑名单</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="gbh"
            label="在线状态"
            width="100"
          >
            <template slot-scope="scope">
              <spann v-if="!scope.row.gbh && !scope.row.tbh" style="color: #3f9dfd">在线</span>
              </spann></template>
          </el-table-column>
          <el-table-column
            prop="total"
            label="调用次数"
            width="100"
          >
            <template slot-scope="scope">
              {{ getCallSum(scope.row) }}
            </template>
          </el-table-column>
          <el-table-column
            prop="total"
            label="请求TOKEN次数"
            width="100"
          >
            <template slot-scope="scope">
              {{ getTokenSum(scope.row) }}
            </template>
          </el-table-column>
          <el-table-column
            prop="tbh"
            label="操作"
            width="280"
          >
            <template slot-scope="scope">
              <el-button type="primary" @click="online(scope.row)">
                上线
              </el-button>
              <el-button type="danger" @click="offline(scope.row)">
                下线
              </el-button>
              <el-button type="primary" @click="goDetail(scope.$index)">
                详情
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

      <template v-if="show_data === 'proxy'">
        <el-table
          v-loading="loading"
          :data="table_data[show_data + '_status']"
          border
          style="width: 100%;margin-top: 40px"
        >
          <el-table-column
            prop="proxy"
            label="proxy"
          />
          <el-table-column
            prop="total"
            label="调用次数"
          >
            <template slot-scope="scope">
              {{ getCallSum(scope.row) }}
            </template>
          </el-table-column>
          <el-table-column
            prop="total"
            label="请求TOKEN次数"
          >
            <template slot-scope="scope">
              {{ getTokenSum(scope.row) }}
            </template>
          </el-table-column>
          <el-table-column
            prop="tbh"
            label="操作"
          >
            <template slot-scope="scope">
              <el-button type="primary" @click="goDetail(scope.$index)">
                详情
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>

  </div>

</template>

<script>
import { online, offline, botList } from '@/api/index'
import { getToken, getUserId } from '@/utils/auth'
import { Message } from 'element-ui'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      access_key: getToken(),
      user_id: getUserId(),
      search_params: {
        session_id: '',
        access_key: getToken()
      },
      loading: false,
      tableData: [],
      page_no: 1,
      total_page: 0,
      total_count: 0,

      options: [
        {
          value: '',
          label: '全部'
        },
        {
          value: '1',
          label: '黑名单'
        }
      ]

    }
  },
  computed: {
    ...mapGetters([
      'table_data', 'show_data', 'show_api_key', 'show_proxy'
    ])
  },
  created() {

  },
  methods: {
    changeTab(tab) {
      this.$store.dispatch('table/setShowData', tab)
    },

    getCallSum(data) {
      if (!data.minute_calls) return 0
      let res = 0
      data.minute_calls.forEach(item => {
        res += parseInt(item.num)
      })
      return res
    },
    getTokenSum(data) {
      if (!data.minute_tokens) return 0
      let res = 0
      data.minute_tokens.forEach(item => {
        res += parseInt(item.num)
      })
      return res
    },

    online(data) {
      online(this.user_id, { session_id: '', access_key: this.access_key, resource_id: data.api_key }).then(res => {
        Message.success('上线成功')
      }).catch(err => {
        console.log(err)
        Message.error('上线失败')
      })
    },
    offline(data) {
      offline(this.user_id, { session_id: '', access_key: this.access_key, resource_id: data.api_key }).then(res => {
        Message.success('下线成功')
      }).catch(err => {
        console.log(err)
        Message.error('下线失败')
      })
    },
    search() {
      botList(this.user_id, { ...this.search_params }).then(res => {
        this.$store.dispatch('table/setTableData', res.results)
      }).catch(err => {
        console.log(err)
      })
    },

    goDetail(index) {
      if (this.show_data === 'api_key') {
        this.$store.dispatch('table/setShowApiKey', index)
      } else {
        this.$store.dispatch('table/setShowProxy', index)
      }
      this.$router.push({ path: '/dashboard/detail' })
    }
  }
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  padding: 40px;

  .filter {
    margin-bottom: 10px;

    .el-form {
      width: 100%;
      display: flex;
      flex-direction: row;

      .el-form-item{
        margin-right: 20px;

        &:last-child{
          margin-left: auto;
        }
      }
    }
  }

  .tool {
    margin-bottom: 20px;
  }

  .table {
    width: 100%;
    height: 100%;
  }

  .page {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
