<template>
  <div class="card-composer" v-show="isAdd">
    <div class="list-card">
      <the-text-area
        :modelValue="itemText"
        :placeholder="`Enter the headline for this ${itemName}`"
        @change:modelValue="setItemText"
      ></the-text-area>
      <div class="cc-controls u-clearfix">
        <div class="cc-controls-section flex items-center">
          <!-- <input class="nch-button--primary confirm px-2 py-1" 
            type="button" value="Добавить карточку" 
            @click="addItem"> -->
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
  <div class="card-composer-container items-center" 
      v-show="!isAdd" 
      @click.stop="isAdd = true">
    <add-icon/>
    <a class="open-card-composer" href="#" ref="card"
      >{{ `Add new ${itemName}` }}</a>
  </div>
</template>
<script>
import { mapStores, mapActions} from 'pinia'
import { useCardsStore } from '@/stores/cards'
import { useColumnsStore } from '@/stores/columns'

export default {
  name: 'TheAddItem',
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
      this.isNewColumn
      ? this.addColumn(this.itemText)
      : this.addCardTitle(this.newCard)
      this.itemText = ''
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