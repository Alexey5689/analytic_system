import config from "../../vue.config.js";
import axios from "axios";

export const DemoModWin = {
    state: () => ({
        demo: [],
        demoAds: [],
        demoKeywords: [],
        isDemoLoading: false,
        DemoCon: false,
        IsDemoDataCon: false,
        DemoDell: false,
        DemoErr: false,
        active: false,
    }),

    getters: {
        stateDemoCon: (state) => state.DemoCon,
        stateDemoDell: (state) => state.DemoDell,
        stateDemoErr: (state) => state.DemoErr,
        stateDemoDataCon: (state) => state.IsDemoDataCon,
        stateDemoActive: (state) => state.active,
        stateAnalyticsCompany(state){
            return state.demo
        },
        stateAnalyticsAds (state) {
            return state.demoAds
        },
        stateAnalyticsKeywords (state) {
            return state.demoKeywords
        }
    },
    mutations: {
        changeStateDemoCon(state) {
            state.DemoCon = !state.DemoCon;
        },
        changeStateDemoDell(state) {
            state.DemoDell = !state.DemoDell;
        },
        changeStateDemoErr(state) {
            state.DemoErr = !state.DemoErr;
        },
        changeStateDemoDataCon(state) {
            state.IsDemoDataCon = !state.IsDemoDataCon;
        },
        changeDemoActive(state) {
            state.active = !state.active;
        },
        getAnalytics(state, data) {
            state.demo = data;

        },
        getAdsAnalytics(state,data) {
            state.demoAds = data;
        },
        getKeywordsAnalytics(state,data) {
            state.demoKeywords = data;
        }
    },
    actions: {
        ShowDemoCon({ commit }) {
            commit('changeStateDemoCon');
        },
        ShowDemoDell({ commit }) {
            commit('changeStateDemoDell');
        },

        async continueFull({ commit }) {
            try {
                commit('changeStateDemoCon');
                commit('changeStateDemoDataCon');

                const response = await axios.get(
                    config.appBackendURL + ':' + config.appBackendPort + '/api/test_data_campaigns'
                );
                console.log(response);

                const adsResponse = await axios.get(
                    config.appBackendURL + ':' + config.appBackendPort + '/api/test_data_ads'
                );
                console.log(adsResponse);
                const keywordsResponse = await axios.get(
                    config.appBackendURL + ':' + config.appBackendPort + '/api/test_data_keywords'
                );
                console.log(keywordsResponse);
                commit('getAnalytics', response.data);
                commit('getAdsAnalytics', adsResponse.data);
                commit('getKeywordsAnalytics', keywordsResponse.data);

                // commit('changeStateShowCon');
                commit('changeDemoActive');
            } catch (err) {
                console.log(err);
                commit('changeStateShowCon');
                commit('changeStateShowErr');
            } finally {
                commit('changeStateDemoDataCon');
            }
        },
    },
    namespaced: true,
};
