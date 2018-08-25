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
  #app>div>section main.el-main>.el-row>.el-col,
  #app>div>section main.el-main>.el-row>.el-col-3 .grid-content,
  #app>div>section main.el-main>.el-row>.el-col-3 .grid-content .el-menu{
  	height: 100%;
  }
  #app>div>section main.el-main>.el-row>.el-col-3 .grid-content .el-menu .el-submenu__title{
  	padding: 0 5px !important;
  }
  .el-container{
  	height: 100%;
  	width: 100%;
  }
  .el-main{
  	width: 100%;
  	height: calc(100% - 60px);
  }
  .el-menu-item a{
  	text-decoration: none;
  	color: #000;
  }
  .el-menu-item.is-active a{
  	color: #3eafe0;
  }
  
</style>
