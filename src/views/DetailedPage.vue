<template>
  <div class="detailedPage">
    <b-container>
      <h1>Details page</h1>
      <hr/>
      <p class="title-style"> Details about: <font style="color:#5bc0de"> {{ apiData[countryId].name }}</font> </p>
        <b-card class="card-style">
          <b-row cols="1">
            <b-col style="text-align: center;">
              <img class="flag-style" v-bind:src="apiData[countryId].flag" alt="flag">
            </b-col>
          </b-row>
          <hr class="thin"/>
          <b-row cols="1" cols-md="3">
            <b-col style="text-align: center;">
              <p style="color:#ffab86; font-size: x-large;"> <i class="fas fa-flag"></i></p>
              <strong><font style="color:#5bc0de"> Names: </font> </strong><br/>
              <font style="color:#5bc0de"> Common: </font>  {{ apiData[countryId].name }} <br/>
              <font style="color:#5bc0de"> Native: </font> {{ apiData[countryId].nativeName }} <br/>
              <font style="color:#5bc0de"> Speling: </font> {{ apiData[countryId].altSpellings[1] }}
            </b-col>

            <b-col style="text-align: center;">
              <p style="color:#ffab86; font-size: x-large;"> {{ apiData[countryId].currencies[0].symbol }}</p>
              <strong><font style="color:#5bc0de"> Curency: </font> </strong><br/>
              <font style="color:#5bc0de"> Name: </font>  {{ apiData[countryId].currencies[0].name }} <br/>
              <font style="color:#5bc0de"> Code: </font>  {{ apiData[countryId].currencies[0].code }}
            </b-col>

            <b-col style="text-align: center;">
              <p style="color:#ffab86; font-size: x-large;"> <i class="fas fa-language"></i></p>
              <strong><font style="color:#5bc0de"> Languages: </font> </strong> <br/>
              <font style="color:#5bc0de"> Name: </font>  {{ apiData[countryId].languages[0].name }} <br/>
              <font style="color:#5bc0de"> Native name: </font>  {{ apiData[countryId].languages[0].nativeName }}
            </b-col>
          </b-row>
          <hr class="thin"/>
          <b-row>
            <b-col cols="6" md="2" style="text-align: center;">
              <p style="color:#ffab86; font-size: large;"> <i class="fas fa-city"></i></p>
              <strong><font style="color:#5bc0de"> Capital: </font> </strong>
              <p> {{ apiData[countryId].capital }} </p>
            </b-col>

            <b-col cols="6" md="2" style="text-align: center;">
              <p style="color:#ffab86; font-size: large;"> <i class="fas fa-globe-europe"></i></p>
              <strong><font style="color:#5bc0de"> Region: </font> </strong>
              <p> {{ apiData[countryId].region }} </p>
            </b-col>

            <b-col cols="6" md="2" style="text-align: center;">
              <p style="color:#ffab86; font-size: large;"> <i class="fas fa-globe"></i></p>
              <strong><font style="color:#5bc0de"> Subregion: </font> </strong> 
              <p>{{ apiData[countryId].subregion }} </p>
            </b-col>

            <b-col cols="6" md="2" style="text-align: center;">
              <p style="color:#ffab86; font-size: large;"> <i class="fas fa-user-tag"></i></p>
              <strong><font style="color:#5bc0de"> Demonym: </font> </strong> 
              <p>{{ apiData[countryId].demonym }}</p>
            </b-col>

            <b-col cols="6" md="2" style="text-align: center;">
              <p style="color:#ffab86; font-size: large;"> <i class="fas fa-users"></i> </p>
              <strong><font style="color:#5bc0de"> Population: </font> </strong>
              <p> {{ apiData[countryId].population.toLocaleString() }} </p>
            </b-col>

            <b-col cols="6" md="2" style="text-align: center;">
              <p style="color:#ffab86; font-size: large;"> <i class="far fa-square"></i></p>
              <strong><font style="color:#5bc0de"> Area: </font> </strong> 
              <p>{{ apiData[countryId].area.toLocaleString() }} km2 </p>
            </b-col>
          </b-row>
        </b-card>
    </b-container>
    <FooterComp />
  </div>
</template>

<script lang='ts'>  
import { Component, Vue } from 'vue-property-decorator';
import FooterComp from '@/components/FooterComp.vue';
import { CountriesRepo } from '../repositories/CountriesRepo';


@Component({
  name: 'detailedPage',
  components: {
    FooterComp,
  },
})
  
export default class DetailedPage extends Vue {
  public apiData = [];
  public countryId = 0;
 
 
  public mounted () {

    this.countryId = Number(this.$router.currentRoute.params.countryId);
    const countriesRepo = new CountriesRepo(); 
    // eslint-disable-next-line 
        countriesRepo.countries.then((responseFromCountries: any) => {
      this.apiData = responseFromCountries;
    });
  }
}

</script>

<style scoped>
.detailedPage {
  text-align: center;
}

.card-style {
  text-align: center;
  padding: 10px 10px;
  margin-bottom: 45px;
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

.title-style {
  font-size: large;
}

.thin {
  background-color: #e6e6e6;
  margin-top: 15px;
  margin-bottom: 15px; 
  width: 80%;
  height: 0.5px;
}

.flag-style{
  border-radius: 5%;
  object-fit: cover;
  height: 90px;
  width: 120px;;
  image-resolution: initial;
  background-repeat: no-repeat;
}

</style>