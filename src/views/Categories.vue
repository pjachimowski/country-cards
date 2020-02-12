<template>
  <div class="categories">
      <div class="category-test-box"> 
        <h4>  Country Card - Categories </h4>
        <div class="container" deck>
          <div class="row">
            <div class="category-selector">
              <b-form-select v-model="selected" :options="regions" @change="updateCountries(selected)" ></b-form-select>
            </div>

              <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
              <!-- change all selectedRegion to filteredCountries --> 
              <!-- <div class="mt-3">Data: {{ selectedRegions }}</div> -->

            <div class="col-md-4 col-lg-4 mx-auto mb-4" v-for="selectedRegion in selectedRegions" :key="selectedRegion">  
                  <CountryCard  v-bind:countryId="selectedRegion.id" />
            </div>
          </div>
        </div>
        <!-- <h3> {{ apiData[0].region }} </h3> -->
        <!-- MY TRY ON CATEGORIES --> 
        
      </div>
    <FooterComp />
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CountriesRepo } from '../repositories/CountriesRepo';
import CountryCard from '@/components/CountryCard.vue';
import FooterComp from '@/components/FooterComp.vue';
import axios from 'axios';
 
 

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

      // options: apiData.map((apiRow) => apiRow.region)
      //                 .map((region) => ({ value: region, text: region }))
      // options: [
      //   { value: null, text: 'Please select an option' },
      //   { value: "apiData[0].name", text: 'Afganistan' },
      //   { value: 'b', text: 'b' },
      //   { value: { C: '3PO' }, text: 'c' },
      // ]
    }
  }
})

export default class categories extends Vue {
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

</style>
