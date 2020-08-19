<template>
    <div>
        <hr>
           <app-header></app-header>
            <hr>
    <h3>Hello : {{user.name}}</h3>
    <hr>
    <span>{{user.email}}</span>
    <hr>
        <hr>
        <hr>
        <h1>Trade or View Your Portfolio</h1>
        <h6>You May Save & Load Your Data</h6>
        <h6>Click on 'End Day' to Begin New Day.</h6>
        <hr>
        <p>Your Funds : {{ funds }}</p>
        <hr>

    </div>
</template>

<script>
import User from '../api/user';
import header from '../components/header.vue';
export default {
    data(){
        return{
            user: ""
        }
        
    },
    components : {
        
        appHeader:header
    },
    computed : {
        funds(){
            return this.$store.getters.funds;
        }
    },
    mounted (){
    User.auth().then((resp)=>{
      this.user = resp.data;
    })
  },
}
</script>