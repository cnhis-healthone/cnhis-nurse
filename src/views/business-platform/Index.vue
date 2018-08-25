<template class="container">
  <div>
    <el-container id='order-list'>
		 <el-header> <Header></Header></el-header>
		  <el-container>
		    <el-container>
		      <el-main>
		      	<el-row>
						  <el-col :span="3"><div class="grid-content bg-purple-dark">
						  	<!--<ul>
		      				<li>
		      					 <router-link id="393" to="/business-platform/text" class="button">
						            <span class="headerbg"></span><span>左侧树测试1</span>
						          </router-link>
		      					</li>
		      		  </ul>-->
		      		  <el-menu
						      default-active="2"
						      class="el-menu-vertical-demo"
						      @open="handleOpen"
						      @close="handleClose"
						      background-color="#545c64"
						      text-color="#fff"
						      active-text-color="#ffd04b">
						      <el-submenu index="1">
						        <template slot="title">
						          <i class="el-icon-location"></i>
						          <span>导航一</span>
						        </template>
						        <el-menu-item-group>
						          <template slot="title">分组一</template>
						          <el-menu-item index="1-1">选项1</el-menu-item>
						          <el-menu-item index="1-2">选项2</el-menu-item>
						        </el-menu-item-group>
						        <el-menu-item-group title="分组2">
						          <el-menu-item index="1-3">选项3</el-menu-item>
						        </el-menu-item-group>
						        <el-submenu index="1-4">
						          <template slot="title">选项4</template>
						          <el-menu-item index="1-4-1">选项1</el-menu-item>
						        </el-submenu>
						      </el-submenu>
						      <el-menu-item index="2">
						        <i class="el-icon-menu"></i>
						        
						        <span>
						        	<router-link id="393" to="/business-platform/text" class="button">
						            <span class="headerbg"></span><span>导航二</span>
						          </router-link>
						        </span>
						      </el-menu-item>
						      <el-menu-item index="3" disabled>
						        <i class="el-icon-document"></i>
						        <span slot="title">导航三</span>
						      </el-menu-item>
						      <el-menu-item index="4">
						        <i class="el-icon-setting"></i>
						        <span slot="title">导航四</span>
						      </el-menu-item>
						    </el-menu>
						   </div></el-col>
					      <el-col :span="21">
					      	<router-view name='left'></router-view>
					        <div class="grid-content bg-purple-dark">
						  	    
						    </div>
						  </el-col>
						</el-row>
		      	<router-view ></router-view>
		      </el-main>
		      <el-footer><Footer></Footer></el-footer>
		    </el-container>
		  </el-container>
		</el-container>
  </div>
</template>

<script>
    import Header from '../../components/common/Header.vue';
    import Footer from '../../components/common/Footer.vue';

    const Index = {
      data(){
        return {
        	
		  	};
      },
      components: {
        Header,
        Footer
			}
};

export default Index;
</script>


<style scoped>
	.panel-content{
		width: 20%;
		display: inline-block;
	}
	
	.right-content{
		width: 60%;
		display: inline-block;
	}
	.el-header{
		padding: 0px 0px;
	}
	.el-main{
		padding: 0px 0px
	}
	.el-footer{
		height: 25px!important;
		padding: 0px 0px;
		text-align: center;
		background: #3eafe0;
		color: #ffffff
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
</style>
