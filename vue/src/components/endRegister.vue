
<template>
    <div class="container">
        <div class="card">
            <h1 class="card-header">Спасибо за регистрацию</h1>
        </div>
    </div>
</template>
<script>
import { confEmail } from '../hooks/EndRegister.js';

export default{

    setup(props){
        const { getEmail,clear} = confEmail();
        return{
            getEmail,
            clear
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
        this.clear();
    },
    mounted(){
        this.getEmail(this.$route.params.token);
        this.setInterval();
    },



}

</script>

<style src="../components/compStyle/endRegisterStyle.css" scoped>
</style>



