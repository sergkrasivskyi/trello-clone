import { ref, computed } from "vue";
import { defineStore } from "pinia";

// завантажити з axios дату про users та вивести її в аплікації

export const useCardsStore = defineStore("cards", () => {
  const card1 = ref({ columnId: 3, row: 1, text: "First card" });
  const card2 = ref({ columnId: 2, row: 2, text: "Second card" });
  const card3 = ref({ columnId: 1, row: 3, text: "Third card" });
  const card4 = ref({ columnId: 1, row: 4, text: "Fouth card" });
  const cardsList = ref([card1.value, card2.value, card3.value, card4.value]);

  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return {
    cardsList,
    // columnsList,
    // columnsList2,
    // columnItem1,
    // columnItem2,
    // columnItem3,
    increment,
  };
});
