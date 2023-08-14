import axios from 'axios';
import config from "../../vue.config.js";
import { reactive } from 'vue';

export function ErrorLogin(){
    const state = reactive({
        response: "",
    })
    const errLog = async()=> {
        console.log(localStorage.getItem('repeatEmail'));
        try{
            const response = await axios({
                method: "POST",
                url:config.appBackendURL + ':' + config.appBackendPort + '/api/forget-password',
                data: {
                    email:localStorage.getItem('repeatEmail')
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            },)
            state.response = response.data.message;
            setTimeout(function(){
                window.location = '/confirm-login';
            }, 2000)

        }catch(err){
            state.response = err.response.data
        }finally{
        }
    }
    return{
        errLog,
        state,
    }
}
