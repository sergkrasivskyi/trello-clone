<template>
  <div class="box-border inline-block h-full mx-1 w-64">
    <div class="bg-sky-50 rounded-md box-border flex gap-2 flex-col max-h-full px-4 relative py-4">
      <div class="grow-0 shrink-0 basis-auto min-h-[20px] relative">
        <div class="overflow-hidden ">
          <the-text-area class="font-semibold h-auto max-h-64 min-h-[40px] bg-gray-200 overflow-hidden"
            placeholder="Enter the headline for this column"
            row="1"
            col="30"
            height="30"
            :modelValue="column.title"
            @change:modelValue="setColumnTitle"
          />
        </div>
      </div>
      <!-- v-for="card in viewedCards" -->
      <the-card 
        v-for="card in cards"
        :key="card.row"
        :card="card"
        />
      <the-add-item 
        :isNewColumn="false"
        :columnId="column.id"
      />
    </div>
  </div>

</template>

<script>
import { mapStores, mapActions } from 'pinia'
import { useColumnsStore } from '@/stores/columns.js'

export default {
  name: 'TheColumn',

  props: {
    title: {type: String,
            default:'Нужно сделать'},
    currentColumn: {type: [Number, String], default: 0},
    column: { type: Object, default: {id: 0, title: 'Empty title', columnId: 0 }},
    // cards: { type: Array, default: [{ columnId: 0, row: 0, text: "Empty card" }]},
    cards: { type: Array, default: [{ columnId: 0, row: 0, text: "Empty card" }]},
  },
  data() {
    return {
      // title:'Have to do it',
      // isEdit: false,
      itemsList:[],
      isViewedListChange: false
    }
  },
  computed: {
    ...mapStores(useColumnsStore),
    // ...mapState(useColumnStore, ['columnsList'])
    // title() {

    // }
    viewedCards() {
      
      // const result = this.cards.filter(card => card.columnId === this.column.columnId)
      // const result = [] 
      // console.log(this.cards);
      // console.log(result);
      // this.cards.filter(card => card.columnId === this.column.columnId)
    return this.isViewedListChange
      ? this.itemsList
      : this.cards.filter(card => card.columnId === this.column.columnId)
      // return result
    }

  },
  // watch: {
  //   itemsList
  // },
  methods: {
    setColumnTitle(str) {
      if (str) {
        let index = this.column.columnId - 1
        this.columnsStore.columnsList[index].title = str
      }
    },
    // toEdit() {
    //   this.isEdit = true
    // },
    moveUp(card) {
      // !!! перенести зміну позиції до store
      let i = 1;
        // визначаємо row для кожного елементу списку карток
      const list = [...this.viewedCards]
      list.forEach(card => card.row = i++)
      console.log('list:', list);
      // let lengthList = this.itemsList.length
      let position = +card.row - 1 
      // let upPosition = position + 1
      // console.log(position);
      // console.log(upPosition);
      // console.log(this.columnCards);
      console.log('ItemsList: ', [...this.itemsList]);
      
      // this.columnCards[position].row = upPosition
      // this.columnCards[position + 1].row = position
      [list[position], list[position + 1]] = [list[position + 1], list[position]]
      console.log('list:', list);
      this.itemsList = [...list]
      console.log('ItemsList new: ', [...this.itemsList]);
      this.isViewedListChange = true
    },
    moveDown(card) {

    },
    
  }, 
}

</script>

<style scoped>  

</style>
