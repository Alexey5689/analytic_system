import {createRouter, createWebHistory} from 'vue-router';
import { routes } from './routes.js';
import store from '../store/index.js';





const router = createRouter({
    routes,
    history: createWebHistory(),
})
router.beforeEach((to, from)=>{
    // защиты роута
    // if(to.meta.auth && !store.state.auth){
    //         alert("Вы не авторизованы");
    //         return { name:"Log" };
    // }
    // else if(to.meta.reg && !store.state.reg){
    //     return { name:"Registration" };
    // }
})

export default router;
