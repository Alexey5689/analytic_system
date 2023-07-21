<template>
    <div class="card">
        <h1 class="card-header">Смените пароль</h1>
        <div class="card-body">
            <form class="general-block" @submit.prevent="LoginData">
                <div><input class="user-passw" type="password" placeholder="Новый пароль*"/></div>
                <div><input class="user-passw" type="password" placeholder="Подтверждение пароля*"/></div>
                <button type="submit" class="button">Поменять пароль</button>
            </form>
        </div>
    </div>
</template>

<style src="../components/compStyle/endChangePass.css" scoped>
</style>

<script>

export default {

}
</script>
