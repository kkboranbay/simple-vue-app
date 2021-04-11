<template>
  <div class="hello">
    <h3>Open these pages: data is taken from the server: </h3>
    <ul>
      <li>
        <router-link to="/students">Students</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
       <li>
        <router-link to="/health">Health</router-link>
      </li>
       <li>
        <router-link to="/version">Version</router-link>
      </li>
      <li>
        <router-link to="/profile">Profile</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
