import axios from 'axios';
import config from "../../vue.config.js";
import { reactive } from 'vue';

export function Repeated(){
    const state = reactive({
        response: "",
    })
        //повторная отправка письма на почту
        const repeatRequest = async () =>{
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
                state.response = response.data;
                //location.reload();
            }catch(err){
                console.log(err);
                state.response = err.response.data.message;
            }
        }
    return {
        state,
        repeatRequest,

    }
}
