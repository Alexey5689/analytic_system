import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'; //роутинг
import components from './components/UIcomp'//переисп компоненты
import store from './store'; //глоб хранилище
import './components/compStyle/main.css';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);
//переисп компоненты
components.forEach(component => {
    app.component(component.name, component);
});
app .use(pinia)//Pinia
    .use(store)//глоб хранилище
    .use(router)//роутинг
    .mount('#app')
