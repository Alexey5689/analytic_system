<template>
    <div class="card">
        <h1 class="card-header">Подтверждение регистрации</h1>
        <h3>Спасибо за регистрацию!</h3>
        <div class="card-body">
                <p>На вашу почту была отправлена ссылка подтверждения регистрации. Перейдите по ссылке в письме для подтверждения</p>
            <div class="bottom-block-register">
                <p>Не пришло письмо?</p>
                <p class="resend-p" :disabled="seconds>0">Отправить повторно</p>
            </div>
            <p>{{minuts<1?'00':minuts}}:{{seconds<10?'0'+seconds:seconds}}</p>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapMutations, mapState } from 'vuex';
    export default{
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

