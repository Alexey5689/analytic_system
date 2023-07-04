<template>

    <div class="card">
        <h1 class="card-header">Регистрация в РосМетрик</h1>
        <div class="card-body">
            <form class="general-block" @submit.prevent="fetchForm">
                <div><input class="user-name" type="text" placeholder="ФИО"/></div>
                <div><input class="user-num" type="tel" placeholder="Номер телефона*"/></div>
                <div><input class="user-email" type="email"  placeholder="E-mail*"/></div>
                <div><input class="user-passw" type="password"  placeholder="Пароль*"/></div>
<!--                проверка пароля, изменить-->
                <div><input class="user-passw" type="password"  placeholder="Подтвеждение пароля*"/></div>
                <div><input class="user-reg" type="text" placeholder="Регион"/></div>
                <div><input class="user-promo" type="text" placeholder="Промокод"/></div>
            </form>
            <div class="consent-processing-PD">
                <input type="checkbox" class="scales" name="scales"/>
                <label for="scales">Отправляя сведения через электронную форму вы соглашаетесь с условиями <span>оферты</span> и даете согласие на обработку персональных данных на условиях <span>Политики</span>.</label>
            </div>
            <button type="submit">Продолжить</button>
        </div>
    </div>
</template>

<style src="../components/compStyle/registerStyle.css" scoped>
</style>

<script>

export default {

}
</script>


