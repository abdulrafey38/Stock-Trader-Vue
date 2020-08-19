<template>
    <div>
        <form>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model='form.email' class="form-control form-control-lg" />
            </div>
             <span class="alert-danger" v-if="errors.email">
            {{ errors.email[0] }}
            </span>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model='form.password' class="form-control form-control-lg" />
            </div>
             <span class="alert-danger" v-if="errors.password">
            {{ errors.password[0] }}
            </span>

            <button @click.prevent='login' class="btn btn-dark btn-lg btn-block">Sign In</button>

          
        </form>
    </div>
</template>

<script>
import User from '../api/user';
import Csrf from "../api/Csrf";

export default {
    data() {
        return {
            
            form: {
                email: "",
                password: ""
            },
            errors :[]
        }
    },
    methods: {
        login() {
            
            
            Csrf.getcookie().then(()=>{
            User.login(this.form)
            .then((response)=>{
            
             const token = response.data.token;
             localStorage.setItem('auth',token);
             this.$router.push('/home');
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

<style scoped>
 
  


body {
  background: #2554FF !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}

body,
html,
.App,
.vue-tempalte,
.vertical-center {
  width: 100%;
  height: 100%;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;    
}

.inner-block {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

.vertical-center .form-control:focus {
  border-color: #2554FF;
  box-shadow: none;
}

.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

label {
  font-weight: 500;
}


</style>