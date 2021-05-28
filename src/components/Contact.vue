<template>
  <div class="contact">
    <div class="contact__error" v-if="errors.length">
      <ul class="error" v-for="error in errors" :key="error.id">
        <li>{{ error }}</li>
      </ul>
    </div>
    <form class="contact__form" @submit.prevent="onSubmit" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" :class="sendingClass">
      <!-- DOM追加を手動で行っている -->

      <div class="contact__item">
        <label for="username">お名前</label>
      <input type="text" id="username" name="username"  v-model="contact.username" autocomplete="name"><!-- computed で監視している値 -->
      </div>
      <p :class="{error: hasError.username}"> {{ contact.username.length }} / 20</p>
      <p v-show="hasError.username" class="error">氏名は20文字以内で入力してください。</p>
      <div class="contact__item">
        <label for="email">メールアドレス</label>
        <input type="email" v-model.lazy.trim="contact.email" id="email" name="email">
      </div>
      <div class="contact__item">
        <label for="message">メッセージ</label>
        <textarea id="message" name="message"  v-model="contact.message"></textarea>
      </div>
      <div class="contact__submit">
        <input type="submit" value="送信">
      </div>
    </form>
  </div>
</template>

<script>
export default {  
      name:'',
      data(){
        return {
          contact: {
            username: '',
            email:'',
            message:'',
            isSubmit        : false,
            isSending       : false,
            isError         : false,
            completeMessage : '',
          },
          errors: [],
          hasError:{
            username: false
          }
        }
      },
      methods:{
        onSubmit(){
          if(this.isSending){
            return;
          }
          this.isSending = true;
          this.completeMessage = '送信処理中…';
          
          this.errors = []
          const params = new URLSearchParams();
          params.append('form-name', 'contact');

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
            params.append('username', this.username);
            params.append('email', this.email);
            params.append('message', this.message);
          
          this.$axios
          .$post('/', params)
          .then(() => {
            this.completeMessage = 'お問い合わせを送信しました！';
            this.resetForm();
            this.isSubmit  = true;
          })
          .catch(err => {
            this.completeMessage = 'お問い合わせの送信が失敗しました';
            this.isError = true;
          })
          .finally(() => {
            this.isSending = false;
          });
        },
        resetForm() {
          this.username        = '';
          this.email           = '';
          this.message         = '';
          this.errors          = [];
          this.isError         = false;
          return
        },
      },
      computed:{
        sendingClass() {
          return {
            'is-sending' : this.isSending,
            'is-error' : this.isError,
            'is-complete' : this.isSubmit,
          }
        },
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

<style lang="scss" scoped>

</style>
 
