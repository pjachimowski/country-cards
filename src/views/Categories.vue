<template>
  <div class="categories">
        <h4>  Categories </h4>
      <FooterComp />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import FooterComp from '@/components/FooterComp.vue';

@Component({
  name: "Categories",
    components: {
    FooterComp
    }
})

export default class Categories extends Vue {
}

</script>

<style scoped>

</style>
