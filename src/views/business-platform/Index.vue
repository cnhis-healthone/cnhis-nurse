<template class="container">
  <div class="container">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from '../../components/common/Header.vue';
    import Footer from '../../components/common/Footer.vue';

    const Index = {
      data(){
        return {};
      },
      components: {
        Header,
        Footer
      }
    };

    export default Index;
</script>
