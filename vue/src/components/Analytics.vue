<script>

    import { AnalyticStates } from '../hooks/Analytics.js';
    import { mapGetters } from 'vuex';
    export default{
        setup(props){
            const {state} = AnalyticStates();
            return{
                state,
            }
        },
        computed:{
            ...mapGetters('DemoModWin',{
                stateAnalyticsCompany:'stateAnalyticsCompany',
                stateGetAds:'stateGetAds'
            })
        }
    }

</script>
<style src="../components/compStyle/main.css" scoped></style>

<template>
    <article>
        <ul class="filter">
            <li>
                <img src="../assets/image/calendar.svg" alt="Calendar">
                1 июня - 15 июня 2023
            </li>
            <li>
                <span>Сегодня</span><span>Вчера</span><span>7 дней</span><span>30 дней</span><span>Месяц</span>
            </li>
            <li>
                Настроить столбцы
                <img src="../assets/image/columns.svg" alt="columns">
            </li>
            <li>
                Скачать .xlsx отчет
                <img src="../assets/image/download.svg" alt="download">
            </li>
        </ul>

        <div class="advertising_company">
            <table>
                <thead>
                    <tr>
                        <th>Название канала</th>
                        <th>Показы</th>
                        <th>Клики</th>
                        <th>Бюджет</th>
                    </tr>
                </thead>
                <tr>
                    <td @click="state.toggle = !state.toggle">
                        <img v-if="state.toggle" class="selection_list_1" src="../assets/image/selection_list.svg"
                            alt="Selection list">
                        <img v-else class="selection_list_2" src="../assets/image/selection_list.svg" alt="Selection list">
                        <img class="logo_analytics" src="../assets/image/logo_analytics.svg" alt="Logo analytics">
                        Яндекс.Директ
                    </td>
                    <td>14 743</td>
                    <td>1 098</td>
                    <td>2.8 &#8381</td>
                </tr>
            </table>
        </div>

        <div v-if="!state.toggle" class="network">
            <h2>Сеть</h2>
            <table>
                <tr>
                    <td>
                        <img v-if="state.networkSearch" class="selection_list_1" src="../assets/image/selection_list.svg"
                            alt="Selection list">
                        <img v-else class="selection_list_2" src="../assets/image/selection_list.svg" alt="Selection list">
                        Поиск
                    </td>
                    <td>7 442</td>
                    <td>244</td>
                    <td>1.5&#8381</td>
                </tr>
                <tr @click="state.networkRsya = !state.networkRsya" :class="{ 'advertising_company_active': !state.networkRsya }">
                    <td>
                        <img v-if="state.networkRsya" class="selection_list_1" src="../assets/image/selection_list.svg"
                            alt="Selection list">
                        <img v-else class="selection_list_2" src="../assets/image/selection_list.svg" alt="Selection list">
                        РСЯ
                    </td>
                    <td>7 301</td>
                    <td>854</td>
                    <td>1.3&#8381</td>
                </tr>
            </table>
        </div>

        <template v-if="!state.toggle">
            <div v-if="!state.networkRsya" class="company">
                <h2>Компания</h2>
                <table v-for="company in stateAnalyticsCompany">
                    <tr @click="state.company = !state.company" :class="{ 'advertising_company_active': !state.company }">
                        <td>
                            <img v-if="state.company" class="selection_list_1" src="../assets/image/selection_list.svg"
                                alt="Selection list">
                            <img v-else class="selection_list_2" src="../assets/image/selection_list.svg"
                                alt="Selection list">
                            {{ company.campaign_name }}
                        </td>
                        <td>{{ company.impressions }}</td>
                        <td>{{ company.clicks }}</td>
                        <td>{{ company.daily_budget }} &#8381</td>
                    </tr>
                </table>
            </div>

            <template v-if="!state.networkRsya">
                <div v-if="!state.company" class="ads">
                    <h2>Объявления</h2>
                    <table v-for="ads in stateGetAds">
                        <tr @click="state.guaranteeAds = !state.guaranteeAds" :class="{ 'advertising_company_active': !state.guaranteeAds }">
                            <td>
                                <img v-if="state.guaranteeAds" class="selection_list_1" src="../assets/image/selection_list.svg"
                                    alt="Selection list">
                                <img v-else class="selection_list_2" src="../assets/image/selection_list.svg"
                                    alt="Selection list">
                                {{ ads.ad_name }}
                            </td>
                            <td>{{ ads.impressions }}</td>
                            <td>{{ ads.clicks }}</td>
                            <td>{{ ads.daily_budget }} &#8381</td>
                        </tr>
                    </table>
                </div>

                <template v-if="!state.company">

                    <div v-if="!state.guaranteeAds" class="keyword">
                        <h2>Ключевое слово</h2>
                        <table>
                            <tr>
                                <td>
                                    Ёмкость для хранения продуктов
                                </td>
                                <td>580</td>
                                <td>42</td>
                                <td>0.2&#8381</td>
                            </tr>
                            <tr>
                                <td>
                                    Удобное хранение продуктов
                                </td>
                                <td>4 352</td>
                                <td>138</td>
                                <td>0.7&#8381</td>
                            </tr>
                        </table>
                    </div>

                </template>

            </template>

        </template>


    </article>
</template>
