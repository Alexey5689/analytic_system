import config from "../../vue.config.js";
import axios from "axios";

export const DemoModWin = {
    state: () => ({
        demo: [],
        demoAds: [],
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
        stateGetAds (state) {
            return state.demoAds
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
        }
    },
    actions: {
        ShowDemoCon({ commit }) {
            commit('changeStateDemoCon');
        },
        continueFulls({ commit }) {
            commit('changeStateDemoDataCon');
            commit('changeStateDemoCon');
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
                commit('getAnalytics', response.data);
                commit('getAdsAnalytics', adsResponse.data);

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
