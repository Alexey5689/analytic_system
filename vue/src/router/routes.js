import Register from '../components/Register.vue'
import EndRegister from "../components/endRegister.vue";

export const routes = [
    {
        name: "Reg",
        path: '/',
        component: Register
    },

    {
        name: "EndReg",
        path: '/end-register',
        component: EndRegister
    },

]
