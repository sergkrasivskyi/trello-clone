<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheColumn from '@/components/TheColumn.vue'
import AddItem from '@/components/AddItem.vue'

import { useColumnsStore } from '@/stores/column.js'
import { useCardsStore } from '@/stores/cards.js'
const columnsStore = useColumnsStore()
const cardsStore = useCardsStore()

</script>

<template>
  <div class="wrapper flex ">
    <the-column
      v-for="column in columnsStore.columnsList"
      :key="column.id"
      :column="column"
      :cards="cardsStore.cardsList"
      > 
    </the-column> 
    <add-item
      :isNewColumn="true"/>
  </div>

  <!-- <RouterView /> -->
</template>

<script>


</script>

<style scoped>
.wrapper {
  /* width: 100vw; */
  height: 100vh;
  background-image: url('@/images/bg-lg-photo.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
