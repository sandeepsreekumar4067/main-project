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
    // gsap.from('.fifthpage-object',{
    //     scrollTrigger:{
    //         trigger:'.fifth-page-container',
    //         start:'top 50%'
    //     },
    //     xPercent:500,
    //     opacity:0,
    //     ease:'bounce.out',
    //     duration:2.5
    // })
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
      "-=0.75"
    ).to("#s15", {
      xPercent: -50, // Move left
      yPercent: -50, // Move up
      duration: 1,
    }).to('#s15',{
        borderTopLeftRadius: "0%",
        
    },'-=0.75')
    tl.to(
      "#s25",
      {
        borderTopRightRadius: "100%",
      },
      "-=1.75"
    ).to("#s25", {
      xPercent: 50, // Move right
      yPercent: -50, // Move up
      duration: 1,
    });
    tl.to(
      "#s35",
      {
        borderBottomLeftRadius: "100%",
      },
      "-=2.75"
    ).to("#s35", {
      xPercent: -50, // Move left
      yPercent: 50, // Move down
      duration: 1,
    });
    tl.to(
      "#s45",
      {
        borderBottomRightRadius: "100%",
      },
      "-=3.75"
    ).to("#s45", {
      xPercent: 50, // Move right
      yPercent: 50, // Move down
      duration: 1,
    });
  },
};
</script>
