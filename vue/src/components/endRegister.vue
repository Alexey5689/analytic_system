<template>
    <div class="container">
        <div class="card">
            <h1 class="card-header">Спасибо за регистрацию</h1>
        </div>
    </div>
</template>
<script>
import { ThisIsTheEnd } from '../hooks/EndRegister.js';

export default{
    setup(props){
        const { getEmail, sendMail } = ThisIsTheEnd();
        return{
            getEmail,
            sendMail
        }
    },
    methods:{
        setInterval(){
            setTimeout(function(){
                window.location = '/main/';
            }, 3000)
        }
    },
    created(){
        this.sendMail(this.$route.params.token);
    },
    mounted(){
        this.setInterval();
    },



}

</script>

<style src="../components/compStyle/endRegisterStyle.css" scoped>
</style>

