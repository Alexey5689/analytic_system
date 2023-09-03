import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';
import { YandexModWin } from './YanCon.js';
import { DemoModWin } from './DemoCon.js';
import { LogOutModWin } from './Logout.js';
export default createStore({
    state: ()=>({
       seconds:60,
       minuts:1,
       IsAuthorisation:'',
    }),
    plugins: [createPersistedState({
        key:"XSRF-TOKEN",
        paths:['IsAuthorisation'],
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value),
            removeItem: key => Cookies.remove(key)
          }
    })],
    getters:{
        currentSec(state){
            return state.seconds;
        },
        currentMin(state){
            return state.minuts;
        }
    },
    mutations:{
        getAuthToken(state, token){
            state.IsAuthorisation = token;
        },
        logOut(state){
            state.IsAuthorisation = '';
            setTimeout(function(){
                window.location = '/login';
            }, 2000)
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
