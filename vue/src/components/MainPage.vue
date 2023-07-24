<template>
    <div class="wrapper">
        <div class="flex_column">
            <MenuSa />
            <div class="content">
                <HeaderSa />
                <Settings />
                <FooterSa />
            </div>
        </div>
    </div>
</template>

<style src="../components/compStyle/main.css" scoped>
</style>

<script setup>
    import MenuSa from './MenuSa.vue'
    import HeaderSa from './HeaderSa.vue'
    import FooterSa from './FooterSa.vue'
    import Settings from "./Settings.vue";
</script>



