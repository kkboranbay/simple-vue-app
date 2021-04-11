<template>
  <div class="container">
    <h3>Profile:</h3>
    <ul>
        <li>ID: {{profile_data.id}}</li>
        <li>name: {{profile_data.name}}</li>
        <li>surname: {{profile_data.surname}}</li>
        <li>photo: {{profile_data.photo}}</li>
    </ul>
  </div> 
</template>
<script>
  import axios from 'axios';

  export default {
    name: 'Profile',
    data() {
      return {
        profile_data: null,
      };
    },
    created: function() {
      axios
        .get('http://api.sa.homework:80/profile')
        .then(res => {
          this.profile_data = res.data;
        })
    }
  }
</script>
<style>
  h3 {
    margin-bottom: 5%;
  }
</style>