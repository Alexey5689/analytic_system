
import { reactive } from 'vue';
import axios from 'axios';
import config from "../../vue.config.js";

export function endChangePass(){
    const state = reactive({
            password: "",
            password_confirm: '',
            response: ''
    })
    const ChangeSubmit = async () =>{
        try{
            const response = await axios({
                    method:'POST',
                    url:config.appBackendURL + ':' + config.appBackendPort + '/api/reset',
                    data:{
                        password:state.password,
                        password_confirm:state.password_confirm
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
            },)
            state.response = response.status;
            console.log(response);

        }catch(err){
            console.log(err.response.data);
        }finally{
            state.password = '';
            state.password_confirm= '';
        }

    }
    return{state, ChangeSubmit }

}


