<template>
  <div class="list-card-details">
    <textarea class="list-card-composer-textarea"
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