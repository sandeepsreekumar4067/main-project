<template>
  <div class="fourth-page-container" id="main">
    <div class="fourth-page-components" id="comp">
        <div class="forthPage-main-title">

        </div>
        <div class="fourthPage-circle-container">

        </div>
    </div>
  </div>
</template>

<script>
import '../style/fourthpage.css'
import {gsap} from 'gsap'
export default {
    name:'FourthPage',
    mounted(){
        const timeline = gsap.timeline({
            scrollTrigger:{
                scrub:1,
                trigger:'#comp',
                start:'top 20%',
                endTrigger:'#main',
                end:'bottom bottom',
                markers:true,
                pin:true
            }
        })
        timeline.to('.fourthPage-circle-container',{
            rotate:360,
            borderRadius:'50%',
            xPercent:100
        })
    }

}
</script>

<style>

</style>