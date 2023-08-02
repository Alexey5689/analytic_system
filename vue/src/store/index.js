import { createStore } from "vuex";
import { Registration } from './regModul';
import { YandexModWin } from './YanCon.js';
import { DemoModWin } from './DemoCon.js';
import { LogOutModWin } from './Logout.js';
export default createStore({
    state: ()=>({
       seconds:60,
       minuts:1
    }),
    getters:{

    },
    mutations:{
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
        Reg: Registration,
        YandWind: YandexModWin,
        DemoWind: DemoModWin,
        LogOutModWin: LogOutModWin,
    }

})
