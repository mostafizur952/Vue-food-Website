<template>
  <NavBar></NavBar>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
    name:"App",
    components:{NavBar},
}
</script>
<!-- 
<style>
#app {

}
</style> -->
