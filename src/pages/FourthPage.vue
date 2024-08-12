<template>
  <div class="fourth-page-container" id="main">
    <div class="fourth-page-components" id="comp">
      <div class="fourthPage-main-title">Our Services...</div>
      <div class="fourthPage-circle-container">
        <div class="fourth-page-centre-circle">
            
        </div>
        <span class="service-span s1">
          <div class="circular-text">Legal Advice Chat Bot</div>
        </span>
        <span class="service-span s2">
          <div class="circular-text">Live Chat with Human Experts</div>
        </span>
        <span class="service-span s3">
          <div class="circular-text">Legal Compliance Checker</div>
        </span>
        <span class="service-span s4">
          <div class="circular-text">Appointment Scheduling</div>
        </span>
        
      </div>
    </div>
  </div>
</template>

<script>
import "../style/fourthpage.css";
import { gsap } from "gsap";
export default {
  name: "FourthPage",
  mounted() {
    const timeline = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: "#comp",
        start: "top 20%",
        endTrigger: "#main",
        end: "bottom bottom",
        pin: true,
      },
    });
    timeline.to(".fourthPage-circle-container", {
      rotate: 360,
      borderRadius: "50%",
      xPercent: 100,
    });
    timeline.fromTo(
      ".fourthPage-main-title",
      { xPercent: 0, opacity: 0 },
      {
        xPercent: -70,
        opacity: 1,
      },
    );
    timeline.to(".s1", {
      opacity: 1,
    });
    timeline.to(".s2", {
      opacity: 1,
    });
    timeline.to(".s3", {
      opacity: 1,
    });
    timeline.to(".s4", {
      opacity: 1,
    });
    timeline.to(
      ".s1",
      {
        opacity: 1,
        xPercent:-20,
        yPercent:-20,
        scale: 1.2,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );
    timeline.to(
      ".s2",
      {
        opacity: 1,
        xPercent:20,
        yPercent:-20,
        scale: 1.2,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );
    timeline.to(
      ".s3",
      {
        opacity: 1,
        xPercent:-20,
        yPercent:20,
        scale: 1.2,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );
    timeline.to(
      ".s4",
      {
        opacity: 1,
        xPercent:20,
        yPercent:20,
        scale: 1.2,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );
  },
};
</script>

<style>
</style>