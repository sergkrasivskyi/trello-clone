<template>
  <div class="overflow-hidden py-2 px-1 z-10">
    <textarea class="mb-1 max-h-40 p-2 overflow-y-auto"
      ref="addingItem"
      v-bind="$attrs"
      :value="modelValue"
      @change="changeInput"
    />
  
  </div>
</template>
<script>
export default {
  name: 'TheTextArea',
  props: { modelValue: { type: [String, Number], default: "" }, },
  methods: {
    // updateInput(event) {
    //   this.$emit('update:modelValue', event.target.value)
    // },
    changeInput(event) {
      this.$emit('change:modelValue', event.target.value)
    }
    
  },
}
</script>