<template>
  <section class="contact-container">
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
        
          <div class="contact__item">
            <label for="username">お名前</label>
            <input 
              type="text" 
              id="username" 
              name="username"  
              v-model="username" 
              autocomplete="name">
          </div>
           <!-- <p :class="{error: hasError.yourName}"> {{ contact.username.length }} / 20</p> -->
           <p v-show="hasError.username" class="error">氏名は20文字以内で入力してください。</p>
          <div class="contact__item">
            <label for="email">メールアドレス</label>
            <input 
              type="email" 
              v-model.lazy.trim="contact.email" 
              id="email" 
              name="email">
          </div>
          <div class="contact__item">
            <label for="message">メッセージ</label>
            <textarea 
              id="message" 
              name="message"  
              v-model="contact.message" >
            </textarea>
          </div>
          <div class="contact__submit">
            <input type="submit" value="送信">
          </div>
        </form>
    </template>
    <template v-else>
      <div v-text="'お問い合わせ頂きありがとうございました。'" />
      <div><router-link to="/" v-text="'ホームへ'" /></div>
    </template>
  </section>
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
      }
      if(!this.contact.message){
        this.errors.push('メッセージは、必須です')
      }

      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios
        .post(
          '/',
          this.encode({
            'form-name': 'contact',
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
        }
      }
}
</script>
<style>
.contact-container {
  padding: 64px;
  text-align: center;
}
.error {
  color:red
}
</style>
