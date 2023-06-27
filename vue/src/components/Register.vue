<template>
    <div v-if="state.isReg" >
        {{ state.response.data.message}}
    </div>
    <div v-else class="card">
        <h1 class="card-header">Регистрация в РосМетрик</h1>
        <div class="card-body">
            <form class="general-block" @submit.prevent="fetchForm">
                <div><input class="user-name" type="text" placeholder="ФИО"/></div>
                <div><input class="user-num" type="tel" placeholder="Номер телефона*"/></div>
                <div><input class="user-email" type="email" v-model="state.email" placeholder="E-mail*"/></div>
                <div><input class="user-passw" type="password" v-model="state.password" placeholder="Пароль*"/></div>
<!--                проверка пароля, изменить-->
                <div><input class="user-passw" type="password" v-model="state.password" placeholder="Подтвеждение пароля*"/></div>
                <div><input class="user-reg" type="text" placeholder="Регион"/></div>
                <div><input class="user-promo" type="text" placeholder="Промокод"/></div>
            </form>
            <div class="consent-processing-PD">
                <input type="checkbox" class="scales" name="scales"/>
                <label for="scales">Отправляя сведения через электронную форму вы соглашаетесь с условиями <span>оферты</span> и даете согласие на обработку персональных данных на условиях <span>Политики</span>.</label>
            </div>
            <button type="submit">Продолжить</button>
        </div>
    </div>
</template>

<style src="../components/compStyle/registerStyle.css" scoped>
</style>

<script>
import {RegTest} from '../hooks/Registration.js';
export default {
    setup(props){
        const {state,fetchForm} = RegTest();
        return{
            state,
            fetchForm
        }
    },
}
</script>


