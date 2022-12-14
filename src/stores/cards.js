import { ref, computed } from "vue";
import { defineStore } from "pinia";

import { useColumnsStore } from "@/stores/columns";
import {groupBy} from 'lodash'

// завантажити з axios дату про users та вивести її в аплікації

export const useCardsStore = defineStore("cards", () => {
  const card1 = ref({ columnId: 3, row: 120, text: "First card" });
  const card2 = ref({ columnId: 2, row: 100, text: "Second card" });
  const card3 = ref({ columnId: 1, row: 15, text: "Third card" });
  const card4 = ref({ columnId: 1, row: 10, text: "Fouth card" });
  const cardsList = ref([card1.value, card2.value, card3.value, card4.value]);

  // Отримуємо доступ до ColumnStore
  const columnsStore = useColumnsStore();
  // Рахуємо кількість карток з ColumnStore
  // computed - це ref, тому використовуємо .value
  const numberColumns = computed(() => columnsStore.columnsList.length);

  const cardsItems = computed(() => {
    const result = {};
    const list = [...cardsList.value];
    for (let i = 0; i < numberColumns.value; i++) {
      // розкладаеємо картки у кожну колонку згідно columnId
      result[i] = list.filter((card) => card.columnId === i + 1);
      let row = 0
      result[i].forEach(card => { card.row = row++ 
      });
    }
    console.log("cardsItems: ", result);
    return result;
  });

  function addCardTitle(newCard) {
    cardsList.value.push({ ...newCard });
  }
  function editCardText(card) {
    
  }
  function moveCards(direction, card, cardList) {
    // direction === 'Up'||'up'
    // todo спробувати splice
    // ! Приклад
    // меняет два элемента массива in-place
    // function swap(arr, a, b) {
    //   arr[a] = arr.splice(b, 1, arr[a])[0];
    // }
    // const Twelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // swap(Twelve, 2, 5); // индексы считаются от 0
    // swap(Twelve, 7, 11);
    // swap(Twelve, 9, 4);
    // Twelve; //  [1,2,6,4,10,3,7,12,9,5,11,8]
  }
  //  examples ---
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  // ---
  return {
    cardsList,
    cardsItems,
    // numberColumns,
    // columnsList,
    // columnsList2,
    // columnItem1,
    // columnItem2,
    // columnItem3,
    // increment,
    addCardTitle,
  };
});
