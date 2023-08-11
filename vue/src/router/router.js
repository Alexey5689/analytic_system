import {createRouter, createWebHistory} from 'vue-router';
import { routes } from './routes.js';
import store from '../store/index.js';

const router = createRouter({
    routes,
    history: createWebHistory(),
})
router.beforeEach((to, from)=>{
    //логика защиты роутинга
    if(to.meta.auth && !store.state.IsAuthorisation){
            alert("Вы не авторизованы");
            return { name:"Login" };
    }
})



export default router;
