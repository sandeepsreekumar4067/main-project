<template>
  <div class="navbar-container">
    <div class="icon-container">
        <img :src="logoIcon" alt="">
    </div>
    <div class="navbar-components">
        <span>Home</span>
        <span>About</span>
        <span>practice area</span>
        <span>Case Result</span>
        <span>packages</span>
        <span>Blog</span>
    </div>
    <div class="consulation-container">
        <span>Get Consulation</span>
    </div>
  </div>
</template>

<script>
import '../style/navbar.css'
import logoIcon from '../assets/logoicon.png'
export default {
    name:'NavBar',
    data(){
        return{
            logoIcon:logoIcon
        }
    }
}
</script>

<style>

</style>