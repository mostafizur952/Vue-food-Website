<template>
    <div>
      <h2 class="my-3 text-center display-5">Contact Us</h2>
      <hr class="col-md-2 col-sm-2 m-auto ">
        <div class="row">
            <div class="col-md-6 p-5 justify-content-center d-flex">
              <img src="../../public/contact.svg" class="img-thumbnail" alt="">
            </div>

            <div class="col-md-6 m-auto">
              <div class="row">
                <div class="container my-5">
                    <div class="row ">
                      <div class="col-md-4">
                        <div class="contact-info">
                          <i class="bi bi-telephone-fill h2"></i>
                          <p>Phone: +1 123 456 7890</p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="contact-info">
                          <i class="bi bi-envelope-fill h2"></i>
                          <p>Email: info@example.com</p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="contact-info">
                          <i class="bi bi-geo-alt-fill h2"></i>
                          <p>Dhaka,Bangladesh</p>
                        </div>
                      </div>
                      </div>
                    </div>
                 </div>
                <form class="container">
                    <div class="form-group">
                        <p class="h5">Type here</p>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Type Your Name">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control my-3" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message"></textarea>
                    </div>
                    <div class="form-group">
                        <button class="button my-2">
                            <span>Submit</span>
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




.button {
  position: relative;
  margin: 0;
  padding: 0.5em 1em;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  background-color: #333;
  border-radius: 10px;
  color: #fff;
  font-weight: 300;
  font-size: 15px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}

.button:hover {
  animation: sh0 0.5s ease-in-out both;
}

@keyframes sh0 {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }

  25% {
    transform: rotate(7deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(-7deg) translate3d(0, 0, 0);
  }

  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

.button:hover span {
  animation: storm 0.7s ease-in-out both;
  animation-delay: 0.06s;
}

.button::before,
.button::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #fff;
  opacity: 0;
  transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
  z-index: -1;
  transform: translate(100%, -25%) translate3d(0, 0, 0);
}

.button:hover::before,
.button:hover::after {
  opacity: 0.15;
  transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
}

.button:hover::before {
  transform: translate3d(50%, 0, 0) scale(0.9);
}

.button:hover::after {
  transform: translate(50%, 0) scale(1.1);
}


</style>