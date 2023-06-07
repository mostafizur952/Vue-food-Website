<template>
    <div>
        <FoodMenu></FoodMenu>
        <OurBranch style="margin-top:10%;"></OurBranch>
        <PartnerPage style="margin-top:10%;"></PartnerPage>
        <CustomarReviews style="margin-top:10%;"></CustomarReviews>
        <OfficialGroup style="margin-top:10%;"></OfficialGroup>
        <FooterPage style="margin-top:5%;"></FooterPage>
    </div>
</template>
<script>
import FoodMenu from './FoodMenu.vue';
import OurBranch from '../components/HomeComponent/OurBranch.vue';
import PartnerPage from '../components/HomeComponent/PartnerPage.vue';
import CustomarReviews from './HomeComponent/CustomarReviews.vue';
import OfficialGroup from './HomeComponent/OfficialGroup.vue';
import FooterPage from '../components/HomeComponent/FooterPage.vue';


export default {
  
  name:"HomePage",
  components:{
        FoodMenu,
        OurBranch,
        PartnerPage,
        CustomarReviews,
        OfficialGroup,
        FooterPage,
    },
}
</script>
<style>
  
</style>