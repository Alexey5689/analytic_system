<template>
    <div class="card">
        <h1 class="card-header">Подтвердите смену пароля</h1>
        <div class="card-body">
            <p>На вашу почту была отправлена ссылка для смены пароля. Перейдите по ссылке в письме для подтверждения.</p>
            <div class="bottom-block-register">
                <p>Не пришло письмо?</p>
                <p class="resend-p">Отправить повторно</p>
            </div>
            <p class="time">{{minuts<1?'00':minuts}}:{{seconds<10?'0'+seconds:seconds}}</p>
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

<style src="../components/compStyle/confirmPassRecovery.css" scoped>
</style>

