<template>
    <div>
        <div class="row container p-4 " style="background: #ECFAFE;border-radius: 10px;">
            <div class="col-md-6 col-sm-6 justify-content-center align-items-center ">
                <h2 class="title my-3 tw-bold text-success">আমাদের গল্প</h2>
                <hr class="my-3  col-sm-6">

                <p class="my-3 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit eveniet ex tempore. Suscipit illo, fuga saepe officiis molestias placeat illum, quos quae iusto deserunt dignissimos repellendus eveniet ipsa vero error.</p>
            </div> 
            <div class="col-md-6 col-sm-6">
                <img src="../../public/Team.webp" class="img-fluid rounded"  alt="">
            </div>

        </div>

        <div class="row container p-4 my-5">
            <div class="col-md-6 col-sm-6">
                <img src="../../public/kk.webp" class="img-fluid rounded"  alt="">
            </div>
            <div class="col-md-6 col-sm-6 d-flex justify-content-center  align-items-center ">
            
                <p class="my-3 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit eveniet ex tempore. Suscipit illo, fuga saepe officiis molestias placeat illum, quos quae iusto deserunt dignissimos repellendus eveniet ipsa vero error.</p>
                
            </div> 
           

        </div>
        <OfficialGroup style="margin-top:10%;"></OfficialGroup>
        <FooterPage style="margin-top:5%;"></FooterPage>
        <JustFun></JustFun>
    </div>
</template>
<script>
import OfficialGroup from './HomeComponent/OfficialGroup.vue';
import FooterPage from '../components/HomeComponent/FooterPage.vue';
import JustFun from '../components/JustFun.vue'
export default {
    name:"AboutPage",
    components:{
        OfficialGroup,
        FooterPage,
        JustFun
    }
}
</script>