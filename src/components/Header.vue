<!-- 公共部分 - 页面头部 -->
<template>
  <div id="all">
    <div class="header">
      <div class="header_center">
        <div class="title">
          <span @click="enteri">钟楼区应急风险源常态监控</span>
        </div>
      </div>
      <div class="choice">
        <ul>
          <li @click="enterz" :class="{'zrzhc':z}"><span>自然灾害</span></li>
          <li @click="enterg" :class="{'zrzhc':g}"><span>公共卫生</span></li>
          <li><span>事故灾难</span></li>
          <li><span>社会安全</span></li>
        </ul>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      z: false,
      g: false
    }
  },
  methods: {
    enterz () {
      let vm = this
      vm.$router.push({ path: '/zrzh', name: '自然灾害' })
      vm.z = true
      vm.g = false
    },
    enterg () {
      let vm = this
      vm.$router.push({ path: '/ggws', name: '公共卫生' })
      vm.z = false
      vm.g = true
    },
    enteri () {
      let vm = this
      vm.$router.push({ path: '/', name: 'index' })
      vm.z = false
      vm.g = false
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#all {
  background: url(../assets/img/background.png) no-repeat;
  height: 100%;
  width: 100%;
  position: relative;
  background-size: 100%;
  /* min-width: 1750px;
  min-height: 900px; */
  /* background-color: #0e1422; */
}
.header {
  height: 11%;
  width: 100%;
  position: relative;
}
.header_center {
  background: url(../assets/img/line.png) no-repeat;
  height: 75%;
  width: 94%;
  left: 0%;
  position: relative;
  top: 18%;
  margin: 0 auto;
  background-size: 99%;
}
.title {
  background: url(../assets/img/title.png) no-repeat;
  height: 90%;
  width: 33%;
  position: relative;
  margin: 0 auto;
  top: -10%;
  left: -6px;
  text-align: center;
  background-size: 99%;
}
.title>span {
  color: white;
  font-size: 36px;
  position: relative;
  top: 12%;
  left: -1%;
  z-index: 1;
  cursor: pointer;
  /* display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden; */
}
.choice {
  position: relative;
  top: -47%;
  height: 70%;
  width: 95%;
  left: 0%;
}
.choice>ul {
  list-style: none;
  height: 98%;
  width: 100%;
  position: relative;
}
.choice>ul>li {
  background: url(../assets/img/title-left.png) no-repeat;
  display: inline-block;
  position: relative;
  width: 13%;
  height: 100%;
  left: 4%;
  background-size: 95% 100%;
}
.choice>ul>li>span {
  font-size: 22px;
  left: 29%;
  position: absolute;
  top: 33%;
  color: white;
}
.choice>ul>li:nth-child(2) {
  left: 8%;
}
.choice>ul>li:nth-child(3) {
  background: url(../assets/img/title-right.png) no-repeat;
  left: 45%;
  background-size: 95% 100%;
}
.choice>ul>li:last-child {
  background: url(../assets/img/title-right.png) no-repeat;
  left: 49%;
  background-size: 95% 100%;
}
.choice>ul>li:first-child:hover {
  background: url(../assets/img/change.png) no-repeat;
  cursor: pointer;
  background-size: 95% 100%;
}
.choice>ul>li:nth-child(2):hover {
  background: url(../assets/img/change.png) no-repeat;
  cursor: pointer;
  background-size: 95% 100%;
}
.zrzhc {
  background: url(../assets/img/change.png) no-repeat !important;
  cursor: pointer;
  background-size: 95% 100% !important;
}
.content {
  height: 89%;
  width: 100%;
  position: relative;
}
</style>
