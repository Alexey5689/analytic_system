import Register from '../components/Register.vue'
import EndRegister from "../components/endRegister.vue";
import Change from '../components/endChangePass.vue';

export const routes = [
    {
        name: "Reg",
        path: '/',
        component: Register
    },

    {
        name: "EndReg",
        path: '/end-register/:token?',
        component: EndRegister
    },
    {
        name: "Change",
        path: '/reset-password/:token?',
        component: Change
    },

]
