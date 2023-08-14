<template>
    <div class="container">
        <div class="card">
            <h1 class="card-header">Подтвердите сброс пароля</h1>
            <div class="ruls">
                {{ state.response }}
            </div>
            <div class="card-body">
                <p>На вашу почту была отправлена ссылка для сброса пароля. Перейдите по ссылке в писме для подтверждения.</p>
                <div class="bottom-block-register">
                <p>Не пришло письмо?</p>
                <p v-if="seconds>0" class=" ">Отправить повторно</p>
                <p v-else class="resend-p" @click="repeatRequest" >Отправить повторно</p>
            </div>
            <p class="time">{{minuts<1?'00':'0'+minuts}}:{{minuts===1?'00':seconds<10?'0'+seconds:seconds}}</p>
            </div>
        </div>
    </div>
</template>
<script>
     import { mapActions, mapState } from 'vuex';
    import { RepeatRequest } from '../hooks/repeatedRequest.js';
    export default{
        setup(props){
            const {  repeatRequest, state }=RepeatRequest()
            return {
                repeatRequest,
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
<style src="../components/compStyle/confirmLogin.css" scoped>
</style>
