<template lang="pug">
  v-list-group(@click="redirect(navelement.url)")
    template(v-slot:activator)
      v-list-item-content
          v-list-item-title(v-text="navelement.label")
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
// @ts-ignore
import NavElement from '../classes/navelement.ts'
@Component
export default class ElementoLista extends Vue {
  @Prop() private navelement: NavElement
  private redirect (url: string) {
    window.location.href = url
  }
}
</script>
