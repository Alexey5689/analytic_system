<template>
    <div class="card">
        <h1 class="card-header">Восстановление пароля</h1>
        <p>На эту почту мы вышлем ссылку на восстановление пароля</p>
        <div class="card-body">
            <form class="general-block" @submit.prevent="LoginData">
                <div><input class="user-email" type="email" placeholder="E-mail*"/></div>
                <button type="submit" class="button">Восстановить</button>
            </form>
            <div class="bottom-block-register">
                <p @click="$router.push('/registration')">Зарегестрироваться</p>
                <p @click="$router.push('/login')">Войти</p>
            </div>
        </div>
    </div>
</template>

<style src="../components/compStyle/passRecovery.css" scoped>
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
