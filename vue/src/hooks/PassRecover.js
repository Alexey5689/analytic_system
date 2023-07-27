
import { reactive, computed } from 'vue';
import axios from 'axios';
import config from "../../vue.config.js";
import { useVuelidate } from '@vuelidate/core';
<<<<<<< HEAD
import { required, email, helpers } from '@vuelidate/validators';
=======
import { helpers } from "@vuelidate/validators";
import { required, email } from '@vuelidate/validators';
>>>>>>> 72d133758e0d36efb4d5d75076002075a4188708


export function RecForm(){
    const state = reactive({
            email: "",
            isRec: false,
            response: ''
    })
    const rules = computed (()=>{
        return  {
            email:{
                required: helpers.withMessage('Поле обязательно к заполнению', required),
                email: helpers.withMessage('Не корректный email',email)
            },
        }
    })

    const v$ = useVuelidate(rules, state);

    const Recovery = async () =>{
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
            console.log(response);
            state.isRec = true;
            localStorage.setItem('repeatEmailChangePass', state.email);
        }catch(err){
            state.response = err.data.message;
        }finally{
            state.email = '';
        }

    }
    return{state, Recovery, v$}

}


