import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useColumnsStore = defineStore("columns", () => {
  const title = ref('');

  const columnItem1 = ref({
    id: 1,
    title: "Just Do It1",
    columnId: 1
    // list: [
    //   { row: 1, text: "First card" },
    //   { row: 2, text: "Second card" },
    //   { row: 3, text: "Third card" },
    //   { row: 4, text: "Fouth card" },
    // ],
  });
  const columnItem2 = ref({
    id: 2,
    title: "Just Do It2",
    columnId: 2,
    // list: [
    //   { row: 1, text: "First card" },
    //   { row: 2, text: "Second card" },
    //   { row: 3, text: "Third card" },
    //   { row: 4, text: "Fouth card" },
    // ],
  });
  const columnItem3 = ref({
    id: 3,
    title: "Just Do It3",
    columnId: 3,
    // list: [
    //   { row: 1, text: "First card" },
    //   { row: 2, text: "Second card" },
    //   { row: 3, text: "Third card" },
    //   { row: 4, text: "Fouth card" },
    // ],
  });
  const columnsList = ref([columnItem1.value, columnItem2.value, columnItem3.value]);
  const columnsList2 = ref([
    { title: "hello1" },
    { title: "hello2" },
    { title: "hello3" },
  ]);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return {
    // title,
    columnsList,
    // columnsList2,
    // columnItem1,
    // columnItem2,
    // columnItem3,
    increment,
  };
});
