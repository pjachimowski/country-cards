<template>
  <div class='randomizer'>
      <h2>10 examples of Country Cards</h2>
      <h3>Click to see more details</h3>
        <div class="container" deck>
          <div class="row">
            <div class="col-md-4 col-lg-4 mx-auto mb-4" >
              <b-button class="text-uppercase" @click="generateRandom" variant="outline-info">Take me anywhere</b-button>
              <p>  Random Country Card </p>
              <CountryCard v-bind:randomizer="randomizer" v-bind:countryId="randomID"/>
            </div>
          </div>
        </div>
        <FooterComp />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { CountriesRepo } from '../repositories/CountriesRepo';
import FooterComp from '@/components/FooterComp.vue';
import CountryCard from '@/components/CountryCard.vue';
// import axios from 'axios';
 
@Component({
  name: 'randomizer',
  components: {
    FooterComp,
    CountryCard,
  },
})
 
export default class Randomizer extends Vue {
  apiData = [];
  randomID = 0;
  maxId = 250;
 
  mounted () {
    const countriesRepo = new CountriesRepo();
    this.generateRandom();
    countriesRepo.countries.then((responseFromCountries) => {
      this.apiData = responseFromCountries;
    });
  }

 generateRandom() {
    this.randomID = Math.floor((Math.random() * this.maxId));
  }
}

//MY TRY ON

//  generateRandom() {
//     this.randomID = getRandomInt(195);
//  }

//   getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }

//MY TRY ON


// FOUND ONLINE

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(getRandomInt(3));
// expected output: 0, 1 or 2

// FOUND ONLINE

</script>

<style scoped>

h2 {
  margin-top: 40px;
}
 
h3 {
  margin-bottom: 40px;
}

.randomizer {
  text-align: center;
}

</style>
