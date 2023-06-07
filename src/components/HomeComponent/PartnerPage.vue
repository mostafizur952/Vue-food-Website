<template>
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-6 text-center">
            <h2 class="display-6  fw-bold pttitle">Our Partner</h2>
        </div>
        <div class="col-md-6 justify-content-center align-items-center  pertnerimg">
            <div class="">
                <div class="row">
                    <img class="col-lg-6 col-md-6 ptimg" src="https://uploads-ssl.webflow.com/63de61fd6af00b31333c0d3a/642507a21eb7583b56680fde_Foodpanda.webp"  alt="">
                    <img class="col-lg-6 col-md-6 ptimg" src="https://uploads-ssl.webflow.com/63de61fd6af00b31333c0d3a/642507a2432e057862a9b82c_Frame%2030.webp"  alt="">          
                </div>
                <div class="row " style="border-top:1px solid #24ACF2;" >
                    <img class="col-lg-6 col-md-6 ptimg " src="https://uploads-ssl.webflow.com/63de61fd6af00b31333c0d3a/642507a2596eec7c532c0502_Pathao.webp" alt="">
                    <img class="col-lg-6 col-md-6 ptimg " src="https://uploads-ssl.webflow.com/63de61fd6af00b31333c0d3a/642508701eb7586223682094_Foodi.png"  alt="">
                </div>
            </div>    
        </div>
    </div>
</template>
<script>
export default {
    name:"PartnerPage",
    components:{
    }
}
</script>


<style>
.pertnerimg{
    border-radius: 28px;
    box-shadow:  5px 5px 23px #e0e0e0,
                -5px -5px 23px #ffffff;
}

@media (max-width: 425px) {
    .pttitle{
        padding: 15px;
    }
    .ptimg{
        width:50%;
    }
}

</style>