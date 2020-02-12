<template>
  <div class="home">
        <b-jumbotron class="jumbotron-style" header="Welcome" lead="Here you can get detailed information about any country.">
        <p>Country Cards is a personal project created using free source API.</p>
        <b-button variant="info" href="https://restcountries.eu/#api-endpoints" target="_blank">Go to API</b-button>
      </b-jumbotron>
    <Visited />
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';
import Visited from '@/components/Visited.vue';

export default {
  name: 'home',
  components: {
    Visited,
    FooterComp,
  },
};
</script>

<style scoped>
.jumbotron-style {
  background: url("../assets/jumbotronimage.jpg");
  border-radius: 0%;
  color: azure;
  background-position: center; 
  background-size: cover;
}
</style>