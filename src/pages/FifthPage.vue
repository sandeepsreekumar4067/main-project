<template>
  <div class="fifth-page-container">
    <div class="fifthpage-object-container">
      <div class="fifthpage-object">
        <span id="s15"></span>
        <span id="s25"></span>
        <span id="s35"></span>
        <span id="s45"></span>
        <span id="s55"></span>
        <span id="s65"></span>
        <span id="s75"></span>
        <span id="s85"></span>
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

      // Burst effect at the end
      tl.to(
        "#s15",
        {
          borderTopLeftRadius: "100%",
        },
        "-=0.5"
      ).to("#s15", {
        xPercent: -70, // Move left
        yPercent: -50, // Move up
        duration: 1,
      }).to('#s15',{
          borderTopLeftRadius: "0%",

      },'-=0.75').to('#s15',{
        width:'100%',
      })
      tl.to(
        "#s25",
        {
          borderTopRightRadius: "100%",
        },
        "-=2"
      ).to("#s25", {
        xPercent: 70, // Move right
        yPercent: -50, // Move up
        duration: 1,
      }).to('#s25',{
          borderTopRightRadius: "0%",

      },'-=1').to('#s25',{width:'100%'})
      tl.to(
        "#s35",
        {
          borderBottomLeftRadius: "100%",
        },
        "-=3.5"
      ).to("#s35", {
        xPercent: -70, // Move left
        yPercent: 50, // Move down
        duration: 1,
      }).to('#s35',{
          borderBottomLeftRadius: "0%",

      },'-=1.25').to('#s35',{width:'100%'})
      tl.to(
        "#s45",
        {
          borderBottomRightRadius: "100%",
        },
        "-=5"
      ).to("#s45", {
        xPercent: 70, // Move left
        yPercent: 50, // Move down
        duration: 1,
      }).to('#s45',{
          borderBottomRightRadius: "0%",

      },'-=1.25').to('#s45',{width:'100%'})
      tl.to('.fifthpage-object-title',{
          opacity:1,
          duration:0.8
      })
    },
};
</script>
