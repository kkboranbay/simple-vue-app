<template>
  <div class="container">
    <h3>About:</h3>
    <ul>
        <li>Organization: {{about_data.organization}}</li>
        <li>Phone: {{about_data.phone}}</li>
        <li>Description: {{about_data.desc}}</li>
    </ul>
  </div> 
</template>
<script>
  import axios from 'axios';

  export default {
    name: 'About',
    data() {
      return {
        about_data: null,
      };
    },
    created: function() {
      axios
        .get('http://api.sa.homework:9000/about')
        .then(res => {
          this.about_data = res.data;
        })
    }
  }
</script>
<style>
  h3 {
    margin-bottom: 5%;
  }
</style>