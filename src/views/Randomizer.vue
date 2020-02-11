<template>
  <div class="randomizer">
        <h4>  Randomizer </h4>
    <FooterComp />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import FooterComp from '@/components/FooterComp.vue';
@Component({
  name: "Randomizer",
    components: {
    FooterComp,
    },
})

export default class Randomizer extends Vue {
}

</script>

<style scoped>

</style>