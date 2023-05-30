<template>
    <div class="p-5 my-3" style="background: #ECFAFE;border-radius: 10px;">
        <h1 class="display-6 text-center m-2 fw-bold ">Our Branch</h1>
        <div class="branch row mt-5">
            <div class="col-xl-3 col-md-6 p-1">
                <div class="card ">
                    <img src="../../../public/logo.webp" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title m-auto">Mirpur Branch</h5>
                      <a class="fw-bold m-auto" style="cursor:pointer" src="">Show More <i class="bi bi-arrow-right"></i></a>  
                    </div>
                </div>
            </div>
            
            <div class="col-xl-3 col-md-6 p-1 ">
                <div class="card ">
                    <img src="../../../public/logo.webp" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title m-auto">Mirpur Branch</h5>
                      <a class="fw-bold m-auto" style="cursor:pointer" src="">Show More <i class="bi bi-arrow-right"></i></a>  
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-md-6 p-1">
                <div class="card ">
                    <img src="../../../public/logo.webp" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title m-auto">Mirpur Branch</h5>
                      <a class="fw-bold m-auto" style="cursor:pointer" src="">Show More <i class="bi bi-arrow-right"></i></a>  
                    </div>
                </div>
            </div>


            <div class="col-xl-3 col-md-6 p-1">
                <div class="card ">
                    <img src="../../../public/logo.webp" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title m-auto">Mirpur Branch</h5>
                      <a class="fw-bold m-auto" style="cursor:pointer" src="">Show More <i class="bi bi-arrow-right"></i></a>  
                    </div>
                </div>
            </div>
        </div>
    </div>
   <PartnerPage></PartnerPage>
</template>
<script>
import PartnerPage from './PartnerPage.vue';
export default {
    name:"OurBranch",
    components:{
        PartnerPage,
    }
}
</script>

<style>
.branch div div div{
    border-top: 1px solid rgb(255, 150, 75);
}
.branch div div{
    cursor:pointer;
    transition:.5s;
    box-shadow:  5px 5px 14px #bac6c9,
                -5px -5px 14px #ffffff;

}
.branch div div:hover{
    transition:.5s;
    box-shadow: 0px 0px 0px ;
}
</style>