<template>
  <div class="bot-selectionPage-container">
    <div class="botPage-card-component">
      <div class="botCards">
        <div class="bot-title">Legal Consultant</div>
        <div class="bot-image">
          <img :src="happyRobo1" alt="" />
        </div>
        <div class="bot-description">
          Your 24/7 personal legal advisor, offering clear and reliable guidance
          on a wide range of legal issues, empowering you to navigate challenges
          with confidence
        </div>
      </div>
      <div class="botCards">
        <div class="bot-title">Lawyer Consultant</div>
        <div class="bot-image">
          <img :src="happyRobo2" alt="" />
        </div>
        <div class="bot-description">
          An AI-powered assistant designed for lawyers, offering expert
          insights, case analysis, and research support to help you build
          stronger cases and streamline your legal practice.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../style/botselectionpage.css";
import happyRobo1 from "../assets/happyRobo.png";
import happyRobo2 from "../assets/happyRobo2.png";
import happyRobo3 from "../assets/happyRobo3.png";
import {gsap} from 'gsap'
export default {
  name: "BotselectionPage",
  data() {
    return {
      happyRobo1: happyRobo1,
      happyRobo2: happyRobo2,
      happyRobo3: happyRobo3,
    };
  },
  mounted(){
    gsap.from('.botCards',{
        xPercent:-100,
        duration:1.3,
        stagger:0.3,
        opacity:0
    })
  }
};
</script>
