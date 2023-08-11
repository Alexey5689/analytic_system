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
        DemoModal: false,
        active: false,
    }),

    getters: {
        stateDemoModal: (state) => state.DemoModal,
        stateDemoCon: (state) => state.DemoCon,
        stateDemoDell: (state) => state.DemoDell,
        stateDemoErr: (state) => state.DemoErr,
        stateDemoDataCon: (state) => state.IsDemoDataCon,
        stateDemoActive: (state) => state.active,
        stateDemoAnalyticsCompany(state){
            return state.demo
        },
        stateDemoAnalyticsAds (state) {
            return state.demoAds
        },
        stateDemoAnalyticsKeywords (state) {
            return state.demoKeywords
        }
    },
    mutations: {
        changeStateDemoModal(state) {
            state.DemoModal = !state.DemoModal;
        },
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
        getDemoAnalytics(state, data) {
            state.demo = data;
        },
        getDemoAdsAnalytics(state,data) {
            state.demoAds = data;
        },
        getDemoKeywordsAnalytics(state,data) {
            state.demoKeywords = data;
        },
        clearDemo(state){
            state.demo = [];
            state.demoAds = [];
            state.demoKeywords = [];
        }
    },
    actions: {

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
                commit('getDemoAnalytics', response.data);
                commit('getDemoAdsAnalytics', adsResponse.data);
                commit('getDemoKeywordsAnalytics', keywordsResponse.data);

                // commit('changeStateShowCon');
                commit('changeDemoActive');
            } catch (err) {
                console.log(err);
                commit('changeStateDemoErr')
            } finally {
                commit('changeStateDemoDataCon');
            }
        },
    },

};
