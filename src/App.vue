<template>
  <div id="app">
    <b-navbar toggleable="lg" variant="info" sticky="true">
        <b-navbar-brand><img class="logo" alt="country cards logo" src="./assets/country_cards_logo.png"></b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
    <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-item> Home </b-nav-item>
                <b-nav-item> Randomizer </b-nav-item>
                <b-nav-item> Categories </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
      </b-navbar>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
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
  color: rgb(121, 255, 255);
  font-weight: bold;
  cursor: pointer;
}
.logo {
  height: 60px;
}

</style>
