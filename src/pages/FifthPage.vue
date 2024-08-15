<template>
  <div class="fifth-page-container">
    <div class="fifthpage-object-container">
      <div class="fifthpage-object">
        <span id="s15"></span>
        <span id="s25"></span>
        <span id="s35"></span>
        <span id="s45"></span>
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

    tl.to(".fifthpage-object", {
      xPercent: 150,
      borderRadius: "50%",
      rotate: 360,
    });

    // Burst effect at the end
    tl.to(
      "#s15",
      {
        xPercent: -50, // Move left
        yPercent: -50, // Move up
        duration: 1,
        borderTopLeftRadius:100
      },
    //   "-=0.5"
    );
    tl.to(
      "#s25",
      {
        xPercent: 50, // Move right
        yPercent: -50, // Move up
        duration: 1,
        borderTopRightRadius:100
      },
    //   "-=0.75"

    );
    tl.to(
      "#s35",
      {
        xPercent: -50, // Move left
        yPercent: 50, // Move down
        duration: 1,
        borderBottomLeftRadius:100
      },
    //   "-=1"
    );
    tl.to(
      "#s45",
      {
        xPercent: 50, // Move right
        yPercent: 50, // Move down
        duration: 1,
        borderBottomRightRadius:100
      },
    //   "-=1.25"
    );
  },
};
</script>
