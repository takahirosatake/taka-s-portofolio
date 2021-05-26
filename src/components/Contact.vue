<template>
  <div>
    <p v-if="errors.length">
      <ul class="error" v-for="error in errors" :key="error.id">
        <li>{{ error }}</li>
      </ul>
    </p>
    <form @submit.prevent="validate">
      氏名
      <input type="text" v-model="yourName"><!-- computed で監視している値 -->
      <br>
      <p :class="{error: hasError.yourName}"> {{ contact.yourName.length }} / 20</p>
      <p v-show="hasError.yourName" class="error">氏名は20文字以内で入力してください。</p>

      電話番号
      <input type="tel" v-model.number="contact.tel">
      <br>
      メールアドレス
      <input type="email" v-model.lazy.trim="contact.email">
      <br>
      メッセージ
      <textarea v-model="contact.message"></textarea>
      <br>
      <input type="submit" value="送信">
    </form>
  </div>
</template>

<script>
export default {  
      name:'',
      data(){
        return {
          contact: {
            yourName: '',
            tel: '',
            email:'',
            message:'',
            attracts: [],
            caution: false
          },
          errors: [],
          hasError:{
            yourName: false
          }
        }
      },
      methods:{
        validate(){
          this.errors = []
          if(!this.contact.yourName){
            this.errors.push('氏名は必須です')
          } else if(this.contact.yourName.length > 20){
            this.errors.push('氏名は20文字以内で入力してください')
          }
          if(!this.contact.email){
            this.errors.push('メールアドレスは必須です')
          }
          if(!this.contact.message){
            this.errors.push('メッセージは必要ですは、必須です')
          }
          if(!this.errors.length){
            console.log('送信可能です')
          }
        }
      },
      computed:{
        yourName:{
          get(){
            return this.contact.yourName
          },
          set(value){
            //console.log(value)
            if(value.length <= 20){
              this.hasError.yourName = false
            } else {
              this.hasError.yourName = true
            }
            return this.contact.yourName = value
          }
        }
      }
}


</script>

<style lang="scss" scoped>

</style>
