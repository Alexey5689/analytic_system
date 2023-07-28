import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from "../../vue.config.js";

export function confEmail(){
    //vuexподключение
    const store = useStore();

    const getEmail = async()=>{
        try{
            const response = await axios({
                method: "GET",
                url:config.appBackendURL + ':' + config.appBackendPort + '/api/verify',
                params: {
                    _token: Cookies.get('reg_token'),
                }
            },)
            localStorage.removeItem('repeatEmail');
            console.log(response);
        }catch(err){
            console.error(err)
        }finally{
        }
    }
    const sendMail = (token) => {
        store.commit('getRegToken', token);
    }

    return{ sendMail, getEmail }
}
