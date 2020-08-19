import Api from './api';
import Csrf from './Csrf';

export default {
    getcookie(){
      return   Api.get('/csrf-cookie ');
    },
    register(form){
        return Api.post('/register',form);
    } ,
    login(form){
    
        return Api.post('/login',form);
    },
    async logout(){
        await Csrf.getcookie();
        return Api.post('/logout');
    },
    auth(){

        return Api.get("/user");
    }
};