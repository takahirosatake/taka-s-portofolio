<template>
  <div class="about">
      <div class="about__inner">
        <h2 class="headline">
          About
        </h2>
        <div class="about__container">
          <div class="about__text">
            <h3 class="about__name">
              takahiro satake
            </h3>
            <div class="about__birthday">
              Birthday : 1995/01/31 
            </div>
            <div class="about__qualification">
              資格 : AWS Certified Cloud Practitioner / 宅地建物取引士
            </div>
            <div class="about__hobby">
              趣味 : Game(RPG) / Music / Rockfes. / Bodybuilding
            </div>
            <div class="about__link">
              <h5 class="about__link__title">Links</h5>
              <a href="https://twitter.com/taka40744471" target="_blank">
                <img :src="require('../assets/svg/twitter.svg')">
              </a>
              <a href="https://github.com/takahirosatake" target="_blank">
                <img :src="require('../assets/svg/github.svg')">
              </a>
              <a href="https://qiita.com/ponsata" target="_blank">
                <img :src="require('../assets/image/qiita.png')">
              </a>
            </div>
          </div>
          <div class="about__image">
            <img :src="require('../assets/image/myimage.png')">
          </div>
        </div>
        <section class="career">
          <div class="career__inner">
            <h2 class="career__title">
               Career
            </h2>
            <div class="career__container">
              <h4 class="career__work">
                経歴
              </h4>
              <ul class="career__list">
                <li class="career__item">
                  Daito Bunka Univ. Economics 2013/04~2017/03
                </li>
                <li class="career__item">
                  ジャパン建材株式会社 2017/04 ~ 2020/05
                </li>
              </ul>
              <h4 class="career__work">
                仕事観
              </h4>
              <div class="career__text">
                クライアントに寄り添い、お力になれること
              </div>
              <div class="career__sub">
                営業としてクライアントを導くこと<br>目的意識と責任感を持ち誠意持って対応することを大切にしております。
              </div>
              <h4 class="career__work">
                これから
              </h4>
              <div class="career__text">
                エンジニアとして、日本のマーケットを根強いものにしていきたい。
              </div>
              <div class="career__sub">
                業界に縛られず、ITから日本のマーケットを強化すること<br>
                DXビジネスに貢献できるようにスキルを高めていきます。
              </div>
            </div>
          </div>
        </section>
        <section class="skill">
          <div class="skill__inner">
            <h2 class="skill__title">
              Skill
            </h2>
            <div class="skill__container">
              <div class="skill__work">
                <h4 class="skill__work__title">
                  frontend
                </h4>
                <ul class="skill__list">
                  <li class="skill__item"><img src="../assets/svg/html-5.svg" alt="logo"></li>
                  <li class="skill__item"><img src="../assets/svg/css-3.svg" alt="logo"></li>
                  <li class="skill__item"><img src="../assets/svg/javascript.svg" alt="logo"></li>
                  <li class="skill__item"><img src="../assets/svg/vue.svg" alt="logo"></li>
                </ul>
              </div>
              <div class="skill__work">
                <h4 class="skill__work__title">
                  backend
                </h4>
                <ul class="skill__list">
                  <li class="skill__item"><img src="../assets/svg/ruby.svg" alt="logo"></li>
                  <li class="skill__item"><img src="../assets/svg/rails.svg" alt="logo"></li>
                  <li class="skill__item"><img src="../assets/svg/php.svg" alt="logo"></li>
                  <li class="skill__item"><img src="../assets/svg/laravel.svg" alt="logo"></li>
                </ul>
              </div>
              <div class="skill__work">
                <h4 class="skill__work__title">
                  others
                </h4>
                <ul class="skill__list">
                  <li class="skill__item"><img src="../assets/svg/aws.svg" alt="logo"></li>
                  <li class="skill__item"><img src="../assets/svg/docker.svg" alt="logo"></li>
                  <li class="skill__item"><img src="../assets/svg/github.svg" alt="logo"></li>
                  <li class="skill__item"><img src="../assets/svg/heroku.svg" alt="logo"></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
  </div>
</template>

<script>
import skills from '../assets/skills.json'


export default {
  data(){
    return {
    skills: skills,

    }
  }
}
</script>

<style lang="scss" scoped>


.headline {
  text-align: center;
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
            
            padding: 16px;
            flex-wrap: wrap-reverse;
        }
    }
    &__name {
        @include mq-sm {
            text-align: center;
        }
    }
    &__link {
      & > a {
        & > img {
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }
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

.skill {
    &__inner {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0px 60px 80px;
    }
    &__title {
        text-align: center;
    }
    &__container {
        display: flex;
        justify-content: space-around;
        @include mq-sm {
            padding: 30px;
            flex-wrap: wrap;
        }
    }
    &__work {

      &__title {
        text-align: center;
      }
    }
    &__list {
      list-style: none;
      margin: 0;
      background-color: #fff;
      width: 150px;
      padding: 20px 0;
      border-radius: 20px;
    }
    &__item {
      width: 40px;
      height: 40px;
      margin: 0 auto 40px;

    }
    &__item:last-child {
      margin-bottom: 0;
    }
}

.career {
    &__inner {
        max-width: 1000px;
        margin: 0 auto;

    }
    &__title {
        text-align: center;
    }
    &__container {
        align-items: center;
        background-color: #fff;
        padding: 40px 60px;
        @include mq-sm {
            padding: 16px;
        }
    }
    &__text {
      font-weight: bold;
      text-decoration: underline;
    }
    &__sub {
      font-size: 13px;
    }
}


</style>
