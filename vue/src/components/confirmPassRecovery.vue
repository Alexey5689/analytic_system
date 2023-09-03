<template>
    <div class="container">
    <div class="card">
        <h1 class="card-header">Подтвердите смену пароля</h1>
        <div class="ruls">
            {{ state.response }}
        </div>
        <div class="card-body">
            <p>На вашу почту была отправлена ссылка для смены пароля. Перейдите по ссылке в письме для подтверждения.</p>
            <div class="bottom-block-register">
                <p>Не пришло письмо?</p>
                <p v-if="seconds>0" >Отправить повторно?</p>
                <p v-else class="resend-p" @click="repeatRequest">Отправить повторно?</p>
            </div>
            <p class="time">{{minuts<1?'00':'0'+minuts}}:{{minuts===1?'00':seconds<10?'0'+seconds:seconds}}</p>
        </div>
    </div>
    </div>
</template>
<script>
    import { Repeated } from '../hooks/repReqChangePass.js';
    import { mapActions, mapGetters } from 'vuex';
    export default{
        setup(props){
            const {state, repeatRequest} = Repeated();
            return{
                state,
                repeatRequest
            }
        },

        computed: {
            ...mapGetters({
                minuts: 'currentMin',
                seconds: 'currentSec',
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

<style src="../components/compStyle/confirmPassRecovery.css" scoped>
</style>

