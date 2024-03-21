import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import store from './store/index1'
import router from './router'

createApp(App).use(router).use(store).mount('#app')

