import axios from 'axios';
import config from "../../vue.config.js";

export function ErrorLogin(){
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
            window.location.replace('/confirm-login');
        }catch(err){
            state.response = err.response.data
        }finally{
        }
    }
    return{
        errLog,
    }
}
