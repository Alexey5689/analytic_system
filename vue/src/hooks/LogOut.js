// import axios from 'axios';
// import config from "../../vue.config.js";
// import { useStore } from 'vuex';
// import Cookies from 'js-cookie';

// export function LogOut(){
//     const store = useStore();
//     async function loginOut(){
//         const token = JSON.parse(Cookies.get('XSRF-TOKEN'));
//         try{
//             const response = await axios({
//                 method:'POST',
//                 url:config.appBackendURL+ ':' + config.appBackendPort +'/api/logout',
//                 headers: {
//                     'Authorization': `Bearer ${token.IsAuthorisation}`,
//                 }
//             },)
//             store.commit('logOut');
//         }catch(err){
//             console.log(err);
//         }finally{

//         }
//     }
//     return{
//         loginOut
//     }

// }
