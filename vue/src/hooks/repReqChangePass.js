import axios from 'axios';
import config from "../../vue.config.js";
import { reactive } from 'vue';

export function Repeated(){
    const state = reactive({
        respose: "",
    })
        //повторная отправка письма на почту
        const repeatReqest = async () =>{
            try{
                const response = await axios({
                    method:'POST',
                    url:config.appBackendURL + ':' + config.appBackendPort +'/api/register-mail-again',
                    data:{
                        email: localStorage.setItem('repeatEmailChangePass'),
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
            },)
                state.respone = response.data;
                console.log(response);
                location.reload();
            }catch(err){
                console.log(err);
                state.response = err.message;
            }
        }
    return {
        state,
        repeatReqest,

    }
}

