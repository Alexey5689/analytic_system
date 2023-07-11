import axios from 'axios';
import config from "../../vue.config.js";
import { reactive } from 'vue';

export function tryAgan(){

    const sendMail = async () =>{
        try{
            const response = await axios.get({
                url:config.appBackendURL + ':' + config.appBackendPort + '/api/forget',
                params:{
                    email: localStorage.getItem('email')
                }
            })
            console.log(response);
            window.location.reload();
        }catch(err){
            console.log(err.response);
        }finally{

        }
    }
    return{ sendMail }
}
