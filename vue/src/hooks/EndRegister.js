
// import { useStore } from 'vuex';
// import Cookies from 'js-cookie';
import axios from 'axios';
import config from "../../vue.config.js";

export function confEmail(){
    //vuexподключение
    const store = useStore();

    const getEmail = async(token)=>{
        try{
            const response = await axios({
                method: "GET",
                url:config.appBackendURL + ':' + config.appBackendPort + '/api/verify',
                params: {
                    _token: token,
                }
            },)
            localStorage.removeItem('repeatEmail');
            localStorage.removeItem('reg');
            console.log(response);
        }catch(err){
            console.error(err)
        }finally{
        }
    }
    // const sendMail = (token) => {
    //     store.commit('getRegToken', token);
    // }

    return{ sendMail, getEmail }
}












