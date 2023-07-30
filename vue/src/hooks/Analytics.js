import { reactive } from 'vue';

export function AnalyticStates(){
    const state = reactive({
        toggle: true,
        networkSearch: true,
        networkRsya: true,
        company: true,
        storageAds: true,
        guaranteeAds: true,
    })
    return{state}
}
