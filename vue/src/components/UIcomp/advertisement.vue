<template>
    <div class="ads">
        <h2>Объявления</h2>
        <table
            v-for="ads in (yandex.stateActiveYandex?yandex.stateYandexAnalyticsAds:demo.stateDemoAnalyticsAds)"
            :key="ads.id"
            @click.stop="selectAds(ads)"
        >
            <div>
                <tr :class="{'advertising_company_active':state.guaranteeAds&&state.adsId===ads.id}">
                    <td>
                        <img v-if="state.guaranteeAds&&state.adsId===ads.id" class="selection_list_2" src="../../assets/image/selection_list.svg" alt="Selection list">
                        <img v-else class="selection_list_1" src="../../assets/image/selection_list.svg" alt="Selection list">
                            {{ ads.ad_name }}
                    </td>
                    <td>{{ ads.impressions }}</td>
                    <td>{{ ads.clicks }}</td>
                    <td>{{ ads.daily_budget }} &#8381</td>
                </tr>
            </div>
            <transition name="fade">
                <Keyword v-if="state.guaranteeAds&&state.adsId===ads.id"/>
            </transition>

        </table>
    </div>
</template>

<script>
    import { useDemo } from '../../stores/DemoConnection';
    import { AnalyticStates } from '../../hooks/Analytics.js';
    import { useYandex } from '../../stores/YandexConnection';
    export default{
        name:'Ads',
        setup(props){
            const demo = useDemo();
            const yandex = useYandex();
            const{state, selectAds} = AnalyticStates();
            return{
                state,
                selectAds,
                demo,
                yandex,
            }
        }
    }
</script>

<style src="../compStyle/main.css" scoped>

</style>
