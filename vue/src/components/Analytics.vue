<script setup>
    import { ref, onMounted } from 'vue';
    const response = ref('')
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
    onMounted(() => {
        GetInfo()
    })

    const toggle = ref(true),
        networkSearch = ref(true),
        networkRsya = ref(true),
        company = ref(true),
        storageAds = ref(true),
        guaranteeAds = ref(true)

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
                        <th>Визиты</th>
                        <th>Заявки</th>
                        <th>Конверсия в заявки, %</th>
                    </tr>
                </thead>
                <tr>
                    <td @click="toggle = !toggle">
                        <img v-if="toggle" class="selection_list_1" src="../assets/image/selection_list.svg"
                            alt="Selection list">
                        <img v-else class="selection_list_2" src="../assets/image/selection_list.svg" alt="Selection list">
                        <img class="logo_analytics" src="../assets/image/logo_analytics.svg" alt="Logo analytics">
                        Яндекс.Директ
                    </td>
                    <td>14 743</td>
                    <td>1 098</td>
                    <td>2.8 %</td>
                </tr>
            </table>
        </div>

        <div v-if="!toggle" class="network">
            <h2>Сеть</h2>
            <table>
                <tr>
                    <td>
                        <img v-if="networkSearch" class="selection_list_1" src="../assets/image/selection_list.svg"
                            alt="Selection list">
                        <img v-else class="selection_list_2" src="../assets/image/selection_list.svg" alt="Selection list">
                        Поиск
                    </td>
                    <td>7 442</td>
                    <td>244</td>
                    <td>1.5%</td>
                </tr>
                <tr @click="networkRsya = !networkRsya" :class="{ 'advertising_company_active': !networkRsya }">
                    <td>
                        <img v-if="networkRsya" class="selection_list_1" src="../assets/image/selection_list.svg"
                            alt="Selection list">
                        <img v-else class="selection_list_2" src="../assets/image/selection_list.svg" alt="Selection list">
                        РСЯ
                    </td>
                    <td>7 301</td>
                    <td>854</td>
                    <td>1.3%</td>
                </tr>
            </table>
        </div>

        <template v-if="!toggle">

            <div v-if="!networkRsya" class="company">
                <h2>Компания</h2>
                <table>
                    <tr @click="company = !company" :class="{ 'advertising_company_active': !company }">
                        <td>
                            <img v-if="company" class="selection_list_1" src="../assets/image/selection_list.svg"
                                alt="Selection list">
                            <img v-else class="selection_list_2" src="../assets/image/selection_list.svg"
                                alt="Selection list">
                            <!-- Поиск | Кухня | Хранение -->
                            {{  }}
                        </td>
                        <td>7 442</td>
                        <td>244</td>
                        <td>1.3%</td>
                    </tr>
                </table>
            </div>

            <template v-if="!networkRsya">

                <div v-if="!company" class="ads">
                    <h2>Объявления</h2>
                    <table>
                        <tr>
                            <td>
                                <img v-if="storageAds" class="selection_list_1" src="../assets/image/selection_list.svg"
                                    alt="Selection list">
                                <img v-else class="selection_list_2" src="../assets/image/selection_list.svg"
                                    alt="Selection list">
                                Хранение продуктов
                            </td>
                            <td>4 932</td>
                            <td>180</td>
                            <td>0.9%</td>
                        </tr>
                        <tr @click="guaranteeAds = !guaranteeAds" :class="{ 'advertising_company_active': !guaranteeAds }">
                            <td>
                                <img v-if="guaranteeAds" class="selection_list_1" src="../assets/image/selection_list.svg"
                                    alt="Selection list">
                                <img v-else class="selection_list_2" src="../assets/image/selection_list.svg"
                                    alt="Selection list">
                                Гарантия и под. услуги
                            </td>
                            <td>2 510</td>
                            <td>61</td>
                            <td>0.2%</td>
                        </tr>
                    </table>
                </div>

                <template v-if="!company">

                    <div v-if="!guaranteeAds" class="keyword">
                        <h2>Ключевое слово</h2>
                        <table>
                            <tr>
                                <td>
                                    Ёмкость для хранения продуктов
                                </td>
                                <td>580</td>
                                <td>42</td>
                                <td>0.2%</td>
                            </tr>
                            <tr>
                                <td>
                                    Удобное хранение продуктов
                                </td>
                                <td>4 352</td>
                                <td>138</td>
                                <td>0.7%</td>
                            </tr>
                        </table>
                    </div>

                </template>

            </template>

        </template>


    </article>
</template>
