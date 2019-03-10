<template>
  <div class="rain">
    <div>
      <iframe src="http://www.w3school.com.cn/html/html_iframe.asp"></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'air',
  data () {
    return {
      date: 'test'
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="scss">
.rain {
  position: relative;
  height: 100%;
  width: 100%;
  background: url(/img/typhoonBkg.png) no-repeat;
  background-size: 100% 100%;
  >div {
    position: relative;
    top: 51px;
    left: 107px;
    width: 85.5%;
    height: 84%;
    background: white;
    >iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
