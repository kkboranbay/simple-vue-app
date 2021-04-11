<template>
  <div class="container">
    <h3>Version:</h3>
    <h4>{{version_data.version}}</h4>
  </div> 
</template>
<script>
  import axios from 'axios';

  export default {
    name: 'Version',
    data() {
      return {
        version_data: null,
      };
    },
    created: function() {
      axios
        .get('http://api.sa.homework:80/version')
        .then(res => {
          this.version_data = res.data;
        })
    }
  }
</script>
<style>
  h3 {
    margin-bottom: 5%;
  }
</style>