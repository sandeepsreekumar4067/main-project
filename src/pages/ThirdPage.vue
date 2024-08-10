<template>
  <div class="thirdPage-container">
    <div class="case-card-container">
      <div class="card">
        <div class="case-cards">
          <!-- <img :src="corporate" alt="Corporate Law" class="card-image" /> -->
          <div class="case-content">
            <div class="case-title">Corporate Law</div>
            <div class="case-image">
              <img :src="corporateIcon" alt="">
            </div>
            <div class="case-description">
             " Corporate law oversees the formation, operation, and regulation of
              businesses, focusing on compliance, governance, and protecting
              stakeholder interests. "
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="card" @mouseenter="rotateCard($event)" @mouseleave="reverseRotateCard($event)">
        <div class="case-cards">
          <img :src="criminal" alt="criminal Law" class="card-image" />
          <div class="case-title">Criminal Law</div>
        </div>
      </div>
      <div class="card" @mouseenter="rotateCard($event)" @mouseleave="reverseRotateCard($event)">
        <div class="case-cards">
          <img :src="realEstate" alt="real estate Law" class="card-image" />
          <div class="case-title">Real Estate Law</div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import "../style/thirdpage.css";
import corporate from "../assets/corporateLaw2.jpeg";
import criminal from "../assets/criminalLaw.jpg";
import realEstate from "../assets/realEstate.jpg";
import corporateIcon from '../assets/corporateIcon.png'
import { gsap } from "gsap";
export default {
  data() {
    return {
      corporate: corporate,
      criminal: criminal,
      realEstate: realEstate,
      corporateIcon:corporateIcon
    };
  },
  methods: {
    rotateCard(event) {
      const target = event.currentTarget;
      const card = target.querySelector(".case-cards");
      const image = target.querySelector(".card-image");
      const title = target.querySelector(".case-title");
      gsap.to(image, { display: "none", duration: 0.8 });
      gsap.to(card, {
        rotateY: 360,
        duration: 1.5,
        ease: "power3.inOut",
      });
      gsap.to(title, { opacity: 1, duration: 0.7 });
    },
    reverseRotateCard(event) {
      const target = event.currentTarget;
      const card = target.querySelector(".case-cards");
      const image = target.querySelector(".card-image");
      const title = target.querySelector(".case-content");
      gsap.to(title, { opacity: 0, duration: 0.8 });
      gsap.to(card, {
        rotateY: 0,
        duration: 1.5,
        ease: "power3.inOut",
      });
      gsap.to(image, { display: "flex", delay: 0.7 });
    },
  },
};
</script>
