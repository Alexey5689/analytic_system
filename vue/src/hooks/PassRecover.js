import { reactive, computed } from 'vue';
import axios from 'axios';
import config from "../../vue.config.js";
import { useVuelidate } from '@vuelidate/core';

import { helpers } from "@vuelidate/validators";
import { required, email } from '@vuelidate/validators';


const pass = JSON.parse(localStorage.getItem('Pass'))
export function RecForm(){
    const state = reactive({
            email: "",
            isChange: pass,
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
            //localStorage.setItem('repeatEmailChangePass', state.email);
            localStorage.setItem('Pass', true);
            location.reload()
        }catch(err){
            console.log(err);
            state.response = err.response.data.message;
        }finally{
            state.email = '';
        }

    }


    return{state, Recovery, v$}

}


