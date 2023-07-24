<script>
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
        // homePage(){
        //     return this.$route.path == "/analytics";
        // }
    },

}
</script>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <aside>
        <img src="../assets/image/logo.svg" alt="Logo">
        <div class="menu">
            <!-- <h2 v-if="homePage">Аналитика</h2>
            <h2 v-else="homePage">Настройки</h2> -->
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
