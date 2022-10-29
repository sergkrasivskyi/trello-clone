<template>
  <div class="flex-auto min-h-0 overflow-x-hidden overflow-y-auto z-1"
    draggable="true" @dragstart="">
      <div class="flex justify-between items-center px-2 py-1 hover:bg-sky-500 rounded-md bg-sky-200 shadow" 
        @mouseover="isVisible=true"
        @mouseleave="isVisible = false"
        >
          <the-edit-block v-show="isEdit"
            :item="card"
            @applyValue="isEdit = false"
            @closeAddMode="isEdit = false"
            ><template v-slot:button>
              Apply
            </template>
          </the-edit-block>
        <span class="p-2" v-show="!isEdit">{{ card.text }}</span>
        <span :class="['hide', {'hover-visible': isVisible}]"
          ><Icon icon="line-md:pencil" v-show="isVisible && !isEdit" @click.stop="isEdit=true" class="hover:bg-sky-300" />
        </span>
      </div>
  </div>

</template>

<script>
import { Icon } from '@iconify/vue';

import { mapStores, mapActions } from 'pinia'
import { useCardsStore } from '@/stores/cards'
export default {
  name: 'TheCard',
  components: {
    Icon
  },
  props: {
    card: { type: Object, default: { row: 0, text: "Null card" } }
  },
  emits: [],
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
    editCardText(item) {
      // для закриття редагування
      // this.isEdit = false 
      
      console.log('item', item)
      // console.log(this.card)

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
