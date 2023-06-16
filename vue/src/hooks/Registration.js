
import { reactive} from 'vue';
import axios from 'axios';
import config from "../../vue.config.js";

export function RegTest(){
    const state = reactive({
            email: "",
            password:"",
            isReg: false,
            response: ''
    })
    const fetchForm = async () =>{
        try{
            const response = await axios({
                    method:'POST',
                    url:config.appBackendURL + ':' + config.appBackendPort + '/api/register',
                    data:{
                        email:state.email,
                        password:state.password,
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
            },)
            state.response = response;
            console.log(response);

        }catch(err){
            console.log(err.response.data);
        }finally{
            state.password = '';
            state.email = '';
            state.isReg = true;
        }

        //window.location.href ='/login';

    }
    return{state, fetchForm}

}


