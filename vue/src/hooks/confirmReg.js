import axios from 'axios';
import config from "../../vue.config.js";
import { reactive } from 'vue';
import { useStore } from 'vuex';
import Cookies from 'js-cookie';


export function confEmail(){
    const store = useStore();
    // const sendMail = async () =>{
    //     try{
    //         const response = await axios.get({
    //             url:config.appBackendURL + ':' + config.appBackendPort + '/api/forget',
    //         })
    //         Cookies.set('reg_token', response.data.token);
    //         store.commit('getRegToken', Cookies.get('reg_token'));
    //         console.log(response);
    //         window.location.reload();
    //     }catch(err){
    //         console.log(err.response);
    //     }finally{

    //     }
    // }
    //
    const sendMail = ()=>{
        Cookies.set('reg_token',searchParams.get('token'));
        store.commit('getRegToken', Cookies.get('reg_token'));
    }

    return{ sendMail }
}
