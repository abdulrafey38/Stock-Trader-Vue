import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';
import login from './components/login.vue';
import register from './components/register.vue';





export const routes =[
    {path:'/',component:login},
    {path: '/home', component:Home,meta:{authOnly:true}},
    {path: '/portfolio', component:Portfolio,meta:{authOnly:true}},
    {path: '/stocks', component:Stocks,meta:{authOnly:true}},
    {path:'/register',component:register}

    
];

