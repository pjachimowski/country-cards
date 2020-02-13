<template>
  <div class="categories">
      <div class="category-test-box"> 
        <h4>  Country Card - Categories </h4>
        <h6>Please select the continent</h6> 
        <div class="category-selector">
          <b-form-select v-model="selected" :options="regions" @change="updateCountries(selected)" ></b-form-select>
        </div>
        <hr/>
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

.category-test-box {
  align-content: center;
  padding: 50px;
  margin: 50px;
}
.category-selector {
  width: 200px;
}
hr {
  background-color: #e6e6e6;
  margin-top: 35px;
  margin-bottom: 35px; 
  width: 80%;
  height: 0.5px;
}

</style>
