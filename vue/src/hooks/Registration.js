
import { reactive} from 'vue';
import axios from 'axios';


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
                    url:'http://192.168.0.35:8080/api/register',
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


