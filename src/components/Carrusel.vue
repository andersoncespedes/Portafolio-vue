<template>
  <h2>Proyectos</h2>
  <hr>
  <Carousel :itemsToShow="2" :wrapAround="true" :transition="500" >
    <Slide v-for="slide in imgs" :key="slide">
      <div class="carousel__item">
        <img :src="slide" style="max-width: 400px; max-height: 300px;">
        <h3 :src="slide">Hola</h3>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import imagen from '@/assets/Img/MillGame.png'; 
export default defineComponent({
  name: 'Autoplay',
  data() {
    return {
      imgs: [
        imagen,
        "https://i.blogs.es/e239cb/crear-wallpapers-portada/1366_2000.jpeg"
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
.carousel__slide {
  padding: 5px;
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

.carousel__slide--active ~ .carousel__slide {
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