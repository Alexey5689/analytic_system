import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';
const reg = JSON.parse(localStorage.getItem('reg'))
export default createStore({
    state: ()=>({
       seconds:60,
       minuts:1,
       IsRegistration: '',
       reg: reg,
    }),
    plugins: [createPersistedState({
        key:"reg_token",
        paths:['IsRegistration'],
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value),
            removeItem: key => Cookies.remove(key)
          }
    })],
    mutations:{
        getRegToken(state, token){
            state.IsRegistration = token;
            console.log(token);
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
