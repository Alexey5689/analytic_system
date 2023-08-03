import {createRouter, createWebHistory} from 'vue-router';
import { routes } from './routes.js';
import store from '../store/index.js';

const router = createRouter({
    routes,
    history: createWebHistory(),
})


export default router;
