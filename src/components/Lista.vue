<template lang="pug">
  v-card.mx-auto(max-width="480", tile)
    template(v-for="elem in list")
      ElementoLista(v-bind:text="elem")
</template>
<script>
import ElementoLista from './ElementoLista.vue'
export default {
  name: 'Lista',
  components: { ElementoLista },
  data () {
    return {
      list: [
        'ele1',
        'ele2',
        'ele3',
        'ele4',
        'ele5',
        'ele6'
      ]
    }
  }
}
</script>
<style lang="sass">
.v-card
  display: grid
  @media only screen and (max-width: 480px)
    grid-auto-flow: row
    overflow-x: auto
    grid-template-columns: repeat(6, 100px)

</style>
