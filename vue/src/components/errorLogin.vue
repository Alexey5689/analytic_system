<template>
    <div class="container">
        <div class="card">
            <h1 class="card-header">Ошибка входа</h1>
            <div>
                <p>Превышено количество попыток входа</p>
                <p
                    class="resend-p"
                    @click="$router.push('/confirm-login')">Желаете сбросить пароль?
                </p>
            </div>
        </div>
    </div>
</template>
<script>


</script>
<style src="../components/compStyle/errLoginStyle.css" scoped>
</style>

