<template>
  <div class='randomizer'>
      <h1>Randomizer</h1>
      <hr/>
      <p>Here you can get a random Country Card.</p>
        <div class="container" deck>
          <b-row>
            <b-col class="mx-auto mb-4">
              <b-button class="randomizer-btn" @click="generateRandom" variant="outline-info">Take me anywhere</b-button>
              <CountryCard v-bind:randomizer="randomizer" v-bind:countryId="randomID"/>
            </b-col>
          </b-row>
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
  maxId = 249;
 
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

.randomizer {
  text-align: center;
}

h1 {
  margin: 20px;
  text-transform: uppercase;
}

hr {
  background-color: #ffab86;
  height: 5px;
  width: 60px;
}

.randomizer-btn {
  margin: 10px;
  text-transform: uppercase;

}

</style>
