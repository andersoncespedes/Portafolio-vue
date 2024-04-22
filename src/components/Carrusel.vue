<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in imgs" :key="slide">
      <div class="carousel__item">
        <img :src="slide" style="width: 100%; max-height: 400px;">
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

export default defineComponent({
  name: 'Autoplay',
  data() {
    return {
      imgs: [
        "https://wallpapers.com/images/hd/silhouette-of-landscape-fondos-de-pantalla-o7laa9cz8zah3k35.jpg",
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