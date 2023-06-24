<template>
  <div class="row p-5  bg-dark rounded">
    <div class="col-md-9 col-sm-6 ">
        <div class="col-md-10 col-sm-4 d-flex justify-content-center align-items-center">
            <div class="row smsize"> 
                <div class="col-xl-2 col-md-3 col-sm-3">
                    <img src="../../../public/group.webp"  class="gimg" alt="">
                </div>
                <div class="col-xl-10 col-md-9 col-sm-9 px-5 py-2 ">
                    <h2 class="text-white">Our Group:</h2>
                    <p class="text-white">Join the 50,000+ people</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
        <a href="" class="showmore subButton subButton-border-2 " >Join Now</a>
    </div>
  </div>
</template>
<script>

export default {
    name:"OfficialGroup",
    components:{
    }
}
</script>


<style>
.gimg{
    width:90px;
}
.showmore{
    color: rgb(59, 0, 0);
}

@media (max-width:425px) {
    .smsize{
        text-align: center;
    }
}
</style>