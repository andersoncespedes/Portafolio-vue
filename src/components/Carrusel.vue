<script>
import { defineComponent, onMounted } from 'vue'
import { Carousel, Pagination, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import MillGame from '@/assets/Img/MillGame.png';
import starbucks from '@/assets/Img/starbucks.png';
import Pokemon from '@/assets/Img/Pokemon.png';
import RickAndMorty from "@/assets/Img/RickAndMorty.png"

export default defineComponent({
  name: 'Autoplay',
  methods: {
    ShowData: function (ev, el) {
      const node = ev.target.parentNode.dataset;
      this.showItem.nombre = node.nombre;
      this.showItem.imagen = node.imagen;
      this.showItem.descripcion = node.descripcion;

      this.$refs.item__showing.style.transition = "none";
      new Promise(
        (resolve, reject) => {
          this.$refs.item__showing.style.opacity = "0";
          setTimeout(() => {
            resolve();
          }, 300);
        }
      )
        .then(e => {
          setTimeout(() => {
            this.$refs.item__showing.style.position = "relative";
            this.$refs.item__showing.style.opacity = "1";
            this.$refs.item__showing.style.transition = "1s all ease";
          }, 300);


        })
    },
  },
  data() {
    return {
      showItem: {
        nombre: "MillGame",
        imagen: MillGame,
        descripcion: "Un juego desarrollado en canvas basado en final fantasy. en este juego se desafian tus conocimientos generales para poder avanzar y ganar."
      },
      imgs: [
        {
          nombre: "MillGame",
          imagen: MillGame,
          descripcion: "Un juego desarrollado en canvas basado en final fantasy. en este juego se desafian tus conocimientos generales para poder avanzar y ganar."
        },
        {
          nombre: "Starbucks",
          imagen: starbucks
        }
        ,
        {
          nombre: "Pokemon Api",
          imagen: Pokemon
        }
        ,
        {
          nombre: "Rick And Morty API",
          imagen: RickAndMorty
        }
      ]
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
})
</script>
<style src="./Carrusel.vue.css"></style>
<template>
  <div class="carrusel_cont" v-scroll="handleScrollCarrusel">
    <div class="title-carrusel">
      <center>
        <h2><v-icon name="md-rocket-round" scale="2"></v-icon>Proyectos<v-icon name="md-rocket-round"
            scale="2"></v-icon></h2>
      </center>
    </div>

    <Carousel :itemsToShow="2" :wrapAround="true" :transition="500" class="carrusel">
      <Slide v-for="slide in imgs" :key="slide">
        <div class="carousel__item" v-on:click="ShowData" :data-nombre="slide.nombre"
          :data-descripcion="slide.descripcion" :data-imagen="slide.imagen">
          <img :src="slide.imagen" class="img__carrusel__item"
            style="max-width: 500px; min-width: 500px; min-height: 300px; max-height: 300px;">
          <h3>{{ slide.nombre }}</h3>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
        <Navigation />

      </template>
    </Carousel>
    <div class="item__showing" ref="item__showing">
      <div class="imagen-show">
        <img :src="showItem.imagen" alt="">
      </div>

      <div class="descripcion">
        <h2>{{ showItem.nombre }}</h2>
        <h3>{{ showItem.descripcion }}</h3>
      </div>

    </div>
  </div>
</template>


<style>

</style>