<template>
  <div class="home">
        <b-jumbotron class="jumbotron-style" header="Welcome" lead="Get information about countries via a RESTful API">
        <p>Country Cards is a personal project for DTT assigment</p>
         <b-button variant="info" href="https://restcountries.eu/#api-endpoints" target="_blank">RESTful API</b-button>
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