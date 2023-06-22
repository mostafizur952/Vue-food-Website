<template>
  <div class="card-grid">
    <div class="filter-controls">
      <button @click="filter('')">All</button>
      <button @click="filter('category1')">Category 1</button>
      <button @click="filter('category2')">Category 2</button>
      <!-- Add more filter buttons based on your categories -->
    </div>


    
    <div class="row mt-5">
              <div class="col-md-6 col-lg-3 p-1 animated animate__zoomInUp" v-for="card in filteredCards" :key="card.id" ref="cardContainer" >
                  <div class="card" aria-hidden="true">
                      <img src="https://uploads-ssl.webflow.com/63de61fd6af00b31333c0d3a/64205ee67e674a413bdf79a7_kacchi_bhai_basmati_kacchi_thumbnail_1649579791606%20(1).jpeg" class="card-img-top " alt="">
                      <div class="card-body">
                          <h5 class="card-title text-center my-2">
                          <span class=" text-center">{{ card.title }}</span>
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
                                  Price :    <h3>{{ card.title }}</h3>
                              </span>
                              <span class=" col-4">
                                  Price :    <h3>{{ card.title }}</h3>
                              </span>
                              <span class=" col-4">
                                  Price :    <h3>{{ card.title }}</h3>
                              </span>
                          </div>
                      </div>  
                  </div>
              </div>
      </div>
  </div>
</template>

<script>
import { cards } from './Appdata.js';
import mixitup from 'mixitup';

export default {
  name:"JustFun",
  mounted() {
    this.initMixItUp();
    
  },
  data() {
    return {
      cards,
      filteredCards: cards
    };
  },
  methods: {
    initMixItUp() {
      
      mixitup(this.$refs.cardContainer);
    },
    filter(category) {
      this.filteredCards = category
        ? this.cards.filter(card => card.category === category)
        : this.cards;
        
      mixitup(this.$refs.cardContainer).filter(category);
    }
  }
}
</script>

<style>

</style>
