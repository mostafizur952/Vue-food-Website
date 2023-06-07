<template>
    <div class="row my-5 py-3" style="background:#ECFAFE;border-radius:15px">
        <h1 class="display-6 text-center my-5 fw-bold ">Customer Reviews</h1>
        <div class="col-md-3"></div>
            <div id="myCarousel" class="carousel slide conainer col-md-6" data-bs-ride="carousel">
        <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            </ol>

        <!-- Slides -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../../../public/ersad.jpg" class="d-block w-100 " alt="Slide 1">
                <div class="carousel-caption rounded " style="background:#8CDEF0">
                    <h3>HM Ershad</h3>
                    <p class="">কাচ্চি খাওয়ার প্রসঙ্গ যখন উঠে , তখন সবার প্রথমে Kacchi Bhai এর কথাই মাথায় আসে । আমার কাছে তাদের কাচ্চিটা পারফেক্ট মনে হয়। কাচ্চিতে তেলতেলে ভাব নাই বল্লেই চলে। মাটনের পিস গুলো ভালোই বড়, আর সফট। আলু ধরলেই ভেঙে যায় এতো সফট ❤️</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="../../../public/hasina.jpg" class="d-block w-100" alt="Slide 2">
                <div class="carousel-caption rounded" style="background:#8CDEF0">
                    <h3>Sheikh Hasina</h3>
                    <p class="text-success">কাচ্চি খাওয়ার প্রসঙ্গ যখন উঠে , তখন সবার প্রথমে Kacchi Bhai এর কথাই মাথায় আসে । আমার কাছে তাদের কাচ্চিটা পারফেক্ট মনে হয়। কাচ্চিতে তেলতেলে ভাব নাই বল্লেই চলে। মাটনের পিস গুলো ভালোই বড়, আর সফট। আলু ধরলেই ভেঙে যায় এতো সফট ❤️</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="../../../public/khaleda.jpg" class="d-block w-100" alt="Slide 3">
                <div class="carousel-caption rounded" style="background:#8CDEF0">
                    <h3>Khaleda Zia</h3>
                    <p class="text-success">কাচ্চি খাওয়ার প্রসঙ্গ যখন উঠে , তখন সবার প্রথমে Kacchi Bhai এর কথাই মাথায় আসে । আমার কাছে তাদের কাচ্চিটা পারফেক্ট মনে হয়। কাচ্চিতে তেলতেলে ভাব নাই বল্লেই চলে। মাটনের পিস গুলো ভালোই বড়, আর সফট। আলু ধরলেই ভেঙে যায় এতো সফট ❤️</p>
                </div>
                </div>
            </div>

        <!-- Controls -->
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </a>
            </div>
        <div class="col-md-3"></div>
    </div>
    <OfficialGroup></OfficialGroup>
</template>

<script>
import OfficialGroup from './OfficialGroup.vue'
    export default {
        name:"CustomarReviews",
        components:{
            OfficialGroup,
        }
    }
</script>