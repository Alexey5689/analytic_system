<script>
import { RouterLink } from 'vue-router';
export default {
    data(){
        return{
            homePage: this.$route.path
        }
    },
    methods: {
        changeHomePageAnnalytics() {
            this.homePage = "/main/";
        },
        changeHomePageSettings() {
            this.homePage = "/main/settings";
        },
    },

}
</script>

<template>
    <aside>
        <img src="../assets/image/logo.svg" alt="Logo">
        <div class="menu">
            <h2>{{ homePage === "/main/" ? 'Аналитика' : 'Настройки'}}</h2>
            <ul>
                <li>
                    <RouterLink @click="changeHomePageAnnalytics" :to="{name:'Analitics'}">
                        <img src="../assets/image/analytics.svg" alt="analytics">
                        Аналитика
                    </RouterLink>
                </li>
                <li>
                    <RouterLink @click="changeHomePageSettings" :to="{name:'Settings'}">
                        <img src="../assets/image/settings.svg" alt="settings">
                        Настройки
                    </RouterLink>
                </li>
            </ul>
        </div>
    </aside>
</template>
