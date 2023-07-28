
import Cookies from 'js-cookie';
import axios from 'axios';
import config from "../../vue.config.js";

export function ThisIsTheEnd(){
    const getEmail = async()=>{
        try{
            const response = await axios({
                method: "GET",
                url:config.appBackendURL + ':' + config.appBackendPort + '/api/verify',
                params: {
                    _token: Cookies.get('reg_token'),
                }
            },)
            localStorage.removeItem('repeatEmail');
            localStorage.removeItem('reg');
        }catch(err){
            console.error(err)
        }finally{
        }
    }
    return{
        getEmail
    }
}







