//import HelloWorld from '../components/HelloWorld.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Recovery from '../components/PassRecovery.vue'
import Confirm from '../components/confirmPassRecovery.vue'
import Change from '../components/endChangePass.vue'

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
        name: "Recovery",
        path: '/recovery',
        component: Recovery
    },

    {
        name: "Confirm",
        path: '/confirm-pass',
        component: Confirm
    },

    {
        name: "Change",
        path: '/end-change-pass',
        component: Change
    },

]
