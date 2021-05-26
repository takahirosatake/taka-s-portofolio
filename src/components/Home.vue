<template>
  <div class="container" v-cloak>
    <div class="top">
      <div class="top__inner">

      </div>
    </div>
    <section class="works">
      <div class="works__inner">
        <h2 class="headline">
          Works
        </h2>
        <div class="works__container" >
          <div class="works__box" v-for="work in works" :key="work.id" @click="showWorksDetail(work.id)">
            <router-link to="/works" class="works__link" >
              <div class="works__img">
                <OverLay v-bind:textContent= "text">
                  <img :src="require('../assets/image/'+ work.image)">
                </OverLay>
              </div>
              <div class="works__name">
               {{work.name}}
              </div>
            </router-link>
          </div>
        </div>
        <div class="works__more">
          <router-link to="/works" class="works__more__link">もっと見る</router-link>
        </div>
      </div>
      
    </section>
    <section class="about">
      <div class="about__inner">
        <h2 class="headline">
          About
        </h2>
        <div class="about__container">
          <div class="about__text">
            <h3 class="about__name">
              takahiro satake
            </h3>
            <div class="about__role">
              Business <br> Housing salesman / Gym trainer
            </div>
            <div class="about__qualification">
              資格 <br> AWS Certified Cloud Practitioner / 宅地建物取引士 
            </div>
            <div class="about__other">
              <router-link to="/about" class="works__other__link"> そのほか </router-link>
            </div>
          </div>
          <div class="about__image">
            <img :src="require('../assets/image/myimage.png')">
          </div>
        </div>
      </div>
    </section>
    <section class="contact">
      <div class="contact__inner">
        <h2 class="headline">
          Contact
        </h2>
        <div class="contact__form">
          <router-link   to="/contact" > お問い合わせはこちら </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import works from '@/assets/works.json'
import OverLay from '@/components/OverLay.vue'
//配列の最初の二つをスライスメソッドで取り出す
let worksSlice = works.slice(0,2)

export default {
  name: 'Home',
  components:{
    OverLay,
  },
  data() {
    return {
      works: worksSlice,
      text: "Read More...",
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
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>

[v-cloak] {
  display: none;
}

.top {
  background: url("../assets/image/festival.jpg") center / cover;

  position: relative;
  width: 100%;
  height: 400px;

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
  &__more {
      margin-top: 60px;
      margin-bottom: 30px;
      
      &__link {
          display: block;
          max-width: 300px;
          width: 80%;
          margin: 0 auto;
          padding: 0.5em;
          text-align: center;
          text-decoration: none;
          border: 1px solid $link-color;
          background-color: transparent;
          transition: background-color 0.3s;
          &:hover {
            color: #fff;
            background-color: $link-color;
          }
      }
  }
}

.about {
    
    background-color: $base-color;
    &__inner {
        max-width: 1000px;
        margin: 0 auto;
        padding: 60px 60px 80px;
    }

    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: 40px 60px;
        @include mq-sm {
            background-color: #fff;
            padding: 16px;
            flex-wrap: wrap-reverse;
        }
    }
    &__name {
        @include mq-sm {
            text-align: center;
        }
    }
    &__image {
        @include mq-sm {
            margin: 0 auto;
        }
        & > img {
          width: 120px;
          height: 120px;
        }
    }
}

.contact {
  background-color: $main-sub-color;
  &__inner {
      max-width: 1000px;
      margin: 0 auto;
      padding: 60px 60px 80px;
      margin: 0 auto;
      @include mq-md {
        width: 100%;
      }
  }
  &__form {
    padding: 40px 60px;
    background-color: $bg-color1;
    text-align: center;
  }
}


</style>
