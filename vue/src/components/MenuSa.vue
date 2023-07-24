<script>
export default {
    methods: {
        homePage() {
            return this.$route.path == "/analytics";
        }
    }
}
</script>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <aside>
        <img src="../assets/image/logo.svg" alt="Logo">
        <div class="menu">
            <h2 v-if="homePage()">Аналитика</h2>
            <h2 v-else="homePage()">Настройки</h2>
            <ul>
                <li>
                    <RouterLink to="/">
                        <img src="../assets/image/analytics.svg" alt="analytics">
                        Аналитика
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/settings">
                        <img src="../assets/image/settings.svg" alt="settings">
                        Настройки
                    </RouterLink>
                </li>
            </ul>
        </div>
    </aside>
</template>
