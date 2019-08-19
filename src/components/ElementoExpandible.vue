<template lang="pug">
  v-list-group(no-action)
    template(v-slot:activator)
      v-list-item-content
        v-list-item-title(v-text="navelement.label")
    v-list-item(
      v-for="item in sub",
      :key="item.label",
      @click="redirect(item.url)"
    )
      v-list-item-content
        v-list-item-title(v-text="item.label")
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
// @ts-ignore
import NavElement from '../classes/navelement.ts'
@Component
export default class ElementoExpandible extends Vue {
  @Prop() private navelement: NavElement
  @Prop() private sub!: Array<NavElement>
  private redirect (url: string) {
    window.location.href = url
  }
}
</script>
