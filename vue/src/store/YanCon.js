import config from "../../vue.config.js";
import axios from "axios";

export const YandexModWin = {
    state: () => ({
        dataComp: [],
        dataAds: [],
        dataKeywords: [],
        ShowCon:false,
        ShowDell:false,
        ShowErr:false,
        active:false,
    }),

    getters:{
        // модальное окно
        stateShowCon: (state) => state.ShowCon,
        stateShowDell: (state) => state.ShowDell,
        stateShowErr: (state) => state.ShowErr,
        stateDemoActive: (state) => state.active,
        stateAnalyticsCompany(state){
            return state.dataComp
        },
        stateAnalyticsAds (state) {
            return state.dataAds
        },
        stateAnalyticsKeywords (state) {
            return state.dataKeywords
        },
        stateActiveYandex(state){
            return state.active
        },
    },
    mutations:{
        changeStateShowCon(state){
            state.ShowCon = !state.ShowCon;
        },
        changeStateShowDell(state){
            state.ShowDell = !state.ShowDell;
        },
        changeStateShowErr(state){
            state.ShowErr = !state.ShowErr;
        },
        getAnalytics(state, data){
            state.dataComp = data;
        },
        getAdsAnalytics(state,data) {
            state.dataAds = data;
        },
        getKeywordsAnalytics(state,data) {
            state.dataKeywords = data;
        },
        stateActiveYandex(state){
            state.active = !state.active;
        }
    },

    actions: {
        ShowModelCon ({commit}) {
            commit('changeStateShowCon')
        },
        async continuePlug({commit}){
            try{
                commit('changeStateShowCon');
                commit('stateActiveYandex');

                const response = await axios.get(
                    config.appBackendURL + ':' + config.appBackendPort + '/api/campaigns'
                );
                console.log(response);
                commit('getAnalytics', response.data)
            }catch(err){
                console.log(err);
                commit('changeStateShowCon');
                commit('changeStateShowErr');
            }
         }
    },
    namespaced: true,
}
