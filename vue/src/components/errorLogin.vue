<template>
    <div class="container">
        <div class="card">
            <h1 class="card-header">Ошибка входа</h1>
            <div>
                <p>Превышено количество попыток входа</p>
                <p
                    class="resend-p"
                    @click="errLog">Желаете сбросить пароль?
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import { ErrorLogin } from '../hooks/errLogin'
    export default{
        setup(props){
            const{errLog} = ErrorLogin();
            return{
                errLog
            }
        }
    }


</script>
<style src="../components/compStyle/errLoginStyle.css" scoped>
</style>

