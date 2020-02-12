<template>
    <div class='countryCard'>
        <h4> {{ apiData[countryId].name }} </h4>    
    </div>
</template>
 
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { CountriesRepo } from '../repositories/CountriesRepo';
 
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
    countriesRepo.countries.then((responseFromCountries) => {
      this.apiData = responseFromCountries;
    //   as any[]
    });
  }
}
</script>
 
<style scoped>
h4 {
  text-transform: uppercase;
}

</style>
