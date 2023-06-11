<template>
    <div>
        <div class="p-3 py-5 my-3">
        <h2 class="display-6 text-center m-2 fw-bold ">Our Offer</h2>
        <hr class="my-3 center m-auto col-sm-2">

        <div class="branch row mt-5">
            <div class="col-xl-4 col-md-6 col-sm-6 p-1">
                <div class="card ">
                    <img src="../../public/o2.jpg" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title m-auto">Mirpur Branch</h5>
                      <a class="fw-bold m-auto" style="cursor:pointer" src="">Show More <i class="bi bi-arrow-right"></i></a>  
                    </div>
                </div>
            </div>
            
            <div class="col-xl-4 col-md-6 col-sm-6 p-1 ">
                <div class="card ">
                    <img src="../../public/o1.webp" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title m-auto">Mirpur Branch</h5>
                      <a class="fw-bold m-auto" style="cursor:pointer" src="">Show More <i class="bi bi-arrow-right"></i></a>  
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-md-6 col-sm-6 p-1">
                <div class="card ">
                    <img src="../../public/o2.jpg" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title m-auto">Mirpur Branch</h5>
                      <a class="fw-bold m-auto" style="cursor:pointer" src="">Show More <i class="bi bi-arrow-right"></i></a>  
                    </div>
                </div>
            </div>
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
    name:"OfferPage",
    components:{
        OfficialGroup,
        FooterPage,
    }
}
</script>