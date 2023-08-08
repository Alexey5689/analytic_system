
import { reactive } from 'vue';
import axios from 'axios';
import config from "../../vue.config.js";

export function endChangePass(){
    const state = reactive({
            password: "",
            password_confirm: '',
            token: '',
            response: '',
            email:''
    })
    const ChangeSubmit = async (token) =>{
        try{
            const response = await axios({
                    method:'POST',
                    url:config.appBackendURL + ':' + config.appBackendPort + '/api/reset',
                    data:{
                        email:state.email,
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
            localStorage.removeItem('Pass')
        }catch(err){
            state.response = err.message;
        }finally{
            state.password = '';
            state.password_confirm= '';
            state.token = '';
        }

    }
    function GetEmail(token){
        var params = (new URL(document.location));
        var email = params.search.replace('?','').split('=');
        console.log(email);
        state.email = email[1];
        state.token = token;
    }
    return{state, ChangeSubmit, GetEmail }

}


