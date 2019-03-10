<!-- 公共卫生 -->
<template>
  <div class="ggws">
    <div>
      <div class="first">
        <div class="outpatient">
          <div class="out_number">
            <div v-for="n in incount" :key = "n" :class="'runnumout' + n"></div>
            <img src="/img/ggwc/comma.png">
          </div>
          <div class="out_description">门诊人数</div>
        </div>
        <div class="inpatient">
          <div class="in_number">
            <div v-for="n in outcount" :key="n" :class="'runnumin' + n"></div>
            <img src="/img/ggwc/comma.png">
          </div>
          <div class="in_description">住院人数</div>
        </div>
      </div>
      <div class="second">
        <div>
          <div class="header"><span>{{hint.header}}</span></div>
          <div class="content"><span>{{hint.content}}</span></div>
        </div>
      </div>
      <div class="third">
        <div class="header">{{plague}}</div>
        <div id="plague_chart"></div>
      </div>
      <div class="forth">
        <div id="line_chart"></div>
      </div>
      <div class="fifth">
        <div id="pie_chart"></div>
        <div class="title">{{inhos}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { GscrollNumber3D } from '../utils/gScrollNumber-3d.js'
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/visualMap')
require('echarts/lib/component/legendScroll')
export default {
  data () {
    return {
      perNum: {
        out: 123132,
        in: 683334
      },
      incount: 6,
      outcount: 6,
      hint: {
        header: '近期预警或提示',
        content: '天气越来越冷，传染病毒也开始展现为例了，不少学生和儿童中招，幼儿园缺勤情况普遍，多数幼儿因发烧、咳嗽，流感而缺勤。'
      },
      plague: '关注疫情',
      inhos: '单位 %'
    }
  },
  methods: {
    drawplage () {
      let plague = echarts.init(document.getElementById('plague_chart'))
      setTimeout(function () {
        window.onresize = plague.resize
      }, 100)
      plague.setOption({
        xAxis: {
          show: true,
          z: 10,
          data: [ '感染性疾病', '手足口病', '水痘', '禽流感' ],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            inside: false,
            textStyle: {
              color: 'RGB(0,165,243)'
            }
          }
        },
        yAxis: {
          show: false,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              color: 'RGB(1,212,223)'
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0.5, color: 'RGB(1,212,223)'}, {offset: 1, color: 'RGB(40,126,199)'}])
              }
            },
            barCategoryGap: 18,
            barWidth: 16,
            data: [ 65, 21, 36, 15 ]
          }
        ]
      })
    },
    drawLine () {
      let weatherLine = echarts.init(document.getElementById('line_chart'))
      setTimeout(function () {
        window.onresize = weatherLine.resize
      }, 100)
      weatherLine.setOption({
        title: {
          text: '各类疫情情况',
          textStyle: {
            color: 'RGB(1,212,223)',
            fontSize: '17'
          },
          top: '15px',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
            }
          }
        },
        legend: {
          top: 30,
          right: 10,
          orient: 'vertical',
          itemHeight: 2,
          itemWidth: 26,
          data: [
            {
              name: '感染性腹泻',
              icon: 'image://img/ggwc/diarrhea.png',
              tooltip: {
                formatter: {
                }
              },
              textStyle: {
                color: 'RGB(0,157,232)'
              }
            },
            {
              name: '禽流感',
              icon: 'image://img/ggwc/birdflu.png',
              textStyle: {
                color: 'RGB(0,157,232)'
              }
            },
            {
              name: '水痘',
              icon: 'image://img/ggwc/varicella.png',
              textStyle: {
                color: 'RGB(0,157,232)'
              }
            },
            {
              name: '手足口',
              icon: 'image://img/ggwc/hand_footand_mouth.png',
              textStyle: {
                color: 'RGB(0,157,232)'
              }
            }
          ]
        },
        xAxis: {
          type: 'category',
          name: '日期',
          nameTextStyle: {
            fontSize: 13
          },
          data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'],
          boundaryGap: false,
          splitLine: false,
          axisLabel: {
            color: 'RGB(7, 99, 164)'
          },
          axisLine: {
            lineStyle: {
              color: 'RGB(7, 99, 164)'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '人数',
          nameTextStyle: {
            fontSize: 13
          },
          splitLine: false,
          axisLabel: {
            color: 'RGB(7, 99, 164)',
            formatter: '{value}',
            fontSize: '13'
          },
          axisLine: {
            lineStyle: {
              color: 'RGB(7, 99, 164)'
            }
          }
        },
        color: [ 'RGB(168,85,246)', 'RGB(2,181,195)', 'RGB(255,255,0)', 'RGB(0,165,242)' ],
        series: [
          {
            type: 'line',
            name: '感染性腹泻',
            symbolSize: 8,
            symbol: 'none',
            lineStyle: {
              color: 'RGB(0,165,242)'
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'RGB(0,165,242)'
                  },
                  {
                    offset: 0.6,
                    color: 'rgba(0,165,242,0)'
                  }
                ])
              }
            },
            data: [ 11, 73, 67, 70, 80, 85, 79, 69, 66, 84, 50 ]
          },
          {
            name: '禽流感',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: 'RGB(255,255,0)'
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'RGB(255,255,0)'
                  },
                  {
                    offset: 0.6,
                    color: 'rgba(0,165,242,0)'
                  }
                ])
              }
            },
            stack: '总量',
            data: [ 44, 45, 41, 48, 49, 53, 58, 55, 56, 57, 31 ]
          },
          {
            name: '水痘',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: 'RGB(2,181,195)'
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'RGB(2,181,195)'
                  },
                  {
                    offset: 0.6,
                    color: 'rgba(0,165,242,0)'
                  }
                ])
              }
            },
            stack: '总量',
            data: [ 22, 24, 26, 31, 29, 33, 31, 33, 32, 35, 44 ]
          },
          {
            name: '手足口',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: 'RGB(168,85,246)'
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'RGB(168,85,246)'
                  },
                  {
                    offset: 0.6,
                    color: 'rgba(0,165,242,0.1)'
                  }
                ])
              }
            },
            stack: '总量',
            data: [ 11, 13, 15, 12, 18, 15, 21, 22, 33, 33, 34 ]
          }
        ]
      })
    },
    drawPie () {
      let pie = echarts.init(document.getElementById('pie_chart'))
      setTimeout(function () {
        window.onresize = weatherLine.resize
      }, 100)
      pie.setOption({
        title: {
          text: '就诊分析',
          top: 0,
          left: 'center',
          textStyle: {
            color: 'RGB(1,212,223)'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: ['30%', '60%'],
            avoidLabelOverlap: false,
            labelLine: {
              length: 0
            },
            label: {
              normal: {
                formatter: '{b} {c}',
                rich: {
                  b: {
                    color: 'white'
                  },
                  c: {
                  }
                }
              }
            },
            data: [
              {
                value: 210, name: '马公中心'
              },
              {
                value: 230, name: '西林中心'
              },
              {
                value: 120, name: '永红中心'
              },
              {
                value: 210, name: '新闻中心'
              },
              {
                value: 200, name: '北港中心'
              },
              {
                value: 100, name: '卜戈卫生院'
              },
              {
                value: 143, name: '邹区卫生院'
              },
              {
                value: 155, name: '南大街中心'
              },
              {
                value: 155, name: '荷花池中心'
              }
            ]
          }
        ]
      })
    },
    runNumOut () {
      let vm = this
      let count = vm.perNum.out.toString()
      let arr = count.split('')
      console.log(arr)
      for (let i = 1; i < 7; i++) {
        let scrollNumber = new GscrollNumber3D('.runnumout' + i, {
          width: 40,
          color: 'white',
          fontSize: 40,
          autoSizeContainerWidth: false
        })
        if (count.length < 6) {
          for (let less = 0; less < 6 - count.length; less++) {
            arr.unshift('0')
            count = count + '0'
          }
          let value = parseInt(arr[i - 1])
          scrollNumber.run(value)
        } else {
          let value = parseInt(arr[i - 1])
          scrollNumber.run(value)
        }
      }
    },
    runNumIn () {
      let vm = this
      let count = vm.perNum.in.toString()
      let arr = count.split('')
      console.log(arr)
      for (let i = 1; i < 7; i++) {
        let scrollNumber = new GscrollNumber3D('.runnumin' + i, {
          width: 40,
          color: 'white',
          fontSize: 40,
          autoSizeContainerWidth: false
        })
        if (count.length < 6) {
          for (let less = 0; less < 6 - count.length; less++) {
            arr.unshift('0')
            count = count + '0'
          }
          let value = parseInt(arr[i - 1])
          scrollNumber.run(value)
        } else {
          let value = parseInt(arr[i - 1])
          scrollNumber.run(value)
        }
      }
    }
  },
  mounted () {
    let vm = this
    vm.runNumOut()
    vm.runNumIn()
    vm.drawplage()
    vm.drawLine()
    vm.drawPie()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.ggws {
  >div {
    width: 90%;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.ggws {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background: blue;
  background: url(/img/ggwc/background.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin-left: 35px;
  top: 2%;
  width: 97%;
  height: 97%;
  .first {
    background: url(/img/ggwc/first.png) no-repeat;
    background-size: 100% 100%;
    height: 46%;
    width: 26%;
    min-width: 450px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    .outpatient {
      height: 50%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .out_number {
        width: 100%;
        .runnumout1 {
          width: 40px;
          height: 60px;
        }
        >div {
          display: inline-block;
          background: url(/img/ggwc/inhospital.png);
          width: 40px;
          height: 60px;
          margin-top: 43px;
          margin-left: 30px;
          text-align: center;
          >span {
            color: white;
            font-size: 36px;
            position: relative;
            top: 5px;
          }
        }
        >img {
          position: relative;
          right: 200px;
        }
      }
      .out_description {
        width: 100%;
        color: RGB(1,212,223);
        text-align: center;
        font-size: 20px;
        font-weight: bolder;
        line-height: 39px;
      }
    }
    .inpatient {
      width: 100%;
      .in_number {
        width: 100%;
        height: 61%;
        >div {
          display: inline-block;
          background: url(/img/ggwc/inhospital.png);
          width: 40px;
          height: 60px;
          margin-top: 43px;
          margin-left: 30px;
          text-align: center;
          >span {
            color: white;
            font-size: 36px;
            position: relative;
            top: 5px;
          }
        }
        >img {
          position: relative;
          right: 200px;
        }
      }
      .in_description {
        width: 100%;
        height: 39%;
        color: RGB(1,212,223);
        text-align: center;
        font-size: 20px;
        font-weight: bolder;
        line-height: 39px;
      }
    }
  }
  .second {
    background: url(/img/ggwc/second.png) no-repeat;
    background-size: 100% 100%;
    height: 46%;
    width: 32%;
    max-width: 520px;
    margin-top: 40px;
    margin-left: 2%;
    flex: 1;
    overflow: hidden;
    >div {
      width: 100%;
      height: 100%;
      .header {
        width: 100%;
        height: 30%;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        >span {
          color: RGB(1,216,221);
          text-align: center;
          letter-spacing: 1px;
          font-size: 21px;
          position: relative;
          top: 3px;
          display: block;
          width: 38%;
          height: 30px;
          overflow: hidden;
        }
      }
      .content {
        width: 85%;
        height: 70%;
        margin: 0 auto;
        font-size: 18px;
        line-height: 36px;
        >span {
          color: RGB(0,165,243);
          position: relative;
          letter-spacing: 1px;
          top: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          overflow: hidden;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .third {
    background: url(/img/ggwc/third.png) no-repeat;
    background-size: 100% 100%;
    height: 46%;
    width: 430px;
    margin-top: 40px;
    margin-left: 2%;
    .header {
      height: 15%;
      width: 100%;
      color: RGB(1,216,221);
      text-align: center;
      font-size: 17px;
      line-height: 70px;
    }
    #plague_chart {
      height: 95%;
      width: 100%;
      margin-top: -36px;
      >div {
        width: 100%;
        height: 100% !important;
        >canvas {
          height: 100% !important;
        }
      }
    }
  }
  .forth {
    background: url(/img/ggwc/forth.png) no-repeat;
    background-size: 100% 100%;
    height: 50%;
    width: 52%;
    margin-top: 2%;
    margin-bottom: 1%;
    #line_chart {
      width: 100%;
      height: 100%;
      >div:first-child {
        width: 100%;
        height: 100%;
        >canvas {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .fifth {
    background: url(/img/ggwc/fifth.png) no-repeat;
    background-size: 100% 100%;
    height: 50%;
    width: 30%;
    margin-top: 2%;
    margin-bottom: 1%;
    margin-left: 5%;
    #pie_chart {
      position: relative;
      width: 85%;
      height: 100%;
      top: 30px;
      margin: 0 auto;
      >div:first-child {
        width: 100% !important;
        height: 100% !important;
        >canvas {
          width: 100% !important;
          height: 100% !important;
        }
      }
    }
    .title {
      color: RGB(0,165,243);
      position: relative;
      font-size: 15px;
      left: 82%;
      top: -92%;
      width: 50px;
    }
    .test {
      height: 100px;
      width: 100px;
      background: grey;
    }
  }
}
</style>
