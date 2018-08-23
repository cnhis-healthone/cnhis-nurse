<template class="container">
  <div class="container">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
	<el-radio v-model="radio" label="1">备选项</el-radio>
	<el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>

<script>
    import Header from '../../components/common/Header.vue';
    import Footer from '../../components/common/Footer.vue';

    const Index = {
      data(){
        return {
			radio: '1'
		};
      },
      components: {
        Header,
        Footer
      }
    };

    export default Index;
</script>
