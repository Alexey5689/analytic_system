//import HelloWorld from '../components/HelloWorld.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import confirmRegister from '../components/confirmRegister.vue'
import endRegister from '../components/endRegister.vue'

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
    {
        name: "ConfReg",
        path: '/confirm-registration',
        component: confirmRegister
    },
    {
        name: "EndReg",
        path: '/end-registration',
        component: endRegister
    },
]
