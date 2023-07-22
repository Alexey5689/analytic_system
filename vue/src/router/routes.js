import HelloWorld from '../components/HelloWorld.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import errLogin from '../components/errorLogin.vue'

export const routes = [
    {
        name: "Hi",
        path: '/',
        component: HelloWorld
    },
    {
        name: "Reg",
        path: '/registration',
        component: Register
    },
    {
        name: "Log",
        path: '/login',
        component: Login,
    },
]
