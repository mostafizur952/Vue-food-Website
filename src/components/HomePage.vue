<template>
    <div>
        <div class="jumbotron p-4 " style="background:#FFF2F2;border-radius:15px">

        <h1 class="display-6 text-center mt-2 fw-bold">Our Special Menu</h1>
        <hr class="my-3 center m-auto" style="width:200px">
        <div class="lead my-3 ">
            <ul class="nav justify-content-center">
                <a class=" active mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold"  @click="filterByCategory('')">All</a>
                <a
                
                    class=" active mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold" 
                    v-for="category in uniqueCategories"
                    :key="category"
                    @click="filterByCategory(category)"
                >
                    {{ category }}
                </a>
                <!-- <a class=" active mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold" aria-current="page" href="#">Fish</a>
                <a class=" mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold" aria-current="page" href="#">Meat</a>
                <a class=" mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold" aria-current="page" href="#">Rice</a>

                <a class=" mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold" aria-current="page" href="#">Fish</a>
                <a class=" mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold" aria-current="page" href="#">Meat</a>
                <a class=" mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold" aria-current="page" href="#">Rice</a>
             -->
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
        <OurBranch></OurBranch>
    </div>
</template>
<!-- <script>
import OurBranch from '../components/HomeComponent/OurBranch.vue'
export default {
    name:"HomePage",
    components:{
        OurBranch,
    }
   
}
</script> -->
<script>
import OurBranch from '../components/HomeComponent/OurBranch.vue'

import { ref, computed } from 'vue';

export default {
    name:"HomePage",
    components:{
        OurBranch,
    },
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
    }
    .nav a:hover {
        background-color: rgb(252, 135, 135);
        color: rgb(255, 255, 255);
        transition: .5s;
        border: 1.5px solid rgb(138, 0, 103);
    }
</style>