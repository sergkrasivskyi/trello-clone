<script setup>
import { useColumnsStore } from '@/stores/columns.js'
import { useCardsStore } from '@/stores/cards.js'
const columnsStore = useColumnsStore()
const cardsStore = useCardsStore()

</script>

<template>
  <div class="wrapper h-[100vh] pt-4 pl-4 flex gap-2 ">
    <the-column
      v-for="column in columnsStore.columnsList"
      :key="column.columnId"
      :column="column"
      :cards="cardsStore.cardsItems[column.columnId - 1]"
      > 
    </the-column> 
    <the-add-item
      :isNewColumn="true"/>
  </div>

</template>

<script>


</script>

<style scoped>
.wrapper {
  background-image: url('@/images/bg-lg-photo.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
