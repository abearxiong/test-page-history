import { routes } from './routes/index';
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const app = createApp(App);
app.use(routes);

app.mount('#app');
