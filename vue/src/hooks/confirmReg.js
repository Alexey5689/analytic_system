import { useStore } from 'vuex';
import Cookies from 'js-cookie';


export function confEmail(){
    const store = useStore();
    const sendMail = (token) => {
        Cookies.set('reg_token', token)
        store.commit('getRegToken', token);
    }
    const getEmail = async()=>{
        try{
            const response = await axios({
                method: "GET",
                url:config.appBackendURL + ':' + config.appBackendPort + '/api/verify/',
                params: {
                    token: Cookies.get('reg_token'),
                  }
            },)
        }catch(err){
            state.response = err.response;
        }finally{

        }
    }
    return{ sendMail, getEmail }
}
