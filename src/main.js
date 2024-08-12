import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'bootstrap-icons/font/bootstrap-icons.css';
createApp(App)
.use(router)
.mount('#app')
