<template>
    <div class="wrapper">
        <teleport to="body">
            <YanCon/>
        </teleport>
        <teleport to="body">
            <YanDell/>
        </teleport>
        <teleport to="body">
            <YanErr/>
        </teleport>
        <teleport to="body">
            <DemoCon/>
        </teleport>
        <teleport to="body">
            <DemoErr/>
        </teleport>
        <teleport to="body">
            <DemoDel/>
        </teleport>
        <teleport to="body">
            <DemoDataCon/>
        </teleport>
        <teleport to="body">
            <LogOut/>
        </teleport>
        <div class="flex_column">
            <MenuSa />
            <div class="content">
                <HeaderSa/>
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



