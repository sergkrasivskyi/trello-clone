<template>
  <div class="card-composer" v-show="isAdd">
    <div class="list-card">
      <the-text-area
        :modelValue="itemText"
        :placeholder="`Enter the headline for this ${itemName}`"
        @change:modelValue="setItemText"
      ></the-text-area>
      <div class="cc-controls u-clearfix">
        <div class="cc-controls-section">
          <input class="nch-button nch-button--primary confirm mod-compact js-add-card" 
            type="submit" value="Добавить карточку" 
            @click="addItem">
          <close-icon 
          @click="closeAddMode"/>
        </div>
      </div>
    </div>
  </div>
  <div class="card-composer-container" v-show="!isAdd" @click.stop="isAdd = true">
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

</style>