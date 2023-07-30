// import config from "../../vue.config.js";
// import axios from "axios";

export const DemoModWin={
    state: ()=>({
        DemoCon:false,
        DemoDataCon:false,
        DemoDell:false,
        DemoErr:false,

    }),
    getters:{
        // модальное окно
        stateDemoCon(state){
            return state.DemoCon
        },
        stateDemoDell(state){
            return state.DemoDell
        },
        stateDemoErr(state){
            return state.DemoErr
        },
        stateDemoDataCon(state){
            return state.DemoDataCon
        }

    },
    mutations:{
        changeStateDemoCon(state){
            state.DemoCon = !state.DemoCon;
        },
        changeStateDemoDell(state){
            state.DemoDell = !state.DemoDell;
        },
        changeStateDemoErr(state){
            state.DemoErr = !state.DemoErr;
        },
        changeStateDemoDataCon(state){
            state.DemoDataCon = !state.DemoDataCon;
       },
    },
    actions:{
        ShowDemoCon({commit}){
            commit('changeStateDemoCon')
        },

    },
    namespased: true,
}

