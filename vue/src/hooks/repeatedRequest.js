import axios from 'axios';
import config from "../../vue.config.js";
import { reactive } from 'vue';


export function Repeated(){
    const state = reactive({
        respose: ""
    })

        const reatReqest = async () =>{
            try{
                const response = await axios.get(config.appBackendURL + ':' + config.appBackendPort +'/api/register-mail-again')
                state.respone = response.data;
                console.log(response);
                location.reload();
            }catch(err){
                console.log(err);
                state.response = err.message;
                ;
            }
        }
    return {
        state,
        reatReqest,

    }
}
