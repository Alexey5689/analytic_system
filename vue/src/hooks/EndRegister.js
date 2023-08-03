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
    const getVerify = async()=> {
        const cookies = JSON.parse(Cookies.get('reg_token'));
        try{

            const response = await axios({
                method: "POST",
                url:config.appLocalHost + ':' + config.appBackendPort + '/api/verify',
                data: {
                    token:cookies.IsRegistration,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            },)
            localStorage.removeItem('repeatEmail');
            localStorage.removeItem('reg');
            Cookies.remove('reg_token');
            setTimeout(function(){
                window.location = '/login';
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












