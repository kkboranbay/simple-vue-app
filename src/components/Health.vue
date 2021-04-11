<template>
  <div class="container">
    <h3>Health:</h3>
    <h4>Status: {{health_data.status}}</h4>
  </div> 
</template>
<script>
  import axios from 'axios';

  export default {
    name: 'Health',
    data() {
      return {
        health_data: null,
      };
    },
    created: function() {
      axios
        .get('http://api.sa.homework:9000/health')
        .then(res => {
          this.health_data = res.data;
        })
    }
  }
</script>
<style>
  h3 {
    margin-bottom: 5%;
  }
</style>