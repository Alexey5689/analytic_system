import { reactive} from 'vue';
import axios from 'axios';
import { baseUrl } from '../api/instance';



//const getToken = async () =>{
    //    await axios.get(baseUrl+'/sanctum/csrf-cookie');
    //}
    // onMounted(async=>{
    //     getToken();
    // })
    //const AuthForm = async ()=>{
        // getToken();
        // try{
        //     const response = await axios({
        //         method:'POST',
        //         url:baseUrl + '/api/register',
        //         data:{
        //             email:state.email,
        //             password:state.password,
        //         },
        //         headers: {
        //             'X-CSRF-Token': Cookies.get('XSRF-TOKEN')
        //         }
        // },)
        // }catch(err){
        //        console.log(err);
        // }finally
        // }
    //}
     //'Content-Type': 'application/x-www-form-urlencoded',
                        //'authorization': `Bearer ${localStorage.getItem('access_token')}`,
                        // 'authorization': 'Bearer' +localStorage.getItem('access_token')},
     // const data = {
                //     id: response.data.id,
                //     access_token: response.data.access_token,
                // };
                // localStorage.setItem('new_pers', JSON.stringify(data));
                // localStorage.setItem('access_token', response.data.token);
                //localStorage.access_token = response.data.access_token;                    

// export function refreshToken(){
//     const state = reactive({
//         response:"",
//     })
//     const refResh = () =>{
//             try{
//                 const response = axios(baseUrl +'/api/list',{
//                     method:'GET',
//                     headers:{
//                         'X-CSRF-Token': Cookies.get('XSRF-TOKEN')
//                     }
//                 });
//                 console.log(response);
//             }catch(err){
                //console.log(err.data);
                // state.response = err.data.message;
                // if(err.response.status === 401){
                    //рефреш токена
//                     return axios.get(baseUrl+'/sanctum/csrf-cookie').then(response => {
//                         console.log(response);
//                     }).catch(err =>{
//                         console.log(err);
//                     })
//                 }
//             }
//         }
//         return{state, refResh}
// }


  // return axios({
    //     method:'GET',
    //     url:baseUrl + '/api/login/refresh',
     //     data:{
                    //         email:state.email,
                    //         password:state.password,
                    //     },
                    //     headers: {
                    //         'Content-Type': 'application/x-www-form-urlencoded',
                    //         'Authorization': `Bearer ${localStorage.getItem(access_token)}`,
                    //         'authorization': 'Bearer' + localStorage.getItem('access_token'),
                    //         'X-CSRF-Token': Cookies.get('XSRF-TOKEN')

                    //     }, 
                    // },).then(res=>{
                    //     localStorage.setItem('access_token', res.data.access_token)
                    // }).catch(err => {
                    //     console.log(err.data);
                    // })