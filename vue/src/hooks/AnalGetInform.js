import { reactive } from 'vue';
import axios from 'axios';
import config from "../../vue.config.js";


export function AnalyticsInfo(){
    const state = reactive({
        toggle: true,
        networkSearch: true,
        networkRsya: true,
        company: true,
        storageAds: true,
        guaranteeAds: true,
    })
    async function GetInfo(){
        try{
            const response = await axios({
                method:'GET',
                    url:config.appBackendURL + ':' + config.appBackendPort + '/api/format_campaigns_data',
            })
            console.log(response);
        }catch(err){
            console.log(err);
        }
    }
    return{state, GetInfo}
}
