import {createStore} from "vuex";
import {Registration} from './regModul';


export default createStore({
    state: ()=>({
       isAuth:false,
       seconds:60,
       minuts:1
    }),
    mutations:{
        changeTime(state){
            if(state.minuts > 0){
                state.minuts-=1
            }
            if(state.seconds > 0){
                state.seconds-= 1;
            }
       },
        changAuth(state){
            state.isAuth = true;
        },
    },
    actions:{
        startChangeAuth({commit}){
            commit('changAuth')
        },
        changeTimeAsync({commit}){
            setInterval(()=>{
                commit('changeTime')
            },1000);
        },
    },
    modules:{  
        Reg: Registration
    }

})