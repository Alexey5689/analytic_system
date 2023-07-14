import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from "../../vue.config.js";

export function confEmail(){
    const store = useStore();
    const sendMail = (token) => {
        Cookies.set('reg_token', token)
        store.commit('getRegToken', token);
    }

    const getEmail = async()=>{
        try{
            const response = await axios({
                method: "GET",
                url:config.appBackendURL + ':' + config.appBackendPort + '/api/verify',
                params: {
                    _token: Cookies.get('reg_token'),
                }
            },)
            console.log(response);
        }catch(err){
            console.error(err)
        }finally{
        }
    }
    return{ sendMail, getEmail }
}
