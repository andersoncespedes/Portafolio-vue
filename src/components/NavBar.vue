<template>
    <header :class="{ 'sticky': isSticky }">
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { onUnmounted, ref } from 'vue';
  
  const isSticky = ref(false);
  
  const handleScroll = () => {
    isSticky.value = window.pageYOffset > 0;
  };
  
  // Registra el evento de scroll cuando el componente se monta
  window.addEventListener('scroll', handleScroll);
  
  // Elimina el evento de scroll cuando el componente se destruye
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  nav {
    background:linear-gradient(to right, rgb(43, 75, 255), rgb(252, 62, 62));
    color: white;
    padding: 10px 20px;
    
  }
  
  header {
    box-shadow: 0 0.2em 0.2em black;
    transition: 300ms all ease;
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
  .sticky ul li{
   padding: 5px;
  }
  </style>