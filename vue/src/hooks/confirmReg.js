import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from "../../vue.config.js";



export function confEmail(){

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
            console.log(response);
        }catch(err){
            console.error(err)
        }finally{
        }
    }
    const sendMail = (token) => {
        console.log(token);
        Cookies.set('reg_token', token)
        store.commit('getRegToken', token);

    }
    return{ sendMail, getEmail }
}
