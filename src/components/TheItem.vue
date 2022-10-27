<template>
  <div class="list-cards">
    <a class="list-card" href="#" draggable="true">
      <!-- <div class="list-card-cover"></div> -->
      <!-- <div class="list-card-stickers-area hide">
          <div class="stickers"></div>
        </div> -->
      <!-- <div class="list-card-details"> -->
      <!-- <div class="list-card-front-labels-container"> -->
      <!-- </div><span class="list-card-title"><span class="card-short-id hide"></span></span> -->


      <!-- </div>  -->
      <div class="card-cover flex justify-between items-center px-2 py-1 " 
        @mouseover="isVisible=true"
        @mouseleave="isVisible = false">
        <the-text-area v-show="isEdit"
          :modelValue="card.text"
          @change:modelValue="editCardText"
        ></the-text-area> 
        <span class="p-2" v-show="!isEdit">{{ card.text }}</span>
        <span :class="['hide', {'hover-visible': isVisible}]"
          ><edit-icon v-show="isVisible" @click.stop="isEdit=true"/>
        </span>
      </div>

    </a>
  </div>

</template>

<script>
import { mapStores, mapActions } from 'pinia'
import { useCardsStore } from '@/stores/cards'
export default {
  name: 'TheItem',
  props: {
    card: { type: Object, default: { row: 0, text: "Null card" } }
  },
  data() {
    return {
      isVisible: false,
      isEdit: false
    }
  },
  computed: {
    ...mapStores(useCardsStore),
  },
  methods: {
    editCardText(str) {
      console.log(str)
      // змінити на texterea та взяти введене значення
    }
  },

}

</script>

<style scoped>
/* додати загальний class="flex-auto" 
прибрати зайві margin - візуально збільшує елемент*/
.hide {
  visibility: hidden;
}
.hover-visible {
  visibility: visible;
}
.hover-visible:hover {
  background-color: #fffff0;
}
</style>
