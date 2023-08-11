
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
        const {state, getVerify } = confEmail();
        return{
            getVerify,
            state,
        }
    },
    created(){
        this.getVerify(this.$route.params.token);
    },
}
</script>
<style src="../components/compStyle/endRegisterStyle.css" scoped>
</style>



