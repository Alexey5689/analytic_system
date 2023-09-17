import { createStore } from "vuex";

export default createStore({
    state: ()=>({
       seconds:60,
       minuts:1,
    }),
    getters:{
        currentSec(state){
            return state.seconds;
        },
        currentMin(state){
            return state.minuts;
        }
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
})
