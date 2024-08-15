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

    
    },
};
</script>
