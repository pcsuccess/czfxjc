<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'PingFangSC-Regular', 'Microsoft Yahei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
body {
  font-family: 'PingFangSC-Regular', 'Microsoft Yahei', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #333;
}
body, div, p, span, ul, li {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
  width: 100%;
  background-color: #0e1422;
}
body {
  height: 100%;
  width: 100%;
  background-color: #0e1422;
}
</style>
