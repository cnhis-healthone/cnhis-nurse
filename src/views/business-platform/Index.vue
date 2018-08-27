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
						      background-color="#fff"
						      text-color="#000"
						      active-text-color="#3eafe0">
						      
						      <el-submenu  v-for="item  in menuData" v-if="item.children.length>0" :index="item.id" :key="item.id">
						        <template slot="title">
						          <i class="el-icon-location"></i>
						          <span>{{item.text}}</span>
						        </template>
						          <el-menu-item v-for="child in item.children" :index="child.id" :key="child.id">
						          	<span>
								        	<router-link :id="child.id" :to="child.attributes.url" class="button">
								            <span></span><span>{{child.text}}</span>
								          </router-link>
								        </span>
						          </el-menu-item>
						      </el-submenu>
						      
						      <el-menu-item index="2" v-else>
						        <i class="el-icon-menu"></i>
						        
						        <span>
						        	<router-link id="393" to="/business-platform/text" class="button">
						            <span></span><span>{{item.text}}</span>
						          </router-link>
						        </span>
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
		var goodsData = require('@/components/datas/left_json.json');
    const Index = {
      data(){
        return {
        	menuData:goodsData
		  	};
      },
      components: {
        Header,
        Footer
			},
			created: function(){
				console.log(this.menuData);
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
