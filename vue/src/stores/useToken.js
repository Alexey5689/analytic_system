import {defineStore} from 'pinia';
export const useToken = defineStore('Token',{
    state:()=>({
       IsLogIn:'',
    }),
    persist: {
        enabled: true,
        strategies: [
          {
            key: 'XSRF-TOKEN',
            storage: localStorage,
            paths:['IsLogIn']
          },
        ],
    },
    actions:{
        getToken(token){
            this.IsLogIn = token;
        },
        logOut(){
            this.IsLogIn = '';
            setTimeout(function(){
                window.location = '/login';
            }, 2000)
        },
    }
})
