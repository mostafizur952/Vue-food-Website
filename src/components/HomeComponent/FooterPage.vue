<template>
  <div>
    <div class="row py-5">
     <div class="col-xl-3">
       <div class="d-flex justify-content-left">
        <img src="../../../public/logo.webp" class="kacchivai kacchivaiLogo" alt="">
          <h5 class="kacchivai kvaititle">Kacchivai</h5>
       </div>
       <p class="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.  </p>
     </div>
     <div class="col-xl-9">
      <div class="row">
          <div class="col-xl-3 col-md-6">
              <h5 class="h5">Usefull Links</h5>
              <div class="row usefullUrl">
                  <router-link class="col-md-12" to="/about">About Us</router-link>
                  <router-link class="col-md-12" to="/contactus">Contact Us</router-link>
                  <router-link class="col-md-12" to="/blog">Blogs</router-link>
                  <router-link class="col-md-12" to="/privacy">Privacy Policy</router-link> 
              </div>

          </div>
          <div class="col-xl-3 col-md-6">
             <h5 class="h5">Download App</h5>
             <div class="row usefullUrl">
                  <p>App's available for Download</p>
                  <router-link class="col-md-12" to="/menu">
                    <img class="cmnstore " src="../../../public/playsotore.png" alt="">
                  </router-link>
                  <router-link class="col-md-12 my-3" to="">
                    <img  class="cmnstore " src="../../../public/apple.png" alt="">
                  </router-link>
              </div>

          </div>
          <div class="col-xl-6 col-md-12">
              <h5 class="h5">NewsLetter</h5>
              <div class="row usefullUrl">
                  <p>Sign up to be first to recive the latest stories inspiring us, case studies and industry news</p>
                  <form class="container">
                    <div class="form-group">
                      <div class="frominput">
                        <i class="bi bi-person-fill icon"></i>                      
                        <input placeholder="Input Your Name" type="search" class="input">
                      </div>
                    </div>
                      
                    <div class="form-group my-2">
                      <div class="frominput">
                        <i class="bi bi-envelope-fill icon"></i>                     
                        <input placeholder="example@abcd.com" type="search" class="input">
                      </div>                    
                    </div>
                    <div class="form-group">
                        <button class="subButton subButton-border-2 my-1">
                            <span>Subscribe</span>
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
                   <a href="" class=" p-2  rounded socialicon" ><i class="bi bi-facebook"></i> Facebook</a>
                   <a href="" class=" p-2 rounded socialicon"><i class="bi bi-instagram"></i> Instagram</a>
                   <a href="" class=" p-2  rounded socialicon" ><i class="bi bi-tiktok"></i>Tiktok</a>
                   <a href="" class=" p-2 rounded socialicon"> <i class="bi bi-twitter"></i> Twitter</a>
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

.kacchivaiLogo{
  width:60px;
  margin-top: -10px;
}



.kvaititle{
  font-size: 30px;
  font-weight: 600;
}






.cmnstore{
  width:150px;
  border-radius: 6px;
}

.copyright{
  border-top: 1px solid rgb(209, 209, 209);
}

.socialicon{
  text-decoration:none;
}




/* button and text box style from here  */
.frominput {
 display: flex;
 line-height: 28px;
 align-items: center;
 position: relative;
 max-width:100%;
}

.input {
 width: 100%;
 height: 45px;
 line-height: 28px;
 padding: 0 1rem;
 padding-left: 2.5rem;
 border: 2px solid transparent;
 border-radius: 8px;
 outline: none;
 color: #0d0c22;
 border:1px solid #999999;
 transition: .3s ease;
}

.input::placeholder {
 color: #9e9ea7;
}

.input:focus, input:hover {
 outline: none;
 border-color: rgb(253, 181, 48);
 background-color: #fff;
 box-shadow: 0 0 0 1px orange;
}

.icon {
 position: absolute;
 left: 1rem;
 fill: #9e9ea7;
 width: 1rem;
 height: 1rem;
 line-height: 1rem;
}



/* button style from here */


.subButton {
    position: relative;
    display: inline-block;
    padding: 10px 27px;
    text-align: center;
    font-size: 16px;
    letter-spacing: 1px;
    text-decoration: none;
    color: white;
    background: orange;
    border: 3px solid rgb(253, 253, 253);
    cursor: pointer;
    transition: ease-out 0.5s;
    -webkit-transition: ease-out 0.5s;
    -moz-transition: ease-out 0.5s;
}


.subButton.subButton-border-2::after,
.subButton.subButton-border-2::before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    transition: .5s;
}

.subButton.subButton-border-2::after {
    top: -3px;
    left: -3px;
    border-top: 3px solid transparent;
    border-left: 3px solid transparent;
}

.subButton.subButton-border-2::before {
    bottom: -3px;
    right: -3px;
    border-bottom: 3px solid transparent;
    border-right: 3px solid transparent;
}

.subButton.subButton-border-2:hover {
    color: rgb(101, 35, 255);
}

.subButton.subButton-border-2:hover::after,
.subButton.subButton-border-2:hover::before {
    width: calc(50% + 3px);
    height: calc(50% + 3px);
    border-color: rgb(6, 94, 3);
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