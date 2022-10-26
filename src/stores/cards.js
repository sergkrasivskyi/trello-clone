import { ref, computed } from "vue";
import { defineStore } from "pinia";

import { useColumnsStore } from "@/stores/column";
import {groupBy} from 'lodash'

// завантажити з axios дату про users та вивести її в аплікації

export const useCardsStore = defineStore("cards", () => {
  const card1 = ref({ columnId: 3, row: 0, text: "First card" });
  const card2 = ref({ columnId: 2, row: 0, text: "Second card" });
  const card3 = ref({ columnId: 1, row: 0, text: "Third card" });
  const card4 = ref({ columnId: 1, row: 0, text: "Fouth card" });
  const cardsList = ref([card1.value, card2.value, card3.value, card4.value]);

  // Отримуємо доступ до ColumnStore
  const columnsStore = useColumnsStore();
  // Рахуємо кількість карток з ColumnStore
  // computed - це ref, тому використовуємо .value
  const numberColumns = computed(() => columnsStore.columnsList.length);

  const cardsItems = computed(() => {
    const result = {};
    // const subList = [];
    const list = [...cardsList.value];
    // console.log("list:", list);
    // console.log("list[0].columnId", list[0].columnId);
    // console.log("list[1].columnId", list[1].columnId);
    // console.log("list[2].columnId", list[2].columnId);
    // console.log("list[3].columnId", list[3].columnId);
    // console.log("list.length:", list.length);
    // result = groupBy(list, )

    for (let i = 0; i < numberColumns.value; i++) {
      // розкладаеємо картки у кожну колонку згідно columnId
      result[i] = list.filter((card) => card.columnId === i + 1);
    }
    console.log("result", result);
    return result;
  });

  function addCard(newCard) {
    cardsList.value.push({ ...newCard });
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
    addCard,
  };
});
