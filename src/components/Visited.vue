<template>
  <div class='visited'>
      <h2>10 examples of Country Cards</h2>
      <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto">
      <h3>Click to see more details</h3>
        <div class="container" deck>
          <div class="row">
              <div class="col-md-4 col-lg-4 mx-auto mb-4" v-for="id in 10" :key="id">  
              <CountryCard v-bind:visited="visited" v-bind:countryId="id" />
            </div>
          </div>
        </div>
  </div>
</template>
 
<script lang='ts'>

// import { Component, Prop, Vue } from 'vue-property-decorator';
import CountryCard from '@/components/CountryCard.vue';

export default {
  name: "visited",
  components: {
    CountryCard,
  },
  props: ["visited"]
}

</script>
 
<style scoped>
.visited {
  text-align: center;
  padding: 30px 70px;
}

hr {
  background-color: #5bc0de;
  height: 3px;
  width: 60px;
}
 
h2 {
  margin: 20px;
}
 
h3 {
  margin-bottom: 40px;
}
</style>
