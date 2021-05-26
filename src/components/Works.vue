<template>
  <div class="works" v-cloak>
      <div class="works__inner">
        <h2 class="headline">
          Works
        </h2>
        <div class="works__container" >
          <div class="works__box" v-for="work in works" :key="work.id" 
            @click="showWorksDetail(work.id)">
            <div class="works__img" >
              <OverLay v-bind:textContent= "text">
                <img :src="require('../assets/image/'+ work.image)">
              </OverLay>
            </div>
            <div class="works__name">
              {{work.name}}
            </div>
          </div>
        </div>
      </div>
  </div>
</template>



<script>

import works from '../assets/works.json'
import OverLay from '@/components/OverLay.vue'


export default {
  name:'Works',

  components:{
    OverLay,
  },
  data(){
    return{
      workIndex: -1,
      works: works,
      text: "Read More..."
    }
  },
  methods:{
    showWorksDetail(id){
      this.workIndex = id - 1
      // console.log(this.workIndex) 配列順番確認
      this.$router.push({
        name:'work',
        params:{
          id: this.works[this.workIndex].id,
          work : this.works[this.workIndex],
          image : this.works[this.workIndex].image
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

[v-cloak] {
  display: none;
}

.headline {
  text-align: center;
}


.works {
  max-width: 1200px;
  margin: 100px auto;
  &__inner {
    width: $b-large-min;
    margin: 0 auto;
    @include mq-md {
      width: 100%;
    }
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
  }
  &__box {
      flex-basis: 360px;
      margin: 32px 0;
      @include mq-md {
        flex-basis: 100%;
        margin: 0 32px 32px;
      }
  }
  &__name {
      margin-top: 16px;
      margin-bottom: 0;
      font-size: 1.6rem;
      text-align: center;
      color: $text-color;
  }
  &__link {
      text-decoration: none;
  }

}


</style>
