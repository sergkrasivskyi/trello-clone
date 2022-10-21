<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheColumn from './components/TheColumn.vue'
</script>

<template>
  <div class="wrapper flex ">
    <!-- <the-column v-for="column in columns">
    </the-column>
      -->
    <the-column />
    <the-column/>
    <the-column/>

  </div>

  <!-- <RouterView /> -->
</template>

<style scoped>
.wrapper {
  /* width: 100vw; */
  height: 100vh;
  background-image: url('@/images/bg-lg-photo.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
