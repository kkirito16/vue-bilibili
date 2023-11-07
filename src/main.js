import { createApp } from 'vue'
import './reset.scss'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import 'swiper/css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
createApp(App).use(VueAwesomeSwiper).use(router).mount('#app')
const app =createApp(App)

app.use(ElementPlus)
app.mount('#app')

