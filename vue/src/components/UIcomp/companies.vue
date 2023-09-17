<template>
    <div class="company">
        <h2>Компания</h2>
        <table
            v-for="company in (yandex.stateActiveYandex?yandex.stateYandexAnalyticsCompany:demo.stateDemoAnalyticsCompany)"
            :key="company.id"
            @click.stop="selectComp(company)"
        >
            <div>
                <tr :class="{'advertising_company_active':state.company&&state.compId===company.id}">
                    <td>
                        <img v-if="state.company&&state.compId===company.id"
                            class="selection_list_2" src="../../assets/image/selection_list.svg"
                            alt="Selection list">
                        <img v-else class="selection_list_1" src="../../assets/image/selection_list.svg"
                            alt="Selection list">
                        {{ company.campaign_name }}
                    </td>
                    <td>{{ company.impressions }}</td>
                    <td>{{ company.clicks }}</td>
                    <td>{{ company.daily_budget }} &#8381</td>
                </tr>
            </div>
            <Ads
                v-if="state.company&&state.compId===company.id"
            />
        </table>
    </div>
</template>
<script>
    import { useDemo } from '../../stores/DemoConnection';
    import { AnalyticStates } from '../../hooks/Analytics.js';
    import { useYandex } from '../../stores/YandexConnection';
    export default{
        name:'Company',
        setup(props){
            const demo = useDemo();
            const yandex = useYandex();
            const{state, selectComp} = AnalyticStates();
            return{
                state,
                selectComp,
                demo,
                yandex,
            }
        }
    }
</script>

<style src="../compStyle/main.css" scoped>

</style>
