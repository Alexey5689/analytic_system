import Cookies from 'js-cookie';
import axios from "axios";
import config from "../../vue.config.js";

export const LogOutModWin={
    state: ()=>({
        logOut:false,
    }),
    getters:{
        // модальное окно
        statelogOut(state){
            return state.logOut
        }
    },
    mutations:{
        changeStatelogOut(state){
            state.logOut = !state.logOut;
        },
        logOut(){
            Cookies.remove('XSRF-TOKEN', '');
            window.location.href ='/login';
        },
    },
    actions:{
        async loginOut({commit}){
            const token =JSON.parse(Cookies.get('XSRF-TOKEN'));
            try{
                const response = await axios({
                    method:'POST',
                    url:config.appBackendURL+ ':' + config.appBackendPort +'/api/logout',
                    headers: {
                        'Authorization': `Bearer ${token.IsAuthorisation}`,
                    }
                },)
                commit('logOut');
            }catch(err){
                console.log(err);
            }finally{

            }
        }
    },


}
