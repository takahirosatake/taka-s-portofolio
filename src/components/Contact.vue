<template>
  <div class="contact">
    <div class="contact__inner">
      <h2 class="headline">contact</h2>
      <div class="contact__container">
        <template v-if="!finished">
            <div class="contact__error" v-if="errors.length">
              <ul class="error" v-for="error in errors" :key="error.id">
                <li>{{ error }}</li>
              </ul>
            </div>
            <form 
              name="contact" 
              class="contact__form" 
              @submit.prevent="handleSubmit" 
              method="POST" 
              data-netlify="true">
            
              <div class="contact__item form">
                <label class="form__label" for="username">
                  お名前
                  <span class="label-required">必須</span>
                </label>
                <input 
                  type="text" 
                  id="username" 
                  name="username"
                  placeholder="yourname"  
                  v-model="username" 
                  autocomplete="name"
                  class="wide">
              </div>
              <!-- <p :class="{error: hasError.yourName}"> {{ contact.username.length }} / 20</p> -->
              <p v-show="hasError.username" class="error">氏名は20文字以内で入力してください。</p>
              <div class="contact__item form">
                <label class="form__label" for="email">
                  メールアドレス
                  <span class="label-required">必須</span>
                </label>
                <input 
                  type="email" 
                  v-model.lazy.trim="contact.email" 
                  id="email" 
                  name="email"
                  placeholder="your@email.com"
                  class="wide">
              </div>
              <div class="contact__item form">
                <label class="form__label" for="message">
                  メッセージ
                  <span class="label-required">必須</span>
                </label>
                <textarea 
                  id="message" 
                  name="message"  
                  placeholder="message"
                  v-model="contact.message"
                  class="wide" >
                </textarea>
              </div>
              <div class="contact__submit fortm text-center">
                <button type="submit" value="送信">Submit</button>
              </div>
            </form>
        </template>
        <template v-else>
          <div class="title" v-text="'お問い合わせ頂きありがとうございました。'" />
          <div class="route"><router-link to="/" v-text="'ホームへ'" /></div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      contact: {
          username: '',
          email:'',
          message:'',
      },
      errors: [],
      hasError:{
          username: false,
          email: false
      },
      finished: false
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {

      this.errors = []
      if(!this.contact.username){
          this.errors.push('氏名は必須です')
      } else if(this.contact.username.length > 20){
          this.errors.push('氏名は20文字以内で入力してください')
      }
      if(!this.contact.email){
        this.errors.push('メールアドレスは、必須です')
      } else if(!this.validEmail(this.contact.email)) {
        this.errors.push('正しいメールアドレスを入力してください')
      }
      if(!this.contact.message){
        this.errors.push('メッセージは、必須です')
      }

      if(this.errors.length) {
        return alert('送信に失敗しました');
      }
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios
        .post(
          '/',
          this.encode({
            'form-name':'contact',
            ...this.contact
          }),
          axiosConfig
        )
        .then(() => {
          this.finished = true
          this.resetForm();
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    resetForm() {
          this.username        = '';
          this.email           = '';
          this.message         = '';
          this.errors          = [];
          return
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
  computed:{
        username:{
          get : function(){
            return this.contact.username
          },
          set: function(value){
            //console.log(value)
            if(value.length <= 20){
              this.hasError.username = false
            } else {
              this.hasError.username = true
            }
            return this.contact.username = value
          }
        },
      }
}
</script>
<style lang="scss" scoped>

.headline {
  text-align: center;
}
.contact {
  background-color: $main-sub-color;
    &__inner {
        max-width: 1000px;
        margin: 0 auto;
        padding: 60px 60px 80px;
        @include mq-sm {
          padding: 0;
          padding-top: 60px;
          padding-bottom: 60px;
        }
    }
    &__container {
        box-sizing: content-box;
        max-width: 672px;
        padding: 0 24px;
        margin: 60px auto;
        @include mq-sm {
            
        }
    }
}

.title{
  text-align: center;
}

.route {
  text-align: center;
}

.error {
  color:red
}
</style>
