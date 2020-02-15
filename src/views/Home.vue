<template>
  <div class="home">
      <b-jumbotron class="jumbotron-style" header="Welcome" lead="Get information about countries of the world.">
        <p>Country Cards is a personal project created using free public API.</p>
        <b-button variant="info" href="https://restcountries.eu/#api-endpoints" target="_blank">Go to API</b-button>
      </b-jumbotron>
    <Examples />
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';
import Examples from '@/components/Examples.vue';

export default {
  name: 'home',
  components: {
    Examples,
    FooterComp,
  },
};
</script>

<style scoped>
/* jumbotrone */
.jumbotron-style {
  background: url("../assets/jumbotronimage.jpg");
  border-radius: 0%;
  color: white;
  background-position: center; 
  background-size: cover;
  height: 100%;
}
</style>