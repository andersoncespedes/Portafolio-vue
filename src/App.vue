<script setup>
import Carrusel from './components/Carrusel.vue';
import ShowCase from './components/ShowCase.vue';
import About from './components/About.vue';

import { onUnmounted, ref, defineComponent } from 'vue';

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.pageYOffset > 0;
};
const scrollToElement = (ev) => {
  ev.preventDefault();
  const target = ev.target.getAttribute('name'); // Obtener el nombre del elemento de forma correcta
  let el;

  switch (target) {
    case "proyectos":
      el = document.getElementById("Projectos");
      el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      break;
    case "inicio":
      el = document.getElementById("inicio");
      el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      break;
    default:
      break;
  }
}

// Registra el evento de scroll cuando el componente se monta
window.addEventListener('scroll', handleScroll);

// Elimina el evento de scroll cuando el componente se destruye
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);

});
</script>
<template>

  <header :class="{ 'sticky': isSticky }">
    <b-navbar toggleable="sm" class="navbar">
      <ul>
        <li>
          <RouterLink to="/"><v-icon name="fa-home" scale="1.5"></v-icon>Inicio</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects"><v-icon name="si-codeproject" scale="1.5"></v-icon>Proyectos</RouterLink>
        </li>
        <li>
          <RouterLink to=""><v-icon name="fa-user-tie" scale="1.5"></v-icon> Acerca de</RouterLink>
        </li>
        <li><a href="#"><v-icon name="md-contacts" scale="1.5"></v-icon> Contacto</a></li>
      </ul>
    </b-navbar>
  </header>

  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.path" />
</router-view>

  <!--<ShowCase id="inicio" />--->

  <!--<Carrusel id="Projectos" />--->
  <!--<About/>--->

</template>


<style setup>
.navbar {
  background: linear-gradient(to right, rgb(43, 75, 255), rgb(252, 62, 62));
  color: white;
  padding: 10px 20px;

}

header {
  transition: 300ms all ease;
}

header:hover {
  opacity: 1;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin-right: 20px;
  padding: 10px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  opacity: 0.4;
}

.sticky ul li {
  padding: 5px;
}

@media screen and (max-width: 800px) {
  header nav ul li {
    font-size: 13px;
  }
}
</style>