<template>
  <div class='FooterComp'>
    <footer class="footer-style">
      <div class="container text-center text-md-left mt-5">
        <b-row cols="1" cols-md="3">
          <b-col class="b-col-style">
            <router-link to="/"><img class="logo-footer" alt="country cards logo" src="../assets/country_cards_logo.png"></router-link>
              <p>This site is intended as a simple, easy to use way to explore infomation about the countries and regions of the world.
                All data is courtesy of Mohammed Le Doze's <a target="_blank" href="https://github.com/mledoze/countries"><em>countries project</em></a> on github.
                Inspired and based on free API source <a target="_blank" href="https://restcountries.eu/#rest-countries"><em>REST COUNTRIES</em></a>. </p>
          </b-col>
          <b-col class="b-col-style">
            <h6 class="text-uppercase font-weight-bold">Sitemap</h6>
              <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto">

              <div v-for="routeName in routesNames" :key="routeName">
                  <router-link tag="li" :to="{name: routeName}">{{routeName}}</router-link>
              </div>
          </b-col>
          <b-col class="b-col-style">
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
          </b-col>
        </b-row>
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
    const router = this.$router as any;
    this.routesNames = router.options.routes.map((router: {name: string}) => router.name)
  }
}

</script>

<style scoped>

.b-col-style {
  margin-bottom: 25px;
}

li {
  color: azure;
  list-style: none;
  cursor: pointer;
  text-transform: uppercase;
  margin: 5px 0px;

}
 li:hover {
  color:  rgb(164, 235, 235);
  cursor: pointer;
}
li.router-link-active {
  color:azure;
  cursor: pointer;
}
li.router-link-exact-active {
  color: azure;
  font-weight: bold;
  cursor: pointer;
}


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
