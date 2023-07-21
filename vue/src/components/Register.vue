<template>

    <div v-if="state.isReg">
        <confReg/>
    </div>
    <div v-else  class="card">
        <h1 class="card-header">Регистрация в РосМетрик</h1>
        <div class="card-body">
            <form class="general-block" @submit.prevent="fetchForm">
                <div>
                    <div class="ruls">
                        {{ state.response.data.message }}
                    </div>
                    <small class="ruls" v-for="errors in v$.name.$errors ">{{ errors.$message }}</small>
                    <input
                        class="user-name"
                        type="text"
                        v-model.trim="state.name"
                        placeholder="ФИО"/></div>
                <div>
                    <small class="ruls" v-for="errors in v$.tel.$errors ">{{ errors.$message }}</small>
                    <input
                        v-model="state.tel"
                        v-bind:title="state.cellMessage"
                        class="user-num"
                        type="tel"
                        placeholder="Номер телефона*"/>
                </div>
                <div>
                    <small class="ruls" v-for="errors in v$.email.$errors ">{{ errors.$message }}</small>
                    <input
                        v-bind:title="state.emailMessage"
                        class="user-email"
                        type="email"
                        v-model="state.email"
                        placeholder="E-mail*"/>
                    </div>
                <div>
                    <small class="ruls" v-for="errors in v$.password.$errors ">{{ errors.$message }}</small>
                    <input
                        class="user-passw"
                        type="password"
                        v-model="state.password"
                        placeholder="Пароль*"/>
                </div>
                <div>
                    <small class="ruls" v-for="errors in v$.conf_password.$errors ">{{ errors.$message }}</small>
                    <input
                        class="user-passw"
                         type="password"
                        v-model="state.conf_password"
                        placeholder="Подтвеждение пароля*"/>
                </div>
                <div>
                    <input
                        v-model="state.searchTown"
                        class="user-reg"
                        type="text"
                        placeholder="Город"
                        />
                    <cityList
                        v-if="state.searchTown && this.srch"
                        :serchCity="serchCity"
                        @select="getCity"
                    />
                </div>

                <div>
                    <input
                        class="user-promo"
                        type="text"
                        placeholder="Промокод"/>
                </div>
            <small class="ruls" v-for="errors in v$.checked.$errors ">{{ errors.$message }}</small>
            <div class="consent-processing-PD">
                <input
                    v-model="state.checked"
                    type="checkbox"
                    class="scales"
                    name="scales"/>
                <label for="scales">Отправляя сведения через электронную форму вы соглашаетесь с условиями <span>оферты</span> и даете согласие на обработку персональных данных на условиях <span>Политики</span>.</label>
            </div>
            <button type="submit">Продолжить</button>
            </form>
        </div>
    </div>
</template>

<style src="../components/compStyle/registerStyle.css" scoped>
</style>

<script>
import confReg from '../components/confirmRegister.vue'
import { RegForm } from '../hooks/Registration.js';
import { mapState } from 'vuex';
export default {
    components:{
        confReg,
    },
    data(){
        return{
            srch:true,
        }
    },
    setup(props){
        const {state, fetchForm, v$, getCities} = RegForm();
        return{
            state,
            fetchForm,
            v$,
            getCities
        }
    },

    computed:{
        // ...mapState({
        //     Reg: state => state.Reg.IsRegistration,
        // }),
        serchCity() {
                return this.state.cities.filter(elem =>{return elem.name.toLowerCase().includes(this.state.searchTown.toLowerCase())
            })
        },

    },
    methods:{
        getCity(city){
            this.state.searchTown = city.name;
            console.log(city.id);
            this.state.cityId = city.id;
            this.srch = false
        },


    },
    created(){
        this.getCities()
    },


}
</script>


