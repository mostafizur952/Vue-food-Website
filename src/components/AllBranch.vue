<template>
    <div>
        <div class="row">
            <div class="col-xs-6 col-md-6 col-xl-6 bgimg p-5 d-flex justify-content-center">
                <img class="imgr" src="../../public/logo.webp"  style="width:15rem;" alt="">         
            </div>
            <div class="col-xs-6 col-md-6 col-xl-6 d-flex justify-content-start ">
                <div class="container">
                    <h2 class="title my-5">সাভার</h2>
                    <p class="my-5"><i class="bi bi-watch" style="font-size: larger;"></i>
                        সকাল ১১.৩০ - রাত ১১.৩০ পর্যন্ত</p>

                    <a href="" class="btn btn-success btncall">Call Now</a> 
                    <a href="" class="border rounded p-2 mt-5">
                        <img  src="https://uploads-ssl.webflow.com/63de61fd6af00b31333c0d3a/6429389e6c28f477def56a01_foodpanda-logo-1.svg"  style="width:80px ;height: 25px;" alt="">
                    </a>
                    <a style="margin-left:40px;" >
                        <span style="color:coral"><i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i></span>
                        from 500+ reviews
                    </a>
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
    name:"AllBranch",
    components:{
        OfficialGroup,
        FooterPage,
    }
}
</script>

<style>
.bgimg{
    background-image: url(../../public/hb\ \(1\).jpg);
    border-radius: 5px 40px 300px 5px;
}

.title{
    font-size:45px;
    font-weight: 600;
}

.btncall{
    margin-right:30px;
    padding: 6.5px 10px;
    margin-bottom: 5px;
    
}

@media(max-width:320px){
    .star{
    margin-top:35px;
}
}
</style>
