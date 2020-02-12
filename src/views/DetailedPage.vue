<template>
  <div class="detailedPage">
    <b-container>
      <h1> Details about: <font style="color:#5bc0de"> {{ apiData[0].name }}</font> </h1>
      <div>
        <b-card>
          <b-media>
            <template v-slot:aside>
              <img class="flag-style" v-bind:src="apiData[0].flag" alt="flag">
            </template>
          </b-media>
          <h5 class="mt-0">Names</h5>
          <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto">
            <p><em><font style="color:#5bc0de"> Common: </font> </em> {{ apiData[0].name }} </p>
            <p><em><font style="color:#5bc0de"> Native: </font> </em> {{ apiData[0].nativeName }} </p>
            <p><em><font style="color:#5bc0de"> Speling: </font> </em> {{ apiData[0].altSpellings[1] }} </p>
            <h5 class="mt-0">Details</h5>
          <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto">
            <p><em><font style="color:#5bc0de"> Region: </font> </em> {{ apiData[0].capital }} </p>
            <p><em><font style="color:#5bc0de"> Region: </font> </em> {{ apiData[0].region }} </p>
            <p><em><font style="color:#5bc0de"> Subregion: </font> </em> {{ apiData[0].subregion }} </p>
            <p><em><font style="color:#5bc0de"> Population: </font> </em> {{ apiData[0].population }} </p>
            <p><em><font style="color:#5bc0de"> Area: </font> </em> {{ apiData[0].area }} km2</p>
          <h5 class="mt-0">Curency</h5>
          <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto">
            <p><em></em> <font style="font-size: xx-large; color:#5bc0de">{{ apiData[0].currencies[0].symbol }}</font> </p>
            <p><em><font style="color:#5bc0de"> Name: </font> </em> {{ apiData[0].currencies[0].name }} </p>
            <p><em><font style="color:#5bc0de"> Code: </font> </em> {{ apiData[0].currencies[0].code }} </p>
          <h5 class="mt-0">Languages</h5>
          <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto">
            <p><em><font style="color:#5bc0de"> Name: </font> </em> {{ apiData[0].languages[0].name }} </p>
            <p><em><font style="color:#5bc0de"> native name: </font> </em> {{ apiData[0].languages[0].nativeName }} </p>
        </b-card>
      </div>
    </b-container>
    <FooterComp />
  </div>
</template>



<script lang='ts'>  
import { Component,  Vue } from 'vue-property-decorator';
import FooterComp from '@/components/FooterComp.vue';
import { CountriesRepo } from '../repositories/CountriesRepo';


@Component({
  name: 'detailedPage',
  components: {
    FooterComp,
  },
  props: {
    countryId: Number
  }
})
 
  
export default class DetailedPage extends Vue {
  public apiData = [];
 
 
 
  public mounted () {
    const countriesRepo = new CountriesRepo(); 
        countriesRepo.countries.then((responseFromCountries) => {
      this.apiData = responseFromCountries;
    });
  }
}

</script>

<style scoped>
h1 {
  margin-top: 60px;
}

hr {
  background-color: azure;
  height: 1px;
  width: 360px;
}

.flag-style{
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

</style>