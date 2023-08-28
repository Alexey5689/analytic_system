<template>
    <div class="container">
    <div class="card">
        <h1 class="card-header">Смените пароль</h1>
        <div class="ruls">
            {{ state.response }}
        </div>
        <div class="card-body">
            <form class="general-block" @submit.prevent="ChangeSubmit">
                <small class="ruls" v-for="errors in v$.password.$errors ">{{ errors.$message }}</small>
                <div class="showPassword">
                    <input class="user-passw" v-model="state.password" type="password" placeholder="Новый пароль*" v-show="showPass"/>
                    <input class="user-passw" v-model="state.password" type="text" placeholder="Новый пароль*" v-show="!showPass"/>
                    <div @click="showPass = !showPass" class="show open" :class="{hiden:!showPass}" ></div>
                </div>
                <small class="ruls" v-for="errors in v$.password_confirm.$errors ">{{ errors.$message }}</small>
                <div><input class="user-passw" v-model="state.password_confirm" type="password" placeholder="Подтверждение пароля*"/></div>
                <button type="submit" class="button">Поменять пароль</button>
            </form>
        </div>
    </div>
    </div>
</template>

<style src="../components/compStyle/endChangePass.css" scoped>
</style>

<script>
import {endChangePass} from '../hooks/endChangePass.js';
export default {
    setup(props){
        const {state, ChangeSubmit, GetEmail, v$} = endChangePass();
        return{
            state,
            ChangeSubmit,
            GetEmail,
            v$
        }
    },
    data(){
        return{
            showPass:true,
        }
    },

    created(){
        this.GetEmail(this.$route.params.token)
    }

}
</script>
