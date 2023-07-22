import axios from 'axios';
import config from "../../vue.config.js";
import Cookies from 'js-cookie'
import { reactive, computed} from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers} from '@vuelidate/validators'
import {useStore} from 'vuex';

export function AuthValidForm(){
    const store = useStore();
    const state = reactive({
        email: "",
        password:"",
        emailMessage:'Шаблон почты аааааа@aa.com',
        countErr:5,//небольше 5ти попыток
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
        };
        try{
           //const response = await axios.get(config.appBackendURL+':'+config.appBackendPort+'/sanctum/csrf-cookie').then(async response => {});
            const response =    await axios({
                    method: 'POST',
                    url: config.appBackendURL+':'+config.appBackendPort+'/api/login',
                    data: {
                        email: state.email,
                        password: state.password,
                    },
                    headers: {
                        'X-CSRF-Token': Cookies.get('XSRF-TOKEN')
                    },
                },);



            store.commit('getAuthToken', Cookies.get('XSRF-TOKEN'), {root:true})
        }catch(err){
            console.log(err);
            state.response = err.message;
        }finally{
            state.password = '';
            state.email = '';
        }
    }
    const logOut = () =>{
        store.commit('lostAuthToken', {root: true});
        Cookies.remove('XSRF-TOKEN');
    }
    return{
        state,
        AuthForm,
        logOut,
        v$,
    }
}
