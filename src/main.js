import "./assets/main.css";
import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import App from "./App.vue";
import Carrusel from "./components/Carrusel.vue";
import ShowCase from "./components/ShowCase.vue";
import About from "./components/About.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaFlag,
  RiZhihuFill,
  BiGithub,
  BiLinkedin,
  BiTwitter,
  BiInstagram,
  FaLaravel,
  CoJs,
  CoPhp,
  IoLogoNodejs,
  SiDotnet,
  CoSpring,
  CoDjango,
  IoLogoVue,
  CoAngular,
  SiBlazor,
  CoBootstrap,
  SiTailwindcss,
  SiCsharp,
  CoPython,
  LaJava,
  FaRocket,
  LaHtml5,
  IoLogoCss3,
  FaDatabase,
  CoMysql,
  CoPostgresql,
  SiMicrosoftsqlserver,
  SiTypescript,
  MdRocketRound,
  CoMongodb,
  FaHome,
  SiCodeproject,
  FaUserTie,
  MdContacts,
} from "oh-vue-icons/icons";

addIcons(
  FaFlag,
  RiZhihuFill,
  BiGithub,
  BiLinkedin,
  FaRocket,
  BiTwitter,
  SiTypescript,
  BiInstagram,
  MdRocketRound,
  FaLaravel,
  FaUserTie,
  CoJs,
  SiCodeproject,
  MdContacts,
  CoPhp,
  IoLogoNodejs,
  SiDotnet,
  CoSpring,
  CoDjango,
  IoLogoVue,
  CoMongodb,
  FaHome,
  LaJava,
  CoAngular,
  SiBlazor,
  CoBootstrap,
  SiTailwindcss,
  SiCsharp,
  CoPython,
  LaHtml5,
  IoLogoCss3,
  FaDatabase,
  CoMysql,
  CoPostgresql,
  SiMicrosoftsqlserver
);
const app = createApp(App);
const routes = [
  {
    path: "/",
    component: ShowCase,
    meta: { transition: "slide-left" },
  },
  {
    path: "/projects",
    component: Carrusel,
    meta: { transition: "slide-left" },
  },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
