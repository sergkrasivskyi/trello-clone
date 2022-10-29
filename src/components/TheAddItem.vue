<template>
  <div class="pb-2" v-show="isAdd">
    <div class="rounded-md shadow cursor-pointer block mb-2 max-w-xs min-h-[20px] relative z-0">
      <the-text-area
        :modelValue="itemText"
        :placeholder="`Enter the headline for this ${itemName}`"
        @change:modelValue="setItemText"
      ></the-text-area>
      <div >
        <div class="flex items-center">
          <the-button 
            type="button" 
            @clickButton="addItem"
          >Add new card</the-button>  
          <close-icon class="ml-2"
          @click="closeAddMode"/>
        </div>
      </div>
    </div>
  </div>
  <div class="flex gap-2 h-9 items-center cursor-pointer hover:bg-sky-500 rounded-md p-2 bg-sky-200 " 
      v-show="!isAdd" 
      @click.stop="isAdd = true">
    <!-- <add-icon/> -->
    <Icon icon="ri:play-list-add-line"/>
    <p ref="card"
      >{{ `Add new ${itemName}` }}</p>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue';

import { mapStores, mapActions} from 'pinia'
import { useCardsStore } from '@/stores/cards'
import { useColumnsStore } from '@/stores/columns'

export default {
  name: 'TheAddItem',
  components: {
    Icon
  },
  props: {
    columnId: {type: [Number, String]},
    isNewColumn: {type: Boolean}
    // newCard: { type: Object, default: { columnId: 1, row: 4, text: "Empty Add card" } }
  },
  directives: {
    // enables v-focus in template
    focus
  },
  created() {
  },

  mounted() {
  
  },
  data() {
    return {
      isAdd: false,
      itemText: '',
      // itemTitle: ''
    }
  },
  computed: {
    ...mapStores(useCardsStore, useColumnsStore),

    newCard() {
      // Додати визначення row
      // ! let row = 
      return { columnId: this.columnId, row: 0, text: this.itemText }
    },
    itemName() {
      return this.isNewColumn
        ? 'column'
        : 'card'
    },
  },
  methods: {
    ...mapActions(useColumnsStore, ['addColumn']),
    ...mapActions(useCardsStore, ['addCardTitle']),

    setItemText(str) {
      this.itemText = str
    },
    setRow() {
      
    },
    closeAddMode() {
      this.isAdd = false
      this.itemText = ''
    },
    addItem() {
      this.isAdd = true
      // Перевіряемо - колонка чи картка і додаємо відповідний елемент
      if (this.itemText !== '') {
        this.isNewColumn
        ? this.addColumn(this.itemText)
        : this.addCardTitle(this.newCard)
        this.itemText = ''
      }
    }
  },
  watch: {
    // isAdd() {
    //   if (this.isAdd === true) {
        // console.log(this.$refs.addingItem);
        // this.$refs.addingItem.focus()
      // }
    }

  // },
}
</script>  
<style>
/* додати загальний class="flex-auto" 
прибрати зайві margin - візуально збільшує елемент*/
</style>