import {defineStore} from 'pinia';
import axios from 'axios';
import config from '../../vue.config.js';
import {useToken} from '../stores/useToken.js';

export const useYandex = defineStore('Yandex',{
    state:()=>({
        YandexDataComp: [],
        YandexDataAds: [],
        YandexDataKeywords: [],
        YandexCon:false,
        YandexDell:false,
        YandexErr:false,
        YandexActive:false,
    }),
    getters:{
        stateYandexCon() {
           return this.YandexCon;
        },
        stateYandexDell(){
            return this.YandexDell;
        },
        stateYandexErr() {
            return this.YandexErr;
        },
        stateYandexActive(){
            return this.YandexActive;
        },
        stateYandexAnalyticsCompany(){
            return this.YandexDataComp;
        },
        stateYandexAnalyticsAds(){
            return this.YandexDataAds;
        },
        stateYandexAnalyticsKeywords() {
            return this.YandexDataKeywords;
        },
    },
    actions:{
        changeStateYandexCon(){
            this.YandexCon = !this.YandexCon;
        },
        changeStateYandexDell(){
            this.YandexDell = !this.YandexDell;
        },
        changeStateYandexErr(){
            this.YandexErr = !this.YandexErr;
        },
        getYandexCompAnalytics(data){
            this.YandexDataComp = data;
        },
        getAdsYandexAnalytics(data) {
            this.YandexDataAds = data;
        },
        getKeywordsYandexAnalytics(data) {
            this.YandexDataKeywords = data;
        },
        changeActiveYandex(){
            this.YandexActive = !this.YandexActive;
        },
        clearStateYandex(){
            this.YandexDataComp = [];
            this.YandexDataAds = [];
            this.YandexDataKeywords =[];
        },

        async continuePlug(){
            const token = useToken();
            try{
                const yandexCompResp =  await axios({
                    method:'GET',
                    url:config.appBackendURL+ ':' + config.appBackendPort +'/api/campaigns',
                    headers: {
                        'Authorization': `Bearer ${token.IsLogIn}`,
                    }
                },)
                console.log(yandexCompResp);
                this.getYandexCompAnalytics(yandexCompResp);

                const yandexAdsResp = await axios({
                    method:'GET',
                    url:config.appBackendURL+ ':' + config.appBackendPort +'/api/ads',
                    headers: {
                        'Authorization': `Bearer ${token.IsLogIn}`,
                    }
                },)
                console.log(yandexAdsResp);
                this.getAdsYandexAnalytics(yandexAdsResp);

                const YandexKeywordsResp = await axios({
                    method:'GET',
                    url:config.appBackendURL+ ':' + config.appBackendPort +'/api/keywords',
                    headers: {
                        'Authorization': `Bearer ${token.IsLogIn}`,
                    }
                },)
                console.log(YandexKeywordsResp);
                this.getKeywordsYandexAnalytics(YandexKeywordsResp)
                this.changeActiveYandex();
            }catch(err){
                console.log(err);
                this.changeStateYandexErr();
            }finally{
                this.changeStateYandexCon();
            }
        }

    }
})
