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
