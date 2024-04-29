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
@media screen and (max-width: 800px) {
  .item__showing {
    flex-wrap: wrap;
  }

  .item__showing .imagen-show img {
    max-width: 100%;
    max-height: 300px;
    min-height: 300px;
    min-width: 100%;
  }

  .item__showing .imagen-show {
    width: 100%;
    height: 100%;
  }
}

.descripcion {
  padding: 10px;
}

.carrusel {
  background: rgba(225, 225, 225, 0.2);
  padding: 10px;
  margin: 0;
  border-radius: 10px;
  box-shadow: 8px 8px 0 black;
}

.item__showing img {
  max-width: 800px;
  max-height: 400px;
  min-height: 400px;
  min-width: 800px;
  border: 1.2rem solid black;
  border-radius: 10px;
}

.item__showing {
  opacity: 1;
  display: flex;
  margin-top: 10px;
  padding: 2rem;
  transition: 2s all ease;
}

.title-carrusel h2 {
  font-size: 60px;
}

.carrusel_cont {
  padding: 20px;
  color: white;

  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  background: black
}

.carousel__slide {
  padding: 5px;
}

.carousel__item {

  border: 5px solid black;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  color: black;
  cursor: pointer;

}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>