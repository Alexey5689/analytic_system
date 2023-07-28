import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'; //роутинг
import components from './components/UIcomp'//переисп компоненты
import store from './store'; //глоб хранилище

const app = createApp(App);
//переисп компоненты
components.forEach(component => {
    app.component(component.name, component);
});
console.log(components);
app
    .use(store)//глоб хранилище
    .use(router)//роутинг
    .mount('#app')
