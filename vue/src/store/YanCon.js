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
        stateActiveYandex: (state) => state.active,
        stateYandexAnalyticsCompany(state){
            return state.dataComp
        },
        stateYandexAnalyticsAds (state) {
            return state.dataAds
        },
        stateYandexAnalyticsKeywords(state) {
            return state.dataKeywords
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
        getYandexAnalytics(state, data){
            state.dataComp = data;

        },
        getAdsYandexAnalytics(state,data) {
            state.dataAds = data;
        },
        getKeywordsYandexAnalytics(state,data) {
            state.dataKeywords = data;
        },
        changeActiveYandex(state){
            state.active = !state.active;
        },
       clearStateYandex(state){
           console.log('asdf');
            state.dataComp = [];
            state.dataAds = [];
            state.dataKeywords =[];
        },
    },


    actions: {
        ShowModelCon ({commit}) {
            commit('changeStateShowCon')
        },

        ShowDell({commit}) {
            commit('changeStateShowDell');
        },
        async continuePlug({commit}){
            try{
                commit('changeStateShowCon');

                const response = await axios.get(
                    config.appBackendURL + ':' + config.appBackendPort + '/api/campaigns'
                );
                //console.log(response);
                const adsResponse = await axios.get(
                    config.appBackendURL + ':' + config.appBackendPort + '/api/ads'
                );
                //console.log(adsResponse);
                const keywordsResponse = await axios.get(
                    config.appBackendURL + ':' + config.appBackendPort + '/api/keywords'
                );
               // console.log(keywordsResponse);
                commit('getYandexAnalytics', response.data)
                commit('getAdsYandexAnalytics', adsResponse.data)
                commit('getKeywordsYandexAnalytics', keywordsResponse.data)
                commit('changeActiveYandex');
            }catch(err){
                console.log(err);
                commit('changeStateShowCon');
                commit('changeStateShowErr');
            }
            finally {
                // commit('changeStateShowCon');
            }
         }
    },

}
