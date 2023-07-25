import Register from '../components/Register.vue'
import MainPage from '../components/MainPage.vue'
import Analytics from '../components/Analytics.vue'
import Settings from '../components/Settings.vue'


export const routes = [
    {
        name: "Main",
        path: '/main/',
        component: MainPage,
        meta: { auth: true},
        children:[
            {
                name: 'Analitics',
                path: '',
                component: Analytics,
                meta: { auth: true},
            },
            {
                name: 'Settings',
                path: 'settings',
                component: Settings,
                meta: { auth: true},
            }
        ]
    },
    {
        name: "Reg",
        path: '/',
        component: Register
    },





]


