<template>
  <!-- <router-link to="/">Home</router-link>
  <router-link to="/About">About</router-link> -->
  <div class="sticky-top bg-white shadow-sm p-2 mb-5">
    <nav class="navbar navbar-expand-lg container">
      <a class="navbar-brand" href="/">
          <img src="../../public/logo.webp" style="width: 100%;height:50px;max-height: 100%;" alt="">
      </a>
      <div class="socialIcon">
        <a href="" class="m-2 p-2  rounded " style="background:#CDEAF4;"><i class="bi bi-facebook"></i></a>
        <a href="" class="m-2 p-2 rounded" style="background:#CDEAF4;"><i class="bi bi-instagram"></i></a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class=" nav-link fw-bold"  to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fw-bold"  to="/About">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fw-bold"  to="/Menu">Menu</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fw-bold"  to="/Offer">Offer</router-link>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media (max-width: 991px) {
    .socialIcon{
      display: none;
    }
  }
</style>
