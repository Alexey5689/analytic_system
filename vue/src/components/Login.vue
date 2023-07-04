<template>
    <div class="card">
        <h1 class="card-header">Вход в РосМетрик</h1>
        <p>Рады вас видеть</p>
        <div class="card-body">
            <form class="general-block" @submit.prevent="LoginData">
                <div><input class="user-email" v-model="student.email" type="email" placeholder="E-mail*"/></div>
                <div><input class="user-passw" v-model="student.password" type="password" placeholder="Пароль*"/></div>
                <button type="submit" class="button">Войти</button>
            </form>
            <div class="bottom-block-register">
                <p>Зарегестрироваться</p>
                <p>Восстановить пароль</p>
            </div>
        </div>
    </div>
</template>

<style src="../components/compStyle/loginStyle.css" scoped>
</style>

<script>

export default {



}
</script>
