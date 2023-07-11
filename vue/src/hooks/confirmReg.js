//import axios from 'axios';
//import config from "../../vue.config.js";
//import { reactive } from 'vue';
import { useStore } from 'vuex';
import Cookies from 'js-cookie';


export function confEmail(){
    const store = useStore();
    const sendMail = () => {
        Cookies.set('reg_token',searchParams.get('token'));
        store.commit('getRegToken', Cookies.get('reg_token'));
    }

    return{ sendMail }
}
