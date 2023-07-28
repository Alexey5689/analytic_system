import {createRouter, createWebHistory} from 'vue-router';
import { routes } from './routes.js';
import store from '../store/index.js';

const router = createRouter({
    routes,
    history: createWebHistory(),
})
router.beforeEach((to, from)=>{
    // защиты роута
    if(to.meta.auth && !store.state.isAuth){
            alert("Вы не авторизованы");
            return { name:"Log" };
    }
    else if(to.meta.auth && store.state.isAuth){
        alert("Вы уже авторизованы");
        return { name:"Main" };
    }
})

export default router;
