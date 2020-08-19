<template>

    <div>
        <hr>
           <app-header></app-header>
        <hr>
        <app-stock v-for="stock in stocks" v-bind:key="stock" :stock="stock"> </app-stock>
        <hr>    
    </div>
</template>

<script>
import header from '../header.vue';
import stock from "./Stock.vue";
export default {
    components : {
        appStock : stock,
        appHeader:header
    },
    computed : {
        stocks(){
            
            return this.$store.getters.stocks;
        }
    }
}
</script>

<style>

</style>