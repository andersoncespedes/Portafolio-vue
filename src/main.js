import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill, BiGithub, BiLinkedin, BiTwitter, BiInstagram, FaLaravel, CoJs, CoPhp, 
    IoLogoNodejs, SiDotnet, CoSpring, CoDjango, IoLogoVue, 
    CoAngular, SiBlazor, CoBootstrap, SiTailwindcss, SiCsharp, CoPython, LaJava ,
    LaHtml5, IoLogoCss3, FaDatabase, CoMysql, CoPostgresql, SiMicrosoftsqlserver, CoMongodb , FaHome, SiCodeproject,FaUserTie ,  MdContacts         } from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill, BiGithub, BiLinkedin, BiTwitter, BiInstagram, FaLaravel,FaUserTie, CoJs, SiCodeproject ,MdContacts,
    CoPhp, IoLogoNodejs, SiDotnet, CoSpring, CoDjango, IoLogoVue, CoMongodb,
    FaHome , LaJava ,
    CoAngular, SiBlazor,CoBootstrap , SiTailwindcss, SiCsharp, CoPython, LaHtml5, IoLogoCss3, FaDatabase, CoMysql, CoPostgresql, SiMicrosoftsqlserver   );
const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount('#app')
