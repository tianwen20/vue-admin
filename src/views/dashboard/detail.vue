<template>
  <div class="container">

    <div class="chart">
      <line-chart :chart-data="yData" :chart-cat="xData" :option="option" />
    </div>

    <div class="chart" style="margin-top: 80px">
      <line-chart :chart-data="yData1" :chart-cat="xData1" :option="option1" />
    </div>

    <!--    <div class="table" style="margin-top: 100px">
      <el-table
        v-loading="loading"
        :data="tableData"
        border
        style="width: 100%"
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
          prop="time"
          label="时间"
        />
        <el-table-column
          prop="total"
          label="调用次数"
        />
      </el-table>
    </div>-->
  </div>

</template>

<script>
import LineChart from './LineChart'
import { mapGetters } from 'vuex'

export default {
  components: {
    LineChart
  },
  data() {
    return {
      xData: [],
      yData: [],
      xData1: [],
      yData1: [],
      option: {
        series: [
          {
            name: 'api_key调用次数',
            itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          }
        ]
      },
      option1: {
        series: [
          {
            name: 'token请求次数',
            itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'table_data', 'show_data', 'show_api_key', 'show_proxy'
    ])
  },
  created() {
    this.getChartData()
  },
  methods: {
    getChartData() {
      let cur_data = []
      if (this.show_data === 'api_key') {
        cur_data = this.table_data['api_key_status'][this.show_api_key]
      }
      if (this.show_data === 'proxy') {
        cur_data = this.table_data['proxy_status'][this.show_proxy]
      }

      cur_data.minute_calls.reverse()
      cur_data.minute_calls.forEach(item => {
        this.xData.push(item.ds)
        this.yData.push(item.num)
      })
      cur_data.minute_tokens.reverse()
      cur_data.minute_tokens.forEach(item => {
        this.xData1.push(item.ds)
        this.yData1.push(item.num)
      })
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
