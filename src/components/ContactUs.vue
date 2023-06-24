<template>
    <div>
      <h2 class="my-3 text-center display-5">Contact Us</h2>
      <hr class="col-md-2 col-sm-2 m-auto ">
        <div class="row">
            <div class="col-xl-6 col-md-12 p-5 justify-content-center d-flex">
              <img src="../../public/contact.svg" class="img-thumbnail" alt="">
            </div>

            <div class="col-xl-6 col-md-12 m-auto">
              <div class="row">
                <div class="container my-5 px-4">
                    <div class="row ">
                      <div class="col-md-4">
                        <div class="contact-info justify-content-center d-flex">
                          <i class="bi bi-telephone-fill h2"></i>
                          <p class="pt-2 pl-2">+1 123 456 7890</p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="contact-info justify-content-center d-flex">
                          <i class="bi bi-envelope-fill h2 mx-2"></i>
                          <p class="pt-2">info@example.com</p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="contact-info justify-content-center d-flex">
                          <i class="bi bi-geo-alt-fill h2"></i>
                          <p class="pt-2 pl-2">Dhaka,Bangladesh</p>
                        </div>
                      </div>
                      </div>
                    </div>
                 </div>
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
                        <textarea class="form-control inputmassage" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message"></textarea>
                    </div>
                    <div class="form-group">
                        <button class="subButton subButton-border-2 mt-3">
                            <span>Subscribe</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>


        <OfficialGroup style="margin-top:10%;"></OfficialGroup>
        <FooterPage style="margin-top:5%;"></FooterPage>
    </div>
</template>
<script>
import OfficialGroup from './HomeComponent/OfficialGroup.vue';
import FooterPage from '../components/HomeComponent/FooterPage.vue';
export default {
    name:"ContactUs",
    components:{
        OfficialGroup,
        FooterPage,
        
    }
}
</script>
<style>

.imgback{
    border-radius:5px;
    background-image:linear-gradient(to bottom, rgba(36, 36, 36, 0.52), rgba(117, 19, 93, 0.73)),
    url(../../public/bg.jpg);
    background-size:cover;
}



.form-control{
  border: 1px solid gray;
  background-color: white;
}
.form-control:hover {
 color: #0d0c22;
 border-color: rgb(253, 181, 48);
 box-shadow: 0 0 0 1px orange;
}
</style>