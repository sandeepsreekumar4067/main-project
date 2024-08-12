<template>
  <div class="fourth-page-container" id="main">
    <div class="fourth-page-components" id="comp">
      <div class="fourthPage-main-title">Our Services</div>
      <div class="fourthPage-circle-container">
        <span class="service-span s1">
          <div class="circular-text">Service 1</div>
        </span>
        <span class="service-span s2">
          <div class="circular-text">Service 2</div>
        </span>
        <span class="service-span s3">
          <div class="circular-text">Service 3</div>
        </span>
        <span class="service-span s4">
          <div class="circular-text">Service 4</div>
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
      { x: 0, opacity: 0 },
      {
        xPercent: -70,
        opacity: 1,
      },
      "+=0.6"
    );
    timeline.to(".service-span", {
      opacity: 1,
    });
  },
};
</script>

<style>
</style>