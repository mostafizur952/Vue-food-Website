<template>
  <div class="row py-5">
    <div class="col-md-6 justify-content-center align-items-center">
      <img src="../../../public/logo.webp" style="width:120px" alt="">
      <div class="py-3">
        <a href="" class="m-1 rounded p-2" style="background:#CDEAF4;"><i class="bi bi-facebook"></i></a>
        <a href="" class="m-1 rounded p-2" style="background:#CDEAF4;"><i class="bi bi-envelope"></i></a>
        <a href="" class="m-1 rounded p-2" style="background:#CDEAF4;"><i class="bi bi-linkedin"></i></a>
        <a href="" class="m-1 rounded p-2" style="background:#CDEAF4;"><i class="bi bi-instagram"></i></a>
      </div>
    </div>
    <div class="col-md-6 justify-content-center align-items-center">
      <div class="row fmenubar">
        <div class=" col-sm-3 col-md-4 col-lg-4 ">
          <h3>Product</h3>
          
            <li><a href="">Menu</a></li>
            <li><a href="">Price List</a></li>
            <li><a href="">Reviews</a></li>
            <li><a href="">Updates</a></li>
          
        </div>
        <div class=" col-sm-4  col-md-4 col-lg-4 ">
          <h3>Company</h3>
          
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Blogs</a></li>
          
        </div>
        <div class=" col-sm-4  col-md-4 col-lg-4">
          <h3>Support</h3>
          
            <li><a href="">Help Center</a></li>
            <li><a href="">Report a Bug</a></li>
            <li><a href="">Chat Support</a></li>
          
        </div>
      </div>
    </div>
    <hr class="my-5">
    <div class="text-center">
      <h5 class="py-2">Developer Team</h5>
      <p style="font-size:20;">Copyright © 2023  Kacchi Bhai | All Rights Reserved</p>
    </div>
  </div>
</template>
<script>
export default {
  name:'FooterPage',
  
  }
</script>

<style>
h3{
  letter-spacing:1px;
  font-weight: 700;
  padding-bottom: 5px;
}
.fmenubar div  li{
  list-style: none;
  margin-top:5px;
  letter-spacing:1px;
}

.fmenubar div  li a{
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: rgb(63, 63, 63);
}

.fmenubar div  li a:hover{

  color: rgb(255, 92, 92);
}

@media (max-width:425px) {
  h3{
    margin-top: 15px;
  }

  .fmenubar div  li{
  list-style: none;
  margin-top:15px;
  letter-spacing:1px;
}

.fmenubar div  li a{
  font-size:15px;
}

}
</style>