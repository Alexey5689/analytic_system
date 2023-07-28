
import { reactive } from 'vue';
import axios from 'axios';
import config from "../../vue.config.js";

export function endChangePass(){
    const state = reactive({
            password: "",
            password_confirm: '',
            token: '',
            response: ''
    })
    const ChangeSubmit = async () =>{
        try{
            const response = await axios({
                    method:'POST',
                    url:config.appLocalHost + ':' + config.appBackendPort + '/api/reset',
                    data:{
                        token:state.token,
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
            state.token = '';
        }

    }
    return{state, ChangeSubmit }

}


