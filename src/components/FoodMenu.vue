<template>
    <div>
        <h2 class="display-6 text-center mt-2 fw-bold w-auto">Our Special Menu</h2>
        <hr class="my-3 center m-auto" style="width:200px">
        <div class="lead my-3 ">
                <ul class="nav justify-content-center">
                    <a @click="filterByCategory('')" id='myButton' class=" active mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold" >All</a>
                    <a
                    
                    v-for="category in uniqueCategories"
                    :key="category"
                    @click="filterByCategory(category)"
                                class=" active mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold"
                    >  {{ category }}</a>
                </ul>
            </div>
  
      <div class="row mt-5">
              <div class="col-md-6 col-lg-3 p-1 animated animate__fadeInUp" v-for="product in filteredProducts" :key="product.id">
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
                                   <img src="../../public/1.webp" style="width:50px" alt="">
                              </span>
                              <span class=" col-4">
                                   <img src="../../public/1.webp" style="width:50px" alt="">
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
  
  .nav a{
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
</style>