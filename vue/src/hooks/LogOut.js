import axios from 'axios';
import config from "../../vue.config.js";
import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import { reactive } from 'vue';
export function LogOut(){
    const store = useStore();
    const state = reactive({
       response:''
    })
    async function loginOut(){
        const token = JSON.parse(Cookies.get('XSRF-TOKEN'));
        try{
            const response = await axios({
                method:'POST',
                url:config.appBackendURL+ ':' + config.appBackendPort +'/api/logout',
                headers: {
                    'Authorization': `Bearer ${token.IsAuthorisation}`,
                }
            },)
            store.commit('logOut');
        }catch(err){
            console.log(err);
        }finally{

        }
    }
    return{
        loginOut,
        state,
    }

}
