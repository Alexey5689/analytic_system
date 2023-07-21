<template>
    <div class="card">
        {{ state.response }}
        <h1 class="card-header">Подтверждение регистрации</h1>
        <h3>Спасибо за регистрацию!</h3>
        <div class="card-body">
            <p>На вашу почту была отправлена ссылка подтверждения регистрации. Перейдите по ссылке в письме для подтверждения</p>
            <div class="bottom-block-register">
                <p>Не пришло письмо?</p>
                <p v-if="seconds>0" class=" ">Отправить повторно</p>
                <p v-else class="resend-p" @click="reatReqest" >Отправить повторно</p>
            </div>
            <p>{{minuts<1?'00':'0'+minuts}}:{{minuts===1?'00':seconds<10?'0'+seconds:seconds}}</p>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex';
    import { Repeated } from '../hooks/repeatedRequest.js';
    export default{
        setup(props){
            const { reatReqest, state }=Repeated()
            return {
                reatReqest,
                state,
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

