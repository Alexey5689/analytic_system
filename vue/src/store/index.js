import {createStore} from "vuex";
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

export default createStore({
    state: ()=>({
        seconds:60,
        minuts:1,
        isAuth: '',
     }),
    plugins: [createPersistedState({
        key:"XSRF-TOKEN",
        paths:['isAuth'],
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value),
            removeItem: key => Cookies.remove(key)
          }
    })],

    mutations:{
        getAuthToken(state, token){
            state.isAuth = token
        },
        lostAuthToken(state){
            state.isAuth ="";
        },
        changeTime(state){
             if(state.minuts > 0){
                 state.minuts-=1
             }
             if(state.seconds > 0){
                 state.seconds-= 1;
             }
        },
     },
    actions:{
         changeTimeAsync({commit}){
             setInterval(()=>{
                 commit('changeTime')
             },1000);
         },
    },
    modules:{

    }
})
