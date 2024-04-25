<template>
  <div class = "carrusel_cont">
    <div class = "title-carrusel">
      <center>
        <h2><v-icon name="md-rocket-round" scale="2"></v-icon>Proyectos<v-icon name="md-rocket-round" scale="2"></v-icon></h2>
      </center>
    </div>
      
    <Carousel :itemsToShow="2" :wrapAround="true" :transition="500" class="carrusel">
      <Slide v-for="slide in imgs" :key="slide">
        <div class="carousel__item">
          <img :src="slide.imagen" style="max-width: 400px; min-width: 400px; min-height: 200px; max-height: 200px;">
          <h3 >{{ slide.nombre }}</h3>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import MillGame from '@/assets/Img/MillGame.png';
export default defineComponent({
  name: 'Autoplay',
  data() {
    return {
      imgs: [
        {
          nombre:"MillGame",
          imagen:MillGame,
        },
        {
          nombre:"Al Azar",
          imagen:"https://i.blogs.es/e239cb/crear-wallpapers-portada/1366_2000.jpeg"
        }
      ]
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
})
</script>

<style>
.carrusel{
  background: rgba(225, 225, 225, 0.2);
  padding: 10px;
  margin:0;
  border-radius: 10px;
  box-shadow: 8px 8px 8px black;

}
.title-carrusel h2{
  font-size: 60px;
}
.carrusel_cont{
  padding: 20px;
  color:white;
  height: 70vh;
  background: linear-gradient(-65deg, rgb(43, 75, 255) 20% , rgb(252, 62, 62) 80%);
}
.carousel__slide {
  padding: 5px;
}
.carousel__item{
 
  border: 5px solid black;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  color: black;

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