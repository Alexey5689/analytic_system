import Register from '../components/Register.vue'
import Login from '../components/Login.vue'

export const routes = [
    {
        name: "Reg",
        path: '/',
        component: Register
    },
    {
        name: "Log",
        path: '/login',
        component: Login
    },
]
