<template>
  <div class="card-composer" v-show="isAdd">
    <div class="list-card">
      <div class="list-card-details">
        <textarea class="list-card-composer-textarea" placeholder="Ввести заголовок для этой карточки"
          ref="addingItem"
          v-model="itemText"></textarea>

      </div>
      <div class="cc-controls u-clearfix">
        <div class="cc-controls-section"><input class="nch-button nch-button--primary confirm mod-compact js-add-card"
            type="submit" value="Добавить карточку" 
              @click="addItem"
              ><a class="icon-lg icon-close dark-hover js-cancel" href="#"></a>
        </div>
        <div class="cc-controls-section mod-right"><a
            class="icon-lg icon-overflow-menu-horizontal dark-background-hover js-cc-menu" href="#"></a></div>
      </div>
    </div>
  </div>
  <div class="card-composer-container" v-show="!isAdd" @click.stop="isAdd = true">
    <a class="open-card-composer" href="#" ref="card"
    >{{ itemTitle }}</a>
  </div>
</template>
<script>
import { mapStores} from 'pinia'
import { useCardsStore } from '@/stores/cards'
import { useColumnsStore } from '@/stores/column'
export default {
  name: 'AddItem',
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
    // this.$refs.addingItem.focus()
  },

  mounted() {
    // this.$refs
    // console.log(this.$refs.card);
    // console.log(this.$refs.addingItem);
    // this.$refs.addingItem.focus()
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
    addItem() {
      // this.isAdd = true
      console.log(this.isNewColumn);
      this.isNewColumn
      ? this.columnsStore.addColumn(this.itemText)
      : this.cardsStore.addCard(this.newCard)
      // console.log(this.$refs.addingItem);
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