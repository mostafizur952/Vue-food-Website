<template>
    <div>
      <div>
        <a @click="filterData('')" id='myButton' class=" active mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold" >All</a>
        <a
          v-for="allcat  in allItems"
                    :key="allcat.category"
                    @click="filterData(allcat.category)" 
                    class=" active mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold"
        > {{allcat.category}}</a>

      </div>
      <ul>
        <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import jsonData from './data.json';

  export default {
    
    name:"TestPage",
    data() {
      return {
        allItems: [],
        filteredItems: [],
        
 
      };
    },

    // const uniqueCategories = computed(() => [...new Set(products.value.map((product) => product.category))]);
    created() {
      this.allItems = jsonData;
      window.addEventListener('DOMContentLoaded', function() {
        var button = document.getElementById('myButton');
        button.click();
      });
    },


    
    methods: {
      filterData(category) {
       
        if(category === ''){
            this.filteredItems = jsonData;
        }
        else if(category === category){
            this.filteredItems = this.allItems.filter(item => item.category === category);
        }
        else{
            this.filteredItems = jsonData;
        }
      },
    },
  };

  </script>
  