import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';
const reg = JSON.parse(localStorage.getItem('reg'))
import { YandexModWin } from './YanCon.js';
import { DemoModWin } from './DemoCon.js';
import { LogOutModWin } from './Logout.js';
export default createStore({
    state: ()=>({
       seconds:60,
       minuts:1,
       IsRegistration: '',
       IsAuthtorisation:'',
       reg: reg,
    }),
    plugins: [createPersistedState({
        key:"XSRF-TOKEN",
        paths:['IsAuthtorisation'],
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value),
            removeItem: key => Cookies.remove(key)
          }
    })],
    mutations:{
        getAuthToken(state, token){
            state.IsAuthtorisation = token;
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
        YandexModWin: YandexModWin,
        DemoModWin: DemoModWin,
        LogOutModWin: LogOutModWin,
    }

})
