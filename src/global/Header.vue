<template>
   <div class="header">
     <div class="header__inner">
       <div class="header__title">Taka's Portfolio</div>
       <Nav class="nav"></Nav>
     </div>
   </div>
   

</template>

<script>

import Nav from './Nav.vue'

export default {
  components :{
     Nav
  },
}

</script>

<style lang="scss" scoped>

.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  background: hsla(0,0%,100%,.8);

  &__inner {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    @include mq-md {
      flex-wrap: wrap;
      height: auto;
      text-align: center;
    }
  }
  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-left: 30px;
    @include mq-md {
      margin: 0 auto;
      text-align: center;
    }
  }
}



</style>
