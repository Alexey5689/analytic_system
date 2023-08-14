
import { reactive, computed} from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, helpers, sameAs, minLength, maxLength} from '@vuelidate/validators';
import axios from 'axios';
import config from "../../vue.config.js";

export function endChangePass(){
    const regPass = helpers.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_]).{8,24}$/);
    const state = reactive({
            password: "",
            password_confirm: '',
            token: '',
            response: '',
            email:''
    })
    const rules = computed (()=>{
        return  {
                    password:{
                        required: helpers.withMessage('Поле обязательно к заполнению', required),
                        minLength:  helpers.withMessage('Не должно содержать меньше 8ми знаков', minLength(8)),
                        maxLength: helpers.withMessage('Не должно содержать больше 23х знаков', maxLength(23)),
                        regPass: helpers.withMessage('Должен содержать латинские буквы в верхнем и нижнем регистре, цифры и символы(!@#$%_)',regPass)
                    },
                    password_confirm:{
                        required: helpers.withMessage('Поле обязательно к заполнению', required),
                        sameAs: helpers.withMessage('Значения не совпадают', sameAs(state.password)),
                    },
                }
    })
    const v$ = useVuelidate(rules, state);

    async function ChangeSubmit() {

        if(this.v$.$invalid){
            this.v$.$touch();
            return;
        }
        try{
            const response = await axios({
                    method:'POST',
                    url:config.appBackendURL + ':' + config.appBackendPort + '/api/reset',
                    data:{
                        email:state.email,
                        token:state.token,
                        password:state.password,
                        password_confirmation: state.password_confirm
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
            },)
            state.response = response.data.message;
            console.log(response);
            localStorage.removeItem('repeatEmailChangePass');
            localStorage.removeItem('Pass')
            setTimeout(function(){
                window.location = '/login';
            }, 2000)
        }catch(err){
            state.response = err.message;
        }finally{

        }

    }
    function GetEmail(token){
        localStorage.removeItem('Log');
        localStorage.removeItem('repeatEmail');
        var params = (new URL(document.location));
        var email = params.search.replace('?','').split('=');
        state.email = email[1];
        state.token =token;
    }
    return{state, ChangeSubmit, GetEmail, v$ }

}


