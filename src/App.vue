<template>
  <div class="container">
 
    <div class="row">
      <div class="col-md-12">
        <transition
         appear
          enter-active-class="animate__animated animate__rollIn"
          leave-active-class="animate__animated animate__rollOut"
          mode='out-in'
          >
          <router-view></router-view>
        </transition>
      </div>
    </div>
 </div>
</template>

<script>


  export default{
     
    created(){
    
      this.$store.dispatch('initStocks');
    }
  }

</script>

<style>
  body {
    padding:30px;
  }

  
</style>
