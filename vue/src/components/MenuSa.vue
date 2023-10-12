<script>

export default {
    methods: {
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
                <h2 v-if="homePage()">Аналитика</h2>
                <h2 v-else="!homePage()">Настройки</h2>
                    <ul>
                        <li>
                            <RouterLink :to="{name:'Analitics'}" >
                                <img v-if="homePage()" src="../assets/image/AnalActive.svg" alt="analytics">
                                <img v-else src="../assets/image/analytics.svg" alt="analytics">
                                Аналитика
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink  :to="{name:'Settings'}">
                                <img v-if="!homePage()" src="../assets/image/SettActive.svg" alt="analytics">
                                <img v-else src="../assets/image/settings.svg" alt="settings">
                                Настройки
                            </RouterLink>
                        </li>
                    </ul>
            </div>
    </aside>

</template>
