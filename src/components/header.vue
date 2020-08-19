<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/"  class="navbar-brand">Stock Trader</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
        
      <li class="nav-item">
        <router-link to="/portfolio" activeClass="active"><a class="nav-link">Portfolio</a></router-link>
      </li>
        <li class="nav-item">
        <router-link to="/stocks" activeClass="active"><a class="nav-link">Stocks</a></router-link>
      </li>
        <li  class="nav-item">
        <router-link to="" activeClass="active"><a @click="saveData" class="nav-link">Save Data</a></router-link>
      </li>
        <li class="nav-item">
        <router-link to="" activeClass="active"><a @click="loadData" class="nav-link">Load Data</a></router-link>
      </li>
        <li class="nav-item">
        <router-link to="" activeClass="active"><a @click="endDay" class="nav-link">End Day</a></router-link>
      </li>
      <li>
        <button class=' form form-group ' @click.prevent="logout">Logout</button>
      </li>
      
      <li class="nav-item" >
        <strong>Funds : {{funds}}</strong>
      </li>
      
    </ul>
    
   
  </div>
  
</nav>
  
</template>

<script>
import User from '../api/user';
import { mapActions } from 'vuex';
import Api from '../api/api';
export default {
  data(){
    return {
      
      // authenticated: false
    }
  },
  
    
  //  created () {
  //       this.$auth;
  //       this.isAuthenticated();
  //   },
    
    // watch: {
    //     // Everytime the route changes, check for auth status
    //     '$route': 'isAuthenticated'
    // },

  computed:{
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods:{
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    async isAuthenticated () {
            this.authenticated = await this.$auth.isAuthenticated()
    },
    // login () {
    //   console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhbxcdj');
    //   this.$auth.loginRedirect('/stocks')
    // },
     logout () {
      User.logout().then(()=>{
        localStorage.removeItem("auth");
        this.$router.push('/');
        
      })
   
    },
  
    endDay(){
      this.randomizeStocks();
    },
    saveData(){
      this.saveDat()
    },
    async saveDat(){
      
      // const data = {
      //   funds : this.$store.getters.funds,
      //   stockPortfolio : this.$store.getters.stockPortfolio,
      //   stocks : this.$store.getters.stocks
      // };
      // this.$http.put('data.json',data);
      //Api.defaults.headers.common['Authorization'] = `16|x9Ptm1Zcq41rssho0GKIxWaZgQXaZ2NgogUdMa26JonGRiqOkA2zjj4nciAy4bxDVniT07h8Sh1bLYob`
      Api.post('/stock', {
        funds : this.$store.getters.funds,
        stockPortfolio : this.$store.getters.stockPortfolio,
        stocks : this.$store.getters.stocks
        
      },
      )
        .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });

      // axios.post('http://127.0.0.1:8000/api/stock' , { // <== use axios.post
      //   funds : this.$store.getters.funds,
      //   stockPortfolio : this.$store.getters.stockPortfolio,
      //   stocks : this.$store.getters.stocks,
      //    _method: 'patch'                   // <== add this field
      // })
      // .then(function (response) {
      //    console.log(response);
      // })
      // .catch(function (error) {
      //    console.log(error);            
      // });
      //  axios.put( 'http://127.0.0.1:8000/api/stock', data)
                
      //           .catch(error => {
      //               // handle authentication and validation errors here
      //               this.errors = error.response.data.errors
      //               this.isLoading = false
      //           })


    },
    loadData(){
      this.fetchData();
    }
  }
}
</script>

