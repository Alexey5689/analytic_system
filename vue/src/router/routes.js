import Register from '../components/Register.vue'
import EndRegister from "../components/endRegister.vue";
import Change from '../components/endChangePass.vue';
import ConfReg from '../components/confirmRegister.vue';
import ConfPassRec from '../components/confirmPassRecovery.vue';
import Login from "../components/Login.vue";
import Recovery from '../components/PassRecovery.vue'
import Confirm from '../components/confirmPassRecovery.vue'
import ConfirmLogin from '../components/confirmLogin.vue';
import MainPage from '../components/MainPage.vue'
import Analytics from '../components/Analytics.vue'
import Settings from '../components/Settings.vue'

export const routes = [
    {
        name: "Login",
        path: '/login',
        component: Login
    },
    {
        name: "Registration",
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
        path: '/change/:token',
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
    {
        name:"ConfmLog",
        path:'/confirm-login',
        component: ConfirmLogin,
    },
    {
        name: "Main",
        path: '/main/',
        component: MainPage,
        //meta: { auth: true},
        children:[
            {
                name: 'Analitics',
                path: '',
                component: Analytics,
                // meta: { auth: true},
            },
            {
                name: 'Settings',
                path: 'settings',
                component: Settings,
                //meta: { auth: true},
            }
        ]
    },
]
