<template>
    <div class="timeline">
      <timeline-item v-for="(item, index) in items" :key="index" :item="item" />
    </div>
  </template>
  
  <script>
  import TimelineItem from "./TimelineItem.vue";
  
  export default {
    components: {
      TimelineItem
    },
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .timeline {
    margin: auto;
    width: 30%;
    flex-wrap: wrap;
    

  }
  </style>