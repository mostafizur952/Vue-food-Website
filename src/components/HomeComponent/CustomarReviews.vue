<template>
    <div class="row">
        <!-- style="background:#ECFAFE;border-radius:15px;" -->
        <h2 class="display-6 text-center pt-5 fw-bold ">Customer Reviews</h2>
        <hr class="col-md-3 m-auto pb-5">
            <div id="myCarousel" class="carousel slide conainer"  data-bs-ride="carousel">
        <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active bg-primary"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="1" class=" bg-primary"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="2" class=" bg-primary"></li>
            </ol>

        <!-- Slides -->
            <div class="carousel-inner ">
                <div class="carousel-item active ">
                    <div class="body">
                        <div class="slide-col">
                            <div class="user-text">
                                <p>Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She also known as the best selling book author.</p>
                                <h2>Zen</h2>
                                <p>Author</p>
                            </div>
                            <div class="user-img">
                                <img src="https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg" alt="avatar">                            </div>
                        </div>
                    </div>          
                </div>
                <div class="carousel-item  ">
                    <div class="body">
                        <div class="slide-col">
                            <div class="user-text">
                                <p>Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She also known as the best selling book author.</p>
                                <h2>Zen</h2>
                                <p>Author</p>
                            </div>
                            <div class="user-img">
                                <img src="https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg" alt="avatar">
                            </div>
                        </div>
                    </div>          
                </div>
                <div class="carousel-item  ">
                    <div class="body">
                        <div class="slide-col">
                            <div class="user-text">
                                <p>Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She also known as the best selling book author.</p>
                                <h2>Zen</h2>
                                <p>Author</p>
                            </div>
                            <div class="user-img">
                                <img src="https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg" alt="avatar">                            </div>
                        </div>
                    </div>          
                </div>
            </div>
        <!-- Controls -->
            <a class="carousel-control-prev " href="#myCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </a>
            </div>
        <br>
    </div>
</template>

<script>
    export default {
        name:"CustomarReviews",
        components:{
        }
    }
</script>


<style>


html {
  scroll-behavior: smooth;
}

.body {
  font-family: 'Sen', sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.slide-row {
  display: flex;
  transition: 0.5s;
}

.slide-col {
  width: 800px;
  height: 400px;
  position: relative;
}

.user-img {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}

.user-img img {
  height: 100%;
  border-radius: 10px;
  width: 320px;
  object-fit: cover;
}

.user-text {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  width: 520px;
  height: 270px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 10px;
  color: #4d4352;
  padding: 45px;
  z-index: 2;
}

.user-text p {
  font-size: 18px;
  line-height: 24px;
}

.user-text h2 {
  margin: 35px 0 5px;
  color: #4d4352;
}



@media (max-width: 768px) {


.slide-col {
  width:98%;
  height:350px;
  position: relative;
}

.user-img {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}

.user-img img {
  height: 100%;
  border-radius: 10px;
  width:100%;
  object-fit: cover;
}


.user-text {

  width:60%;
  height:55%;
  position: absolute;
  top: 50%;
  left:1%;
  padding:30px;
}
    
.user-text p {
  font-size:1rem;
  line-height:1.3rem;
}

.user-text h2 {
  margin:10px 0 2px;
  font-size: 1rem;
  font-weight: 600;
  color: #4d4352;
}
}

@media (max-width: 425px) {


.slide-col {
  width:100%;
  height:270px;
  position: relative;
}

.user-img {
  position: absolute;
  top: 0;
  right: 0;
  height:90%;
}

.user-img img {
  height: 100%;
  border-radius: 10px;
  width:100%;
  object-fit: cover;
}


.user-text {

  width:50%;
  height:75%;
  position: absolute;
  top:45%;
  left:1%;
  padding:25px;
}
    
.user-text p {
  font-size:.8rem;
  line-height:1.2rem;
}

.user-text h2 {
  margin:4px 0 2px;
  font-size: 1rem;
  font-weight: 600;
  color: #4d4352;
}
}
@media (max-width: 375px) {


.slide-col {
  width:100%;
  height:200px;
  position: relative;
}

.user-img {
  position: absolute;
  top: 0;
  right: 0;
  height:90%;
}

.user-img img {
  height: 100%;
  border-radius: 10px;
  width:100%;
  object-fit: cover;
}


.user-text {

  width:65%;
  height:78%;
  position: absolute;
  top:45%;
  left:1%;
  padding:10px;
}
    
.user-text p {
  font-size:.8rem;
  line-height:1.1rem;
}

.user-text h2 {
  margin:2px 0 2px;
  font-size: 1rem;
  font-weight: 600;
  color: #4d4352;
}
}
</style>