<template>
    <div  class="container">
    
     <div class="row">
        <div class="col-xl-9 col-md-12">
           <div class="row post">
                <div class=""  v-for="post in paginatedPosts" :key="post.id">
                    <div class="">
                        <img src="../../public/m2.jpg" class="img-fluid Pimage" alt="Responsive Image">
                    </div>
                    <div class="">
                        <h1>{{ post.title }}</h1>
                        <p>Posted on June 24, 2023</p>
                        <p class="content">{{ post.content }}</p>
                    </div>            
                </div>
            </div>
        </div>
        <div class="sb-body col-xl-3 col-md-12 ">
         <h4 class="fw-bold pt-2 ">Recent Post</h4>
          <div class="row g-5 ">
                <div class="col-lg-12">
                  <div class=" my-2">
                     <div class="row g-0 sb-post">
                       <div class="col-6 col-md-5">
                        <img src="../../public/m2.jpg" alt="Card Image" class="card-img img-fluid rounded">
                       </div>
                       <div class="col-6 col-md-7">
                         <div class="card-body d-flex flex-column p-2">
                          <p class="py-1 time">1th june 2023</p>
                          <router-link to="/blogview" class="fw-bold sb-title">Classic Dishes with a Modern Twist</router-link>
                         </div>
                       </div>
                     </div>
                  </div>

                  <div class=" my-2">
                     <div class="row g-0 sb-post">
                       <div class="col-6 col-md-5">
                        <img src="../../public/m2.jpg" alt="Card Image" class="card-img img-fluid rounded">
                       </div>
                       <div class="col-6 col-md-7">
                         <div class="card-body d-flex flex-column p-2">
                          <p class="py-1 time">1th june 2023</p>
                          <router-link to="/blogview" class="fw-bold sb-title">Classic Dishes with a Modern Twist</router-link>
                         </div>
                       </div>
                     </div>
                  </div>

                  <div class=" my-2">
                     <div class="row g-0 sb-post">
                       <div class="col-6 col-md-5">
                        <img src="../../public/m2.jpg" alt="Card Image" class="card-img img-fluid rounded">
                       </div>
                       <div class="col-6 col-md-7">
                         <div class="card-body d-flex flex-column p-2">
                          <p class="py-1 time">1th june 2023</p>
                          <router-link to="/blogview" class="fw-bold sb-title">Classic Dishes with a Modern Twist</router-link>
                         </div>
                       </div>
                     </div>
                  </div>

                  <div class=" my-2">
                     <div class="row g-0 sb-post">
                       <div class="col-6 col-md-5">
                        <img src="../../public/m2.jpg" alt="Card Image" class="card-img img-fluid rounded">
                       </div>
                       <div class="col-6 col-md-7">
                         <div class="card-body d-flex flex-column p-2">
                          <p class="py-1 time">1th june 2023</p>
                          <router-link to="/blogview" class="fw-bold sb-title">Classic Dishes with a Modern Twist</router-link>
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
        <OfficialGroup class="mt-5"></OfficialGroup>
        <FooterPage class="mt-2"></FooterPage>
    </div>
  </template>
  
  <script>
  import OfficialGroup from './HomeComponent/OfficialGroup.vue';
  import FooterPage from '../components/HomeComponent/FooterPage.vue';

  export default {
    name: "BlogView",
    components:{
        OfficialGroup,
        FooterPage,
        
    },
    data() {
      return {
        posts: [
          { id: 1, title: " Delicious Recipes for Busy Weeknights", content: "Food is an essential aspect of our lives, providing sustenance, pleasure, and a cultural connection. It encompasses a vast array of flavors, textures, and aromas that tantalize our taste buds and evoke deep-rooted emotions. Food not only nourishes our bodies but also brings people together, fostering shared experiences and bonding over meals. Whether it's a comforting bowl of soup on a cold day, a vibrant array of spices in an exotic dish, or a simple homemade favorite, food has the power to evoke memories, create connections, and showcase diverse culinary traditions. Exploring different cuisines allows us to embark on a gastronomic adventure, expanding our horizons and appreciating the richness of global cultures. From farm-fresh ingredients to intricate culinary techniques, food embodies creativity and craftsmanship. It stimulates our senses, fuels our bodies, and serves as a gateway to exploring the world's diverse flavors, making it a source of joy and inspiration for all." },
           ],
      };
    },
    computed: {
      paginatedPosts() {
        return this.posts;
      },
    },
  };
  </script>

<style>

.post-body{
   padding-bottom:2rem;
}


.Pimage{
    width: 100%;
}
.content {
  text-align: justify;
}

/* sidebar design */
.sb-body{
  background: #f7f6f6;
  border-radius: 10px;
}

.card-img{
  width:80%;
  height:80%;
  object-fit: cover;
  border-bottom-right-radius: 0px;
}


.time{
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

}
</style>

  
