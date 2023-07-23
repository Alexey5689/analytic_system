import { reactive, computed} from 'vue';
import axios from 'axios';
import config from "../../vue.config.js";
import { helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';



function passRecovery(){

    const state = reactive({
        email: "",
        response:"",
    })

    const rules = computed (()=>{
        return  {
            email:{
                required: helpers.withMessage('Поле обязательно к заполнению', required),
                email: helpers.withMessage('Не корректный email',email)},

        }
    })
    const v$ = useVuelidate(rules, state);

   const reqPassRecovery = async () =>{
        if(this.v$.$invalid){
            this.v$.$touch();
            return;
        }

        try{
            const response = await axios({
                method:'POST',
                url:config.appBackendURL + ':' + config.appBackendPort + '/api/forget-password',
                data:{
                    email:state.email,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
        },)

        }catch(err){
            state.response = err.message;
        }finally{

        }
   }
    return{
        v$,
        state,
        reqPassRecovery,
    }
}
