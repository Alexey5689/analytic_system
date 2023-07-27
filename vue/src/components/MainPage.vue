<template>
    <div class="wrapper">
        <div class="flex_column">
            <MenuSa />
            <div class="content">
                <HeaderSa />
                <router-view></router-view>
                <FooterSa />
            </div>
        </div>
    </div>
</template>

<style src="../components/compStyle/main.css" scoped>
</style>

<script setup>
    import MenuSa from './MenuSa.vue'
    import HeaderSa from './headersa.vue'
    import FooterSa from './FooterSa.vue'
</script>



