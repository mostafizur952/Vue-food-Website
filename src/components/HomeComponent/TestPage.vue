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






/* .nav a{
  transition: 1s;
  text-decoration: none;

  color: #090909;
  padding: 0.3em .9em;
  font-size: 15px;
  border-radius: 0.5em;
  background: #e8e8e8;
  /* border: 1px solid #e8e8e8; */
  transition: all .3s;
  box-shadow: 6px 6px 12px #c5c5c5,
            -6px -6px 12px #ffffff;
}
.nav a:hover {
  color: rgb(26, 101, 240);
  transition: .5s;
  border: 1.5px solid white;
  box-shadow: 0px 0px 0px #c5c5c5,
            -0px -0px 0px #ffffff;
}


.nav a:active {
box-shadow: 4px 4px 12px #c5c5c5,
         -4px -4px 12px #ffffff;
}