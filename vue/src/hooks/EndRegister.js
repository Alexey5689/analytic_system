import { useStore } from 'vuex';
// import Cookies from 'js-cookie';
// import axios from 'axios';
// import config from "../../vue.config.js";

export function ThisIsTheEnd(){

    function EndReg(){
        localStorage.removeItem('repeatEmail');
        localStorage.removeItem('reg');
    }
    return{
        EndReg,
    }
}
