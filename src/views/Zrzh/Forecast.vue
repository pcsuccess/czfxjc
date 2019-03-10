<template>
  <div class="forecast">
    <div class="top">
      <div class="top_left">
        <div class="left_top" style="color:white;">
          <span>{{date1}}</span>
        </div>
        <div class="left_center">
          <img v-bind:src ="weather[0].path">
          <span class="temp">{{weather[0].temperature}}</span>
          <span>{{weather[0].description}}</span>
          <span>{{weather[0].temperatureRange}}</span>
        </div>
        <div class="left_bottom">
          <span>东风&nbsp;:&nbsp;&nbsp;{{weather[0].wind_direction}}</span>
          <span>气压&nbsp;:&nbsp;&nbsp;{{weather[0].pressure}}&nbsp;&nbsp;&nbsp;&nbsp;相对湿度&nbsp;:&nbsp;&nbsp;{{weather[0].humidity}}</span>
        </div>
      </div>
      <div class="top_right">
        <ul>
          <li v-for="item in weather" :key="item.id">
            <div class="date"><span>{{date}}</span></div>
            <div class="situation">
              <div>{{weather[0].temperature}}</div>
              <img v-bind:src="item.path">
              <div>{{weather[0].description}}</div>
            </div>
            <div class="descp">
              <div>东风&nbsp;:&nbsp;&nbsp;{{weather[0].wind_direction}}</div>
              <div>气压&nbsp;:&nbsp;&nbsp;{{weather[0].pressure}}</div>
              <div>相对湿度&nbsp;:&nbsp;&nbsp;{{weather[0].humidity}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <div id="chart" :style="{ width: '1400px'}"></div>
    </div>
  </div>
</template>
<script>
import { showDate } from '../../utils/date.js'
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/markPoint')
export default {
  name: 'air',
  data () {
    return {
      date: '1-3',
      date1: '',
      weather: [
        {
          description: '晴转多云',
          temperature: '7℃',
          temperatureRange: '1~10',
          wind_direction: '4-5级',
          pressure: '1002帕',
          humidity: '65%',
          path: '/img/weather/fine.png'
        },
        {
          description: '晴转多云',
          temperature: '7℃',
          temperatureRange: '1~10',
          wind_direction: '4-5级',
          pressure: '1002帕',
          humidity: '65%',
          path: '/img/weather/fine.png'
        },
        {
          description: '晴转多云',
          temperature: '7℃',
          temperatureRange: '1~10',
          wind_direction: '4-5级',
          pressure: '1002帕',
          humidity: '65%',
          path: '/img/weather/fine.png'
        },
        {
          description: '晴转多云',
          temperature: '7℃',
          temperatureRange: '1~10',
          wind_direction: '4-5级',
          pressure: '1002帕',
          humidity: '65%',
          path: '/img/weather/fine.png'
        },
        {
          description: '晴转多云',
          temperature: '7℃',
          temperatureRange: '1~10',
          wind_direction: '4-5级',
          pressure: '1002帕',
          humidity: '65%',
          path: '/img/weather/fine.png'
        }
      ]
    }
  },
  methods: {
    // 温度折线图
    drawLine () {
      let weatherLine = echarts.init(document.getElementById('chart'))
      window.onresize = weatherLine.resize
      weatherLine.setOption({
        tooltip: {
          trigger: 'axis',
          formatter: '温度:{c0}'
        },
        grid: {
          right: '7%'
        },
        xAxis: {
          type: 'category',
          data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'],
          boundaryGap: false,
          splitLine: false,
          axisLabel: {
            color: 'RGB(7, 89, 136)'
          },
          axisLine: {
            lineStyle: {
              color: 'RGB(7, 89, 136)'
            }
          }
        },
        yAxis: {
          type: 'value',
          splitLine: false,
          axisLabel: {
            color: 'RGB(7, 89, 136)',
            formatter: '{value} ℃',
            fontSize: '13'
          },
          axisLine: {
            lineStyle: {
              color: 'RGB(7, 89, 136)'
            }
          }
        },
        series: [{
          type: 'line',
          symbolSize: 8,
          symbol: 'circle',
          data: [5, 20, 16, -3, 1, 12, 13, 14],
          markPoint: {
            symbol: 'image://img/markpoint.png',
            symbolSize: [ 15, 29 ],
            symbolOffset: [ 0, '-58%' ],
            label: {
              fontSize: 11,
              offset: [ 0, -5 ],
              color: 'RGB(7, 89, 136)'
            },
            data: [
              { type: 'max', name: '最大值' }
            ]
          },
          itemStyle: {
            normal: {
              color: 'RGB(7, 89, 136)',
              borderColor: 'RGB(7, 89, 136)'
            }
          },
          lineStyle: {
            normal: {
              width: 1,
              color: 'RGB(56, 131, 197)'
            }
          }
        }]
      })
    }
  },
  mounted: function () {
    let vm = this
    vm.drawLine()
    vm.date1 = showDate()
    console.log(showDate())
  }
}
</script>
<style lang="scss">
.forecast {
  width: 100%;
  height: 100%;
  position: absolute;
  position: absolute;
  .top {
    position: absolute;
    width: 100%;
    height: 58%;
    .top_left {
      width: 32%;
      height: 100%;
      background: url(/img/forecast_top_left.png) no-repeat;
      background-size: 100% 100%;
      display: inline-block;
      position: absolute;
      .left_top {
        position: relative;
        top: 11%;
        width: 307px;
        font-size: 17px;
        margin: 0 auto;
        >span {
          color: RGB(54,124,211);
        }
      }
      .left_center {
        position: absolute;
        height: 40%;
        width: 100%;
        top: 90px;
        img {
          position: absolute;
          left: 17%;
          top: 5%;
          width: 100px;
          height: 100px;
        }
        .temp {
          position: absolute;
          top: 31%;
          left: 55%;
          font-size: 50px;
          font-weight: 400;
          color: RGB(141, 246, 211);
        }
        .temp+span {
          position: absolute;
          top: 86%;
          left: 20%;
          color: white;
          sont-size: 60px;
          font-size: 21px;
        }
        span:last-child {
          position: absolute;
          top: 86%;
          left: 58%;
          color: white;
          font-size: 23px;
        }
      }
      .left_bottom {
        position: relative;
        color: white;
        top: 71%;
        font-size: 16px;
        width: 281px;
        height: 80px;
        margin: 0 auto;
        span:first-child {
          position: absolute;
        }
        span:last-child {
          position: absolute;
          top:38px;
          left:0px;
        }
      }
    }
    .top_right {
      width: 60%;
      height: 100%;
      background: url(/img/forecast_top_right.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
      display: inline-block;
      left: 39%;
      ul {
        position: absolute;
        height: 100%;
        width: 100%;
        li:last-child {
          border-right: 0px;
        }
        li {
          height: 90%;
          width: 19.5%;
          position: relative;
          top: 6%;
          display: inline-block;
          text-align: center;
          border-right: 2px solid RGB(6,63,110);
          .date {
            height: 70px;
            width: 100%;
            >span {
              position: relative;
              top: 11px;
              color: white;
            }
          }
          .situation {
            height: 50%;
            div:first-child {
              color: white;
              height: 20px;
              position: relative;
              margin-bottom: 12%;
              font-size: 19px;
            }
            img {
            }
            div:last-child {
              color: white;
              position: relative;
              margin-top: 12%;
              font-size: 17px;
              font-weight: 700;
            }
          }
          .descp {
            height: 70px;
            margin-top: 14%;
            color: white;
            >div {
              margin-top: 1%;
              color: RGB(35,88,154);
            }
          }
        }
      }
    }
  }
  .bottom {
    position: absolute;
    width: 100%;
    height: 41%;
    background: url(/img/forecast_bottom.png) no-repeat;
    background-size: 99% 92%;
    top: 64%;
    #chart {
      width: 90% !important;
      height: 100%;
      >div:first-child {
        height: 100%;
        width: 100%;
        >canvas {
        height: 100%;
        width: 100%;
        }
      }
    }
  }
}
</style>
