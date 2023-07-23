<template>
    <div v-if="state.isRec" >
        <confRec/>
    </div>
    <div v-else class="card">
        <h1 class="card-header">Восстановление пароля</h1>
        <div class="ruls">
            {{ state.response }}
        </div>
        <p>На эту почту мы вышлем ссылку на восстановление пароля</p>
        <div class="card-body">

            <form class="general-block" @submit.prevent="Recovery">
                <div>
                    <small class="ruls" v-for="errors in v$.email.$errors ">{{ errors.$message }}</small>
                    <input
                        v-model.trim="state.email"
                        class="user-email"
                        type="email"
                        placeholder="E-mail*"/>
                </div>
                <button type="submit" class="button">Восстановить</button>
            </form>
            <div class="bottom-block-register">
                <p class="link" @click="$router.push('/registration')">Зарегестрироваться</p>
                <p class="link" @click="$router.push('/login')" >Войти</p>
            </div>
        </div>
    </div>
</template>

<style src="../components/compStyle/passRecovery.css" scoped>
</style>

<script>
    import { RecForm }  from '../hooks/PassRecovery.js';
    import confRec from '../components/confirmPassRecovery.vue'
    export default {
        components:{
                confRec
        },
        setup(props){
            const {state, Recovery, v$} = RecForm();
            return{
                v$,
                state,
                Recovery,
            }
        },
    }
</script>
