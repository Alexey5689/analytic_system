import {defineStore} from 'pinia';
import axios from 'axios';
import config from '../../vue.config.js';
import {useToken} from '../stores/useToken.js';
export const useLogOut = defineStore('LogOut',{
    state:()=>({
       logOut:false,
       response:''
    }),
    getters:{
        statelogOut(){
            return this.logOut;
        },
    },
    actions:{
        changeStatelogOut(){
            this.logOut =!this.logOut
        },
        async exit(){
            const token = useToken();
            try{
                const response = await axios({
                    method:'POST',
                    url:config.appBackendURL+ ':' + config.appBackendPort +'/api/logout',
                    headers: {
                        'Authorization': `Bearer ${token.IsLogIn}`,
                    }
                },)
                token.logOut();
            }catch(err){
                console.log(err);
            }finally{

            }
        }

    }
})
