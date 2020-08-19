<template>
  <div>
    <h1>Portfolios</h1>
    <hr>
       <app-header></app-header>
    <hr>
    <app-stock v-for='stock in stocks' :stock="stock" v-bind:key='stock' ></app-stock>
    <hr>
  </div>
</template>

<script>
import header from '../header.vue';
import {mapGetters} from 'vuex';
import Stock from './Stock.vue';
export default {
  computed :{
    ...mapGetters({
      stocks : 'stockPortfolio'
    })
  },
  components:{
    appStock : Stock,
    appHeader:header
  }

}
</script>
  
<style>

</style>