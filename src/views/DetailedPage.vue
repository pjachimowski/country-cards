<template>
  <div class="detailedPage">
    <b-container>
      <h1 class="title-style"> Details about: <font style="color:#5bc0de"> {{ apiData[countryId].name }}</font> </h1>
        <b-card class="card-style">
          <b-row cols="1">
            <b-col style="text-align: center;">
              <img class="flag-style" v-bind:src="apiData[countryId].flag" alt="flag">
            </b-col>
          </b-row>
          <hr class="thin"/>
          <b-row cols="1" cols-md="3">
            <b-col style="text-align: center;">
              <p style="color:#5bc0de; font-size: xx-large;"> <i class="fas fa-flag"></i></p>
              <strong><font style="color:#5bc0de"> Names: </font> </strong><br/>
              <font style="color:#5bc0de"> Common: </font>  {{ apiData[countryId].name }} <br/>
              <font style="color:#5bc0de"> Native: </font> {{ apiData[countryId].nativeName }} <br/>
              <font style="color:#5bc0de"> Speling: </font> {{ apiData[countryId].altSpellings[1] }}
            </b-col>

            <b-col style="text-align: center;">
              <!-- <p style="color:#5bc0de; font-size: xx-large;"> <i class="fas fa-money-bill-wave-alt"></i></p> -->
              <p style="color:#5bc0de; font-size: xx-large;"> {{ apiData[countryId].currencies[0].symbol }}</p>
              <strong><font style="color:#5bc0de"> Curency: </font> </strong><br/>
              <font style="color:#5bc0de"> Name: </font>  {{ apiData[countryId].currencies[0].name }} <br/>
              <font style="color:#5bc0de"> Code: </font>  {{ apiData[countryId].currencies[0].code }}
            </b-col>

            <b-col style="text-align: center;">
              <p style="color:#5bc0de; font-size: xx-large;"> <i class="fas fa-language"></i></p>
              <strong><font style="color:#5bc0de"> Languages: </font> </strong> <br/>
              <font style="color:#5bc0de"> Name: </font>  {{ apiData[countryId].languages[0].name }} <br/>
              <font style="color:#5bc0de"> Native name: </font>  {{ apiData[countryId].languages[0].nativeName }}
            </b-col>
          </b-row>
          <hr class="thin"/>
          <b-row cols="1" cols-md="7">
            <b-col style="text-align: center;">
              <p style="color:#5bc0de; font-size: large;"> <i class="fas fa-city"></i></p>
              <strong><font style="color:#5bc0de"> Capital: </font> </strong>
              <p> {{ apiData[countryId].capital }} </p>
            </b-col>

            <b-col style="text-align: center;">
              <p style="color:#5bc0de; font-size: large;"> <i class="fas fa-globe-europe"></i></p>
              <strong><font style="color:#5bc0de"> Region: </font> </strong>
              <p> {{ apiData[countryId].region }} </p>
            </b-col>

            <b-col style="text-align: center;">
              <p style="color:#5bc0de; font-size: large;"> <i class="fas fa-globe"></i></p>
              <strong><font style="color:#5bc0de"> Subregion: </font> </strong> 
              <p>{{ apiData[countryId].subregion }} </p>
            </b-col>

            <b-col style="text-align: center;">
              <p style="color:#5bc0de; font-size: large;"> <i class="fas fa-user-tag"></i></p>
              <strong><font style="color:#5bc0de"> Demonym: </font> </strong> 
              <p>{{ apiData[countryId].demonym }}</p>
            </b-col>

            <b-col style="text-align: center;">
              <p style="color:#5bc0de; font-size: large;"> <i class="fas fa-atlas"></i></p>
              <strong><font style="color:#5bc0de"> Lat/Lng: </font> </strong>
              <p> {{ apiData[countryId].latlng }} </p>
            </b-col>

            <b-col style="text-align: center;">
              <p style="color:#5bc0de; font-size: large;"> <i class="fas fa-users"></i> </p>
              <strong><font style="color:#5bc0de"> Population: </font> </strong>
              <p> {{ apiData[countryId].population }} </p>
            </b-col>

            <b-col style="text-align: center;">
              <p style="color:#5bc0de; font-size: large;"> <i class="far fa-square"></i></p>
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
        countriesRepo.countries.then((responseFromCountries: any) => {
      this.apiData = responseFromCountries;
    });
  }
}

</script>

<style scoped>

.card-style {
  text-align: center;
  padding: 30px 10px;
}

h1 {
  margin: 40px 60px 0px 60px;
}

hr.thin {
  background-color: #e6e6e6;
  margin-top: 35px;
  margin-bottom: 35px; 
  width: 80%;
  height: 0.5px;
}

.flag-style{
  object-fit: cover;
  height: 110px;
  width: 150px;;
  image-resolution: initial;
  background-repeat: no-repeat;
}

</style>