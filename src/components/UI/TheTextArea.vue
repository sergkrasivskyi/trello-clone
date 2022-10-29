<template>
  <!-- <div class="overflow-hidden z-10"> -->
    <textarea class="overflow-auto resize-none outline-none bg-sky-50 focus-within:bg-sky-200
    flex-grow h-auto w-full rounded-sm box-border"
      ref="addingItem"
      v-bind="$attrs"
      :value="modelValue"
      @input="resize"
      @change="changeInput"
    />
  
  <!-- </div> -->
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
    },
    resize(event) {
      event.target.style.height = "auto"
      event.target.style.height = `${ event.target.scrollHeight }px`
    }
    
  },
}
</script>