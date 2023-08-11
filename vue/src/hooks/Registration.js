import { reactive, computed } from 'vue';//для валидации computed must have
import axios from 'axios';
import config from "../../vue.config.js";
import { helpers } from '@vuelidate/validators';//валидация
import { useVuelidate } from '@vuelidate/core';//валидация
import { required, email, minLength, maxLength} from '@vuelidate/validators';//доп условия для проверки
import { sameAs } from '@vuelidate/validators';//доп условия для проверки




const reg = JSON.parse(localStorage.getItem('reg'))
export function RegForm(){
    //регулярные выражения
    const regName = helpers.regex(/^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/);
    const regPass = helpers.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_]).{8,24}$/);
    const regPhone = helpers.regex(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
    const store = useStore();
    const state = reactive({
            isReg: reg ,//флаг меняющий компонент на компонент подтверждения регистрации
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
    //регистрация
    async function fetchForm(){
        //ошибки валидации
        if(this.v$.$invalid){
            this.v$.$touch();
            return;
        }
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
            //смена регистрации на подтверждение
            console.log(response.data);
            localStorage.setItem('reg', true);
            localStorage.setItem('repeatEmail', state.email);
            location.reload();
        }catch(err){
            // state.response = err.response.data.message;
            localStorage.setItem('repeatEmail', state.email);
        }finally{
        }
    }
    //получение массива городов
    const getCities = async()=> {
        try{
            const response = await axios.get( config.appBackendURL + ':' + config.appBackendPort +'/api/city')
            state.cities = response.data;
        }catch(err){
            //ошибка запроса
            //state.response = err.response.data.message;
        }
    }
    return{
        state,
        fetchForm,
        v$,
        getCities,
    }
}

