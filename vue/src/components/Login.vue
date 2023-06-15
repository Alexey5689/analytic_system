<template>

    <div class="row">

        <div class="col-sm-4" >
            <h2 align="center"> Login</h2>

            <form @submit.prevent="LoginData">

                <div class="form-group" align="left">
                    <label>Email</label>
                    <input type="email" v-model="student.email" :class="$style.form"  placeholder="Email">
                </div>


                <div class="form-group" align="left">
                    <label>Password</label>
                    <input type="password" v-model="student.password" :class="$style.form"  placeholder="Password">
                </div>

                <button type="submit" class="button">Login</button>
            </form>
        </div>
    </div>

</template>

<style module>
.form {
    color: red;
    background: #646cff;
}
.button {
    color: chartreuse;
}
</style>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            result: {},
            student:{
                email: '',
                password: ''
            }
        }
    },
    // created() {
    // },
    // mounted() {
    //     console.log("mounted() called.......");
    // },
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
