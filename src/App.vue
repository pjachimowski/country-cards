<template>
  <div id="app">
    <b-navbar toggleable="lg" variant="info" sticky="true">
      <b-navbar-brand><router-link to="/"><img class="logo" alt="country cards logo" src="./assets/country_cards_logo.png"></router-link></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items --> 
          <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link tag="li" to="/">Home</router-link></b-nav-item>
            <b-nav-item><router-link tag="li" to="/randomizer">Randomizer</router-link></b-nav-item>
            <b-nav-item><router-link tag="li" to="/categories">Categories</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
/* global for navbar */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav li {
  color: azure;
}

nav li:hover {
  color:  rgb(164, 235, 235)
}

nav li.router-link-active {
  color:azure;
}

nav li.router-link-exact-active {
  color: #ffab86;
  font-weight: bold;
  cursor: pointer;
}

.logo {
  height: 60px;
}


</style>
