<script>
    import { AnalyticStates } from '../hooks/Analytics.js';
    import { useDemo } from '../stores/DemoConnection';
    import { useYandex } from '../stores/YandexConnection.js'
    export default{
        setup(props){
            const {state, compInfo} = AnalyticStates();
            const demo = useDemo();
            const yandex = useYandex();
            return{
                state,
                compInfo,
                demo,
                yandex,
            }
        },
    }
</script>
<style src="../components/compStyle/main.css" scoped>
</style>
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
                        <img v-if="state.toggle" class="selection_list_2" src="../assets/image/selection_list.svg" alt="Selection list">
                        <img  v-else class="selection_list_1" src="../assets/image/selection_list.svg" alt="Selection list">
                        <img class="logo_analytics" src="../assets/image/logo_analytics.svg" alt="Logo analytics">
                        Яндекс.Директ
                    </td>
                    <td>14 743</td>
                    <td>1 098</td>
                    <td>2.8 &#8381</td>
                </tr>
            </table>
        </div>
        <div v-if="state.toggle" class="network">
            <h2>Сеть</h2>
            <table>
                <tr @click="state.networkSearch=!state.networkSearch" :class="{ 'advertising_company_active':state.networkSearch }">
                    <td>
                        <img v-if="!state.networkSearch" class="selection_list_1" src="../assets/image/selection_list.svg" alt="Selection list">
                        <img v-else class="selection_list_2" src="../assets/image/selection_list.svg" alt="Selection list">
                        Поиск
                    </td>
                    <td>7 442</td>
                    <td>244</td>
                    <td>1.5&#8381</td>
                </tr>
            </table>
                <transition name="fade">
                    <div v-if="state.networkSearch" class="company">
                        <h2>Поиск</h2>
                    </div>
                </transition>

            <table>
                <tr @click="state.networkRsya = !state.networkRsya" :class="{'advertising_company_active':state.networkRsya}">
                    <td>
                        <img v-if="!state.networkRsya" class="selection_list_1" src="../assets/image/selection_list.svg"
                            alt="Selection list">
                        <img v-else class="selection_list_2" src="../assets/image/selection_list.svg" alt="Selection list">
                        РСЯ
                    </td>
                    <td>7 301</td>
                    <td>854</td>
                    <td>1.3&#8381</td>
                </tr>
            </table>
            <transition name="fade">
                <Company
                    v-if="state.networkRsya"
                />
            </transition>
        </div>
    </article>
</template>
