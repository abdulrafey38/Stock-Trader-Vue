import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'
import VueRouter from 'vue-router';
import store from './store/store';
import VueResource from 'vue-resource';





Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false

// Vue.http.options.root = 'https://vue-js-stock-trader-df596.firebaseio.com/';

const router = new VueRouter({
  mode : 'history',
  routes
})

function isLoggedIn()
{
  return localStorage.getItem("auth");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
