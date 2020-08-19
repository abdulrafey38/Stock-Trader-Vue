<template>
  <!-- Material form register -->
  <form>
    <p class="h4 text-center mb-4">Sign up</p>
    <div class="grey-text">
      <mdb-input label="Your name" v-model="form.name" icon="user" type="text"/>
      <span class="alert-danger" v-if="errors.name">
          {{ errors.name[0] }}
      </span>
      <mdb-input label="Your email" icon="envelope" v-model="form.email" type="email"/>
       <span class=" alert-danger" v-if="errors.email">
          {{ errors.email[0] }}
      </span>
      <mdb-input label="Password" icon="exclamation-triangle" v-model="form.password" type="password"/>
       <span class="alert-danger" v-if="errors.password">
          {{ errors.password[0] }}
      </span>
      <mdb-input label="Confirm Password" icon="lock" v-model="form.password_confirmation" type="password"/>
        <span class="alert-danger" v-if="errors.password_confirmation">
          {{ errors.confirmation[0] }}
      </span>
    </div>
    <div class="text-center">
      <button class='btn btn-primary' color="primary" @click.prevent="register">Register</button>
    </div> 
  </form>
  <!-- Material form register -->
</template>

<script>
import User from "../api/user";
import Csrf from "../api/Csrf";
  import { mdbInput } from 'mdbvue';
  export default {
      data(){
          return {
              form:{
                  name:"",
                  email:"",
                  password:"",
                  password_confirmation:""
              },
              errors : []
          };
      },
    name: 'Basic',
    components: {
      mdbInput
    },
    methods:{
        register(){
            Csrf.getcookie().then(()=>{
            User.register(this.form)
            .then(()=>{
                this.$router.push('/');
            })
            .catch(error => {
                if(error.response.status===422){
                    this.errors = error.response.data.errors;
                }
            })
            });
            
        }
    }
  }
</script>