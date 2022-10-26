<template>
  <div class="list-wrapper">
    <div class="list">
      <div class="list-header">
        <div class="list-header-wrapper">
          <!-- :class="{'is-editing': isEdit}" -->
          <!-- @click="toEdit" -->
          <textarea class="list-header-name mod-list-name"
          
          v-model="column.title"
          >
          </textarea>
        </div>
      </div>
      <the-item 
        v-for="card in viewedCards"
        :key="card.row"
        :card="card"
        @click.left="moveUp(card)"
        @click.right="moveDown(card)"
        />
      <add-item
        :isNewColumn="false"
        :columnId="column.id"
      />
    </div>
  </div>


</template>

<script>
import TheItem from '@/components/TheItem.vue'
import AddItem from '@/components/AddItem.vue'


export default {
  name: 'TheColumn',
  components: {TheItem, AddItem},
  props: {
    title: {type: String,
            default:'Нужно сделать'},
    currentColumn: {type: [Number, String], default: 0},
    column: { type: Object, default: {id: 0, title: 'Empty title', columnId: 0 }},
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
    // ...mapStores(useColumnStore),
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
