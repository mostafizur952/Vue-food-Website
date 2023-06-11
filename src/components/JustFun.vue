<template>
    <div>
      <ul>
hello      </ul>
    </div>
  </template>
  
  <!-- <script>
  import { ref } from 'vue';
  import data from './data.json'; // Import the JSON file

  export default {

    data() {
      return {
        jsonData: ref(null),
      };
    },
    

    mounted() {
      this.jsonData = ref(data); // Assign the JSON data to the ref variable
      console.log(this.jsonData);
    },
    }
  </script> -->

  uniqueCategories = computed(() => [...new Set(products.value.map((product) => product.category))]);
  
      const filteredProducts = computed(() => {
        if (selectedCategory.value === "") {
          return products.value;
        } else {
          return products.value.filter((product) => product.category === selectedCategory.value);
        }
      });
  
      const filterByCategory = (category) => {
        selectedCategory.value = category;
      };
  
      return {
        uniqueCategories,
        filteredProducts,
        filterByCategory,
      };
    },
  };
  <!-- </script> -->
  