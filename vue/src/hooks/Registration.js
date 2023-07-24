import { reactive, computed } from 'vue';
import axios from 'axios';
import config from "../../vue.config.js";
import { helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, maxLength} from '@vuelidate/validators';
import { sameAs } from '@vuelidate/validators';
import { useStore } from 'vuex';
import Cookies from 'js-cookie';


export function RegForm(){
    const regName = helpers.regex(/^[a-zA-Zа-яёА-ЯЁ]*$/);
    const regPass = helpers.regex(/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!$#%]).*$/);
    const regPhone = helpers.regex(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
    const store = useStore();
    const state = reactive({
            email: "",
            password:"",
            conf_password:"",
            tel: "",
            name: "",
            reg:  "",
            promo: "",
            response: " ",
            emailMessage:'Шаблон почты аааааа@aa.com',
            cellMessage:'Шаблон телефона +7999 999 99 99',
            checked:"",
    })
    const rules = computed (()=>{
      return{
                name:{
                    required: helpers.withMessage('Поле обязательно к заполнению', required),
                    minLength: helpers.withMessage('Не должно содержать меньше 3х знаков', minLength(3)),
                    regName: helpers.withMessage('Должно содержать только буквы', regName),
                    maxLength: helpers.withMessage('Не должно содержать больше 23х знаков', maxLength(23))
                },
                tel:{
                    required: helpers.withMessage('Поле обязательно к заполнению', required),
                    minLength:  helpers.withMessage('Не должно содержать меньше 3х знаков', minLength(3)),
                    maxLength: helpers.withMessage('Не должно содержать больше 11ти знаков', maxLength(11)),
                    regPhone: helpers.withMessage('Должен содержать только цифры', regPhone),
                },
                email:{
                    required: helpers.withMessage('Поле обязательно к заполнению', required),
                    email: helpers.withMessage('Не корректный email',email)},
                password:{
                    required: helpers.withMessage('Поле обязательно к заполнению', required),
                    minLength:  helpers.withMessage('Не должно содержать меньше 8ми знаков', minLength(8)),
                    maxLength: helpers.withMessage('Не должно содержать больше 23х знаков', maxLength(23)),
                    regPass: helpers.withMessage('Должен содержать латинские буквы в верхнем и нижнем регистре, цифры и символы(!@#$%_)',regPass)
                },
                conf_password:{
                    required: helpers.withMessage('Поле обязательно к заполнению', required),
                    sameAs: helpers.withMessage('Значения не совпадают', sameAs(state.password)),
                },
                checked:{
                    required: helpers.withMessage('Нажми сюда пжлст', required),
                }
            }
    })

    const v$ = useVuelidate(rules, state);

    async function fetchForm(){
        if(this.v$.$invalid){
            this.v$.$touch();
            return;
        }
        try{
            const response = await axios({
                    method:'POST',
                    url:config.appBackendURL + ':' + config.appBackendPort + '/api/register',
                    data:{
                        email:state.email,
                        password:state.password,
                        password_confirmation:state.conf_password,
                        name:state.name,
                        tel:state.tel,
                        reg:state.reg,
                        promo:state.promo,
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }

            },)
            Cookies.set('reg_token', response.data.token)
            store.commit('Reg/getRegToken', Cookies.get('reg_token'))
            state.response = response.data.message;
        }catch(err){
            state.response = err.response.data.message;
        }finally{
            state.password = '';
            state.conf_password='';
            state.email = '';
            state.name = '';
            state.tel = '';
            state.reg = '';
            state.promo = '';
            state.checked = ''
        }
    }
    return{state, fetchForm, v$}
}


