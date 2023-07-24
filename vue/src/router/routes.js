import Register from '../components/Register.vue'
import MainPage from '../components/MainPage.vue'
import Analytics from '../components/Analytics.vue'
import Settings from '../components/Settings.vue'


export const routes = [
    {
        name: "Main",
        path: '/main/',
        component: MainPage,
        children:[
            {
                name: 'Analitics',
                path: '',
                component: Analytics
            },
            {
                name: 'Settings',
                path: 'settings',
                component: Settings
            }
        ]
    },
    {
        name: "Reg",
        path: '/',
        component: Register
    },





]


