<template>
  <div class='FooterComp'>
    <footer class="footer-style">
      <div class="container text-center text-md-left mt-5">
        <div class="row mt-3">
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
            <router-link to="/"><img class="logo-footer" alt="country cards logo" src="../assets/country_cards_logo.png"></router-link>
              <p>This site is intended as a simple, easy to use way to explore infomation about the countries and regions of the world.
                All data is courtesy of Mohammed Le Doze's <a target="_blank" href="https://github.com/mledoze/countries"><em>countries project</em></a> on github.
                Inspired and based on free API source <a target="_blank" href="https://restcountries.eu/#rest-countries"><em>REST COUNTRIES</em></a>. </p>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Similar Projects</h6>
              <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto">

              <div v-for="routeName in routesNames" :key="routeName">
                <router-link tag="li" :to="{name: routeName}">{{routeName}}</router-link>
              </div>


                <!-- <p>
                  <a target="_blank" href="http://countries.petethompson.net/">Countries of the world</a>
                </p>
                <p>
                  <a target="_blank" href="https://github.com/SteinRobert/python-restcountries">REST Countries Python</a>
                </p>
                <p>
                  <a target="_blank" href="https://github.com/hengkiardo/restcountries">REST Countries Node.js</a>
                </p>
                <p>
                  <a target="_blank" href="https://github.com/davidesantangelo/restcountry">REST Countries Ruby</a>
                </p> -->
          </div>
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase font-weight-bold">Author</h6>
             <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto">
                <div>
                  <img class="author-photo" src="../assets/author.jpg" alt="flag">
                  <em>  Patryk Jachimowski</em>
                </div>
                <p>
                    <a target="_blank" href="https://www.facebook.com/patryk.jachimowski.73?ref=bookmarks"><i class="fab fa-facebook white-text mr-4"> </i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/patryk-jachimowski/"><i class="fab fa-linkedin white-text mr-4"> </i></a>
                    <a target="_blank" href="https://github.com/pjachimowski"><i class="fab fa-github white-text mr-4"> </i></a>
                    <a target="_blank" href="https://dribbble.com/Jachimowski"><i class="fab fa-dribbble white-text mr-4"> </i></a>
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i> p.jachimowski89@gmail.com</p>
                <p>
                  <i class="fas fa-phone mr-3"></i> 0031 (0) 615535792</p>
          </div>
        </div>
      </div>
      <div class="footer-copyright text-center py-3">© 2020 Copyright:
          Patryk Jachimowski. Project created for academic purposes only. All Rights Reserved.
      </div>
    </footer>
    <router-view/>
  </div>
</template>


<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'footerComp',
})
export default class FooterComp extends Vue {
  
  public routesNames = [];

  mounted () {
    this.routesNames = this.$router.options.routes.map((router: {name: string}) => router.name)
  }
}

</script>

<style scoped>

a {
  color: azure;
}
a:hover {
  color:  rgb(164, 235, 235);
  text-decoration: none;
}

.footer-style {
    background-image: linear-gradient(to bottom right, rgb(0, 132, 155), rgb(94, 209, 230));
    color:azure;
    padding: 5px;
    font-size: small;
}

.footer-copyright {
    font-size: x-small;
}

.logo-footer {
  height: 120px;
  margin-bottom: 10px;
}

.author-photo {
  margin: 0px 20px 20px 0px;
  object-fit: cover;
  border-radius: 50%;
  height: 50px;
  width: 50px;;
  image-resolution: initial;
  background-repeat: no-repeat;
}
hr {
  background-color: #ffab86;
  height: 5px;
  width: 60px;
}
</style>
