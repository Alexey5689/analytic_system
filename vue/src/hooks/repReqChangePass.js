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
                    url:config.appBackendURL + ':' + config.appBackendPort +'/api/forget-password',
                    data:{
                        email:localStorage.getItem('repeatEmailChangePass'),
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
            },)
                if(response.data.status === false){
                    state.response = response.data.message;
                }else{
                    setTimeout(function(){
                        location.reload();
                    }, 2000)
                }
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

