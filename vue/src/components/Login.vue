<template>
    <div class="card">
        <h1 class="card-header">Вход в РосМетрик</h1>
        <p>Рады вас видеть</p>
        <div class="card-body">
            <form class="general-block" @submit.prevent="LoginData">
                <div><input class="user-email" type="email" placeholder="E-mail*"/></div>
                <div><input class="user-passw" type="password" placeholder="Пароль*"/></div>
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
import axios from 'axios';
export default {
    data () {
        return {
            result: {},

            email: '',
            password: ''

        }
    },

    methods: {
        LoginData()
        {
            axios.post("http://app/api/login", this.student)
                .then(
                    ({data})=>{
                        console.log(data);
                        try {
                            if (data.status === true) {
                                alert("Login Successfully");
                                this.$router.push({ name: 'HelloWorld' })
                            } else {
                                alert("Login failed")
                            }

                        } catch (err) {
                            alert("Error, please try again");
                        }
                    }
                )
        }
    }
}
</script>
