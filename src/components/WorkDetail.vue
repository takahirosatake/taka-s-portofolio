<template>

  <div class="work-detail" v-cloak >
    <div id="name">
      test
    </div>
    <nav class="breadcrumb-nav">
      <ul>
        <li>
          <router-link to="/"> Home </router-link>
        </li>
        <li>
          <router-link to="/works"> Works </router-link>
        </li>
      </ul>
    </nav>
    <div class="work-detail__inner">
      <h2 class="headline">
         {{ works[workIndex].name }}
      </h2>
      <div class="work-detail__box">
        <div class="work-detail__img">
          <img :src="require('../assets/image/'+ work.image) " class="box-shadow">
        </div>
        <div class="work-detail__content">
          <div class="work-detail__text">
            {{ works[workIndex].text }}
          </div>
          <div class="work-detail__title">
            制作期間 : {{ works[workIndex].period }}
          </div>
          <ul class="work-detail__skill" >
            <div class="work-detail__title">
              Skills :
            </div>
            <li class="work-detail__skill__list" v-for="skill in works[workIndex].skills" :key= "skill.id">
              {{skill.name}}
            </li>
          </ul>
          <div id="work-detail__url">
            <a class="work-detail__url__list">
              <a v-bind:class="works[workIndex].stop? borderText : false" :href="works[workIndex].url" target="_blank" >{{ works[workIndex].name }}</a>
            </a>
            <a class="work-detail__url__list">
              <a :href="works[workIndex].githubURL" target="_blank">github</a>
            </a>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>

import works from '../assets/works.json'

export default {
  name:'WorkDetail',
  props:{
    id: Number,
    image: String,
    work: Object,
    stop: Boolean
  },
  data(){
    return{
      workIndex: this.$route.params.id -1,
      works: works,
      borderText : "border"
    }
  },
  created(){
    if(this.$route.params.id > this.works.length){
      this.$router.push('/Works')
    }
    // if(this.$route.params.stop){
    //   const border = document.getElementById('name');
    //   console.log(border);
    //   border.classList.add('border');
      
    // }
  }
}
</script>

<style lang="scss" scoped>

[v-cloak] {
  display: none;
}
.breadcrumb-nav {
    font-size: 1.5rem;
    text-align: left;
    li {
      display: inline-block;
      & + li {
        &::before {
          content: ' / ';
        }
      }
    }
  }

.headline {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}



// .drop-shadow {
//     -webkit-filter: drop-shadow(0px 3px 10px rgba(0,0,0,.8));
//     filter: drop-shadow(0px 0px 10px rgba(0,0,0,.8));
// }
.box-shadow {box-shadow: 0px 3px 10px rgba(0,0,0,.8)}

.border {
  text-decoration: line-through;
}


.work-detail {
  max-width: 800px;
  margin: 160px auto;
  padding: 0 24px;


  &__skill {
    list-style: none;
    margin-left: 0;
    font-size: 1.6rem;
    font-weight: bold;
    & > li {
      display: inline-block;
      padding-right: 10px
    }
  }
  &__title{
      display: inline-block;
      font-size: 1.6rem;
      font-weight: bold;
      margin-right: 10px;
  }
  &__url {
    list-style: none;
    margin-left: 0;

    &__list {
      display: inline-block;
      padding-right: 10px;
      & + li {
        &::before {
          content: ' / ';
          
        }
      }
    }
  }

}


</style>
