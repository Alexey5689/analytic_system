//import HelloWorld from '../components/HelloWorld.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'

export const routes = [
    {
        name: "Hi",
        path: '/',
        component: Register
    },
    {
        name: "Reg",
        path: '/registration',
        component: Register
    },
    {
        name: "Log",
        path: '/login',
        component: Login
    },

]
