
import { reactive } from 'vue';
import axios from 'axios';
import config from "../../vue.config.js";

export function RecForm(){
    const state = reactive({
            email: "",
            isRec: false,
            response: ''
    })
    const Recovery = async () =>{
        try{
            const response = await axios({
                    method:'POST',
                    url:config.appBackendURL + ':' + config.appBackendPort + '/api/forget-password',
                    data:{
                        email:state.email,
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
            },)
            state.response = response.status;
            console.log(response);
            state.isRec = true;

        }catch(err){
            console.log(err.response.data);
        }finally{
            state.email = '';
        }

    }
    return{state, Recovery, }

}


