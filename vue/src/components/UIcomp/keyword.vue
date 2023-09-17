<template>
    <div class="keyword">
        <h2>Ключевое слово</h2>
        <table v-for="keyword in (yandex.stateActiveYandex?yandex.stateYandexAnalyticsKeywords:demo.stateDemoAnalyticsKeywords)">
            <tr>
                <td>
                    {{ keyword.keyword_name }}
                </td>
                <td>{{ keyword.impressions }}</td>
                <td>{{ keyword.clicks }}</td>
                <td>{{ keyword.daily_budget }} &#8381</td>
            </tr>
        </table>
</div>
</template>

<script>
import { useDemo } from '../../stores/DemoConnection';
import { useYandex } from '../../stores/YandexConnection';
export default{
    name:'Keyword',
    setup(){
            const demo = useDemo();
            const yandex = useYandex();
            return{
                demo,
                yandex,
            }
        }
}

</script>
<style src="../compStyle/main.css" scoped>
</style>
