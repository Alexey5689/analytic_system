<template>
    <div v-if="state.errLog">
        <ErrLog/>
    </div>
    <div v-else class="container">
        <div class="card">
            <h1 class="card-header">Вход в РосМетрик</h1>
            <p>Рады вас видеть</p>
            <div class="card-body">
                <div class="ruls">
                    {{ state.response }}
                </div>
                <form class="general-block" @submit.prevent="AuthForm">
                    <div>
                        <small class="ruls" v-for="errors in v$.email.$errors ">{{ errors.$message }}</small>
                        <input
                            v-bind:title="state.emailMessage"
                            v-model.trim="state.email"
                            class="user-email"
                            type="email"
                            placeholder="E-mail*"/>
                    </div>
                    <div class="showPassword">
                        <small class="ruls" v-for="errors in v$.password.$errors ">{{ errors.$message }}</small>
                        <input
                            v-model.trim="state.password"
                            class="user-passw"
                            type="password"
                            placeholder="Пароль*"
                            v-show="showPass"/>
                        <input
                            v-model.trim="state.password"
                            class="user-passw"
                            type="text"
                            placeholder="Пароль*"
                            v-show="!showPass"/>
                        <div @click="showPass = !showPass" class="show open" :class="{hiden:!showPass}" ></div>
                    </div>
                    <button
                        type="submit"
                        class="buttonLog">Войти
                    </button>
                </form>
                <div class="bottom-block-register">
                    <p class="redir" @click="$router.push('/')">Зарегестрироваться</p>
                    <p class="redir" @click="$router.push('/reset-password')">Восстановить пароль</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="../components/compStyle/loginStyle.css" scoped>
</style>

<script>
import ErrLog from '../components/errorLogin.vue';
import { AuthValidForm } from '../hooks/Login.js';
export default {
    components:{
        ErrLog,
    },
    data(){
        return{
            showPass:true,
        }
    },
    setup(props){
        const {state, AuthForm, logOut, v$} = AuthValidForm();
        return{
            state,
            AuthForm,
            logOut,
            v$,
        }
    },
}
</script>
