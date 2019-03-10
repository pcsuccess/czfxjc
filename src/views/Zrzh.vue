<!-- 自然灾害 -->
<template>
  <div id="layout">
    <div class="natural">
      <div class="left">
        <ul>
          <li v-for="(item, index) in situation" v-bind:class="{ 'active': isactive[index]  }" :key=item.id >
            <div class="title">
              <div v-on:click="enter(item.name, index, item.path)">
                <span>{{item.id}}</span>
              </div>
              <div v-on:click="enter(item.name, index)">
                <span>{{item.name}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
<!--         <div class="right_top">
          <div class="first"></div>
          <div class="second"></div>
          <div class="third"></div>
        </div>
        <div class="right_bottom"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      situation: [
        { name: '空气质量', id: 1, path: '/quality' },
        { name: '天气预报', id: 2, path: '/forecast' },
        { name: '台风路径', id: 3, path: '/typhoontrack' },
        { name: '雨情', id: 4, path: '/kong' },
        { name: '水情', id: 5, path: '/kong' },
        { name: '地震监测', id: 6, path: '/kong' }
      ],
      isactive: [ false, false, false, false, false, false ]
    }
  },
  methods: {
    enter (track, index, path) {
      let vm = this
      // for (let i = 0; i < vm.isactive.length + 1; i++) {
      //   if (i === index) {
      //     vm.isactive[index] = true
      //   } else {
      //     vm.isactive[i] = false
      //   }
      // }
      vm.isactive = [ false, false, false, false, false, false ]
      vm.isactive[index] = true
      vm.$router.push({ name: track })
    },
    load () {
      let vm = this
      vm.isactive[0] = true
      vm.$router.push({ name: '空气质量' })
    }
  },
  mounted () {
    let vm = this
    vm.load()
  }
}
</script>

<style lang="scss">
#layout {
  height: 100%;
  width: 100%;
}
.natural {
  background: url(/img/border.png) no-repeat;
  background-size: 100% 100%;
  height: 94%;
  width: 97%;
  position: absolute;
  left: 25px;
  top: 35px;
  margin: 0 auto;
  .left {
    display: inline-block;
    width: 8%;
    height: 40%;
    position: absolute;
    left: 3px;
    top: 22%;
    min-height: 227px;
    min-width: 94px;
    >ul {
      list-style: none;
      width: 100%;
      height: 100%;
      >li:hover {
        background: url(/img/2-1-0.png) no-repeat;
        background-size: 100% 80%;
        color: white;
      }
      .active {
        background: url(/img/2-1-0.png) no-repeat;
        background-size: 100% 80%;
        color: white;
      }
      >li {
        background: url(/img/2-1.png) no-repeat;
        background-size: 100% 80%;
        margin-top: -35%;
        padding: 0;
        margin-left: 0px;
        margin-bottom: 0px;
        height: 32%;
        width: 100%;
        color: RGB(52,104,182);
        >div {
          position: relative;
          top: 35%;
          div:first-child {
            display: inline-block;
            top: -10px;
            position: absolute;
            font-size: 24px;
            width: 31px;
            text-align: center;
          }
          div:first-child:hover {
            cursor: pointer;
          }
          div:last-child {
            display: inline-block;
            position: absolute;
            top: -8px;
            left: 30px;
            width: 98%;
            height: 42px;
            overflow: hidden;
            text-align: center;
            >span {
              font-size: 20px;
              display: inline-block;
              position: relative;
              top: 10px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              overflow: hidden;
              width: 76%;
            }
          }
          div:last-child:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .right {
    display: inline-block;
    position: absolute;
    height: 90%;
    width: 80%;
    top: 30px;
    left: 12%;
  }
}
</style>
