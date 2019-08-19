<template lang="pug">
  div#app
    v-app#inspire
      Lista
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Lista from './components/Lista.vue'

@Component({
  components: {
    Lista
  }
})
export default class App extends Vue {}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
.v-list-item__content
  display: grid !important
  .v-list-item__title
    justify-self: left
</style>
