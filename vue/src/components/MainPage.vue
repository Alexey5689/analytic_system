<template>

    <div class="wrapper">
        <YanCon
            v-model:showCon="stateShowCon"
        />
        <YanDell
            v-model:showDell="stateShowDell"
        />
        <YanErr
            v-model:showErr="stateShowErr"
        />
        <DemoCon
            v-model:DemoCon="stateDemoCon"
        />
        <DemoErr
            v-model:DemoErr="stateDemoErr"
        />
        <DemoDel
            v-model:DemoDell="stateDemoDell"
        />
        <DemoDataCon
            v-model:DemoDataCon="stateDemoDataCon"
        />
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
    import { mapGetters, mapState } from 'vuex';
    export default{
        components:{
            MenuSa,
            HeaderSa,
            FooterSa
        },
        computed:{
            ...mapState({
                showCon:state => state.showCon,
                showDell:state => state.showDell,
                showErr:state => state.showErr,
                DemoCon:state=> state.DemoCon,
                DemoDataCon:state=> state.DemoDataCon,
                DemoDell:state=> state.DemoDell,
                DemoErr:state=> state.DemoErr,
            }),
            ...mapGetters({
                stateShowCon:'stateShowCon',
                stateShowDell:'stateShowDell',
                stateShowErr:'stateShowErr',
                stateDemoCon:'stateDemoCon',
                stateDemoErr:'stateDemoErr',
                stateDemoDell:'stateDemoDell',
                stateDemoDataCon:'stateDemoDataCon',
            })
        },

    }
</script>



