import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill, BiGithub, BiLinkedin, BiTwitter, BiInstagram } from "oh-vue-icons/icons";
addIcons(FaFlag, RiZhihuFill, BiGithub, BiLinkedin, BiTwitter, BiInstagram);
const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount('#app')
