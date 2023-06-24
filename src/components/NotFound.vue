<template>
    <div>
        <div class="nfbody">
            <div class="nfcontainer">
                <div class="img-wrapper">
                    <img src="../../public/404notfound.png" class="imgsize" alt="404" border="0">
                </div>
                <h4 class="error-text">
                    404 Not Found
                </h4>
                <p class="">The page you requested could not be found. Please check the URL or go back to the homepage.</p>
                <div class="buttons-wrapper">
                    <router-link class="go-back-btn" to="/">Go Back</router-link>
                </div>
            </div>
        </div>
        <FooterPage></FooterPage>
        <!-- <JustFun></JustFun> -->
    </div>
</template>
<script>
import FooterPage from '../components/HomeComponent/FooterPage.vue';
export default {
    name:"NotFound",
    components:{
        FooterPage,
    }
}
</script>

<style>
.nfbody{
  display:grid;
  height:90vh;
}


.nfcontainer{
  transition: 0.5s;
  text-align: center;
  }

  .imgsize{
    width:35%;
  }

  .error-text{
    font-size: 1.6rem;
    text-align: center;
    word-spacing: 15px;
    margin: 3rem 0;
    line-height: 1;
    font-family:  'Roboto', sans-serif;
    font-weight: 600;
    color: #555;
  }

  .go-back-btn{
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
    cursor: pointer;
    margin: 1.5em;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: 0.5s;
    display: inline-block;
    color: #fff;
    border-radius: 0.25rem;
    font-size: 1.0em;
    padding: 0.5em 2em;
    background: rgb(60, 198, 138);
    text-decoration: none;

}


@media (max-width: 425px) {
.nfbody{
  display:grid;
  height:70vh;
}
.imgsize{
    width:60%;
  }
}
</style>