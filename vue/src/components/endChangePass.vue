<template>
    <div class="card">
        <h1 class="card-header">Смените пароль</h1>
        <div class="card-body">
            <form class="general-block" @submit.prevent="ChangeSubmit">
                <div><input class="user-passw" type="password" placeholder="Новый пароль*"/></div>
                <div><input class="user-passw" v-model="password_confirm" type="password" placeholder="Подтверждение пароля*"/></div>
                <button type="submit" class="button">Поменять пароль</button>
            </form>
        </div>
    </div>
</template>

<style src="../components/compStyle/endChangePass.css" scoped>
</style>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            password: '',
            password_confirm: ''

        }
    },

    methods: {
        async ChangeSubmit()
        {
            const response = await axios.post("/reset-password",
                {
                    password: this.password,
                    password_confirm: this.password_confirm,
                    token: this.$route.params.token
                });
            console.log(response);
            this.$router.push('/login');

        }
    }
}
</script>
