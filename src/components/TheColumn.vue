<template>
  <div class="list-wrapper">
    <div class="list">
      <div class="list-header">
        <div class="list-header-wrapper">
          <textarea class="list-header-name mod-list-name"
          :class="{'is-editing': isEdit}"
          @click="toEdit"
          height="130"
          rows="1" cols="32"
          >{{ column.title }}
          </textarea>
        </div>
      </div>
      <the-item 
        v-for="card in columnCards"
        :key="card.row"
        :card="card"
        />
    
    </div>
  </div>


</template>

<script>
import TheItem from '@/components/TheItem.vue'


export default {
  name: 'TheColumn',
  components: {TheItem},
  props: {
    title: {type: String,
            default:'Нужно сделать'},
    currentColumn: {type: [Number, String], default: 0},
    column: { type: Object, default: {id: 0, title: 'Empty title', columnId: 0 }},
    cards: { type: Array, default: [{ columnId: 0, row: 0, text: "Empty card" }]}
  },
  data() {
    return {
      // title:'Have to do it',
      isEdit: false,
    }
  },
  computed: {
    // ...mapStores(useColumnStore),
    // ...mapState(useColumnStore, ['columnsList'])
    // title() {

    // }
    columnCards() {
      // const result = this.cards.filter(card => card.columnId == this.column.columnId)
      // console.log(this.cards);
      // console.log(result);
      return this.cards.filter(card => card.columnId === this.column.columnId)
    }
  },
  methods: {
    toEdit() {
      this.isEdit = true
    }
  }, 
}

</script>

<style scoped>

</style>
