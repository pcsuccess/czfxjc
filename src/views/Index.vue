<!-- 主页 -->
<template>
  <div name="index" class="index">
    <div class="shaq">
      <span>社会安全</span>
      <div class="text">
        <p>截至目前，全区社会面总体平稳，未发生有影响的重大事(案)件，接报其他不稳定因素{{message}}起</p>
      </div>
      <div class="shaq-count">
        <ul>
          <li v-for="item in statesl" :key="item.index">
            {{item.name}}
          </li>
        </ul>
        <ul>
          <li :class="{'number-change': index==current[index]}" class="number-l" v-for="(item, index) in statesl" :key="item.index" >
            {{item.count}}
          </li>
        </ul>
        <ul>
          <li v-for="item in statesr" :key="item.index">
            {{item.name}}
          </li>
        </ul>
        <ul>
          <li class="number-r" v-for="item in statesr" :key="item.index">
            {{item.count}}
          </li>
        </ul>
      </div>
      <div class="shaq-chart">
        <div class="chart1" id="Chart1">
        </div>
      </div>
    </div>
    <div class="zrzh" :class="{'zrzh2':zrzhstyle}">
      <span>自然灾害</span>
      <div class="temp" :class="{'temp2':zrzhstyle}"><span> {{temperature}} </span> <span>℃</span> </div>
      <div class="weat">
        <img src="../assets/img/yin.png" alt="weat" />
        <span>阴</span>
        <div class="weat-text">
          <span>温度：-5~6℃</span><br>
          <span>北风 4-5级</span>
        </div>
      </div>
      <img width="48%" src="../assets/img/line1.png" alt="" />
      <img width="50%" src="../assets/img/line2.png" alt="" />
      <div class="zrzh-text">
        <span>关注重点：</span><span class="imp">无</span><br>
        <span>近期预警：</span><span class="imp" :class="{'imp2':zrzhstyle}">{{data1}}</span>
      </div>
    </div>
    <div class="overview">
      <div class="overview-content">
        <div class="overview-imp">
          <ul>
            <li v-for="item in overview" :key="item.icon">
              <img src="../assets/img/over-bottom.png" alt="" />
              <img  class="inside" :src="item.icon" alt="c1" />
              <span>{{item.name}}</span>
              <div class="over-zt">
                <img src="../assets/img/over-ztblok.png" alt="" />
                <span>{{item.situ}}</span>
              </div>
            </li>
          </ul>
        <div class="remain">
          <ul>
            <li v-for="item in overview2" :key="item.index">
              <span>{{item.name}}</span>
              <div class="remain-zt2">
                <img src="../assets/img/over-ztblok.png" alt="" />
                <span>{{item.situ}}</span>
              </div>
            </li>
          </ul>
        </div>
        </div>
        <div class="tips">
          <span>五星发生一起火灾，已得到及时处理，未造成人员伤亡</span>
        </div>
      </div>
    </div>
    <div class="zdfxy">
      <div class="zdfxy-header">
        <span>重点风险源</span>
      </div>
      <div class="zdfxy-content">
        <ul>
          <li v-for="item in zdfxy" :key="item.index">
            {{item.count}}
          </li>
        </ul>
        <div class="zdfxy-img">
          <ul>
            <li v-for="item in zdfxy" :key="item.index">
              <img :src="item.logo" alt="" />
            </li>
          </ul>
        </div>
        <ul>
          <li v-for="item in zdfxy" :key="item.index">
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
    <div class="sgzn">
      <span>事故灾难</span>
      <div class="sgzn-chart">
        <div id="Chart2" class="chart2">
        </div>
      </div>
      <div class="sgzn-data">
        <ul>
          <li v-for="item in sgzn" :key="item.index">
            <img src="../assets/img/right1-1.png" alt="" />
            <span>{{item.count}}</span>
            <span class="sgzn-name">{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="ggws" :class="{'ggws2':ggwsstyle}">
      <span>公共卫生</span>
      <div class="ggws-chart">
        <span>{{ggws[0].name}}</span>
        <span>{{ggws[1].name}}</span>
        <div id="Chart3" class="chart3">
        </div>
        <div class="ggws-count" :class="{'ggws-count2':ggwsstyle}">
          <span>{{ggws[0].count}}</span>
          <span>{{ggws[1].count}}</span>
        </div>
      </div>
      <div class="ggws-content">
        <img src="../assets/img/ggws-line1.png" alt="">
        <img class="secondline" src="../assets/img/ggws-line2.png" alt="">
        <div class="ggws-text" :class="{'ggws-text2':ggwsstyle}">
          <p>预警与提示</p>
          <p>目前正处于流感等传染病高发期，住院人数增多。养老院，学院幼托机构应加强防范</p>
        </div>
      </div>
    </div>
    <div class="jg" v-if="zrzhstyle || ggwsstyle">
      <img class="jg-bac1" src="../assets/img/jg-head3.png" alt="">
      <img class="jg-bac2" src="../assets/img/jg-head1.png" alt="">
      <img class="jg-bac3" src="../assets/img/jg-head2.png" alt="">
      <div class="jg-text">
        <p>注意 ATTENTION!</p>
      </div>
    </div >
    <!-- <div class="bottom">
    </div> -->
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  data () {
    return {
      shaq: [
        { position: '永红', count: '6' },
        { position: '西林', count: '5' },
        { position: '北海', count: '2' },
        { position: '南大', count: '3' },
        { position: '邹区', count: '4' },
        { position: '荷花', count: '2' },
        { position: '五星', count: '9' },
        { position: '新闸', count: '8' }
      ],
      statesl: [
        { name: '接警总数', count: '16' },
        { name: '暴恐灾情', count: '0' },
        { name: '火灾警情', count: '5' },
        { name: '两抢警情', count: '0' }
      ],
      statesr: [
        { name: '有效警情', count: '130' },
        { name: '群体性事件', count: '0' },
        { name: '危化品泄露', count: '0' },
        { name: '扬言爆炸', count: '0' }
      ],
      overview: [
        { name: '天气状况', situ: '良好', icon: require('../assets/img/over-c1.png') },
        { name: '特别疫情', situ: '无', icon: require('../assets/img/over-c2.png') },
        { name: '物价走势', situ: '正常', icon: require('../assets/img/over-c3.png') },
        { name: '接报警情', situ: '352', icon: require('../assets/img/over-c4.png') },
        { name: '重大安全责任事故', situ: '无', icon: require('../assets/img/over-c5.png') }
      ],
      overview2: [
        { name: '特大自然灾害', situ: '无' },
        { name: '重大形式警情', situ: '无' }
      ],
      sgzn: [
        { name: '排查隐患数', count: '258' },
        { name: '已处理', count: '129' },
        { name: '预警推送', count: '101' },
        { name: '签收反馈', count: '100' }
      ],
      sgznpie: [
        { name: '生产安全隐患', count: '235' },
        { name: '消防安全隐患', count: '210' },
        { name: '环境安全隐患', count: '331' },
        { name: '道路安全隐患', count: '295' },
        { name: '其他安全隐患', count: '258' }
      ],
      zdfxy: [
        { name: '风险源', count: '209', logo: require('../assets/img/fxy.png') },
        { name: '应急专家', count: '124', logo: require('../assets/img/yjzj.png') },
        { name: '应急预案', count: '67', logo: require('../assets/img/yjya.png') },
        { name: '应急物资', count: '2345', logo: require('../assets/img/yjwz.png') },
        { name: '应急装备', count: '234', logo: require('../assets/img/yjzb.png') },
        { name: '应急队伍', count: '23', logo: require('../assets/img/yjdw.png') }
      ],
      ggws: [
        { name: '门诊人数', count: '126' },
        { name: '住院人数', count: '213' }
      ],
      temperature: -5,
      ggwsstyle: false,
      zrzhstyle: false,
      current: [],
      message: 0,
      data1: '无',
      color1: '#00a5f3',
      color2: '#59c2af',
      color3: '#fdf731'
    }
  },
  methods: {
    zrzhjg () { // 自然灾害温度控制警告
      let vm = this
      if (vm.temperature < 0) {
        vm.zrzhstyle = true
      }
    },
    zrzhjgdata () { // 自然灾害警告文本变换
      let vm = this
      if (vm.zrzhstyle) {
        vm.data1 = '低温橙色预警'
      }
    },
    shaqjg () { // 社会安全事件数控制警告
      let vm = this
      for (let i = 0; i < vm.statesl.length; i++) {
        vm.current[i] = -1
        if (vm.statesl[i].count >= 5) {
          vm.current.splice(i, 1, i)
          // vm.current[i] = i
        }
        // vm.current = Object.assign({}, vm.current, vm.current)
      }
    },
    ggwsjg () { // 公共卫生住院人数控制警告
      let vm = this
      for (let j = 0; j < vm.ggws.length; j++) {
        if (vm.ggws[j].count > 200) {
          vm.ggwsstyle = true
        }
      }
    },
    ggwsjgchart () { // 公共卫生柱形图样式变化
      let vm = this
      if (vm.ggwsstyle) {
        vm.color1 = '#77f9f7'
        vm.color2 = '#faf936'
        vm.color3 = '#bd3646'
      }
    },
    chartzsy () { // 图自适应
      let shaqChart = echarts.init(document.getElementById('Chart1'))
      let sgznChart = echarts.init(document.getElementById('Chart2'))
      let ggwsChart = echarts.init(document.getElementById('Chart3'))
      // window.onresize = myChart.resize
      shaqChart.setOption({ // 社会安全柱形图
        title: {
        },
        grid: {
          left: 0,
          right: '8%',
          bottom: '10%',
          top: '10%',
          containlabel: true
        },
        tooltip: {},
        xAxis: {
          type: '',
          data: [ this.shaq[0].position, this.shaq[1].position, this.shaq[2].position, this.shaq[3].position, this.shaq[4].position, this.shaq[5].position, this.shaq[6].position, this.shaq[7].position ],
          nameTextStyle: {
          },
          axisLable: {
            inside: false,
            nameTextStyle: {
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            interval: 0,
            lineStyle: {
              color: '#0b6197'
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#0b6197'
            }
          },
          position: 'right',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#0b6197'
            }
          }
        },
        dataZoom: [{
          type: 'inside'
        }],
        series: [{
          type: 'bar',
          barGap: '-100%',
          barWidth: 15,
          barCategoryGap: '40%',
          itemStyle: {
            normal: {
              color: '#19355f'
            }
          },
          data: ['10', '10', '10', '10', '10', '10', '10', '10'],
          animation: false
        },
        {
          type: 'bar',
          barWidth: 15,
          itemStyle: {
            normal: {
              color: '#00a5f3'
            }
          },
          data: [this.shaq[0].count, this.shaq[1].count, this.shaq[2].count, this.shaq[3].count, this.shaq[4].count, this.shaq[5].count, this.shaq[6].count, this.shaq[7].count],
          name: '事故'
        }]
      })
      sgznChart.setOption({ // 事故灾难饼图
        title: {},
        legend: {
          show: false
        },
        series: [{
          type: 'pie',
          radius: '55%',
          label: {
            normal: {
              show: true,
              formatter: '{b}:({d}%)',
              textStyle: {
                color: 'white',
                fontSize: 8
              }
            }
          },
          data: [
            { value: this.sgznpie[0].count, name: this.sgznpie[0].name },
            { value: this.sgznpie[1].count, name: this.sgznpie[1].name },
            { value: this.sgznpie[2].count, name: this.sgznpie[2].name },
            { value: this.sgznpie[3].count, name: this.sgznpie[3].name },
            { value: this.sgznpie[4].count, name: this.sgznpie[4].name }
          ]
        }],
        color: ['#00cccd', '#ff3c54', '#00b6ff', '#ff00fe', '#ffb777']
      })
      ggwsChart.setOption({ // 公共卫生柱状图
        title: {
        },
        tooltip: {},
        grid: {
          // left: '-30%',
          top: '-22%',
          bottom: '-22%'
        },
        xAxis: {
          show: false,
          max: 300
        },
        yAxis: {
          type: 'category',
          inverse: true,
          axisLine: {
            show: false
          },
          position: 'right',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#0b6197'
            }
          }
        },
        series: [{
          type: 'bar',
          barWidth: 22,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [
                  { offset: 0, color: this.color1 },
                  { offset: 0.5, color: this.color2 },
                  { offset: 1, color: this.color3 }
                ]
              )
            },
            emphasis: {
            }
          },
          data: [this.ggws[0].count, this.ggws[1].count],
          name: '人数'
        }]
      })
      setTimeout(function () {
        window.onresize = function () {
          shaqChart.resize()
          sgznChart.resize()
          ggwsChart.resize()
        }
      }, 200)
    }
  },
  mounted () {
    let vm = this
    vm.zrzhjg()
    vm.zrzhjgdata()
    vm.shaqjg()
    vm.ggwsjg()
    vm.ggwsjgchart()
    // vm.shaqchart()
    // vm.sgznchart()
    // vm.ggwschart()
    vm.chartzsy()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  width: 100%;
  height: 100%;
  position: relative;
}
.shaq {
  width: 20%;
  height: 55%;
  position: relative;
  left: 3%;
  top: 6%;
  background: url(../assets/img/left1.png) no-repeat;
  background-size: 100% 100%;
}
.shaq>span {
  font-size: 22px;
  position: absolute;
  color: white;
  top: 1%;
  left: 11%;
}
.text {
  font-size: 18px;
  position: absolute;
  color: white;
  width: 84%;
  height: 17%;
  top: 9%;
  left: 9%;
  letter-spacing: 0px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  line-height: 130%;
}
.shaq-count {
  width: 83%;
  height: 27%;
  position: absolute;
  background: url(../assets/img/left1-1.png) no-repeat;
  background-size: 100% 100%;
  top: 28%;
  left: 9%;
}
.shaq-count>ul {
  position: absolute;
  font-size: 16px;
  color: white;
  top: 0px;
  left: 0px;
  list-style: none;
  font-weight: 550;
}
.shaq-count>ul:first-child {
  width: 36%;
  height: 85%;
  position: absolute;
  top: 7%;
  left: 6%;
}
.shaq-count>ul:nth-child(2) {
  width: 20%;
  height: 80%;
  position: absolute;
  top: 8%;
  left: 30%;
}
.shaq-count>ul:nth-child(3) {
  width: 36%;
  height: 85%;
  position: absolute;
  top: 7%;
  left: 49%;
}
.number-l{
  position: relative;
  top: 0%;
  left: 20%;
  font-size: 19px;
  color:#77f9f7;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
.number-change{
  color:#e94154;
}
.shaq-count>ul:last-child {
  width: 20%;
  height: 80%;
  position: absolute;
  top: 6%;
  left: 74%;
}
.number-r{
  position: relative;
  top: 3%;
  left: 36%;
  font-size: 19px;
  color:#77f9f7;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
.shaq-count>ul>li {
  margin-top: 2%;
  margin-bottom: 4%;
  position: relative;
  letter-spacing: 1%;
  /* display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden; */
}
.shaq-chart {
  width: 98%;
  height: 54%;
  position: absolute;
  left: 0%;
  top: 51%;
}
.chart1 {
  width: 92%;
  height: 75%;
  position: absolute;
  left: 7%;
  top: 6%;
}
.zrzh {
  width: 20%;
  height: 31%;
  position: relative;
  left: 3%;
  top: 11%;
  background: url(../assets/img/left2.png) no-repeat;
  background-size: 100% 100%;
}
.zrzh>span {
  font-size: 22px;
  position: absolute;
  color: white;
  top: 1%;
  left: 9%;
}
.zrzh>img {
  position: relative;
  top: 58%;
  left: 2%;
}
.temp {
  width: 40%;
  height: 35%;
  position: absolute;
  left: 5%;
  top: 13%;
  font-size: 24px;
  color: #76f9f7;
  font-family: '宋体';
  font-weight: 1000;
}
.temp>span:first-child {
  width: 82px;
  height: 60px;
  position: absolute;
  left: 10%;
  top: 22%;
  font-size: 66px;
}
.temp>span:last-child {
  width: 25px;
  height: 30px;
  position: absolute;
  left: 69%;
  top: 62%;
}
.weat {
  width: 42%;
  height: 48%;
  position: absolute;
  left: 54%;
  top: 10%;
}
.weat>span {
  font-size: 18px;
  color: white;
  position: absolute;
  left: 68%;
  top: 30%;
  font-family: '宋体';
}
.weat-text {
  width:100%;
  height: 48%;
  position: absolute;
  left: 1%;
  top: 55%;
  font-size: 18px;
  color: white;
}
.weat-text>span {
  position: relative;
  margin-top: 5px;
}
.zrzh-text {
  width: 78%;
  height: 22%;
  position: absolute;
  left: 10%;
  top: 69%;
  font-size: 19px;
  color: white;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.imp {
  color:#76f9f7;
}
.imp2 {
  color: #ffa800;
}
.zrzh2 {
  background: url(../assets/img/zrzh-style2.png) no-repeat;
  background-size: 100% 100%;
}
.temp2 {
  color: #ffa800;
}
.overview {
  width: 50%;
  height: 58%;
  position: relative;
  left: 25%;
  top: -81%;
  background: url(../assets/img/content1.png) no-repeat;
  background-size: 100% 100%;
}
.overview-content {
  width: 80%;
  height: 87%;
  position: absolute;
  left: 10%;
  top: 6%;
  font-size: 22px;
  color: white;
}
.overview-imp {
  width: 100%;
  height: 88%;
  position: absolute;
  left: 0%;
  top: 0%;
}
.overview-imp>ul {
  position: absolute;
  top: 0%;
  left: 0%;
  list-style: none;
  width: 100%;
  height: 100%;
}
.overview-imp>ul>li {
  width: 50%;
  height: 19%;
  position: relative;
  left: 0%;
  margin-top: 0%;
}
.overview-imp>ul>li>img {
  width: 190%;
  height: 103%;
}
.inside {
  position: absolute;
  left: 5%;
  top: 26%;
  width: 11% !important;
  height: 50% !important;
}
.overview-imp>ul>li>span {
  position: absolute;
  left: 30%;
  top: 31%;
}
.over-zt {
  position: absolute;
  left: 64%;
  top: 21%;
}
.over-zt>span {
  position: absolute;
  left: 28%;
  top: 10%;
  color: #77f9f7;
}
.over-zt>img {
  width: 98%;
}
.overview-imp>ul>li:last-child>.over-zt {
  position: absolute;
  left: 88%;
}
.remain {
  width: 50%;
  height: 75%;
  position: relative;
  left: 50%;
  top: 3%;
}
.remain>ul {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 1%;
  left: 0px;
  list-style: none;
}
.remain>ul>li {
  width: 100%;
  height: 15%;
  position: relative;
  left: 0px;
  top: 3%;
}
.remain-zt2 {
  position: absolute;
  left: 44%;
  top: -15%;
}
.remain-zt2>span {
  position: absolute;
  left: 27%;
  top: 9%;
  color: #77f9f7;
}
.remain-zt2>img {
  width: 98%;
}
.remain>ul>li:last-child {
  position: relative;
  left: 0px;
  top: 64%;
}
.tips {
  width: 88%;
  height: 15%;
  position: absolute;
  background: url(../assets/img/over-text-botm.png) no-repeat;
  left: 5%;
  top: 86%;
  color: #77f9f7;
  background-size: 100% 90%;
}
.tips>span {
  position: absolute;
  left: 9%;
  top: 17%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.zdfxy {
  width: 48%;
  height: 30%;
  position: relative;
  left: 26%;
  top: -77%;
  background: url(../assets/img/content2.png) no-repeat;
  background-size: 100% 100%;
}
.zdfxy-header {
  width: 30%;
  height: 21%;
  position: absolute;
  left: 35%;
  top: -5%;
  background: url(../assets/img/content2-1.png) no-repeat;
  background-size: 100% 85%;
}
.zdfxy-header>span {
  font-size: 24px;
  position: absolute;
  color: white;
  top: 10%;
  left: 27%;
}
.zdfxy-content{
  width: 92%;
  height: 76%;
  position: absolute;
  top: 15%;
  left: 7%;
}
.zdfxy-content>ul:first-child {
  width: 93%;
  height: 25%;
  position: absolute;
  font-size: 43px;
  color: white;
  top: 0px;
  left: 1%;
  list-style: none;
  text-shadow: 0 0 20px #93c9e9;
  font-family: 'Times New Roman';
  font-weight: 550;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
.zdfxy-content>ul:first-child>li {
  display: inline-block;
  position: relative;
  margin: 0 4%;
}
.zdfxy-content>ul:first-child>li:first-child {
  position: relative;
  margin-left: 0;
  margin-right: 4%;
}
.zdfxy-img {
  width: 94%;
  height: 43%;
  position: absolute;
  top: 32%;
  left: 1%;
  overflow: hidden;
}
.zdfxy-img>ul {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
.zdfxy-img>ul>li {
  display: inline-block;
  position: relative;
  margin: 0 4%;
  list-style: none;
}
.zdfxy-img>ul>li:first-child {
  position: relative;
  margin-left: 0;
  margin-right: 4%;
}
.zdfxy-content>ul:last-child {
  width: 95%;
  height: 16%;
  position: absolute;
  font-size: 21px;
  color: white;
  top: 78%;
  left: 1%;
  list-style: none;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
.zdfxy-content>ul:last-child>li {
  display: inline-block;
  position: relative;
  margin: 0 3%;
}
.zdfxy-content>ul:last-child>li:first-child {
  position: relative;
  margin-left: 0;
  margin-right: 3%;
}
.sgzn {
  width: 20%;
  height: 55%;
  position: relative;
  left: 77%;
  top: -168%;
  background: url(../assets/img/right1.png) no-repeat;
  background-size: 100% 100%;
}
.sgzn>span {
  font-size: 22px;
  position: absolute;
  color: white;
  top: 1%;
  left: 64%;
}
.sgzn-chart {
  background: url(../assets/img/right1-2.png) no-repeat;
  width: 87%;
  height: 41%;
  position: absolute;
  left: 7%;
  top: 11%;
  background-size: 95% 100%;
}
.chart2 {
  width: 100%;
  height: 100%;
  position: absolute;
  left: -3%;
  top: 0;
}
.sgzn-data {
  width: 89%;
  height: 48%;
  position: absolute;
  left: 4%;
  top: 47%;
}
.sgzn-data>ul {
  width: 100%;
  height: 95%;
  position: absolute;
  font-size: 26px;
  color: white;
  top: 4%;
  left: 0px;
  list-style: none;
  text-shadow: 0 0 20px #93c9e9;
}
.sgzn-data>ul>li {
  width: 34%;
  position: relative;
  display: inline-block;
  margin-left: 15%;
  margin-top: 6%;
}
.sgzn-data>ul>li>img {
  width: 85%;
}
.sgzn-data>ul>li>span {
  position: absolute;
  top: 20%;
  left: 11%;
  /* display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden; */
}
.sgzn-name {
  font-size: 15px;
  color: #00caff;
  position: absolute;
  top: 87% !important;
  left: 32% !important;
  text-shadow: 0 0 0 #00caff !important;
}
.ggws {
  width: 20%;
  height: 31%;
  position:  relative;
  left: 77%;
  top: -163%;
  background: url(../assets/img/right2.png) no-repeat;
  background-size: 100% 100%;
  margin: 0;
}
.ggws>span {
  font-size: 22px;
  position: absolute;
  color: white;
  top: 1%;
  left: 65%;
}
.ggws-chart {
  width: 92%;
  height: 56%;
  position: absolute;
  left: 0px;
  top: -1%;
}
.ggws-chart>span:first-child {
  font-size: 18px;
  position: absolute;
  color: white;
  top: 33%;
  left: 3%;
}
.ggws-chart>span:nth-child(2) {
  font-size: 18px;
  position: absolute;
  color: white;
  top: 74%;
  left: 3%;
}
.chart3 {
  width: 80%;
  height: 55%;
  position: absolute;
  left: 24%;
  top: 35%;
}
.ggws-count {
  width: 14%;
  height: 69%;
  position: absolute;
  left: 88%;
  top: 31%;
}
.ggws-count>span:first-child {
  font-size: 23px;
  position: absolute;
  color: #77f9f7;
  top: 0px;
  left: 0px;
  font-weight: 600;
}
.ggws-count>span:nth-child(2) {
  font-size: 23px;
  position: absolute;
  color: #77f9f7;
  top: 60%;
  left: 0px;
  font-weight: 600;
}
.ggws-count2>span {
  color: #bd3646 !important;
}
.ggws-content {
  width: 89%;
  height: 33%;
  position: absolute;
  left: 4%;
  top: 57%;
  font-size: 16px;
  color: white;
}
.ggws-content>img:first-child {
  position: absolute;
  top: 3%;
  left: -4%;
  width: 26%
}
.secondline {
  position: absolute;
  top: 18%;
  left: 39%;
  width: 66%;
}
.ggws-text {
  width: 100%;
  height: 56%;
  position: absolute;
  top: 43%;
  left: -2%;
  letter-spacing: 1px;
}
.ggws-text>p:first-child {
  position: absolute;
  top: -66%;
  left: 16%;
  color: #00a5f3;
}
.ggws-text>p:last-child {
  position: absolute;
  top: -4%;
  left: 0px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.ggws2 {
  background: url(../assets/img/ggws-style2.png) no-repeat;
  background-size: 100% 100%;
}
.ggws-text2>p:first-child {
  color: #fd4a4a;
}
.jg {
  width: 29%;
  height: 9%;
  position: relative;
  top: -261%;
  left: 35%;
}
.jg-text {
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0px;
  left: 0%;
  font-size: 28px;
  text-align: center;
  color: white;
  font-weight: bold;
}
.jg-bac1 {
  position: absolute;
  top: 9%;
  left: 9%;
  width: 86%;
  height: 81%;
}
.jg-bac2 {
  position: absolute;
  top: 8%;
  left: 3%;
  width: 93%;
  height: 82%;
}
.jg-bac3 {
  position: absolute;
  top: 50%;
  left: 6%;
  width: 87%;
  height: 39%;
}
.bottom {
  position: absolute;
  width: 100%;
  height: 25px;
  top: 812px;
  left: 0px;
  background: url(../assets/img/bottom.png) no-repeat;
  background-size: 100% 25px;
}
</style>
