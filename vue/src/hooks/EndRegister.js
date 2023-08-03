import axios from 'axios';
import config from "../../vue.config.js";
import { useStore } from 'vuex';
import { reactive } from 'vue';
import Cookies from 'js-cookie'
export function confEmail(){
    const store = useStore();
    const state = reactive({
        response:"",
    })
    const getVerify = async()=>{

        try{
            const response = await axios({
                method: "POST",
                url:config.appBackendURL + ':' + config.appBackendPort + '/api/verify',
                data: {
                    token:Cookies.get('reg_token'),
                }
            },)
            localStorage.removeItem('repeatEmail');
            localStorage.removeItem('reg');
            Cookies.remove('reg_token');
            setTimeout(function(){
                window.location = '/main/';
            }, 3000)
        }catch(err){
            state.response = err.response.data.message
        }finally{
        }
    }
    function getToken(token){
        store.commit('getRegToken', token);
    }
    return{
        state,
        getVerify,
        getToken
    }
}












