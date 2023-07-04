
import { reactive, computed} from 'vue';
import axios from 'axios';
import config from "../../vue.config.js";
import { helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, maxLength} from '@vuelidate/validators';
import { sameAs } from '@vuelidate/validators';
import Cookies from 'js-cookie';
export function RegTest(){
    const state = reactive({
            email: "",
            password:"",
            conf_password:"",
            tel: "",
            name: "",
            reg:  "",
            promo: "",
            isReg: false,
            response: " ",
            emailMessage:'Шаблон почты аааааа@aa.com',
            cellMessage:'Шаблон почты +7999 999 99 99',
            checked:"",
    })
    const rules = computed (()=>{
      return{
                name:{
                    required: helpers.withMessage('Поле обязательно к заполнению', required),
                    minLength: helpers.withMessage('Не должно содержать меньше 3х знаков', minLength(3)),
                    // alfa: helpers.withMessage('Должно содержать только буквы', alfa),
                    maxLength: helpers.withMessage('Не должно содержать больше 23х знаков', maxLength(23))
                },
                tel:{
                    required: helpers.withMessage('Поле обязательно к заполнению', required),
                    minLength:  helpers.withMessage('Не должно содержать меньше 3х знаков', minLength(3)),
                    maxLength: helpers.withMessage('Не должно содержать больше 11ти знаков', maxLength(11)),
                    // cell: helpers.withMessage('Должен содержать цифры', cell),
                },
                email:{
                    required: helpers.withMessage('Поле обязательно к заполнению', required),
                    email: helpers.withMessage('Не корректный email',email)},
                password:{
                    required: helpers.withMessage('Поле обязательно к заполнению', required),
                    minLength:  helpers.withMessage('Не должно содержать меньше 8ми знаков', minLength(8)),
                    // sameAs: helpers.withMessage('Значения не совпадают', sameAs( state.password_conf)),
                    maxLength: helpers.withMessage('Не должно содержать больше 23х знаков', maxLength(23)),
                    // bbt: helpers.withMessage('Должен содержать латинские буквы, буквы в верхнем регистре, цифры и символы(!@#$%_)',bbt)
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
                        password_conf:state.password_conf,
                        name:state.name,
                        tel:state.tel,
                        reg:state.reg,
                        promo:state.promo,
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }

            },)
            state.isReg = true;
            console.log(state.name);
            state.response = response.data.message;
            //console.log(response);

        }catch(err){
            state.response = err.response.data.message;
        }finally{
            state.password = '';
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


