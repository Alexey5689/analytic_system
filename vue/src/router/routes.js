import Register from '../components/Register.vue'
import EndRegister from "../components/endRegister.vue";
import Change from '../components/endChangePass.vue';
import ConfReg from '../components/confirmRegister.vue';
import ConfPassRec from '../components/confirmPassRecovery.vue';
import Login from "../components/Login.vue";
import Recovery from '../components/PassRecovery.vue'
import Confirm from '../components/confirmPassRecovery.vue'

export const routes = [
    {
        name: "Login",
        path: '/login',
        component: Login
    },
    {
        name: "Reg",
        path: '/',
        component: Register
    },
    {
        name: "EndReg",
        path: '/end-register/:token',
        component: EndRegister
    },

    {
        name: "ConfReg",
        path: '/conf-reg',
        component: ConfReg
    },

    {
        name: "Change ",
        path: '/change',
        component: Change
    },
    {
        name: "ConfPassRec",
        path: '/conf-pass',
        component: ConfPassRec
    },
    {
        name: "Recovery",
        path: '/reset-password',
        component: Recovery,
    },

    {
        name: "Confirm",
        path: '/confirm-pass',
        component: Confirm
    },

    {
        name: "Change",
        path: '/reset-password/:token',
        component: Change
    },

]
