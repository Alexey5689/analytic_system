<template>
    <div class="card">
        <h1 class="card-header">Спасибо за регистрацию</h1>
    </div>
</template>
<script>
import { confEmail } from '../hooks/confirmReg';
import { mapState } from 'vuex';
export default{

    setup(props){
        const { sendMail,getEmail } = confEmail();
        return{
            sendMail,
            getEmail
        }
    },
    mounted(){
        this.sendMail(this.$route.params.token);
        this.getEmail();
    },
    computed:{
        ...mapState({
            reg: state => state.Reg.IsRegistration,
        })
    }

}

</script>

<style src="../components/compStyle/endRegisterStyle.css" scoped>
</style>

