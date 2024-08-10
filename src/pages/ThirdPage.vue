<template>
  <div class="thirdPage-container">
    <div class="case-card-container">
      <div class="card" @mouseenter="rotateCard($event)" @mouseleave="reverseRotateCard($event)">
        <div class="case-cards">
          <img :src="corporate" alt="Corporate Law" class="card-image" />
          <div class="case-title">Corporate Law</div>
        </div>
      </div>
      <div class="card" @mouseenter="rotateCard($event)" @mouseleave="reverseRotateCard($event)">
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
      </div>
    </div>
  </div>
</template>

<script>
import "../style/thirdpage.css";
import corporate from "../assets/corporateLaw2.jpeg";
import criminal from '../assets/criminalLaw.jpg'
import realEstate from '../assets/realEstate.jpg'
import { gsap } from "gsap";
export default {
  data() {
    return {
      corporate: corporate,
      criminal:criminal,
      realEstate:realEstate
    };
  },
  methods: {
    rotateCard(event) {
      const target = event.currentTarget;
      const card = target.querySelector('.case-cards')
      const image = target.querySelector('.card-image')
      const title = target.querySelector('.case-title')
      gsap.to(image,{display:'none',duration:0.8})
      gsap.to(card,{
        rotateY:360,
        duration:1.5,
        ease:'power3.inOut'
      })
      gsap.to(title,{opacity:1,duration:0.7})
    },
    reverseRotateCard(event){
      const target = event.currentTarget;
      const card = target.querySelector('.case-cards')
      const image = target.querySelector('.card-image')
      const title = target.querySelector('.case-title')
      gsap.to(title,{opacity:0,duration:0.8})
      gsap.to(card,{
        rotateY:0,
        duration:1.5,
        ease:'power3.inOut'
      })
      gsap.to(image,{display:'flex', delay:0.7})
    }
  },
};
</script>
