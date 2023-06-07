<template>
    <div>
        <FoodMenu></FoodMenu>
        <OfficialGroup style="margin-top:10%;"></OfficialGroup>
        <FooterPage style="margin-top:5%;"></FooterPage>
    </div>
</template>
<script>
import FoodMenu from './FoodMenu.vue';
import OfficialGroup from './HomeComponent/OfficialGroup.vue';
import FooterPage from './HomeComponent/FooterPage.vue';
export default {
    name:"MenuPage",
    components:{
        OfficialGroup,
        FooterPage,
        FoodMenu
    }
}
</script>