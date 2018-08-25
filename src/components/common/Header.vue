<template>
<div class="app-header">
    <div id="banner" class="inline">
      <div class="inline logo">
      </div><div class="inline systemText">云健康 . 护士管理系统</div>
    </div>
    <div class="inline" id="minMenu">
      <ul class="list-unstyle list-inline">
        <li class="header checkMinMenu" id="ywpt">
          <router-link id="393" to="/business-platform" class="button">
            <span class="headerbg"></span><span>业务平台</span>
          </router-link>
        </li>
        <li class="header" id="tjfx">
          <router-link id="394" to="/statistical-analysis" class="button">
            <span class="headerbg"></span><span>统计分析</span>
          </router-link>
        </li>
        <li class="header" id="cssz">
          <router-link id="395" to="/parameter-settingIndex" class="button">
            <span class="headerbg"></span><span>参数设置</span>
          </router-link>
        </li>
        <li class="header" id="xxzx">
          <router-link id="396" to="/message-center" class="button">
            <span class="headerbg"></span><span>消息中心</span>
          </router-link>
          <div class="messageSign">
            <label class="label-normal">15</label>
          </div>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>
  const Header = {
    name: 'Header',
    data(){
      return {
        msg: 'this is header'
      }
    }
  };
  export default Header;
</script>

<style scoped>
  .app-header {
    width: 100%;
    font-size: 1rem;
    height: 60px;
    background-color: #056DAF;
    background: url(../../assets/theme/sky-blue/topbg.gif);
    color: #fff;
    position: relative;
    border-bottom: 1px solid #309b95;
    background-size: cover;
    -webkit-background-size: cover;
  }
  .logo{
    background: url('../../assets/theme/sky-blue/logo.png') no-repeat;
    width: 40px;
    height: 45px;
  }
  .header .headerbg{
    display: inline-block;
    width: 18px;
    height: 18px;
    position: relative;
    margin-right: 5px;
    top: 3px;
  }
  .header#ywpt .headerbg{
    background: url('../../assets/theme/common/header.png') no-repeat -29px -10px;
  }
  .header#tjfx .headerbg{
    background: url('../../assets/theme/common/header.png') no-repeat -154px -9px;
  }
  .header#cssz .headerbg{
    background: url('../../assets/theme/common/header.png') no-repeat -282px -9px;
  }
  .header#xxzx .headerbg{
    background: url('../../assets/theme/common/header.png') no-repeat -408px -10px;
  }
  #admin .admin:nth-of-type(1) .adminImg{
    background: url('../../assets/theme/common/header.png') no-repeat -28px -151px;
    width: 16px;
    height: 16px;
    position: relative;
    top: 4px;
  }
  #admin .admin:nth-of-type(2) .adminImg{
    background: url('../../assets/theme/common/header.png') no-repeat -116px -151px;
    width: 16px;
    height: 16px;
    position: relative;
    top: 4px;
  }
  #admin .admin:nth-of-type(3) .adminImg{
    background: url('../../assets/theme/common/header.png') no-repeat -275px -150px;
    width: 16px;
    height: 16px;
    position: relative;
    top: 4px;
  }
  #admin .admin:nth-of-type(4) .adminImg{
    background: url('../../assets/theme/common/header.png') no-repeat -276px -92px;
    width: 16px;
    height: 16px;
    position: relative;
    top: 4px;
  }
  .app-header #banner {
    display: inline-block;
    height: 100%;
    position: relative;
    line-height: 60px;
    top: 0;
    float: left;
    background: url(../../assets/theme/sky-blue/topleft.png) no-repeat;
  }
  .app-header #banner .logo {
    position: relative;
    top: 12px;
    margin: 0 5px 0 25px;
  }
  .app-header #banner .systemText {
    font-size: 1.5rem;
    line-height: 60px;
    position:relative;
    bottom:5px;
  }
  .app-header #minMenu {
    position: relative;
    top:0px;
    height: 100%;
    margin-left: 50px;
  }
  .app-header #minMenu .headerbg{

  }
  .app-header #minMenu ul{
    height:100%;
    /* width: 500px; */
    margin: 0 auto;
  }
  .app-header ul.list-inline li{
    display: inline-block;
    float:left
  }
  .app-header .header{
    position: relative;
    height:100%;
    padding:0px;
  }
  .app-header .header a{
    display: block;
    text-align: center;
    height: 100%;
    padding: 0px 24px;
    cursor: pointer;
    color: #FFFFFF;
    text-decoration: none;
    line-height: 56px;
  }
  .app-header .header a:hover{
    background-color: #045d95;
  }
  .app-header header #minMenu li p {
    margin-bottom: 3px;
  }
  .app-header header #admin {
    width: 100%;
    height: 30px;
    background: url(../../assets/theme/sky-blue/topnav.png);
    background-repeat: no-repeat;
    text-align: center;
    line-height: 30px;
  }
  .app-header #admin .skin-change .btn{
    line-height: 15px;
    height: 30px;
    padding: 6px 10px;
  }
  .app-header #admin .skin-change .btn:hover{
    color: #ffffff;
  }
  .app-header #admin .skin-change .dropdown-menu{
    margin:0px;
  }
  .app-header #admin .skin-change .dropdown-menu a{
    color:#000;
  }
  .app-header #admin .skin-change .dropdown-menu a:hover{
    background-color: #3eafe0;
    color:#fff;
  }
  .app-header #admin .skin-change .dropdown-menu .divider{
    height:1px;
  }
  .app-header #admin label {
    margin-right: 10px;
    font-weight: normal;
    font-size:.8rem;
  }
  .app-header header .left_info {
    display: inline-block;
    height: 100%;
    width: 365px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    background: url('../../assets/theme/sky-blue/topright.png')no-repeat right;
  }
  .app-header .left_self {
    bottom: 0px;
    position: absolute;
    left: 25px;
    font-size: 14px;
  }
  .app-header .left_self .select2-container--default .select2-selection--single{
    border: 1px solid transparent;
  }
  .app-header .left_self .select2-container--default .select2-selection--single .select2-selection__arrow b{
    border-color: rgba(255, 255, 255, 0.9) transparent rgba(255, 255, 255, 0.9) transparent;
  }
  .app-header .left_self .select2-container--default .select2-selection--single{
    background-color: transparent;
  }
  .app-header .left_self .select2-container--default .select2-selection--single .select2-selection__rendered{
    color: #fff;
  }
  .app-header .left_self .name{
    position: relative;
    top: 2px;
  }
  .el-header{
    padding:0px 0px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
</style>


