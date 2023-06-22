<template>
    <div  class="container">
    
     <div class="row">
        <div class="col-xl-9 col-md-12">
           <div class="row">
                <div class="col-md-4"  v-for="post in paginatedPosts" :key="post.id">
                  <div class="card">
                  <img class="card-img-top" src="../../public/m2.jpg" alt="Card image cap">
                  <div class="card-body">
                    <div class="title_style fw-2">
                      {{ post.title }}
                    </div>
                    <p class="card-text">{{ post.content }}</p>
                  </div>
                  </div>
                </div>
            </div>
            <nav aria-label="Page navigation" class="mt-5">
              <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                  <a class="page-link" href="#" @click="changePage(currentPage - 1)" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li class="page-item" :class="{ 'active': page === currentPage }" v-for="page in totalPages" :key="page">
                  <a class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                  <a class="page-link" href="#" @click="changePage(currentPage + 1)">Next</a>
                </li>
              </ul>
            </nav>
        </div>
        <div class="col-xl-3 col-md-12">
          <div class="card  my-1">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="../../public/bg.jpg" alt="Card Image" class="img-fluid py-3 px-2">
              </div>
              <div class="col-md-8">
                <div class="card-body pt-5">
                  <h5 class="card-title">Kacchi Biriyani</h5>
                  <p class="card-text">12/10/2023</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card  my-1">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="../../public/m2.jpg" alt="Card Image" class="img-fluid py-3 px-2">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Kacchi Biriyani</h5>
                  <p class="card-text">12/10/2023</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card  my-1">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://uploads-ssl.webflow.com/63de61fd6af00b31333c0d3a/64205ee67e674a413bdf79a7_kacchi_bhai_basmati_kacchi_thumbnail_1649579791606%20(1).jpeg" alt="Card Image" class="img-fluid py-3 px-2">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Kacchi Biriyani</h5>
                  <p class="card-text">12/10/2023</p>
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
          { id: 1, title: "Post Title 1", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in," },
          { id: 2, title: "Post Title 2", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in," },
          { id: 3, title: "Post Title 3", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in," },
          { id: 4, title: "Post Title 4", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in," },
          { id: 5, title: "Post Title 5", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in," },
          { id: 6, title: "Post Title 6", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in," },
          { id: 7, title: "Post Title 7", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in," },
          { id: 8, title: "Post Title 8", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in," },
          { id: 9, title: "Post Title 9", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in," },
          { id: 10, title: "Post Title 10", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in," },
          { id: 11, title: "Post Title 11", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in," },
          { id: 12, title: "Post Title 12", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in," },
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
 .title_style{
  font-size: 25px;
  font-weight:600;
 }
</style>

  
