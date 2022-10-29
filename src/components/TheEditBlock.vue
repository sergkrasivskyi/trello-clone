<template>
        <div class="edit-card flex flex-col gap-1 w-full">
          <the-text-area 
            :modelValue="item[itemProp]"
            @change:modelValue="editItem"
          ></the-text-area>
          <div class="button-and-close-icon flex items-center">
            <the-button type="button" @clickButton="confirm">
              <slot name="button"/>   
            </the-button>
            <close-icon class="ml-2 cursor-pointer" @click="closeAddMode" />
          </div>
        </div>
</template>

<script>
import { mapStores, mapActions } from 'pinia'
import { useCardsStore } from '@/stores/cards'

  export default {
  name: 'TheEditBlock',
  props: { 
    // text: {type: String, default: 'Empty string'},
    item: { type: Object, default: { columnId: 0, row: 0 }  }
  },
  emits: ['closeAddMode', 'applyValue'],
  data() {
    return {
      itemConfirmed: {},
    }
  },
  computed: {
    ...mapStores(useCardsStore),
    itemProp() {
    return  this.item.text
      ? 'text'
      : 'title'
    },
    itemReady() {
      return { columnId: this.item.columnId, row: this.item.row }
    }
  },
    methods: {
      editItem(str) {
        console.log(str);
        if (str != '') {
          this.itemConfirmed = { columnId: this.item.columnId, row: this.item.row },
          this.itemConfirmed[this.itemProp] = str
        }
      },
      closeAddMode() {
        this.$emit('closeAddMode')
      },
      confirm() {
        this.$emit('applyValue', this.itemConfirmed)
        // console.log(this.itemConfirmed);
        // this.itemText = ''
        const cardIndex = this.cardsStore.cardsList.findIndex(card => card.columnId === this.itemConfirmed.columnId && card.row === this.itemConfirmed.row)
        this.cardsStore.cardsList[cardIndex][this.itemProp] = this.itemConfirmed[this.itemProp]
        // this.isCard
        //   ? this.cardsStore.cardsList[elemIndex].text = this.itemConfirmed.text
        //   : this.cardsStore.cardsList[elemIndex].title = this.itemConfirmed.title
        
        // this.elem.text = 'new string'
        // console.log('elem new', elem);
      
        
        // console.log('elem', elem);
        this.itemConfirmed = {}
        // console.log(this.itemText);
      },
    },
    
  }
</script>

<style scoped>

</style>