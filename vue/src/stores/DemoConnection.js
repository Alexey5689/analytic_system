import {defineStore} from 'pinia';
import axios from 'axios';
import config from '../../vue.config.js';
import {useToken} from './useToken.js';

export const useDemo = defineStore('Demo',{
    state:()=>({
        demoComp: [],
        demoAds: [],
        demoKeywords: [],
        isDemoLoading: false,
        DemoCon: false,
        IsDemoDataCon: false,
        DemoDell: false,
        DemoErr: false,
        DemoModal: false,
        DemoActive: false,
    }),
    getters:{
        stateDemoModal(){
            return this.DemoModal;
        },
        stateDemoCon() {
            return this.DemoCon;
        },
        stateDemoDell(){
            return this.DemoDell;
        },
        stateDemoErr(){
            return this.DemoErr;
        },
        stateDemoDataCon(){
            return this.IsDemoDataCon;
        },
        stateDemoActive(){
            return this.DemoActive;
        },
        stateDemoAnalyticsCompany(){
            return this.demoComp;
        },
        stateDemoAnalyticsAds () {
            return this.demoAds;
        },
        stateDemoAnalyticsKeywords() {
            return this.demoKeywords;
        }

    },
    actions:{
        changeStateDemoModal() {
            this.DemoModal = !this.DemoModal;
        },
        changeStateDemoCon() {
            this.DemoCon = !this.DemoCon;
        },
        changeStateDemoDell() {
            this.DemoDell = !this.DemoDell;
        },
        changeStateDemoErr() {
            this.DemoErr = !this.DemoErr;
        },
        changeStateDemoDataCon() {
            this.IsDemoDataCon = !this.IsDemoDataCon;
        },
        changeDemoActive() {
            this.DemoActive = !this.DemoActive;
        },
        getDemoCompAnalytics(data) {
            this.demoComp = data;
        },
        getDemoAdsAnalytics(data) {
            this.demoAds = data;
        },
        getDemoKeywordsAnalytics(data) {
            this.demoKeywords = data;
        },
        clearDemo(){
            this.demoComp = [];
            this.demoAds = [];
            this.demoKeywords = [];
        },

        async continueFull(){
            const token = useToken();
            try{
                this.changeStateDemoDataCon();
                this.changeStateDemoCon();
                const demoCompaingsResp = await axios({
                    method:'GET',
                    url:config.appBackendURL+ ':' + config.appBackendPort +'/api/test_data_campaigns',
                    headers: {
                        'Authorization': `Bearer ${token.IsLogIn}`,
                    }
                },)
                console.log(demoCompaingsResp);
                this.getDemoCompAnalytics(demoCompaingsResp);
                const demoAdsResp = await axios({
                    method:'GET',
                    url:config.appBackendURL+ ':' + config.appBackendPort +'/api/test_data_ads',
                    headers: {
                        'Authorization': `Bearer ${token.IsLogIn}`,
                    }
                },)
                console.log(demoAdsResp);
                this.getDemoAdsAnalytics(demoAdsResp);
                const demoKeywordsResp = await axios({
                    method:'GET',
                    url:config.appBackendURL+ ':' + config.appBackendPort +'/api/test_data_keywords',
                    headers: {
                        'Authorization': `Bearer ${token.IsLogIn}`,
                    }
                },)
                console.log(demoKeywordsResp);
                this.getDemoKeywordsAnalytics(demoKeywordsResp);
                this.changeDemoActive();
            }catch(err){
                this.changeStateDemoErr();
            }finally{
                this.changeStateDemoDataCon();
            }
        }

    }
})
