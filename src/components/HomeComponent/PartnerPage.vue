<template>
    <div class="row my-5 p-5">
        <div class="col-md-6 p-5">
            <h1 class="display-6 text-center m-5 fw-bold ">Our Partner</h1>
        </div>
        <div class="col-md-6 p-5  pertnerimg">
            <div>
                <div class="row">
                    <img class="col-md-6 col-sm-6 " src="https://uploads-ssl.webflow.com/63de61fd6af00b31333c0d3a/642507a21eb7583b56680fde_Foodpanda.webp"  alt="">
                    <img class="col-md-6 col-sm-6 " src="https://uploads-ssl.webflow.com/63de61fd6af00b31333c0d3a/642507a2432e057862a9b82c_Frame%2030.webp"  alt="">          
                </div>
                <div class="row " style="border-top:1px solid #24ACF2;" >
                    <img class="col-md-6 col-sm-6 " src="https://uploads-ssl.webflow.com/63de61fd6af00b31333c0d3a/642507a2596eec7c532c0502_Pathao.webp" alt="">
                    <img class="col-md-6 col-sm-6 " src="https://uploads-ssl.webflow.com/63de61fd6af00b31333c0d3a/642508701eb7586223682094_Foodi.png"  alt="">
                </div>
            </div>
        </div>
    </div>
    <CustomarReviews></CustomarReviews>
</template>
<script>
import CustomarReviews from './CustomarReviews.vue';
export default {
    name:"PartnerPage",
    components:{
        CustomarReviews,
    }
}
</script>


<style>
.pertnerimg{
    border-radius: 28px;
    box-shadow:  5px 5px 23px #e0e0e0,
                -5px -5px 23px #ffffff;
}
</style>