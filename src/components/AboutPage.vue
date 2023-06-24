<template>
    <div>
        <div class="row container p-4 " style="background: #ECFAFE;border-radius: 10px;">
            <div class="col-md-6 col-sm-6 justify-content-center align-items-center ">
                <h2 class="title my-3 tw-bold text-success">Our Story</h2>
                <hr class="my-3  col-sm-6">

                <p class="my-3 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit eveniet ex tempore. Suscipit illo, fuga saepe officiis molestias placeat illum, quos quae iusto deserunt dignissimos repellendus eveniet ipsa vero error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea accusamus eligendi adipisci deserunt optio corporis, fuga quae esse laboriosam recusandae minus beatae eius eaque, ratione praesentium? Quas, ea quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem reiciendis nulla dolorum cum magnam totam, autem ducimus praesentium, enim, quis magni exercitationem obcaecati voluptas quos ad eligendi nobis illo itaque!</p>
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
            
                <p class="my-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, harum nisi ullam hic magnam autem sed fugiat, neque ab porro quas eveniet nemo nam possimus ea voluptatem corporis natus iste?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quibusdam veritatis voluptatum, ut pariatur obcaecati molestias nihil deserunt ullam atque commodi ea beatae illum, laudantium praesentium dicta. Nihil, veritatis iure? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit eveniet ex tempore. Suscipit illo, fuga saepe officiis molestias placeat illum, quos quae iusto deserunt dignissimos repellendus eveniet ipsa vero error.</p>
                
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
    name:"AboutPage",
    components:{
        OfficialGroup,
        FooterPage,
        
        
        
    }
}
</script>