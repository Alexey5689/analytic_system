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
    import { mapGetters } from 'vuex';
    export default{
        components:{
            MenuSa,
            HeaderSa,
            FooterSa
        },
        computed:{
            ...mapGetters({
                stateShowCon:'stateShowCon',
                stateShowDell:'stateShowDell',
                stateShowErr:'stateShowErr',
                stateDemoCon:'stateDemoCon',
            })
        },

    }
</script>



