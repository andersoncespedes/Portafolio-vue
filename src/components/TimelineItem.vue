<template>
    <div class="timeline-item row">
      <div class="timeline-content col-md-8">
        <h3>{{ item.title }}</h3>
        <p style="color:beige">{{ item.description }}</p>
              <hr class="timeline-content__hr">
      </div>

      <div class="timeline-date col-md-4">
        {{ item.date }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  
  .timeline-content {
    border-right: 2px solid black;
    padding: 20px;  
  }
  .timeline-content p {
    font-size: 1.5rem;
  }
  .timeline-content__hr
  {
    background:linear-gradient(to left, black, rgba(0, 0, 0, 0)) ;
    height: 10px;
    border: none;
  }
  .timeline-date {
    padding: 5px 10px;
    border-radius: 5px;
    padding: 20px;
    font-size: 1.2rem;
    
    font-weight: bold;
    color:black;

  }
  </style>