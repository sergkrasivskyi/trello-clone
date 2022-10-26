<template>
  <div class="card-composer" v-show="isAdd">
    <div class="list-card">
      <the-text-area
        :modelValue="itemText"
        placeholder="Enter the headline for this card"
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
    >{{ itemTitle }}</a>
  </div>
</template>
<script>
import { mapStores, mapActions} from 'pinia'
import { useCardsStore } from '@/stores/cards'
import { useColumnsStore } from '@/stores/columns'
import AddIcon from '@/components/icons/AddIcon.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import TheTextArea from '@/components/UI/TheTextArea.vue'
export default {
  name: 'AddItem',
  components: { AddIcon, CloseIcon, TheTextArea },
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

    itemTitle() {
      return this.isNewColumn
        ? 'Add new column'
        : 'Add new card'
    }
  },
  methods: {
    ...mapActions(useCardsStore, ['addCardTitle']),
    ...mapActions(useColumnsStore, ['addColumn']),

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