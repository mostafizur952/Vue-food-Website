<template>
    <div  class="container">
    
     <div class="row">
        <div class="col-xl-9 col-md-12">
           <div class="row post">
                <div class="col-md-4 pb-3"  v-for="post in paginatedPosts" :key="post.id">
                  <div class="">
                  <img class="card-img-top" src="../../public/m2.jpg" alt="Card image cap">
                  <div class="card-body post-body py-2">
                    <a><i class="bi bi-clock py-3"></i>30 MINUTES</a>
                    <p class="card-text title">{{ post.title }}</p> 
                    <p class="blog-card-content">{{ post.content }}</p>
                    <a href="#" class="readMoreBtn btn-orange">Read More</a>
                  </div>
                  </div>
                </div>
            </div>
            <nav aria-label="Page navigation" class="mt-5">
              <ul class="pagination pagination-sm justify-content-center mt-5">
                
                <li class="page-item " :class="{ 'active': page === currentPage }" v-for="page in totalPages" :key="page">
                  <a class="page-link Pbutton" href="#" @click="changePage(page)">{{ page }}</a>
                  
                </li>
              </ul>
            </nav>
        </div>
        <div class="sb-body col-xl-3 col-md-12">
         <h4 class="fw-bold pt-2 ">Recent Post</h4>
          <div class="row g-5 ">
                <div class="col-lg-12">
                  <div class=" my-2">
                     <div class="row g-0">
                       <div class="col-6 col-md-5">
                        <img src="../../public/m2.jpg" alt="Card Image" class="card-img img-fluid rounded">
                       </div>
                       <div class="col-6 col-md-7">
                         <div class="card-body d-flex flex-column p-2">
                          <p class="py-1">1th june 2023</p>
                          <p class="fw-bold">Classic Dishes with a Modern Twist</p>
                         </div>
                       </div>
                     </div>
                  </div>

                  <div class=" my-2">
                     <div class="row g-0">
                       <div class="col-6 col-md-5">
                        <img src="../../public/m2.jpg" alt="Card Image" class="card-img img-fluid rounded">
                       </div>
                       <div class="col-6 col-md-7">
                         <div class="card-body d-flex flex-column p-2">
                          <p class="py-1">1th june 2023</p>
                          <p class="fw-bold">Classic Dishes with a Modern Twist</p>
                         </div>
                       </div>
                     </div>
                  </div>

                  <div class=" my-2">
                     <div class="row g-0">
                       <div class="col-6 col-md-5">
                        <img src="../../public/m2.jpg" alt="Card Image" class="card-img img-fluid rounded">
                       </div>
                       <div class="col-6 col-md-7">
                         <div class="card-body d-flex flex-column p-2">
                          <p class="py-1">1th june 2023</p>
                          <p class="fw-bold">Classic Dishes with a Modern Twist</p>
                         </div>
                       </div>
                     </div>
                  </div>

                  <div class=" my-2">
                     <div class="row g-0">
                       <div class="col-6 col-md-5">
                        <img src="../../public/m2.jpg" alt="Card Image" class="card-img img-fluid rounded">
                       </div>
                       <div class="col-6 col-md-7">
                         <div class="card-body d-flex flex-column p-2">
                          <p class="py-1">1th june 2023</p>
                          <p class="fw-bold">Classic Dishes with a Modern Twist</p>
                         </div>
                       </div>
                     </div>
                  </div>

                  
                </div>
            </div>
        </div>
      </div>
    </div>
    <div>
        <OfficialGroup style="margin-top:10%;"></OfficialGroup>
        <FooterPage style="margin-top:5%;"></FooterPage>
    </div>
  </template>
  
  <script>
  import OfficialGroup from './HomeComponent/OfficialGroup.vue';
  import FooterPage from '../components/HomeComponent/FooterPage.vue';

  export default {
    name: "BlogPage",
    components:{
        OfficialGroup,
        FooterPage,
        
    },
    data() {
      return {
        posts: [
          { id: 1, title: " Delicious Recipes for Busy Weeknights", content: "Food is an essential aspect of our lives, providing sustenance, pleasure, and a cultural connection. It encompasses a vast array of flavors, textures, and aromas that tantalize our taste buds and evoke deep-rooted emotions. Food not only nourishes our bodies but also brings people together, fostering shared experiences and bonding over meals. Whether it's a comforting bowl of soup on a cold day, a vibrant array of spices in an exotic dish, or a simple homemade favorite, food has the power to evoke memories, create connections, and showcase diverse culinary traditions. Exploring different cuisines allows us to embark on a gastronomic adventure, expanding our horizons and appreciating the richness of global cultures. From farm-fresh ingredients to intricate culinary techniques, food embodies creativity and craftsmanship. It stimulates our senses, fuels our bodies, and serves as a gateway to exploring the world's diverse flavors, making it a source of joy and inspiration for all." },
          { id: 2, title: "From Garden to Table: Fresh and Flavorful Recipes", content: "Food is an essential aspect of our lives, providing sustenance, pleasure, and a cultural connection. It encompasses a vast array of flavors, textures, and aromas that tantalize our taste buds and evoke deep-rooted emotions. Food not only nourishes our bodies but also brings people together, fostering shared experiences and bonding over meals. Whether it's a comforting bowl of soup on a cold day, a vibrant array of spices in an exotic dish, or a simple homemade favorite, food has the power to evoke memories, create connections, and showcase diverse culinary traditions. Exploring different cuisines allows us to embark on a gastronomic adventure, expanding our horizons and appreciating the richness of global cultures. From farm-fresh ingredients to intricate culinary techniques, food embodies creativity and craftsmanship. It stimulates our senses, fuels our bodies, and serves as a gateway to exploring the world's diverse flavors, making it a source of joy and inspiration for all." },
          { id: 3, title: " Indulgent Desserts for Every Sweet Tooth", content: "Food is an sustenance, pleasure, and a cultural connection. It encompasses a vast array of flavors, textures, and aromas that tantalize our taste buds and evoke deep-rooted emotions. Food not only nourishes our bodies but also brings people together, fostering shared experiences and bonding over meals. Whether it's a comforting bowl of soup on a cold day, a vibrant array of spices in an exotic dish, or a simple homemade favorite, food has the power to evoke memories, create connections, and showcase diverse culinary traditions. Exploring different cuisines allows us to embark on a gastronomic adventure, expanding our horizons and appreciating the richness of global cultures. From farm-fresh ingredients to intricate culinary techniques, food embodies creativity and craftsmanship. It stimulates our senses, fuels our bodies, and serves as a gateway to exploring the world's diverse flavors, making it a source of joy and inspiration for all." },
          { id: 4, title: "International Recipes and Food Adventures", content: "Food is an essential aspect of our lives, providing sustenance, pleasure, and a cultural connection. It encompasses a vast array of flavors, textures, and aromas that tantalize our taste buds and evoke deep-rooted emotions. Food not only nourishes our bodies but also brings people together, fostering shared experiences and bonding over meals. Whether it's a comforting bowl of soup on a cold day, a vibrant array of spices in an exotic dish, or a simple homemade favorite, food has the power to evoke memories, create connections, and showcase diverse culinary traditions. Exploring different cuisines allows us to embark on a gastronomic adventure, expanding our horizons and appreciating the richness of global cultures. From farm-fresh ingredients to intricate culinary techniques, food embodies creativity and craftsmanship. It stimulates our senses, fuels our bodies, and serves as a gateway to exploring the world's diverse flavors, making it a source of joy and inspiration for all." },
          { id: 5, title: " Wholesome Recipes for a Healthy Lifestyle", content: " providing sustenance, pleasure, and a cultural connection. It encompasses a vast array of flavors, textures, and aromas that tantalize our taste buds and evoke deep-rooted emotions. Food not only nourishes our bodies but also brings people together, fostering shared experiences and bonding over meals. Whether it's a comforting bowl of soup on a cold day, a vibrant array of spices in an exotic dish, or a simple homemade favorite, food has the power to evoke memories, create connections, and showcase diverse culinary traditions. Exploring different cuisines allows us to embark on a gastronomic adventure, expanding our horizons and appreciating the richness of global cultures. From farm-fresh ingredients to intricate culinary techniques, food embodies creativity and craftsmanship. It stimulates our senses, fuels our bodies, and serves as a gateway to exploring the world's diverse flavors, making it a source of joy and inspiration for all." },
          { id: 6, title: " Classic Dishes with a Modern Twist", content: "Food is an essential aspect of our lives, providing sustenance, pleasure, and a cultural connection. It encompasses a vast array of flavors, textures, and aromas that tantalize our taste buds and evoke deep-rooted emotions. Food not only nourishes our bodies but also brings people together, fostering shared experiences and bonding over meals. Whether it's a comforting bowl of soup on a cold day, a vibrant array of spices in an exotic dish, or a simple homemade favorite, food has the power to evoke memories, create connections, and showcase diverse culinary traditions. Exploring different cuisines allows us to embark on a gastronomic adventure, expanding our horizons and appreciating the richness of global cultures. From farm-fresh ingredients to intricate culinary techniques, food embodies creativity and craftsmanship. It stimulates our senses, fuels our bodies, and serves as a gateway to exploring the world's diverse flavors, making it a source of joy and inspiration for all." },
          { id: 7, title: "Affordable Recipes for Food Lovers", content: " providing sustenance, pleasure, and a cultural connection. It encompasses a vast array of flavors, textures, and aromas that tantalize our taste buds and evoke deep-rooted emotions. Food not only nourishes our bodies but also brings people together, fostering shared experiences and bonding over meals. Whether it's a comforting bowl of soup on a cold day, a vibrant array of spices in an exotic dish, or a simple homemade favorite, food has the power to evoke memories, create connections, and showcase diverse culinary traditions. Exploring different cuisines allows us to embark on a gastronomic adventure, expanding our horizons and appreciating the richness of global cultures. From farm-fresh ingredients to intricate culinary techniques, food embodies creativity and craftsmanship. It stimulates our senses, fuels our bodies, and serves as a gateway to exploring the world's diverse flavors, making it a source of joy and inspiration for all." },
          { id: 8, title: " Vibrant and Delicious Vegan Recipes", content: "Food is an essential aspect of our lives, providing sustenance, pleasure, and a cultural connection. It encompasses a vast array of flavors, textures, and aromas that tantalize our taste buds and evoke deep-rooted emotions. Food not only nourishes our bodies but also brings people together, fostering shared experiences and bonding over meals. Whether it's a comforting bowl of soup on a cold day, a vibrant array of spices in an exotic dish, or a simple homemade favorite, food has the power to evoke memories, create connections, and showcase diverse culinary traditions. Exploring different cuisines allows us to embark on a gastronomic adventure, expanding our horizons and appreciating the richness of global cultures. From farm-fresh ingredients to intricate culinary techniques, food embodies creativity and craftsmanship. It stimulates our senses, fuels our bodies, and serves as a gateway to exploring the world's diverse flavors, making it a source of joy and inspiration for all." },
          { id: 9, title: " Bold and Flavorful Recipes from Around the World", content: " providing sustenance, pleasure, and a cultural connection. It encompasses a vast array of flavors, textures, and aromas that tantalize our taste buds and evoke deep-rooted emotions. Food not only nourishes our bodies but also brings people together, fostering shared experiences and bonding over meals. Whether it's a comforting bowl of soup on a cold day, a vibrant array of spices in an exotic dish, or a simple homemade favorite, food has the power to evoke memories, create connections, and showcase diverse culinary traditions. Exploring different cuisines allows us to embark on a gastronomic adventure, expanding our horizons and appreciating the richness of global cultures. From farm-fresh ingredients to intricate culinary techniques, food embodies creativity and craftsmanship. It stimulates our senses, fuels our bodies, and serves as a gateway to exploring the world's diverse flavors, making it a source of joy and inspiration for all." },
          { id: 10, title: " Cozy Recipes to Warm Your Heart", content: "Food is an sustenance, pleasure, and a cultural connection. It encompasses a vast array of flavors, textures, and aromas that tantalize our taste buds and evoke deep-rooted emotions. Food not only nourishes our bodies but also brings people together, fostering shared experiences and bonding over meals. Whether it's a comforting bowl of soup on a cold day, a vibrant array of spices in an exotic dish, or a simple homemade favorite, food has the power to evoke memories, create connections, and showcase diverse culinary traditions. Exploring different cuisines allows us to embark on a gastronomic adventure, expanding our horizons and appreciating the richness of global cultures. From farm-fresh ingredients to intricate culinary techniques, food embodies creativity and craftsmanship. It stimulates our senses, fuels our bodies, and serves as a gateway to exploring the world's diverse flavors, making it a source of joy and inspiration for all." },
          { id: 11, title: "Bold and Flavorful Recipes from Around the World", content: "Food is an essential aspect of our lives, providing sustenance, pleasure, and a cultural connection. It encompasses a vast array of flavors, textures, and aromas that tantalize our taste buds and evoke deep-rooted emotions. Food not only nourishes our bodies but also brings people together, fostering shared experiences and bonding over meals. Whether it's a comforting bowl of soup on a cold day, a vibrant array of spices in an exotic dish, or a simple homemade favorite, food has the power to evoke memories, create connections, and showcase diverse culinary traditions. Exploring different cuisines allows us to embark on a gastronomic adventure, expanding our horizons and appreciating the richness of global cultures. From farm-fresh ingredients to intricate culinary techniques, food embodies creativity and craftsmanship. It stimulates our senses, fuels our bodies, and serves as a gateway to exploring the world's diverse flavors, making it a source of joy and inspiration for all." },
          { id: 12, title: "Vibrant and Delicious Vegan Recipes", content: "Fproviding sustenance, pleasure, and a cultural connection. It encompasses a vast array of flavors, textures, and aromas that tantalize our taste buds and evoke deep-rooted emotions. Food not only nourishes our bodies but also brings people together, fostering shared experiences and bonding over meals. Whether it's a comforting bowl of soup on a cold day, a vibrant array of spices in an exotic dish, or a simple homemade favorite, food has the power to evoke memories, create connections, and showcase diverse culinary traditions. Exploring different cuisines allows us to embark on a gastronomic adventure, expanding our horizons and appreciating the richness of global cultures. From farm-fresh ingredients to intricate culinary techniques, food embodies creativity and craftsmanship. It stimulates our senses, fuels our bodies, and serves as a gateway to exploring the world's diverse flavors, making it a source of joy and inspiration for all." },
        ],
        pageSize: 3,
        currentPage: 1,
      };
    },
    computed: {
      paginatedPosts() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.posts.slice(startIndex, endIndex);
      },
      totalPages() {
        return Math.ceil(this.posts.length / this.pageSize);
      },
    },
    methods: {
      changePage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
      },
      
    },
  };
  </script>

