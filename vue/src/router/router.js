import {createRouter, createWebHistory} from 'vue-router';
import { routes } from './routes.js';
import {useToken} from '../stores/useToken.js';


const router = createRouter({
    routes,
    history: createWebHistory(),
})
router.beforeEach((to, from)=>{
    const token = useToken();
    if(to.meta.auth && !token.IsLogIn){
        alert("Вы не авторизованы");
        return { name:"Login" };
}
})



export default router;
