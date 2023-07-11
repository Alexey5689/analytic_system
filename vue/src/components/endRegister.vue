<template>
    <div class="card">
        <h1 class="card-header">Спасибо за регистрацию</h1>
    </div>
</template>
<script>
import { confEmail } from '../hooks/confirmReg';
export default{

    setup(props){
        const { sendMail } = confEmail();
        return{
            sendMail
        }
    }
}

</script>

<style src="../components/compStyle/endRegisterStyle.css" scoped>
</style>

