<template>
  <div class="categories">
    <h1>Categories</h1>
    <hr/>
    <p>Please select the continent</p> 
    <div class="container">
      <b-row cols="1">
        <b-col cols="6" col-lg="2" style="text-align: center;">
          <b-form-select v-model="selected" :options="regions" @change="updateCountries(selected)"></b-form-select>
        </b-col>
      </b-row>
      <hr class="thin"/>
      <div class="container" deck>
        <div class="row">
          <div class="col-md-4 col-lg-4 mx-auto mb-4" v-for="selectedRegion in selectedRegions" :key="selectedRegion">  
            <CountryCard  v-bind:countryId="selectedRegion.id" />
          </div>
        </div>
      </div>    
    </div>
    <FooterComp />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { CountriesRepo } from '../repositories/CountriesRepo';
import CountryCard from '@/components/CountryCard.vue';
import FooterComp from '@/components/FooterComp.vue';
// import axios from 'axios';
 
 

@Component({
  name: "Categories",
  components: {
    FooterComp,
    CountryCard,
  },
  props: ["caregories"],
  data() {
    return {
      selected: null,
      options: [],
    }
  }
})

export default class Categories extends Vue {
  apiData = [];
  regions = [];
  selectedRegions = [];

  updateCountries(selectedRegion) {
      this.selectedRegions = this.apiData.filter(apiRow =>  apiRow.region === selectedRegion);
  }

    mounted () {
     const countriesRepo = new CountriesRepo();
     countriesRepo.countries.then((responseFromCountries) => {

      this.apiData = responseFromCountries;
      const regionsArray = [...new Set(this.apiData.map((apiRow) => apiRow.region))];
      this.regions = regionsArray.map((region) => ({ value: region, text: region }))
     });

  }
 }
</script>

<style scoped>
.categories {
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

.thin {
  background-color: #e6e6e6;
  margin-top: 35px;
  margin-bottom: 35px; 
  width: 80%;
  height: 0.5px;
}

</style>
