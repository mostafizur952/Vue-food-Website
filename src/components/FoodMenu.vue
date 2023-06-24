<template>
    <div>
        <h2 class="display-6 text-center mt-2 fw-bold w-auto">Our Special Menu</h2>
        <hr class="my-3 center m-auto" style="width:200px">
        <nav aria-label="Page navigation" class="mt-5">
            <ul class="pagination justify-content-center container">
              <li class="page-item">
                <a class="page-link"  href="#"  @click="filterByCategory('')"> All</a>
              </li>
               <li class="page-item "  v-for="category in uniqueCategories"
                :key="category"
                @click="filterByCategory(category)">
                <a class="page-link"  href="#"> {{ category }}</a>
              </li>
            </ul>
        </nav>
  
      <div class="row mt-5">
              <div id="animate" class="col-md-6 col-lg-3 p-1 animated animate__zoomInUp" v-for="product in filteredProducts" :key="product.id">
                  <div class="card" aria-hidden="true">
                      <img src="https://uploads-ssl.webflow.com/63de61fd6af00b31333c0d3a/64205ee67e674a413bdf79a7_kacchi_bhai_basmati_kacchi_thumbnail_1649579791606%20(1).jpeg" class="card-img-top " alt="">
                      <div class="card-body">
                          <h5 class="card-title text-center my-2">
                          <span class=" text-center">{{ product.name }}</span>
                          </h5>
                          <div class="card-text row mt-4">
                              <span class=" col-4">
                                   <img src="../../public/1.webp" style="width:50px" alt="">
                              </span>
                              <span class=" col-4">
                                   <img src="../../public/3.webp" style="width:50px" alt="">
                              </span>
                              <span class=" col-4">
                                   <img src="../../public/5.webp" style="width:50px" alt="">
                              </span>
                          </div>
  
                          <div class="card-text  row">
                              <span class=" col-4 m-auto">
                                  Price : {{ product.price }}
                              </span>
                              <span class=" col-4">
                                  Price : {{ product.price2 }}
                              </span>
                              <span class=" col-4">
                                  Price : {{ product.price3 }}
                              </span>
                          </div>
                      </div>  
                  </div>
              </div>
      </div>
  
  
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    name:'FoodMenu',
    setup() {
      const products = ref([
        { id: 1, name: "Fish Rice", category: "FISH", price: 10,price2: 15,price3: 60 },
        { id: 2, name: "kacchi biriyani", category: "KACCHI", price: 15 ,price2: 15,price3: 60 },
        { id: 3, name: "beef biriyani", category: "BIRIYANI", price: 50 ,price2: 15,price3: 60},
        { id: 4, name: "white rice ", category: "WHITE-RICE", price: 25,price2: 15,price3: 60 },
        { id: 5, name: "Beef biriyani dui", category: "BIRIYANI", price: 50 ,price2: 15,price3: 60},
        { id: 11, name: "Fish Rice", category: "FISH", price: 10,price2: 15,price3: 60 },
        { id: 12, name: "kacchi biriyani", category: "KACCHI", price: 15 ,price2: 15,price3: 60 },
        { id: 13, name: "beef biriyani", category: "BIRIYANI", price: 50 ,price2: 15,price3: 60},
        { id: 14, name: "white rice ", category: "WHITE-RICE", price: 25,price2: 15,price3: 60 },
        { id: 15, name: "Beef biriyani dui", category: "BIRIYANI", price: 50 ,price2: 15,price3: 60},
  
        // Add more products...
      ]);
      const selectedCategory = ref("");
  
      const uniqueCategories = computed(() => [...new Set(products.value.map((product) => product.category))]);
  
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
  </script>
 
  <style>
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;

  }

</style>