<style>

.post-body{
   padding-bottom:2rem;
}

.post-body .title{
  font-size:20px;
  font-weight: 600;
}

.blog-card-content {
  max-height:70px; 
  overflow: hidden;
}

.blog-card.show-more .blog-card-content {
  max-height: none; 
}


.readMoreBtn {
  position: relative;
  font-size:15px !important;
  padding:.7em 1.5em;
  background-color: orange;
  text-decoration: none;
  border-radius: 0.5em;
  color: #ffffff;
 
}


.readMoreBtn::before {
  position: absolute;
  content: '';
  height: 0;
  width: 0;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 50%, rgb(241, 168, 31) 50%, rgb(243, 171, 37) 60%);
  border-radius: 0.5em;

  box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
  transition: 0.3s;
}

.readMoreBtn:hover::before {
  width: 1.6em;
  height: 1.6em;
}

.readMoreBtn:active {
  box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
  transform: translate(0.1em, 0.1em);
}

/* pagination style  */


.Pbutton {
  /* outline: none !important; */
  position: relative;
  box-sizing: border-box;
  padding:4px 15px;
  border-radius: 50%;
  margin: .6rem;
  color: hsl(150, 100%, 17%);
  cursor: pointer;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  transition: all .5s ease-in-out;
}

.Pbutton:hover {
  background: fade-out(#f4bee3, .5);
  
  transition: all .5s ease-in-out;
	animation: pulse .5s;
}
@keyframes pulse {
	50% {
		transform: scale(1.3);
	}
}
.Pbutton:before {
  display: block;
  content: '';
  position: absolute;
  z-index: -1;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 50%;
  border: 1px solid #eee;
  transform: scale(0);
  transition: all .5s ease-in-out;
}

.pagination .page-item.active .page-link {
  background-color: orange;
  border-color: orange;
  outline: none;
  color: white;
}


.Pbutton:checked {
  color: #eee;
  background: none;
  transition: all .5s ease-in-out;
}




/* sidebar design */
.sb-body{
  background: #f7f6f6;
  border-radius: 10px;
}

.card-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom-right-radius: 0px;
}

</style>

  
