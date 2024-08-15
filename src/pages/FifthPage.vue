<template>
  <div class="fifth-page-container">
    <div class="fifthpage-object-container">
      <div class="fifthpage-object">
        <div class="pseudo-circle">Legal Outcome Prediction</div>
        <span class="s5" id="s15">User-Friendly Interface</span>
        <span class="s5" id="s25">Legal Outcome Prediction</span>
        <span class="s5" id="s35">24/7 Availability</span>
        <span class="s5" id="s45"> Personalized Legal Consultations</span>
        <span class="s5" id="s55">
          <div class="pseudoSpan">
            <div id="pst">Our Features</div>
            <div class="spoke spoke-1"></div>
            <div class="spoke spoke-2"></div>
            <div class="spoke spoke-3"></div>
            <div class="spoke spoke-4"></div>
            <div class="spoke spoke-5"></div>
            <div class="spoke spoke-6"></div>
            <div class="spoke spoke-7"></div>
            <div class="spoke spoke-8"></div>
          </div>
        </span>
        <span class="s5" id="s65">Confidential and Secure</span>
        <span class="s5" id="s75">Real-Time AI Processing</span>
        <span class="s5" id="s85">Multilingual Support</span>
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
        endTrigger: ".fifth-page-container",
        end: "bottom bottom",
      },
    });

    tl.from(".fifthpage-object", {
      xPercent: 500,
      duration: 1,
      rotate: 360,
    });
    tl.to("#s15", {
      duration: 0.8,
      xPercent: -300,
      yPercent: -60,
      width: "100%",
      clipPath: "none",
      borderRadius: "20px",
    });
    tl.to("#s25", {
      xPercent: -180,
      rotate: 0,
      yPercent: -60,
      width: "100%",
      clipPath: "none",
      borderRadius: "20px",
    });
    tl.to("#s35", {
      xPercent: -55,
      rotate: 0,
      yPercent: -60,
      width: "100%",
      clipPath: "none",
      borderRadius: "20px",
    });
    tl.to("#s45", {
      xPercent: -300,
      rotate: 0,
      yPercent: 50,
      width: "100%",
      clipPath: "none",
      borderRadius: "20px",
    });
    tl.to("#s55", {
      xPercent: -138.5,
      rotate: 0,
      yPercent: 33,
      width: "36rem",
      height: "15rem",
      clipPath: "none",
      duration: 1,
      backgroundColor: "transparent",
    });
    tl.to("#s65", {
      xPercent: -55,
      rotate: 0,
      yPercent: 50,
      width: "100%",
      clipPath: "none",
      borderRadius: "20px",
    });
    tl.to("#s75", {
      xPercent: -300,
      rotate: 0,
      yPercent: 160,
      width: "100%",
      clipPath: "none",
      borderRadius: "20px",
    });
    tl.to("#s85", {
      xPercent: -180,
      rotate: 0,
      yPercent: 160,
      width: "100%",
      clipPath: "none",
      borderRadius: "20px",
    });
    tl.to(".pseudo-circle", {
      borderRadius: "20px",
      xPercent: -5,
      yPercent: 160,
      height: "50%",
    });
    tl.to(".pseudoSpan", {
      opacity: 1,
    })
      .to("#pst", { opacity: 1 })
      .to(".spoke", { height: "180%" });
    tl.to('#s15',{color:'white'})
    tl.to('#s25',{color:'white'})
    tl.to('#s35',{color:'white'})
    tl.to('#s45',{color:'white'})
    tl.to('#s65',{color:'white'})
    tl.to('#s75',{color:'white'})
    tl.to('#s85',{color:'white'})
    tl.to('.pseudo-circle',{color:'white'})
  },
};
</script>
