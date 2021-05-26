<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/global/Header';
import Footer from '@/global/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">

@import "./assets/scss/ress.scss";

</style>
