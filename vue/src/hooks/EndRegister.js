import axios from 'axios';
import config from "../../vue.config.js";
import { useStore } from 'vuex';
import { reactive } from 'vue';
export function confEmail(){
    const store = useStore();
    const state = reactive({
        response:"",
    })
    const getVerify = async(token)=> {
        try{
            const response = await axios({
                method: "POST",
                url:config.appBackendURL + ':' + config.appBackendPort + '/api/verify',
                data: {
                    token:token,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            },)
            localStorage.removeItem('repeatEmail');
            localStorage.removeItem('reg');
            setTimeout(function(){
                window.location = '/login';
            }, 3000)
        }catch(err){
            state.response = err.response.data.message
        }finally{
        }
    }
    return{
        state,
        getVerify,
    }
}












