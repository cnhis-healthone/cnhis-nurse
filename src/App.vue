<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  html,html body{
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
  }
  #app{
  	height: 100%;
  	width: 100%;
  }
  #app>div,#app>div>section,#app>div>section main.el-main,
  #app>div>section main.el-main>.el-row,
  #app>div>section main.el-main>.el-row>.el-col{
  	height: 100%;
  }
  .el-container{
  	height: 100%;
  	width: 100%;
  }
  .el-main{
  	width: 100%;
  	height: calc(100% - 60px);
  }
</style>
