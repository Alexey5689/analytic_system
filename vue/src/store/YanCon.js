import config from "../../vue.config.js";
import axios from "axios";
export const YandexModWin={
    state: ()=>({
        showCon:false,
        showDell:false,
        showErr:false,
        company: '',
        active:false,
    }),
    getters:{
        // модальное окно
        stateShowCon(state){
            return state.showCon
        },
        stateShowDell(state){
            return state.showDell
        },
        stateShowErr(state){
            return state.showErr
        },
        stateAnalyticsCompany(state){
            return state.company
        },
        stateActivYnd(state){
            return state.active
        },

    },
    mutations:{
        changeStateShowCon(state){
            state.showCon = !state.showCon;
        },
        changeStateShowDell(state){
            state.showDell = !state.showDell;
        },
        changeStateShowErr(state){
            state.showErr = !state.showErr;
        },
        getAnalytics(state, info){
            state.analytics = info;
       },
       changeActivYand(state){
            state.active = !state.active;
       }
    },
    actions:{
        ShowModelCon({commit}){
            commit('changeStateShowCon')
        },
        async Connection({commit}){
            try{
                const response = await axios({
                    method:'GET',
                    url:config.appBackendURL + ':' + config.appBackendPort + '/api/format_campaigns_data',
                })
                console.log(response);
                commit('getAnalytics', response.data)
                commit('changeStateShowCon');
                commit('changeActivYand');
            }catch(err){
                console.log(err);
                commit('changeStateShowCon');
                commit('changeStateShowErr');
            }
         }
    },
    namespased: true,
}
