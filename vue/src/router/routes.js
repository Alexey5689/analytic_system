import Register from '../components/Register.vue'
import Main from '../components/MainPage.vue'
import Analytics from '../components/Analytics.vue'
import Settings from '../components/Settings.vue'


export const routes = [
    {
        name: "Reg",
        path: '/registration',
        component: Register
    },

    {
        name: "Main",
        path: '/main',
        component: Main
    },

    {
        name: 'Аналитика',
        path: '/analytics',
        component: Analytics
    },
    {
        name: 'Настройки',
        path: '/settings',
        component: Settings
    }
]


