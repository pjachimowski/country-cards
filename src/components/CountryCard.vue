<template>
    <div class='country-card'>
        <b-card class="card-style" header-tag="header" footer-tag="footer">
            <template v-slot:header>
                <div class="card-title mb-0">  {{ apiData[countryId].name }} </div>
            </template>
            <div class="card-content">
                <img class="flag-style" v-bind:src="apiData[countryId].flag" alt="flag">
                <b-card-text> <i class="fas fa-globe"></i> {{ apiData[countryId].subregion }}</b-card-text>
                <b-card-text> <i class="fas fa-city"></i> {{ apiData[countryId].capital }}</b-card-text>
                <b-card-text> <i class="fas fa-users"></i> {{ apiData[countryId].population.toLocaleString() }}</b-card-text>
                <b-button class="country-button" variant="info"><router-link tag="li" :to="{name:'detailedPage', params:{countryId}}">Details</router-link></b-button>
                <!-- ?countryId={{countryId}}   -->
           </div>
            <template v-slot:footer>
                <em>{{ apiData[countryId].alpha3Code }}</em>
            </template>
        </b-card>
    </div>
</template>
 
<script lang='ts'>
import { Component,  Vue } from 'vue-property-decorator';
import { CountriesRepo } from '../repositories/CountriesRepo';
// import detailedPage from '../views/DetailedPage.vue';
 
@Component({
  name: 'countryCard',
  props: {
    countryId: Number
  }
})
 
export default class CountryCard extends Vue {
  public apiData = [];
 
  public mounted () {
    const countriesRepo = new CountriesRepo();
    // eslint-disable-next-line 
    countriesRepo.countries.then((responseFromCountries: any) => {
      this.apiData = responseFromCountries;
         }); 
     }
  }

</script>
 
<style scoped>
.card-title {
    text-transform: uppercase;
    font-size: large;
}

.country-button {
    list-style: none;
}
.card-style {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
 
.flag-style{
  float: right;
  object-fit: cover;
  border-radius: 50%;
  height: 80px;
  width: 80px;;
  border: 2px solid #5bc0de;
  padding: 5px;
  image-resolution: initial;
  background-repeat: no-repeat;
  margin-bottom: 10px;
}
 
.card-content {
  text-align: left;
}
</style>
