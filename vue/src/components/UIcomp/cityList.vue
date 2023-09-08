<template>
    <div class="cityListWrapper">
        <div class="cityList" >
            <div
                v-for="city in cities.serchCity"
                :key="city.id"
                @click="cities.select(city)"
                class="city"
            >
                {{ city.name }}
            </div>
        </div>
    </div>


</template>

<script>
    import {useCityStore} from '../../stores/cities.js'
    export default{
        name:'cityList',
        setup(){
            const cities = useCityStore();
            return{
                cities,
            }
        },
    }


</script>
<style src="../compStyle/cityListStyle.css" scoped>
</style>
