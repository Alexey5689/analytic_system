import Register from '../components/Register.vue'
import EndRegister from "../components/endRegister.vue";
import Change from '../components/endChangePass.vue';
import ConfReg from '../components/confirmRegister.vue';

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
    {
        name: "ConfReg",
        path: '/conf-reg',
        component: ConfReg
    },


]
