<template>
    <div class="cityList" >
        <div
            v-for="city in serchCity"
            :key="city.id"
            @click="select(city)"
            class="city"
        >
            {{ city.name }}
        </div>


    </div>

</template>

<script>
    import { RegForm } from '../../hooks/Registration.js';
    export default{
        name:'cityList',
        props:{
            serchCity:{
                type:Array,
                default: () => [],
            },
        },
        methods:{
            select(city){
                this.$emit('select', city);
            },
        }
    }


</script>
<style src="../compStyle/cityListStyle.css" scoped>
</style>
