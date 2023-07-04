import { reactive} from 'vue';
import { computed } from 'vue'
import axios from 'axios';
import { baseUrl } from '../api/instance';
import Cookies from 'js-cookie'
// import router from '../router/router';
import { useStore } from 'vuex';


export function AuthTest(){
    //const store = useStore();
    const state = reactive({
        email: "",
        password:"",
    })
    const AuthForm = async () =>{
        try{
           const response = await axios.get(baseUrl +'/sanctum/csrf-cookie').then(async response => {
                await axios({
                    method: 'POST',
                    url: baseUrl + '/api/login',
                    data: {
                        email: state.email,
                        password: state.password,
                    },
                    headers: {
                        'X-CSRF-Token': Cookies.get('XSRF-TOKEN')
                    },
                },);

            });
        }catch(err){
            console.log(err.response);

        }finally{
            state.password = '';
            state.email = '';
        }
    }
    const logOut = () =>{
        Cookies.remove('XSRF-TOKEN');
        changAuth('flase')
    }

    return{
        state,
        AuthForm,
        logOut,

    }
}
