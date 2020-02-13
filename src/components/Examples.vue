<template>
  <div class="examples">
      <h1>Country Cards</h1>
      <hr/>
      <p>Here you can find 10 first Country Cards. This deck works as an example of how those cards look like. Go to Randomizer page to select a random card or head to Categories page to check all the countries of selected continent. </p>
        <div class="container" deck>
          <b-row cols="1" cols-md="3">
            <b-col class="mx-auto mb-4" v-for="id in 10" :key="id">  
              <CountryCard v-bind:examples="examples" v-bind:countryId="id" />
            </b-col>
          </b-row>
        </div>
  </div>
</template>
 
<script lang='ts'>

// import { Component, Prop, Vue } from 'vue-property-decorator';
import CountryCard from '@/components/CountryCard.vue';

export default {
  name: "examples",
  components: {
    CountryCard,
  },
  props: ["examples"]
}

</script>
 
<style scoped>
.examples {
  text-align: center;
  padding: 30px 10px;
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
</style>
