<template>
  <div class="fifth-page-container">
    <div class="fifthpage-object-container">
      <div class="fifthpage-object">
        <div class="pseudo-circle"></div>
        <span class="s5" id="s15"></span>
        <span class="s5" id="s25"></span>
        <span class="s5" id="s35"></span>
        <span class="s5" id="s45"></span>
        <span class="s5" id="s55"></span>
        <span class="s5" id="s65"></span>
        <span class="s5" id="s75"></span>
        <span class="s5" id="s85"></span>
      </div>
    </div>
  </div>
</template>

<script>
import "../style/fifthpage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "FifthPage",
    mounted() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".fifthpage-object-container",
          scrub: 1,
          start: "top 30%",
          pin: true,
          markers: true,
          endTrigger: ".fifth-page-container",
          end: "bottom bottom",
        },
      });

      tl.from(".fifthpage-object", {
        xPercent: 500,
        duration: 1,
        rotate: 360,
      });
      tl.to('#s15',{
        duration:0.8,
        xPercent:-300,
        yPercent:-60,
        width:'100%',
        clipPath:'none',
        borderRadius:'20px'
      })
      tl.to('#s25',{
        xPercent:-180,
        rotate:0,
        yPercent:-60,
        width:'100%',
        clipPath:'none',
        borderRadius:'20px'
      })
      tl.to('#s35',{
        xPercent:-55,
        rotate:0,
        yPercent:-60,
        width:'100%',
        clipPath:'none',
        borderRadius:'20px',
      })
      tl.to('#s45',{
        xPercent:-300,
        rotate:0,
        yPercent:50,
        width:'100%',
        clipPath:'none',
        borderRadius:'20px'
      })
      tl.to('#s55',{
        xPercent:-180,
        rotate:0,
        yPercent:50,
        width:'100%',
        clipPath:'none',
        borderRadius:'20px',
        backgroundColor:'transparent'

      })
      tl.to('#s65',{
        xPercent:-55,
        rotate:0,
        yPercent:50,
        width:'100%',
        clipPath:'none',
        borderRadius:'20px'
      })
      tl.to('#s75',{
        xPercent:-300,
        rotate:0,
        yPercent:160,
        width:'100%',
        clipPath:'none',
        borderRadius:'20px'
      })
      tl.to('#s85',{
        xPercent:-180,
        rotate:0,
        yPercent:160,
        width:'100%',
        clipPath:'none',
        borderRadius:'20px'
      })
      tl.to('.pseudo-circle',{
        borderRadius:'20px',
        xPercent:-5,
        yPercent:160,
        height:'50%',
        
    })
    },
};
</script>
