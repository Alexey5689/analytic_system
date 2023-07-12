<template>

    <div v-if="IsRegistration || state.isReg">
        <confReg/>
    </div>

    <div v-else class="card">
        <h1 class="card-header">Регистрация в РосМетрик</h1>
        <div class="card-body">
            <form class="general-block" @submit.prevent="fetchForm">
                <div>
                    <div class="ruls">
                        {{ state.response.data}}
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
                        class="user-reg"
                        type="text"
                        placeholder="Регион"/>
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
        confReg
    },
    setup(props){
        const {state, fetchForm, v$} = RegForm();
        return{
            state,
            fetchForm,
            v$
        }
    },
    computed:{
        ...mapState({
            IsRegistration: state => state.Reg.IsRegistration,
        }),
    },


}
</script>


