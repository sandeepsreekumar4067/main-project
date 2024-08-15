<template>
  <div class="fifth-page-container">
    <div class="fifthpage-object-container">
      <div class="fifthpage-object">
        <span class="s5" id="s15">User-Friendly Interface</span>
        <span class="s5" id="s25">Legal Outcome Prediction</span>
        <span class="s5" id="s35">24/7 Availability</span>
        <span class="s5" id="s45"> Personalized Legal Consultations</span>
        <span class="s5" id="s55"> Legal Outcome Prediction </span>
        <span class="s5" id="s65">Confidential and Secure</span>
        <span class="s5" id="s75">Real-Time AI Processing</span>
        <span class="s5" id="s85">Multilingual Support</span>
      </div>
    </div>
  </div>
</template>
  
  <script>
import "../style/fifthpage2.css";
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
      xPercent: -250,
      yPercent: 50,
      width: "100%",
      clipPath: "none",
      scale: 1.5,
      borderRadius: "20px",
    })
      .to("#s15", { color: "white" })
      .to("#s15", { xPercent: -450, opacity: 0, scale: 1 });
    tl.to("#s25", {
      duration: 0.8,
      xPercent: -250,
      yPercent: 50,
      width: "100%",
      clipPath: "none",
      rotate: 0,
      scale: 1.5,
      borderRadius: "20px",
    })
      .to("#s25", { color: "white" })
      .to("#s25", { xPercent: -450, opacity: 0, scale: 1 });
    tl.to("#s35", {
      duration: 0.8,
      xPercent: -250,
      yPercent: 50,
      width: "100%",
      clipPath: "none",
      rotate: 0,
      scale: 1.5,
      borderRadius: "20px",
    })
      .to("#s35", { color: "white" })
      .to("#s35", { xPercent: -450, opacity: 0, scale: 1 });
    tl.to("#s45", {
      duration: 0.8,
      xPercent: -250,
      yPercent: 50,
      width: "100%",
      clipPath: "none",
      rotate: 0,
      scale: 1.5,
      borderRadius: "20px",
    })
      .to("#s45", { color: "white" })
      .to("#s45", { xPercent: -450, opacity: 0, scale: 1 });
    tl.to("#s55", {
      duration: 0.8,
      xPercent: -250,
      yPercent: 50,
      width: "100%",
      clipPath: "none",
      rotate: 0,
      scale: 1.5,
      borderRadius: "20px",
    })
      .to("#s55", { color: "white" })
      .to("#s55", { xPercent: -450, opacity: 0, scale: 1 });
    tl.to("#s65", {
      duration: 0.8,
      xPercent: -250,
      yPercent: 50,
      width: "100%",
      clipPath: "none",
      rotate: 0,
      scale: 1.5,
      borderRadius: "20px",
    })
      .to("#s65", { color: "white" })
      .to("#s65", { xPercent: -450, opacity: 0, scale: 1 });
    tl.to("#s75", {
      duration: 0.8,
      xPercent: -250,
      yPercent: 50,
      width: "100%",
      clipPath: "none",
      rotate: 0,
      scale: 1.5,
      borderRadius: "20px",
    })
      .to("#s75", { color: "white" })
      .to("#s75", { xPercent: -450, opacity: 0, scale: 1 });
    tl.to("#s85", {
      duration: 0.8,
      xPercent: -250,
      yPercent: 50,
      width: "100%",
      clipPath: "none",
      rotate: 0,
      scale: 1.5,
      borderRadius: "20px",
    })
      .to("#s85", { color: "white" })
      .to("#s85", { xPercent: -450, opacity: 0, scale: 1 });
  },
};
</script>
  