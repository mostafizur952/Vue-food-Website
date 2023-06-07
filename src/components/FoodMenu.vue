<template>
    <div class="" style="background:#FFF2F2;border-radius:15px">
        <div class="jumbotron p-4  " style="background:#FFF2F2;border-radius:15px">

            <h1 class="display-6 text-center mt-2 fw-bold">Our Special Menu</h1>
            <hr class="my-3 center m-auto" style="width:200px">
            <div class="lead my-3 ">
                <ul class="nav justify-content-center">
                    <a @click="filterData('')" id='myButton' class=" active mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold" >All</a>
                    <a
                    v-for="allcat  in allItems"
                                :key="allcat.category"
                                @click="filterData(allcat.category)" 
                                class=" active mt-2 border border-danger rounded btn btn-sm mx-2 text-uppercase fw-bold"
                    > {{allcat.category}}</a>
                </ul>
            </div>

            <div class="row mt-5">
                <div class="col-md-6 col-lg-3 p-1 animated animate__fadeInUp" v-for="item in filteredItems" :key="item.id">
                    <div class="card" aria-hidden="true">
                        <img src="https://uploads-ssl.webflow.com/63de61fd6af00b31333c0d3a/64205ee67e674a413bdf79a7_kacchi_bhai_basmati_kacchi_thumbnail_1649579791606%20(1).jpeg" class="card-img-top " alt="">
                        <div class="card-body">
                            <h5 class="card-title text-center my-2">
                            <span class=" text-center">{{ item.name }}</span>
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
                                    Price : {{ item.price }}
                                </span>
                                <span class=" col-4">
                                    Price : {{ item.price2 }}
                                </span>
                                <span class=" col-4">
                                    Price : {{ item.price3 }}
                                </span>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jsonData from './HomeComponent/data.json';

export default {
  
  name:"FoodMenu",
  data() {
    return {
      allItems: [],
      filteredItems: [],
      

    };
  },
  mounted() {
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