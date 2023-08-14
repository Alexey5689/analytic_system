<template>
    <div class="container">
    <div class="card">
        <h1 class="card-header">Подтверждение регистрации</h1>
        <div class="ruls">
            {{ state.response }}
        </div>
        <h3>Спасибо за регистрацию!</h3>
        <div class="card-body">
            <p class="main-text">На вашу почту <span>{{ mail }}</span>  была отправлена ссылка подтверждения регистрации. Перейдите по ссылке в письме для подтверждения</p>
            <div class="bottom-block-register">
                <p>Не пришло письмо?</p>
                <p v-if="seconds>0" class=" ">Отправить повторно</p>
                <p v-else class="resend-p" @click="repeatRequestRegisterEailAgain" >Отправить повторно</p>
            </div>
            <p class="time">{{minuts<1?'00':'0'+minuts}}:{{minuts===1?'00':seconds<10?'0'+seconds:seconds}}</p>
        </div>
    </div>
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex';
    import {  RepeatRequest } from '../hooks/repeatedRequest.js';
    export default{
        data(){
            return{
                mail:localStorage.getItem('repeatEmail')
            }
        },
        setup(props){

            const { repeatRequest, state, repeatRequestRegisterEailAgain } = RepeatRequest()
            return {
                repeatRequest,
                state,
                repeatRequestRegisterEailAgain
            }
        },
        computed: {
            ...mapState({
                minuts: state => state.minuts,
                seconds: state => state.seconds,
            }),
        },
        methods:{
            ...mapActions({
                changeTimeAsync: "changeTimeAsync",
            }),
        },
        mounted() {
            this.changeTimeAsync();
        },
    }
</script>

<style src="../components/compStyle/confirmRegisterStyle.css" scoped>
</style>

