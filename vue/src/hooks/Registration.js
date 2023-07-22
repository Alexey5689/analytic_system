import { reactive, computed } from 'vue';
import axios from 'axios';
import config from "../../vue.config.js";
import { helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, maxLength} from '@vuelidate/validators';
import { sameAs } from '@vuelidate/validators';
import { useStore } from 'vuex';

export function RegForm(){
    const store = useStore();
    //регулярные выражения
    const regName = helpers.regex(/^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/);
    const regPass = helpers.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_]).{8,24}$/);
    const regPhone = helpers.regex(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
    const state = reactive({
            isReg:false,//флаг меняющий компонент регитсрации на компоннент подтверждения регистрации
            email: "",
            password:"",
            conf_password:"",
            tel: "",
            name: "",
            promo: "",
            response: " ",//ответ с бэка
            cities:[],//массив городов
            searchTown: "",//поле ввода города
            cityId:"", //id города
            emailMessage:'Шаблон почты аааааа@aa.com',
            cellMessage:'Шаблон телефона 8999 999 99 99',
            checked:"",//checkbox
    })
    //валидация
    const rules = computed (()=>{
        return  {
                    name:{
                        required: helpers.withMessage('Поле обязательно к заполнению', required),
                        minLength: helpers.withMessage('Не должно содержать меньше 3х знаков', minLength(3)),
                        regName: helpers.withMessage('Должно содержать только буквы', regName),
                        maxLength: helpers.withMessage('Не должно содержать больше 255х знаков', maxLength(255))
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
                        required: helpers.withMessage('Примите условие соглашения', required),
                    }
                }
    })
    //валидация
    const v$ = useVuelidate(rules, state);

    async function fetchForm(){
        //ошибки валидации
        if(this.v$.$invalid){
            this.v$.$touch();
            return;
        }
        //регистрация
        try{
            const response = await axios({
                    method:'POST',
                    url:config.appBackendURL + ':' + config.appBackendPort +'/api/register',
                    data:{
                        email:state.email,
                        password:state.password,
                        password_confirmation:state.conf_password,
                        name:state.name,
                        tel:state.tel,
                        promo:state.promo,
                        city:state.cityId,
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
            },)
            //  смена регистрации на подтверждение
            state.isReg = true;
            console.log(response.data);

        }catch(err){
            console.log(err);
            //ошибка регистрации вывод в компоненте
            state.response = err.message;
            localStorage.setItem('repeatEmail', state.email);
        }finally{
        }
    }
    //получение массива городов
    const getCities = async()=> {
        try{
            const response = await axios.get(config.appBackendURL + ':' + config.appBackendPort +'/api/city')
            state.cities = response.data;
            console.log(state.cities);
        }catch(err){
            console.log(err);
            //ошибка запроса
            state.response = err.message;
        }
    }

    function testReg(){
        localStorage.setItem('repEmail', state.email);
    }

    return{
        state,
        fetchForm,
        v$,
        getCities,
        testReg,
    }
}

