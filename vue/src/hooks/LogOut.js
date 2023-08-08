import axios from 'axios';
import config from "../../vue.config.js";
import { useStore } from 'vuex';


export function LogOut(){
    const store = useStore();
    function loginOut(){
        // store.commit('logOutToken');
        // Cookies.remove('XSRF-TOKEN');

    }
    return{
        loginOut
    }

}
