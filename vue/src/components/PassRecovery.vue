<template>
    <div v-if="state.isRec" >
        <confRec/>
    </div>

    <div v-else class="card">
        <h1 class="card-header">Восстановление пароля</h1>
        <p>На эту почту мы вышлем ссылку на восстановление пароля</p>
        <div class="card-body">
            <form class="general-block" @submit.prevent="Recovery">
                <div><input class="user-email" type="email" v-model="state.email" placeholder="E-mail*"/></div>
                <button type="submit" class="button">Восстановить</button>
            </form>
            <div class="bottom-block-register">
                <p @click="$router.push('/registration')">Зарегестрироваться</p>
                <p @click="$router.push('/login')">Войти</p>
            </div>
        </div>
    </div>
</template>

<style src="../components/compStyle/passRecovery.css" scoped>
</style>

<script>


import {RecForm}  from '../hooks/PassRecovery.js';
import confRec from '../components/confirmPassRecovery.vue'

export default {
    components:{
            confRec
        },

    setup(props){
        const {state, Recovery} = RecForm();
        return{
            state,
            Recovery,

        }
    },
}
</script>
