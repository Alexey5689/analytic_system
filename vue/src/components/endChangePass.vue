<template>
    <div class="card">
        <h1 class="card-header">Смените пароль</h1>
        <div class="ruls">
            {{ state.response }}
        </div>
        <div class="card-body">
            <form class="general-block" @submit.prevent="ChangeSubmit(this.$route.params.token )">
                <div><input class="user-passw" v-model="state.password" type="password" placeholder="Новый пароль*"/></div>
                <div><input class="user-passw" v-model="state.password_confirm" type="password" placeholder="Подтверждение пароля*"/></div>
                <button type="submit" class="button">Поменять пароль</button>
            </form>
        </div>
    </div>
</template>

<style src="../components/compStyle/endChangePass.css" scoped>
</style>

<script>
import {endChangePass} from '../hooks/endChangePass.js';
export default {
    setup(props){
        const {state, ChangeSubmit} = endChangePass();
        return{
            state,
            ChangeSubmit,
        }
    },
}
</script>
