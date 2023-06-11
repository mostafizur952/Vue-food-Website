<template>
    <div  class="container py-5">
      <h1 class="text-center mb-4"> Food Blog</h1>
      <hr class="col-sm-2 m-auto">
    
    <div class="row my-3">
      <div class="col-md-8 offset-md-2">
        <div v-for="post in paginatedPosts" :key="post.id" class="mb-4">
          <h2>{{ post.title }}</h2>
            <img src="../../public/m2.jpg" class="img-fluid mb-3" alt="Image 1">
          <p  class="">{{ post.content }}</p>
        </div>
       </div>
    </div>
      <nav aria-label="Page navigation">
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
          { id: 1, title: "Post Title 1", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in, blanditiis numquam magni dolores dolorum assumenda veniam, quo sapiente optio dolore." },
          { id: 2, title: "Post Title 2", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in, blanditiis numquam magni dolores dolorum assumenda veniam, quo sapiente optio dolore." },
          { id: 3, title: "Post Title 3", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in, blanditiis numquam magni dolores dolorum assumenda veniam, quo sapiente optio dolore." },
          { id: 4, title: "Post Title 4", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in, blanditiis numquam magni dolores dolorum assumenda veniam, quo sapiente optio dolore." },
          { id: 5, title: "Post Title 5", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in, blanditiis numquam magni dolores dolorum assumenda veniam, quo sapiente optio dolore." },
          { id: 6, title: "Post Title 6", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in, blanditiis numquam magni dolores dolorum assumenda veniam, quo sapiente optio dolore." },
          { id: 7, title: "Post Title 7", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in, blanditiis numquam magni dolores dolorum assumenda veniam, quo sapiente optio dolore." },
          { id: 8, title: "Post Title 8", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in, blanditiis numquam magni dolores dolorum assumenda veniam, quo sapiente optio dolore." },
          { id: 9, title: "Post Title 9", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in, blanditiis numquam magni dolores dolorum assumenda veniam, quo sapiente optio dolore." },
          { id: 10, title: "Post Title 10", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in, blanditiis numquam magni dolores dolorum assumenda veniam, quo sapiente optio dolore." },
          { id: 11, title: "Post Title 11", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in, blanditiis numquam magni dolores dolorum assumenda veniam, quo sapiente optio dolore." },
          { id: 12, title: "Post Title 12", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus est voluptatibus quod deserunt, pariatur minus consectetur numquam. Unde in, blanditiis numquam magni dolores dolorum assumenda veniam, quo sapiente optio dolore." },
        ],
        pageSize: 4,
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

  
