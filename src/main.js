import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import router from './routers.js'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
.use(router)
.mount('#app')
