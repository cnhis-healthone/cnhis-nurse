<template class="container">
  <div>
    <el-container id='order-list'>
		 <el-header> <Header></Header></el-header>
		  <el-container>
		    <el-container>
		      <el-main>
		      	<el-row>
						  <el-col :span="3"><div class="grid-content bg-purple-dark">
						  	<ul>
		      				<li>
		      					 <router-link id="393" to="/business-platform/text" class="button">
						            <span class="headerbg"></span><span>左侧树测试1</span>
						          </router-link>
		      					</li>
		      		  </ul>
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
