<template>
  <div class='randomizer'>
    <h1>Randomizer</h1>
    <hr/>
    <p>Here you can get a random Country Card.</p>
    <div class="container">
      <b-button class="randomizer-btn" @click="generateRandom" variant="outline-info">Take me anywhere</b-button>
      <b-row>
        <b-col cols="12" lg="4" offset-lg="4" align-self="center" class="mb-4">
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
