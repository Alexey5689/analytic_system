<script>
import { RouterLink } from 'vue-router';
export default {
    // data(){
    //     return{
    //         homePage: this.$route.path,
    //         flag:Boolean,
    //     }
    // },
    methods: {
        // changeHomePageAnnalytics() {
        //     this.homePage = "/main/";
        // },
        // changeHomePageSettings() {
        //     this.homePage = "/main/settings";
        // },
        homePage() {
            if (this.$route.path == "/main/") {

                return true;
            } else {

                return false;
            }
        }
    },
}
</script>

<template>
    <aside>
        <img src="../assets/image/logo.svg" alt="Logo">
        <div class="menu">
           <!-- <h2>{{ homePage === "/main/" ? 'Аналитика' : 'Настройки'}}</h2> -->
            <h2 v-if="homePage()">Аналитика</h2>
            <h2 v-else="homePage()">Настройки</h2>
            <ul>
                <li>
                    <RouterLink :to="{name:'Analitics'}" >
                        <img src="../assets/image/analytics.svg" alt="analytics">
                        Аналитика
                    </RouterLink>
                </li>
                <li>
                    <RouterLink  :to="{name:'Settings'}">
                        <img src="../assets/image/settings.svg" alt="settings">
                        Настройки
                    </RouterLink>
                </li>
            </ul>
        </div>
    </aside>
</template>
