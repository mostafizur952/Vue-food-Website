<template>
  <!-- <router-link to="/">Home</router-link>
  <router-link to="/About">About</router-link> -->
  <div class="sticky-top bg-white shadow-sm p-2 mb-5">
    <nav class="navbar navbar-expand-lg container">
      <a class="navbar-brand" href="/">
          <img src="../../public/logo.webp" style="width: 100%;height:50px;max-height: 100%;" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item d-flex justify-content-end nav-li">
          <router-link class=" nav-link fw-bold nlink"   to="/">
            <img src="../../public/fork.svg"  v-show="isHovered"  class="nav-icon animated animate__fadeInLeft" alt="" srcset="">
            <span v-on:mouseover="showElement" v-on:mouseout="hideElement" >Home</span>
          </router-link>
        </li>
        <li class="nav-item d-flex justify-content-end nav-li">
          <router-link class="nav-link fw-bold nlink"  to="/About">
            <img src="../../public/fork.svg"  v-show="isHovered2"  class="nav-icon animated animate__fadeInLeft" alt="" srcset="">
            <span v-on:mouseover="showElement2" v-on:mouseout="hideElement2" >About</span>
          </router-link>
        </li>
        
        <li class="nav-item d-flex justify-content-end nav-li">
          <router-link class="nav-link fw-bold nlink"  to="/Menu">
            <img src="../../public/fork.svg"  v-show="isHovered3"  class="nav-icon animated animate__fadeInLeft" alt="" srcset="">
            <span v-on:mouseover="showElement3" v-on:mouseout="hideElement3" >Menu</span>
          </router-link>
        </li>
        <li class="nav-item d-flex justify-content-end nav-li">
          <router-link class="nav-link fw-bold nlink"  to="/Offer">
            <img src="../../public/fork.svg"  v-show="isHovered4"  class="nav-icon animated animate__fadeInLeft" alt="" srcset="">
            <span v-on:mouseover="showElement4" v-on:mouseout="hideElement4" >Offer</span>
          </router-link>
        </li>
        <!-- Add more menu items as needed -->
      </ul>
    </div>
  </nav>

  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  },
  data() {
    return {
      isHovered: false,
      isHovered2: false,
      isHovered3: false,
      isHovered4: false,
    };
  },
  methods: {
    showElement() {
      this.isHovered = true;
    },
    hideElement() {
      this.isHovered = false;
    },

    showElement2() {
      this.isHovered2 = true;
    },
    hideElement2() {
      this.isHovered2 = false;
    },
    showElement3() {
      this.isHovered3 = true;
    },
    hideElement3() {
      this.isHovered3 = false;
    },
    showElement4() {
      this.isHovered4 = true;
    },
    hideElement4() {
      this.isHovered4 = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav-li{
  width: 110px;
  display: block;

}
.nlink{
  font-size: 20px;
}
.nav-icon{
  margin-right: 2px;
 }



  @media (max-width: 991px) {
    .socialIcon{
      display: none;
    }
  }
</style>
