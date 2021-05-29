<template>
  <div class="container" v-cloak>
    <div class="top">
      <div class="top__inner">
        <div class="top__title">Takahiro portfolio</div>
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
  &__title{
  font-size: calc(20px + 18vh);
  line-height: 400px;
  margin: 0 auto;
/*   text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
    0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092;
  color: #fccaff; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  font-family: 'Marck Script', cursive;
  text-align: center;
  animation: blink 12s infinite;
  -webkit-animation: blink 12s infinite;
  @include mq-sm {
        font-size: 50px;
        }
}

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

@import url('https://fonts.googleapis.com/css2?family=Marck+Script&display=swap');



body {
  padding: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #222;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 7px,
    rgba(0, 0, 0, 0.8) 9px,
    rgba(0, 0, 0, 0.8) 13px,
    transparent 13px
  );
}

@-webkit-keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
/*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}

@keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
/*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}
</style>
