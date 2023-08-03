import config from "../../vue.config.js";
import axios from "axios";

export const DemoModWin={
    state: ()=>({
        DemoCon:false,
        IsDemoDataCon:false,
        DemoDell:false,
        DemoErr:false,
        active:false,

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
            return state.IsDemoDataCon
        },
        stateDemoActive(state){
            return state.active
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
            state.IsDemoDataCon = !state.IsDemoDataCon;
        },
        changeDemoActive(state){
            state.active = !state.active
        }
    },
    actions:{
        ShowDemoCon({commit}){
            commit('changeStateDemoCon')
        },
        continueFull({commit}){

            commit('changeStateDemoDataCon');
            commit('changeStateDemoCon');
        }
        //async continueFull({commit}){
        //     try{
        //         commit(' changeStateDemoCon')
        //         commit('changeStateDemoDataCon')
        //         const response = await axios({
        //             method:'GET',
        //             url:config.appBackendURL + ':' + config.appBackendPort + '/api/format_campaigns_data',
        //         })
        //         console.log(response);
        //         commit('getAnalytics', response.data)
        //         commit('changeStateShowCon');
        //         commit('changeDemoActive')
        //     }catch(err){
        //         console.log(err);
        //         commit('changeStateShowCon');
        //         commit('changeStateShowErr');
        //     }
        //     finally{
        //         commit('changeStateDemoDataCon')
        //     }
        //  }


    },
    namespased: true,
}

