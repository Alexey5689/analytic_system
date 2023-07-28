

import axios from 'axios';
import config from "../../vue.config.js";

export function confEmail(){
    //vuexподключение


    const getEmail = async(token)=>{
        try{
            const response = await axios({
                method: "GET",
                url:config.appBackendURL + ':' + config.appBackendPort + '/api/verify',
                params: {
                    _token: token,
                }
            },)
            localStorage.removeItem('repeatEmail');
            localStorage.removeItem('reg');
            console.log(response);
        }catch(err){
            console.error(err)
        }finally{
        }
    }


    return{ sendMail, getEmail }
}












