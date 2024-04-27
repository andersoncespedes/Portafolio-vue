<script setup>
import Carrusel from './components/Carrusel.vue';
import ShowCase from './components/ShowCase.vue';
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
    <nav>
      <ul>
        <li><a href="" v-on:click="scrollToElement" name="inicio"><v-icon name="fa-home" scale="1.5"></v-icon>Inicio</a>
        </li>
        <li><a href="" v-on:click="scrollToElement" name="proyectos"><v-icon name="si-codeproject"
              scale="1.5"></v-icon>Proyectos</a>
        </li>
        <li><a href="#"><v-icon name="fa-user-tie" scale="1.5"></v-icon> Acerca de</a></li>
        <li><a href="#"><v-icon name="md-contacts" scale="1.5"></v-icon> Contacto</a></li>
      </ul>
    </nav>
  </header>
  <ShowCase id="inicio" />

  <Carrusel id="Projectos" />

</template>


<style setup>
nav {
  background: linear-gradient(to right, rgb(43, 75, 255), rgb(252, 62, 62));
  color: white;
  padding: 10px 20px;

}

header {
  box-shadow: 0 0.2em 0.2em black;
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
</style>