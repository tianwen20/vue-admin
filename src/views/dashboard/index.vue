<template>
  <div class="container">
    <div class="filter">
      <el-form :inline="true" :model="search_params">

        <el-form-item label="在线状态">
          <el-select v-model="search_params.status" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="search">
            查询
          </el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="table">
      <el-table
        v-loading="loading"
        :data="tableData"
        border
        style="width: 100%"
        height="calc(100vh - 320px)"
      >
        <el-table-column
          prop="bot_id"
          label="机器人"
        />
        <el-table-column
          prop="apikey"
          label="apikey"
        />
        <el-table-column
          prop="bh"
          label="在线状态"
          width="180"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.bh" style="color: #f36b6b">临时黑名单</span>
            <span v-if="scope.row.gbh" style="color: #f36b6b">永久黑名单</span>
            <span v-if="!scope.row.bh&& !scope.row.gbh" style="color: #3f9dfd">在线</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="total"
          label="调用次数"
        />
        <el-table-column
          prop="bh"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button type="primary" @click="online(scope.row)">
              上线
            </el-button>
            <el-button type="danger" @click="offline(scope.row)">
              下线
            </el-button>
            <el-button type="primary" @click="goDetail(scope.row)">
              详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!--    <div class="page">-->
    <!--      <el-pagination :current-page="page_no" :page-count="total_page" @current-change="click_page" />-->
    <!--    </div>-->

  </div>

</template>

<script>
import { botList, online, offline } from '@/api/index'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'

export default {
  data() {
    return {
      access_key: getToken(),
      search_params: {
        session_id: '',
        access_key: getToken(),
        bh: ''
      },
      loading: false,
      tableData: [
        {
          bot_id: '东湖灵境',
          apikey: 'asdaddadad',
          bh: 1,
          gbh: 0,
          total: 1000,
          resource_id: '12121212'
        },
        {
          bot_id: '东湖灵境',
          apikey: 'asdaddadad',
          bh: 1,
          gbh: 0,
          total: 1000,
          resource_id: '12121212'
        },
        {
          bot_id: '东湖灵境',
          apikey: 'asdaddadad',
          bh: 1,
          gbh: 0,
          total: 1000,
          resource_id: '12121212'
        },
        {
          bot_id: '东湖灵境',
          apikey: 'asdaddadad',
          bh: 1,
          gbh: 0,
          total: 1000,
          resource_id: '12121212'
        },
        {
          bot_id: '东湖灵境',
          apikey: 'asdaddadad',
          bh: 1,
          gbh: 0,
          total: 1000,
          resource_id: '12121212'
        },
        {
          bot_id: '东湖灵境',
          apikey: 'asdaddadad',
          bh: 1,
          gbh: 0,
          total: 1000,
          resource_id: '12121212'
        },
        {
          bot_id: '东湖灵境',
          apikey: 'asdaddadad',
          bh: 1,
          gbh: 0,
          total: 1000,
          resource_id: '12121212'
        },
        {
          bot_id: '东湖灵境',
          apikey: 'asdaddadad',
          bh: 1,
          gbh: 0,
          total: 1000,
          resource_id: '12121212'
        },
        {
          bot_id: '东湖灵境',
          apikey: 'asdaddadad',
          bh: 1,
          gbh: 0,
          total: 1000,
          resource_id: '12121212'
        },
        {
          bot_id: '东湖灵境',
          apikey: 'asdaddadad',
          bh: 1,
          gbh: 0,
          total: 1000,
          resource_id: '12121212'
        }
      ],
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
  created() {
    // this.search()
  },
  methods: {
    click_page(page) {
      if (!this.loading) {
        this.page_no = page
        this.search()
      }
    },
    search() {
      if (this.loading) {
        return
      }
      this.loading = true

      botList({ ...this.search_params }).then(res => {
        this.tableData = res.data
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.loading = false
      })
    },

    online(data) {
      online({ session_id: '', access_key: this.access_key, resource_id: data.resource_id }).then(res => {
        Message.success('上线成功')
      }).catch(err => {
        console.log(err)
        Message.error('上线失败')
      })
    },
    offline(data) {
      offline({ session_id: '', access_key: this.access_key, resource_id: data.resource_id }).then(res => {
        Message.success('下线成功')
      }).catch(err => {
        console.log(err)
        Message.error('下线失败')
      })
    },
    goDetail(data) {
      this.$router.push({ path: '/dashboard/detail', query: { resource_id: data.resource_id }})
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
