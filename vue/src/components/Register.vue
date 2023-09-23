<template>
    <!-- смена содерж компонента при положительной регистрации -->
    <div v-if="state.isReg">
        <confReg/>
    </div>
    <div v-else class="container">
        <div class="card">
        <h1 class="card-header">Регистрация в РосМетрик</h1>
        <div class="card-body">
            <form class="general-block" @submit.prevent="fetchForm">
                <div>
                    <div class="ruls">
                        {{ state.response }}
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
                <div class="showPassword">
                    <small class="ruls" v-for="errors in v$.password.$errors ">{{ errors.$message }}</small>
                    <input
                        class="user-passw"
                        type="password"
                        v-model.trim="state.password"
                        placeholder="Пароль*"
                        v-show="showPass"
                    />
                    <input
                        class="user-passw"
                        type="text"
                        v-model.trim="state.password"
                        placeholder="Пароль*"
                        v-show="!showPass"
                    />
                    <div @click="showPass = !showPass" class="show open" :class="{hiden:!showPass}" ></div>
                </div>
                <div>
                    <small class="ruls" v-for="errors in v$.conf_password.$errors ">{{ errors.$message }}</small>
                    <input
                        class="user-passw"
                         type="password"
                        v-model="state.conf_password"
                        placeholder="Подтвеждение пароля*"/>
                </div>
                <div class="compasImg">
                    <div class="compas"></div>
                    <input
                        v-model="cities.searchTown"
                        class="user-reg"
                        type="text"
                        autocomplete="off"
                        placeholder="Город"
                        @click="cities.optionVisible = true"
                    />
                    <cityList
                        v-if="cities.searchTown && cities.optionVisible"
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
            <button
                type="submit">Продолжить
            </button>
            </form>
            <p class="redirToLogin" @click="$router.push('/login')">Уже зарегистрировались?</p>
        </div>
        </div>

    </div>
</template>

<style src="../components/compStyle/registerStyle.css" scoped>
</style>

<script>
import {  useCityStore } from '../stores/cities.js';
import confReg from '../components/confirmRegister.vue' //импорт компонента
import { RegForm } from '../hooks/Registration.js'; //импорт из composition API
export default {
    //обЬявление. импортированный компонент
    components:{
        confReg,
    },

    //импорт из composition API: состояния, функции, валидация
    setup(props){
        const cities =  useCityStore();
        const {state, fetchForm, v$ } = RegForm();
        return{
            state,
            fetchForm,
            v$,
            cities,
        }
    },
    data(){
        return{
            showPass:true,

        }
    },
    created(){
        //блочит вызов фукции в других компонентах
        if(!this.state.isReg){
            this.cities.citiesList();
        }
    },




}
</script>


