<template>
  <div>
    <div class="row py-5">
     <div class="col-xl-3">
       <img src="../../../public/logo.webp" style="width:120px" alt="">
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.  </p>
     </div>
     <div class="col-xl-9">
      <div class="row">
          <div class="col-md-3">
              <h5 class="h5">Usefull Links</h5>
              <div class="row usefullUrl">
                  <router-link class="col-md-12" to="/about">About Us</router-link>
                  <router-link class="col-md-12" to="/contactus">Contact Us</router-link>
                  <router-link class="col-md-12" to="/blog">Blogs</router-link>
                  <router-link class="col-md-12" to="/contactus">Help Center</router-link>
                  <router-link class="col-md-12" to="/privacy">Privacy Policy</router-link> 
              </div>

          </div>
          <div class="col-md-3">
             <h5 class="h5">Download App</h5>
             <div class="row usefullUrl">
                  <p>App's available for Download</p>
                  <router-link class="col-md-12" to="/menu">
                    <img class="cmnstore " src="../../../public/playsotore.png" alt="">
                  </router-link>
                  <router-link class="col-md-12" to="">
                    <img  class="cmnstore " src="../../../public/apple.png" alt="">
                  </router-link>
              </div>

          </div>
          <div class="col-md-6">
              <h5 class="h5">NewsLetter</h5>
              <div class="row usefullUrl">
                  <p>Sign up to be first to recive the latest stories inspiring us, case studies and industry news</p>
                  <form class="container">
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Type Your Name">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control my-3" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                    <div class="form-group">
                        <button class="button my-2">
                            <span>Submit</span>
                        </button>
                    </div>
                </form>
                </div>
          </div>
      </div>
     </div>
    </div>
    <div class="row py-4 copyright">
        <div class="col-xl-6 col-md-6">
          <p>Copyright © 2023  Kacchi Bhai | All Rights Reserved</p>

        </div>
        <div class="col-xl-6 col-md-6">
          <div class="text-end">
            <div class="row">
              <div class="socialIcon">
                   <a href="" class="m-2 p-2  rounded socialicon" ><i class="bi bi-facebook"></i> Facebook</a>
                   <a href="" class="m-2 p-2 rounded socialicon"><i class="bi bi-instagram"></i> Instagram</a>
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>
<script>
export default {
  name:'FooterPage',
  
  }
</script>

<style>
.h5{
  letter-spacing:1px;
  font-weight:700;
  padding-bottom: 5px;
  font-size: 25px;
}

.usefullUrl{
  padding-top:1.6rem;
}
.usefullUrl .col-md-12{
  text-decoration: none;
  letter-spacing:1px;
  font-weight:700;
  font-size: 18px;
  margin-top:2px;
  color: rgb(100, 100, 100);
}

.usefullUrl .col-md-12:hover{

  color: rgb(41, 41, 41);
}

.cmnstore{
  width:150px;
  border-radius: 6px;
}

.copyright{
  border-top: 1px solid rgb(209, 209, 209);
}

.socialicon{
  background:#CDEAF4;
  text-decoration:none;
}
@media (max-width:425px) {
  .h5{
  padding-bottom:.1px;
  margin-top: 7px;
}

  .usefullUrl{
  padding-top:.5rem;
  margin-bottom:25px;
}

.socialicon{
  float: left;
}

}
</style>