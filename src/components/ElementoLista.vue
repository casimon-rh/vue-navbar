<template lang="pug">
  v-list-item
    v-list-item-content
      v-list-item-title {{text}}
</template>
<script>
export default {
  name: 'ElementoLista',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
