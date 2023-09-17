import { reactive } from 'vue';
export function AnalyticStates(){
    const state = reactive({
        toggle: false,
        networkSearch: false,
        networkRsya: false,
        company: false,
        storageAds: false,
        guaranteeAds: false,
        compId:'',
        adsId:'',
    })
    function selectComp(company){
        state.company = !state.company;
        state.compId = company.id;
    }
    function selectAds(ads){
        state.guaranteeAds = !state.guaranteeAds;
        state.adsId = ads.id;
    }
    return{state, selectComp, selectAds}
}
