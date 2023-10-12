import axios from 'axios';
import config from "../../vue.config.js";
import Cookies from 'js-cookie'
import { reactive, computed} from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers} from '@vuelidate/validators'
import {useToken} from '../stores/useToken.js';

const log = JSON.parse(localStorage.getItem('Log'));
export function AuthValidForm(){
    const token = useToken();
    const state = reactive({
        email: "",
        password:"",
        emailMessage:'Шаблон почты аааааа@aa.com',
        errLog: log,
        response: "",

    })

    const rules= computed(()=>{
        return{
            email:{
                required: helpers.withMessage('Поле обязательно к заполнению', required),
            },
            password:{
                required: helpers.withMessage('Поле обязательно к заполнению', required),
            },

        }
    })
    const v$ = useVuelidate(rules, state);

    async function AuthForm (){
        if(this.v$.$invalid){
            this.v$.$touch();
            return;
        }
        const resp = await axios.get(config.appBackendURL+':'+config.appBackendPort+'/sanctum/csrf-cookie').then(
            async authorisation =>{
                const response = await axios({
                        method: 'POST',
                        url: config.appBackendURL+':'+config.appBackendPort+'/api/login',
                        data: {
                            email: state.email,
                            password: state.password,
                        },
                        headers: {
                            'X-CSRF-Token': Cookies.get('XSRF-TOKEN')
                        },
                }).then(response=>{
                    if(response.data.status === false){
                        state.response = response.data.message;
                        setTimeout(function(){
                            state.email = "";
                            state.password="";
                            state.response="";
                        }, 3000)
                    }else{
                        state.response = response.data.message;
                        setTimeout(()=>{
                            token.getToken(response.data.token);
                            window.location.href ='/main/';
                        }, 2000);
                    }
                })

        }).catch(err=>{
            console.log(err.response);
                if(err.response.status === 429){
                    localStorage.setItem('Log', true);
                    localStorage.setItem('repeatEmail', state.email);
                    location.reload();
                }
        }).finally(()=>{

        })
    }
    return{
        state,
        AuthForm,
        v$,
    }
}
