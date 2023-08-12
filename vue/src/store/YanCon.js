import Cookies from 'js-cookie';
import axios from "axios";
import config from "../../vue.config.js";

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
            state.dataComp = [];
            state.dataAds = [];
            state.dataKeywords =[];
        },
    },
    actions: {
        async continuePlug({commit}){
            const token = JSON.parse(Cookies.get('XSRF-TOKEN'));
            try{
                const response =  await axios({
                    method:'GET',
                    url:config.appBackendURL+ ':' + config.appBackendPort +'/api/campaigns',
                    headers: {
                        'Authorization': `Bearer ${token.IsAuthorisation}`,
                    }
                },)
                console.log(response);
                const adsResponse = await axios({
                    method:'GET',
                    url:config.appBackendURL+ ':' + config.appBackendPort +'/api/ads',
                    headers: {
                        'Authorization': `Bearer ${token.IsAuthorisation}`,
                    }
                },)
                console.log(adsResponse);
                const keywordsResponse = await axios({
                    method:'GET',
                    url:config.appBackendURL+ ':' + config.appBackendPort +'/api/keywords',
                    headers: {
                        'Authorization': `Bearer ${token.IsAuthorisation}`,
                    }
                },)
                console.log(keywordsResponse);
                commit('getYandexAnalytics', response.data)
                commit('getAdsYandexAnalytics', adsResponse.data)
                commit('getKeywordsYandexAnalytics', keywordsResponse.data)
                commit('changeActiveYandex');
            }catch(err){
                console.log(err);
                commit('changeStateShowErr');
            }
            finally {
                commit('changeStateShowCon');
            }
         }
    },

}
