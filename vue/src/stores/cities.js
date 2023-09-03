import {defineStore} from 'pinia';
import axios from 'axios';
import config from "../../vue.config.js";
export const useCityStore = defineStore('CityStore',{
    state:()=>({
        cityList:[],
        searchTown:"",
        id:"",
        optionVisible:true,
    }),
    getters:{
        getSerchTown(){
            return this.searchTown;
        },
        serchCity() {
            return this.cityList.filter(elem =>{return elem.name.toLowerCase().includes(this.searchTown.toLowerCase())
            })
        },
    },
    actions:{
        async citiesList(){
            try{
                const response = await axios.get( config.appBackendURL + ':' + config.appBackendPort +'/api/city')
                this.cityList = response.data;
            }catch(err){
                console.log(err);
                //ошибка запроса
                //state.response = err.response.data.message;
            }
        },
        select(city){
            this.searchTown = city.name;
            this.id = city.id;
            this.optionVisible = false;

        }
    }
})
