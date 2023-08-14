import axios from 'axios';
import config from "../../vue.config.js";
import { reactive } from 'vue';

export function RepeatRequest(){
    const state = reactive({
        response: "",
    })
        //повторная отправка письма на почту
        const repeatRequest = async () =>{
            try{
                const response = await axios({
                    method:'POST',
                    url:config.appBackendURL + ':' + config.appBackendPort +'/api/forget-password',
                    data:{
                        email:localStorage.getItem('repeatEmail'),
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
            },)
                if(response.data.status === false){
                    state.response = response.data.message;
                }else{
                    state.response = response.data.message;
                    setTimeout(function(){
                        location.reload();
                    }, 2000)
                }
            }catch(err){
                console.log(err);
                state.response = err.response.data.message;
            }
        }
        const repeatRequestRegisterEailAgain = async () =>{
            try{
                const response = await axios({
                    method:'POST',
                    url:config.appBackendURL + ':' + config.appBackendPort +'/api/register-mail-again',
                    data:{
                        email:localStorage.getItem('repeatEmail'),
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
            },)
                console.log(response);
                if(response.status === 200){
                    state.response = response.data.message;
                    setTimeout(function(){
                        location.reload();
                    }, 4000)
                }else{
                    state.response = response.data.message;
                }

            }catch(err){
                console.log(err);
                state.response = err.response.statusText;
            }
        }
    return {
        state,
        repeatRequest,
        repeatRequestRegisterEailAgain,

    }
}
