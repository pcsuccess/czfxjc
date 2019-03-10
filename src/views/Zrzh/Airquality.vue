<template>
  <div id="quality" style="color: white;">
    <div class="top">
      <div class="top_left">
        <div class="title">
          <div><span>健康提示</span></div>
        </div>
        <div class="content">
          <div class="first">
            <span>首要污染物:</span><span>PM10</span>
          </div>
          <div class="second">
            <span>对健康的污染:</span><span>空气质量可以接受,但某些污染物对易感染人群可能造成某些影响</span>
          </div>
          <div class="third">
            <span>建议采取的措施:</span><span>极少数易感染人群应减少室外活动</span>
          </div>
        </div>
      </div>
      <div class="top_center">
        <div class="round">
          <div id="dial_pointer">
            <div class="circle"><span>A</span></div>
          </div>
        </div>
        <div class="number">
          <span>112</span>
        </div>
      </div>
      <div class="top_right">
        <div id="chart"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="elTable">
        <el-table :data="detectionData" header-row-style="height:5px;" row-style="height: 20px;" style="width: 93.8%" border stripe>
          <el-table-column label="监测点" prop="name"></el-table-column>
          <el-table-column label="AQI" prop="AQI"></el-table-column>
          <el-table-column label="空气质量" prop="quality"></el-table-column>
          <el-table-column label="首要污染物" prop="pollution"></el-table-column>
          <el-table-column label="PM2.5/1h" prop="PM2"></el-table-column>
          <el-table-column label="PM2.5/1h" prop="PM10"></el-table-column>
          <el-table-column label="一氧化碳/1h" prop="CO1"></el-table-column>
          <el-table-column label="二氧化碳/1h" prop="CO2"></el-table-column>
          <el-table-column label="臭氧/1h" prop="Ozone1"></el-table-column>
          <el-table-column label="臭氧/8h" prop="Ozone2"></el-table-column>
          <el-table-column label="二氧化硫/1h" prop="SO2"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'air',
  data () {
    return {
      detectionData: [
        {
          name: '常工院',
          AQI: 38,
          quality: '优',
          pollution: '_',
          PM2: 26,
          PM10: 33,
          CO1: 1.0,
          CO2: 65,
          Ozone1: 13,
          Ozone2: 7,
          SO2: 14
        },
        {
          name: '潞城',
          AQI: 38,
          quality: '优',
          pollution: '_',
          PM2: 26,
          PM10: 33,
          CO1: 1.0,
          CO2: 65,
          Ozone1: 13,
          Ozone2: 7,
          SO2: 14
        },
        {
          name: '武进检测站',
          AQI: 38,
          quality: '优',
          pollution: '_',
          PM2: 26,
          PM10: 33,
          CO1: 1.0,
          CO2: 65,
          Ozone1: 13,
          Ozone2: 7,
          SO2: 14
        },
        {
          name: '安家',
          AQI: 38,
          quality: '优',
          pollution: '_',
          PM2: 26,
          PM10: 33,
          CO1: 1.0,
          CO2: 65,
          Ozone1: 13,
          Ozone2: 7,
          SO2: 14
        },
        {
          name: '行政中心',
          AQI: 38,
          quality: '优',
          pollution: '_',
          PM2: 26,
          PM10: 33,
          CO1: 1.0,
          CO2: 65,
          Ozone1: 13,
          Ozone2: 7,
          SO2: 14
        },
        {
          name: '经开区',
          AQI: 38,
          quality: '优',
          pollution: '_',
          PM2: 26,
          PM10: 33,
          CO1: 1.0,
          CO2: 65,
          Ozone1: 13,
          Ozone2: 7,
          SO2: 14
        }
      ],
      dialIndicator: [ 20, 128 ],
      dialIndicator1: [ -20, -128 ]
    }
  },
  methods: {
    // 仪表盘指针
    indicator () {
      let vm = this
      let tt = document.styleSheets[0]
      tt.insertRule('@keyframes circleRoate { 0% { transform: rotate(' + vm.dialIndicator[0] + 'deg); } 100% { transform: rotate(' + vm.dialIndicator[1] + 'deg); } }')
      tt.insertRule('@keyframes pointer { 0% { transform: rotate(' + vm.dialIndicator1[0] + 'deg); } 100% { transform: rotate(' + vm.dialIndicator1[1] + 'deg); } }')
    },
    drawLine () {
      // 柱状图
      let weatherLine = echarts.init(document.getElementById('chart'))
      window.onresize = weatherLine.resize
      weatherLine.setOption({
        title: {
          text: '单位: ug/m³C(CO为mg/m³)',
          left: '-5px',
          top: '25px',
          textStyle: {
            fontSize: 13,
            fontWeight: 'lighter',
            color: '#00a5f3'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLabel: {
            fontSize: '12'
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#00a5f3'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: [ 'PM2.5/h', 'PM10/h', 'CO/h', 'NO2/h', 'O3/h', 'O3/8h', 'SO2/h' ],
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: '10'
          },
          axisLine: {
            lineStyle: {
              color: '#00a5f3'
            }
          }
        },
        series: [{
          type: 'bar',
          data: [18, 23, 29, 10, 13, 23, 10],
          barWidth: 23,
          itemStyle: {
            normal: {
              color: '#00a5f3'
            }
          }
        }]
      })
    }
  },
  mounted: function () {
    let vm = this
    vm.drawLine()
    vm.indicator()
  }
}
</script>
<style lang="scss">
#quality {
  .top {
    .top_center {
      .round {
        background: url(/img/2-1circle.png);
        background-size: 100% 100%;
        width: 435.8px;
        height: 280.8px;
        position: relative;
        top: 21%;
        margin: 0 auto;
      }
    }
  }
}
#quality {
  height: 100%;
  width: 100%;
  position: relative;
  .top {
    height: 58%;
    width: 100%;
    .top_left {
      display: inline-block;
      height: 99%;
      width: 24%;
      position: relative;
      background: url(/img/air_top_left.png) no-repeat;
      background-size: 100% 100%;
      .title {
        height: 100px;
        position: relative;
        width: 100%;
        div:first-child {
          position: relative;
          top: 20px;
          margin: 0 auto;
          width: 210px;
          height: 50px;
          background: url(/img/air_title.png) no-repeat;
          text-align: center;
          font-size: 24px;
          >span {
            position: relative;
            top: 6px;
            font-size: 20px;
            margin: 0 auto;
          }
        }
      }
      .content {
        height: 73%;
        width: 100%;
        span {
          font-size: 18px;
        }
        .first {
          height: 22%;
          width: 91%;
          margin: 0 auto;
          margin-bottom: 7px;
          span:first-child {
            color: RGB(0, 157, 233);
          }
          span:last-child {
            color: white;
            margin-left: 10px;
          }
        }
        .second {
          height: 33%;
          width: 92%;
          margin: 0 auto;
          margin-bottom: 10px;
          span:first-child {
            color: RGB(0, 157, 233);
          }
          span:last-child {
            color: white;
            margin-left: 10px;
            height: 100%;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            overflow: hidden;
            -webkit-box-orient: vertical;
            text-indent: 7em;
            position: relative;
            top: -23px;
            width: 97%;
            left: -10px;
          }
        }
        .third {
          height: 36%;
          width: 91%;
          margin: 0 auto;
          span:first-child {
            color: RGB(0, 157, 233);
          }
          span:last-child {
            color: white;
            margin-left: 10px;
          }
        }
      }
    }
    .top_center {
      display: inline-block;
      height: 57.2%;
      width: 41.63%;
      min-width: 436.8px;
      min-height: 281.8px;
      position: absolute;
      background: url(/img/3-1-5.png) no-repeat;
      background-size: 100% 100%;
      left: 25%;
      .number {
        position: relative;
        top: -1%;
        width: 51px;
        bottom: 21%;
        margin: 0 auto;
        >span {
          font-size: 30px;
          color: rgb(119,249,247);
        }
      }
      #dial_pointer {
        height: 436px;
        width: 436px;
        position: absolute;
        top: 1%;
        left: 0;
        animation: circleRoate 2s 1 linear;
        animation-fill-mode: forwards;
        .circle {
          width: 30px;
          height: 30px;
          border-radius: 15px;
          border: 1px solid blue;
          background: white;
          position: absolute;
          top: 145px;
          left: 10px;
          text-align: center;
          animation: pointer 2s 1 linear;
          animation-fill-mode: forwards;
          >span {
            color: blue;
            font-size: 22px;
            transform: rotate(-100deg);
          }
        }
      }
    }
    .top_right {
      display: inline-block;
      height: 57%;
      width: 32%;
      position: absolute;
      background: url(/img/air_top_right.png) no-repeat;
      background-size: 100% 100%;
      left: 68%;
      #chart {
        width: 98%;
        height: 96%;
        position: relative;
        left: 20px;
        canvas {
          height: 200px;
          width: 200px;
        }
      }
    }
  }
  .bottom {
    height: 40%;
    width: 100%;
    position: relative;
    background: url(/img/air_bottom.png) no-repeat;
    background-size: 100% 100%;
    .elTable {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-table {
        width: 1398px;
        margin: 0 auto;
        position: absolute;
        .el-table__header th {
          background-color: RGB(89, 175, 234);
          color: black;
          padding: 5px 0px;
        }
        .el-table__body td,.el-table__body th {
          padding: 4px 0px;
        }
      }
    }
  }
}
</style>
