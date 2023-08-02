<template>

    <div class="wrapper">
        <YanCon/>
        <YanDell/>
        <YanErr/>
        <DemoCon/>
        <DemoErr/>
        <DemoDel/>
        <DemoDataCon/>
        <LogOut/>
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

<script>
    import MenuSa from './MenuSa.vue';
    import HeaderSa from './HeaderSa.vue';
    import FooterSa from './FooterSa.vue';
    export default{
        components:{
            MenuSa,
            HeaderSa,
            FooterSa
        },


    }
</script>



