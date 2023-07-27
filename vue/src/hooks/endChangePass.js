
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
    const ChangeSubmit = async (token) =>{
        try{
            const response = await axios({
                    method:'POST',
                    url:config.appBackendURL + ':' + config.appBackendPort + '/api/reset',
                    data:{
                        email:localStorage.getItem('repeatEmailChangePass'),
                        token:token,
                        password:state.password,
                        password_confirmation: state.password_confirm
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
            },)
            state.response = response.data.message;
            console.log(response);
            localStorage.removeItem('repeatEmailChangePass');
        }catch(err){
            state.response = err.message;
        }finally{
            state.password = '';
            state.password_confirm= '';
            state.token = '';
        }

    }
    return{state, ChangeSubmit }

}


