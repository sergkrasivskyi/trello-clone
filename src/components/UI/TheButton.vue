<template>
  <button class="px-2 py-1 rounded border-2 border-solid bg-sky-600 text-white
  border-sky-800 hover:bg-sky-700 font-medium text-sm"
    v-bind="$attrs"
    @click="clickButton">
    
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TheButton',
  methods: {
    clickButton() {
      this.$emit('clickButton')
    }
  },
}
</script>

<style lang="css" scoped>

</style>